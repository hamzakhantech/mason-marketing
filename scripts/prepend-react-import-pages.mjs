import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const files = fs
  .readdirSync(root)
  .filter((f) => f.endsWith("-page.jsx") || f === "legal-page.jsx");

for (const f of files) {
  const fp = path.join(root, f);
  let s = fs.readFileSync(fp, "utf8");
  if (s.includes('import React from "react"') || s.includes("import React from 'react'")) continue;
  const lines = s.split("\n");
  let i = 0;
  while (i < lines.length && lines[i].startsWith("//")) i++;
  lines.splice(i, 0, "", 'import React from "react";');
  fs.writeFileSync(fp, lines.join("\n"));
  console.log(f);
}
