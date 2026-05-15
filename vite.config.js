import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const rootHtml = [
  "about.html",
  "features.html",
  "pricing.html",
  "contact.html",
  "blog.html",
  "case-studies.html",
  "compare-procore.html",
  "terms.html",
  "privacy.html",
  "mobile.html",
  "integrations.html",
  "enterprise.html",
  "smb.html",
  "security.html",
  "vs-procore.html",
];

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "assets", dest: "assets" },
        { src: "uploads", dest: "uploads" },
        { src: "api", dest: "api" },
        { src: "theme-init.js", dest: "theme-init.js" },
        { src: "robots.txt", dest: "robots.txt" },
        { src: "sitemap.xml", dest: "sitemap.xml" },
        { src: "content.json", dest: "content.json" },
        { src: "motion-init.js", dest: "motion-init.js" },
        { src: "cursor-effects.js", dest: "cursor-effects.js" },
        { src: "magnetic-effects.js", dest: "magnetic-effects.js" },
        { src: "hover-arrow-cursor.js", dest: "hover-arrow-cursor.js" },
        { src: "index-motion.js", dest: "index-motion.js" },
        { src: "tracking.js", dest: "tracking.js" },
        ...rootHtml.map((name) => ({ src: name, dest: "." })),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
