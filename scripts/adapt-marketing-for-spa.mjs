/**
 * Post-process src/marketing/*.jsx copied from root: ES modules + no Header/Footer + no createRoot.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const M = path.join(__dirname, "..", "src", "marketing");

function read(f) {
  return fs.readFileSync(path.join(M, f), "utf8");
}
function write(f, s) {
  fs.writeFileSync(path.join(M, f), s, "utf8");
}

function ensureReactImport(s) {
  if (s.includes('import React from "react"')) return s;
  return 'import React from "react";\n' + s.replace(/^\/\*[\s\S]*?\*\/\s*/, "").replace(/^\/\/[^\n]*\n/, "");
}

function stripHtmlLinks(s) {
  const pairs = [
    ['href="pricing.html"', 'href="/pricing"'],
    ['href="contact.html"', 'href="/contact"'],
    ['href="features.html"', 'href="/platform"'],
    ['href="about.html"', 'href="/about"'],
    ['href="blog.html"', 'href="/blog"'],
    ['href="case-studies.html"', 'href="/case-studies"'],
    ['href="compare-procore.html"', 'href="/vs-procore"'],
    ['href="privacy.html"', 'href="/privacy"'],
    ['href="terms.html"', 'href="/terms"'],
    ['href="index.html"', 'href="/"'],
  ];
  let out = s;
  for (const [a, b] of pairs) out = out.split(a).join(b);
  return out;
}

function stripChromeFragment(s, exportName) {
  let out = s;
  out = out.replace(
    /return \(\s*<React\.Fragment>\s*<Header \/>\s*<main>/,
    "return (\n    <main>"
  );
  out = out.replace(
    /<\/main>\s*<Footer \/>\s*<\/React\.Fragment>/,
    "</main>"
  );
  out = out.replace(/\nconst root = ReactDOM\.createRoot\([\s\S]*$/m, "");
  out = out.replace(/\nReactDOM\.createRoot\([\s\S]*$/m, "");
  out = `\nexport default ${exportName};\n` + out; // WRONG order

  return out;
}

// --- icons ---
{
  let s = read("icons.jsx");
  s = ensureReactImport(s);
  s = s.replace(/\nObject\.assign\(window,\s*\{[\s\S]*?\}\);\s*$/, "\n");
  s += `
export {
  Icon, IconDashboard, IconProjects, IconSchedule, IconBIM, IconIssues, IconRFI,
  IconSubmittals, IconDocuments, IconLogs, IconConcierge, IconCost, IconReports,
  IconTeam, IconBell, IconMobile, IconSearch, IconHelp, IconMessages, IconMeetings,
  IconQuality, IconSafety, IconAR, IconArrowRight, IconCheck, IconShield, IconLock,
  IconKey, IconAudit, IconSun, IconMoon,
};
`;
  write("icons.jsx", stripHtmlLinks(s));
}

// --- hero ---
{
  let s = read("hero.jsx");
  s = ensureReactImport(s);
  s = s.replace(/\nObject\.assign\(window,\s*\{[\s\S]*?\}\);\s*$/, "\n");
  s += "\nexport { Hero, ProductPreview, BIMViewerStage };\n";
  write("hero.jsx", stripHtmlLinks(s));
}

function stripSiteChrome(s, exportDefaultName) {
  let out = s;
  out = out.replace(/\s*<Header \/>\s*\n/, "\n");
  out = out.replace(/\s*<Footer \/>\s*\n/, "\n");
  out = out.replace(/\nconst root = ReactDOM\.createRoot\([\s\S]*$/m, "");
  out = out.replace(/\nReactDOM\.createRoot\([\s\S]*$/m, "");
  out = out.replace(/\nif \(root\) ReactDOM\.createRoot\(root\)[\s\S]*$/m, "");
  out += `\nexport default ${exportDefaultName};\n`;
  return out;
}

// --- features-page ---
{
  let s = read("features-page.jsx");
  s = 'import React from "react";\nimport { IconArrowRight, IconBIM, IconSchedule, IconAR } from "./icons.jsx";\n' + s.replace(/^\/\/[^\n]*\n/, "");
  s = stripSiteChrome(s, "FeaturesPage");
  s = stripHtmlLinks(s);
  write("features-page.jsx", s);
}

// --- pricing-page ---
{
  let s = read("pricing-page.jsx");
  s =
    'import React from "react";\nimport { useSiteContent } from "../cms/SiteContentContext.jsx";\n' +
    s.replace(/^\/\/[^\n]*\n/, "");
  s = s.replace(
    /typeof useSiteContent === 'function' \? useSiteContent\(\) : \{ content: \{\}, update: \(\) => \{\} \}/g,
    "useSiteContent()"
  );
  s = s.replace(/const hasCmsHook = typeof useSiteContent === 'function';\s*const cmsResult\s*=\s*hasCmsHook \? useSiteContent\(\) : null;/g, "const cmsResult = useSiteContent();");
  s = s.replace(/hasCmsHook \? cmsResult/g, "cmsResult");
  s = stripSiteChrome(s, "PricingPage");
  s = stripHtmlLinks(s);
  write("pricing-page.jsx", s);
}

// --- about, blog, case-studies, contact, compare-procore: Fragment pattern ---
for (const [file, name] of [
  ["about-page.jsx", "AboutPage"],
  ["blog-page.jsx", "BlogPage"],
  ["case-studies-page.jsx", "CaseStudiesPage"],
  ["contact-page.jsx", "ContactPage"],
  ["compare-procore-page.jsx", "CPComparePage"],
]) {
  let s = read(file);
  s = ensureReactImport(s);
  s = s.replace(
    /return \(\s*<React\.Fragment>\s*<Header \/>\s*<main>/,
    "return (\n    <main>"
  );
  s = s.replace(/<\/main>\s*<Footer \/>\s*<\/React\.Fragment>/, "</main>");
  s = s.replace(/\nconst root = ReactDOM\.createRoot\([\s\S]*$/m, "");
  s = s.replace(/\nroot\.render\([\s\S]*$/m, "");
  s += `\nexport default ${name};\n`;
  s = stripHtmlLinks(s);
  write(file, s);
}

// --- legal-page ---
{
  let s = read("legal-page.jsx");
  s = ensureReactImport(s);
  s = s.replace(
    /const LegalPage = \(\) => \{\s*const isTerms = window\.location\.pathname\.includes\("terms"\);\s*return \(\s*<React\.Fragment>\s*<Header \/>\s*<main>/,
    "export function LegalArticle({ variant }) {\n  const isTerms = variant === \"terms\";\n  return (\n    <main>"
  );
  s = s.replace(/<\/main>\s*<Footer \/>\s*<\/React\.Fragment>\s*\};\s*/, "</main>\n  );\n}\n");
  s = s.replace(/\nconst root = ReactDOM\.createRoot\([\s\S]*$/m, "");
  s = s.replace(/\nroot\.render\([\s\S]*$/m, "");
  s = stripHtmlLinks(s);
  write("legal-page.jsx", s);
}

console.log("adapt-marketing-for-spa done");
