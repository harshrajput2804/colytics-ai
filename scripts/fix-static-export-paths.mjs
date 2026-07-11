import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const publicDir = path.join(root, "public");

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

const publicAssets = (await listFiles(publicDir)).map((file) =>
  path.relative(publicDir, file).replaceAll(path.sep, "/"),
);

const exportedFiles = (await listFiles(outDir)).filter((file) =>
  [".html", ".txt"].includes(path.extname(file)),
);

for (const file of exportedFiles) {
  const relativeDir = path.relative(outDir, path.dirname(file));
  const depth = relativeDir ? relativeDir.split(path.sep).length : 0;
  const prefix = depth === 0 ? "." : "../".repeat(depth).replace(/\/$/, "");
  let content = await readFile(file, "utf8");
  const original = content;

  content = content.replace(
    /(["'=(])(?:\/|\.\.?\/)+_next\//g,
    `$1${prefix}/_next/`,
  );
  content = content.replace(
    /(\\")(?:\/|\.\.?\/)+_next\//g,
    `$1${prefix}/_next/`,
  );

  for (const asset of publicAssets) {
    const escapedAsset = escapeRegExp(asset);
    content = content.replace(
      new RegExp(`(["'=(])/${escapedAsset}`, "g"),
      `$1${prefix}/${asset}`,
    );
    content = content.replace(
      new RegExp(`(\\\\")/${escapedAsset}`, "g"),
      `$1${prefix}/${asset}`,
    );
  }

  if (content !== original) {
    await writeFile(file, content);
  }
}
