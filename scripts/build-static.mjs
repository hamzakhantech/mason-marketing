import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");

/** Top-level names never copied into dist */
const EXCLUDE_DIRS = new Set([
  "node_modules",
  "dist",
  ".git",
  "src",
  "archive",
  ".vercel",
]);

/** Directories copied wholesale when present */
const COPY_DIRS = ["assets", "api", "admin", "uploads", "public"];

const COPY_EXT = new Set([
  ".html",
  ".css",
  ".js",
  ".jsx",
  ".json",
  ".xml",
  ".txt",
  ".ico",
  ".svg",
  ".webp",
  ".png",
  ".jpg",
  ".jpeg",
  ".woff2",
]);

function rmDist() {
  fs.rmSync(DIST, { recursive: true, force: true });
}

function mkdirDist() {
  fs.mkdirSync(DIST, { recursive: true });
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  const st = fs.statSync(src);
  if (!st.isDirectory()) return;
  fs.cpSync(src, dest, { recursive: true });
}

function copyRootFiles() {
  const entries = fs.readdirSync(ROOT, { withFileTypes: true });
  for (const ent of entries) {
    const name = ent.name;
    if (ent.isDirectory()) continue;
    const ext = path.extname(name).toLowerCase();
    if (!COPY_EXT.has(ext)) continue;
    fs.copyFileSync(path.join(ROOT, name), path.join(DIST, name));
  }
}

rmDist();
mkdirDist();

for (const dir of COPY_DIRS) {
  copyDir(path.join(ROOT, dir), path.join(DIST, dir));
}

copyRootFiles();

console.log("Static build: wrote", DIST);
