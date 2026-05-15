import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const targets = fs
  .readdirSync(root)
  .filter((f) => f.endsWith("-page.jsx") || f === "legal-page.jsx");

function strip(s) {
  s = s.replace(/\nconst root = ReactDOM\.createRoot\(document\.getElementById\("root"\)\);\s*\nroot\.render\([^)]+\);\s*/g, "\n");
  s = s.replace(/\nconst root = document\.getElementById\('root'\);\s*\nif \(root\) ReactDOM\.createRoot\(root\)\.render\(React\.createElement\([^)]+\)\);\s*/g, "\n");
  s = s.replace(/\nReactDOM\.createRoot\(document\.getElementById\("root"\)\)\.render\([^)]+\);\s*/g, "\n");

  s = s.replace(/<React\.Fragment>\s*\n\s*<Header \/>\s*\n\s*<main>/g, "<main>");
  s = s.replace(/<\/main>\s*\n\s*<Footer \/>\s*\n\s*<\/React\.Fragment>/g, "</main>");

  s = s.replace(/<div className="site">\s*\n\s*<Header \/>\s*\n/g, "<>\n");
  s = s.replace(/\n\s*<Footer \/>\s*\n\s*<\/div>/g, "\n    </>");

  return s;
}

for (const f of targets) {
  const fp = path.join(root, f);
  const before = fs.readFileSync(fp, "utf8");
  const after = strip(before);
  if (after !== before) {
    fs.writeFileSync(fp, after);
    console.log("ok", f);
  } else {
    console.log("skip", f);
  }
}
