import {
  copyFile,
  cp,
  mkdir,
  readdir,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const publicDir = path.join(root, "public");
const packageDir = path.join(root, "client-static-site");
const htmlDir = path.join(packageDir, "html");
const cssDir = path.join(packageDir, "css");
const jsDir = path.join(packageDir, "js");
const imagesDir = path.join(packageDir, "images");

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : fullPath;
    }),
  );

  return files.flat();
}

function relativePrefix(fromFile, toDir) {
  const rel = path.relative(path.dirname(fromFile), toDir).replaceAll(path.sep, "/");
  return rel ? `${rel}/` : "";
}

function routeToHtml(route, htmlPrefix) {
  const [pathname, hash = ""] = route.split("#");
  const cleanPath = pathname.replace(/\/$/, "");
  const suffix = hash ? `#${hash}` : "";

  if (!cleanPath) {
    return `${htmlPrefix}index.html${suffix}`;
  }

  const target = cleanPath.replace(/^\//, "");
  return `${htmlPrefix}${target}/index.html${suffix}`;
}

await rm(packageDir, { recursive: true, force: true });
await mkdir(htmlDir, { recursive: true });
await mkdir(cssDir, { recursive: true });
await mkdir(jsDir, { recursive: true });
await mkdir(imagesDir, { recursive: true });

const outFiles = await listFiles(outDir);
const publicAssets = (await listFiles(publicDir)).map((file) =>
  path.relative(publicDir, file).replaceAll(path.sep, "/"),
);

for (const asset of publicAssets) {
  await mkdir(path.dirname(path.join(imagesDir, asset)), { recursive: true });
  await copyFile(path.join(publicDir, asset), path.join(imagesDir, asset));
}

for (const file of outFiles) {
  const outRel = path.relative(outDir, file).replaceAll(path.sep, "/");

  if (outRel.startsWith("_next/static/")) {
    const staticRel = outRel.replace(/^_next\/static\//, "");
    if (path.extname(file) === ".css") {
      await copyFile(file, path.join(cssDir, path.basename(file)));
    } else {
      await mkdir(path.dirname(path.join(jsDir, staticRel)), { recursive: true });
      await copyFile(file, path.join(jsDir, staticRel));
    }
    continue;
  }

  if (path.extname(file) === ".html") {
    const dest = path.join(htmlDir, outRel);
    await mkdir(path.dirname(dest), { recursive: true });
    let content = await readFile(file, "utf8");
    const assetPrefix = relativePrefix(dest, packageDir);
    const htmlPrefix = relativePrefix(dest, htmlDir);

    content = content.replace(
      /(?:\.{1,2}\/|\/)?_next\/static\/chunks\/([^"'\\\s)]+\.css)/g,
      (_match, cssFile) => `${assetPrefix}css/${path.basename(cssFile)}`,
    );

    content = content.replace(
      /(?:\.{1,2}\/|\/)?_next\/static\/([^"'\\\s)]+\.(?:js|json))/g,
      (_match, staticFile) => `${assetPrefix}js/${staticFile}`,
    );

    for (const asset of publicAssets) {
      content = content.replace(
        new RegExp(`(?<![A-Za-z0-9.:-])(?:\\.{1,2}/|/)${escapeRegExp(asset)}`, "g"),
        `${assetPrefix}images/${asset}`,
      );
    }

    content = content.replace(/href="\/([^"#][^"]*)"/g, (_match, href) => {
      if (/^(?:https?:|mailto:|tel:)/.test(href)) {
        return `href="/${href}"`;
      }
      return `href="${routeToHtml(`/${href}`, htmlPrefix)}"`;
    });

    content = content.replace(/href="\/(#[^"]*)"/g, (_match, hash) => {
      return `href="${htmlPrefix}index.html${hash}"`;
    });

    content = content.replace(/href="\/"/g, `href="${htmlPrefix}index.html"`);
    content = content.replace(/\\"href\\":\\"\/([^"\\]*)\\"/g, (_match, href) => {
      const value = href ? routeToHtml(`/${href}`, htmlPrefix) : `${htmlPrefix}index.html`;
      return `\\"href\\":\\"${value}\\"`;
    });

    await writeFile(dest, content);
  }
}

await cp(path.join(outDir, "robots.txt"), path.join(packageDir, "robots.txt"), {
  force: true,
});
await cp(path.join(outDir, "sitemap.xml"), path.join(packageDir, "sitemap.xml"), {
  force: true,
});

await writeFile(
  path.join(packageDir, "README.txt"),
  [
    "Colytics AI static website bundle",
    "",
    "Open html/index.html in a browser to view the site.",
    "Folders:",
    "- html: exported website pages",
    "- css: stylesheets",
    "- js: JavaScript chunks",
    "- images: images and icons",
    "",
  ].join("\r\n"),
);
