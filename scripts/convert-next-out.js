const path = require("path");
const fs = require("fs-extra");
const fg = require("fast-glob");
const cheerio = require("cheerio");

const inputDir = path.resolve(__dirname, "../out");
const outputDir = path.resolve(__dirname, "../static-html");

const cssOut = "css/style.css";
const jsOut = "js/script.js";

async function main() {
  await fs.remove(outputDir);

  await fs.ensureDir(path.join(outputDir, "css"));
  await fs.ensureDir(path.join(outputDir, "js"));
  await fs.ensureDir(path.join(outputDir, "assets"));

  let finalCss = "";
  let finalJs = "";

  // collect css
  const cssFiles = await fg("_next/static/css/**/*.css", {
    cwd: inputDir,
    absolute: true,
  });

  for (const file of cssFiles) {
    finalCss += await fs.readFile(file, "utf8");
    finalCss += "\n";
  }

  await fs.writeFile(path.join(outputDir, cssOut), finalCss);

  // collect js
  const jsFiles = await fg("_next/static/**/*.js", {
    cwd: inputDir,
    absolute: true,
  });

  for (const file of jsFiles) {
    finalJs += await fs.readFile(file, "utf8");
    finalJs += "\n";
  }

  await fs.writeFile(path.join(outputDir, jsOut), finalJs);

  // copy images/assets
  const assetExts = ["png", "jpg", "jpeg", "webp", "svg", "gif", "ico", "avif"];
  const assetFiles = await fg([
    `**/*.{${assetExts.join(",")}}`,
    "!_next/static/**/*.js",
    "!_next/static/**/*.css",
  ], {
    cwd: inputDir,
    absolute: true,
  });

  for (const file of assetFiles) {
    const rel = path.relative(inputDir, file);
    const target = path.join(outputDir, "assets", rel);
    await fs.ensureDir(path.dirname(target));
    await fs.copy(file, target);
  }

  // convert html pages
  const htmlFiles = await fg("**/*.html", {
    cwd: inputDir,
    absolute: true,
  });

  for (const file of htmlFiles) {
    const rel = path.relative(inputDir, file);

    let outputName;

    if (rel === "index.html") {
      outputName = "index.html";
    } else if (rel.endsWith("/index.html")) {
      outputName = rel.replace("/index.html", ".html");
    } else {
      outputName = rel;
    }

    outputName = outputName.replaceAll(path.sep, "-");

    let html = await fs.readFile(file, "utf8");
    const $ = cheerio.load(html, { decodeEntities: false });

    // remove all Next css/js links
    $("link[rel='stylesheet']").remove();
    $("script").remove();

    // remove inline style attributes
    $("[style]").removeAttr("style");

    // add our css/js
    $("head").append(`<link rel="stylesheet" href="css/style.css">`);
    $("body").append(`<script src="js/script.js"></script>`);

    // rewrite image paths
    $("img[src], source[srcset], link[rel='icon']").each((_, el) => {
      const src = $(el).attr("src");
      const srcset = $(el).attr("srcset");
      const href = $(el).attr("href");

      if (src && src.startsWith("/")) {
        $(el).attr("src", "assets" + src);
      }

      if (href && href.startsWith("/")) {
        $(el).attr("href", "assets" + href);
      }

      if (srcset && srcset.startsWith("/")) {
        $(el).attr("srcset", "assets" + srcset);
      }
    });

    // rewrite internal links: /blog -> blog.html
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href");

      if (!href) return;

      if (href === "/") {
        $(el).attr("href", "index.html");
      } else if (href.startsWith("/") && !href.startsWith("//")) {
        const clean = href.replace(/^\/|\/$/g, "");
        $(el).attr("href", `${clean}.html`);
      }
    });

    await fs.writeFile(path.join(outputDir, outputName), $.html(), "utf8");
  }

  console.log("Converted Next out folder to static-html");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});