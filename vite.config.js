import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "assets/*", dest: "assets" },
        { src: "uploads/*", dest: "uploads" },
        { src: "api", dest: "." },
        { src: "theme-init.js", dest: "." },
        { src: "robots.txt", dest: "." },
        { src: "sitemap.xml", dest: "." },
        { src: "content.json", dest: "." },
        { src: "motion-init.js", dest: "." },
        { src: "cursor-effects.js", dest: "." },
        { src: "magnetic-effects.js", dest: "." },
        { src: "hover-arrow-cursor.js", dest: "." },
        { src: "index-motion.js", dest: "." },
        { src: "tracking.js", dest: "." },
        { src: "admin", dest: "." },
        { src: "admin-panel.jsx", dest: "." },
        { src: "styles-admin.css", dest: "." },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
