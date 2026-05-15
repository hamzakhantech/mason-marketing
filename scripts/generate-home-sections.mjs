/**
 * One-time generator: reads static-reference/index.html inline Babel blocks
 * and writes src/pages/home/HomeSections.jsx (Vite-compatible ES module).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "static-reference", "index.html");
const OUT = path.join(ROOT, "src", "pages", "home", "HomeSections.jsx");

const html = fs.readFileSync(SRC, "utf8");

const re =
  /<script\s+type="text\/babel"\s+data-presets="env,react"\s*>([\s\S]*?)<\/script>/gi;
const blocks = [];
let m;
while ((m = re.exec(html)) !== null) {
  let body = m[1].trim();
  if (!body) continue;
  if (body.includes("waitAndRender") && body.includes("GLOBALS")) continue;
  body = body.replace(/^\/\*[\s\S]*?\*\/\s*/, "").trim();
  blocks.push(body);
}

let combined = blocks.join("\n\n");

combined = combined.replace(/window\.Icon\s*=\s*Icon;?\s*/g, "");
combined = combined.replace(/window\.(Hero|Modules|Showcase|BIM|Cases|Pricing|Blog)\s*=\s*\1;?\s*/g, "");

const linkRepl = [
  [/href="contact\.html"/g, 'href="/contact"'],
  [/href="features\.html"/g, 'href="/platform"'],
  [/href="case-studies\.html"/g, 'href="/case-studies"'],
  [/href="blog\.html"/g, 'href="/blog"'],
  [/href="pricing\.html"/g, 'href="/pricing"'],
  [/href="index\.html"/g, 'href="/"'],
];

for (const [a, b] of linkRepl) combined = combined.replace(a, b);

const header = `import React from "react";

`;

const footer = `

export function HomeMain() {
  return (
    <>
      <Hero />
      <hr className="rule" />
      <Modules />
      <Showcase />
      <BIM />
      <Cases />
      <Pricing />
      <Blog />
    </>
  );
}

export { Icon };
`;

const styleStart = html.indexOf("<style>");
const styleEnd = html.indexOf("</style>");
if (styleStart !== -1 && styleEnd !== -1) {
  const css = html.slice(styleStart + "<style>".length, styleEnd).trim();
  const cssOut = path.join(ROOT, "src", "pages", "home", "home-inline.css");
  fs.mkdirSync(path.dirname(cssOut), { recursive: true });
  fs.writeFileSync(cssOut, css, "utf8");
  console.log("Wrote", cssOut);
}
