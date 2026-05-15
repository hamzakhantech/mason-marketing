import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const map = {
  "about-page.jsx": "AboutPage",
  "bim-ar-page.jsx": "BIMARPage",
  "blog-page.jsx": "BlogPage",
  "case-studies-page.jsx": "CaseStudiesPage",
  "changelog-page.jsx": "ChangelogPage",
  "compare-asite-page.jsx": "CAComparePage",
  "compare-fieldwire-page.jsx": "CFComparePage",
  "compare-procore-page.jsx": "CPComparePage",
  "contact-page.jsx": "ContactPage",
  "enterprise-page.jsx": "EnterprisePage",
  "features-page.jsx": "FeaturesPage",
  "integrations-page.jsx": "IntegrationsPage",
  "mobile-page.jsx": "MobilePage",
  "pricing-page.jsx": "PricingPage",
  "roi-calculator-page.jsx": "ROIPage",
  "security-page.jsx": "SecurityPage",
  "smb-page.jsx": "SmbPage",
};

for (const [file, name] of Object.entries(map)) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, "utf8");
  if (s.includes("export default")) continue;
  s = s.trimEnd() + `\n\nexport default ${name};\n`;
  fs.writeFileSync(fp, s);
  console.log(file);
}
