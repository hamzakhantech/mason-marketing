import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

import "../icons.jsx";
import "../cms.jsx";

class MarketingErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      const msg = this.state.error && this.state.error.message ? this.state.error.message : "Unknown error";
      return (
        <div className="container" style={{ padding: "120px 24px", maxWidth: 720 }}>
          <p className="eyebrow">MASON</p>
          <h1 className="display" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            We hit a snag loading this page
          </h1>
          <p className="lede" style={{ marginTop: 16 }}>
            Try a refresh. If it keeps happening, email{" "}
            <a href="mailto:hello@masononsite.com" style={{ color: "var(--accent)" }}>
              hello@masononsite.com
            </a>
            .
          </p>
          <p className="mono" style={{ marginTop: 24, fontSize: 12, color: "var(--text-muted)" }}>
            {msg}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Missing #root — index.html must include <div id="root"></div>.');
}

createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarketingErrorBoundary>
        <App />
      </MarketingErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
