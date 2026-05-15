import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SiteContentProvider } from "./cms/SiteContentContext.jsx";
import App from "./App.jsx";

import "../styles.css";
import "../styles-sections.css";
import "../styles-content.css";
import "../styles-extra.css";
import "../styles-theme.css";
import "../styles-pages.css";
import "../styles-premium-motion.css";
import "../styles-v2.css";
import "../index-motion.css";
import "../site-header.css";
import "../site-footer.css";
import "./styles/route-body-bridge.css";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

(async () => {
  try {
    await loadScript("/motion-init.js?v=2");
    await loadScript("/cursor-effects.js?v=1");
    await loadScript("/magnetic-effects.js?v=1");
    await loadScript("/hover-arrow-cursor.js?v=4");
    await loadScript("/index-motion.js?v=1");
  } catch {
    /* motion scripts are optional for first paint */
  }
})();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteContentProvider>
        <App />
      </SiteContentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
