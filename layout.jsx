// layout.jsx — Shared Footer for all interior pages
// Header is already exported by hero.jsx

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__row">
      <div className="site-footer__brand">
        <img src="assets/mason_horizontal_dark.png" alt="MASON" className="site-footer__wm site-footer__wm--dark" />
        <img src="assets/mason_horizontal_light.png" alt="MASON" className="site-footer__wm site-footer__wm--light" />
        <p className="site-footer__expand">Management &amp; Analytics System for On-site Navigation</p>
        <p style={{ fontSize: "12px", color: "var(--text-muted, rgba(244,239,230,.45))", marginTop: "8px" }}>
          Built by Certiva LLC
        </p>
      </div>
      <div className="site-footer__cols">
        <div>
          <span className="mono">Product</span>
          <a href="features.html">Features</a>
          <a href="bim-ar.html">BIM and AR</a>
          <a href="mobile.html">Android App</a>
          <a href="integrations.html">Integrations</a>
          <a href="pricing.html">Pricing</a>
          <a href="security.html">Security</a>
          <a href="changelog.html">Changelog</a>
        </div>
        <div>
          <span className="mono">Compare</span>
          <a href="compare-procore.html">MASON vs Procore</a>
          <a href="compare-fieldwire.html">MASON vs Fieldwire</a>
          <a href="compare-asite.html">MASON vs Asite</a>
        </div>
        <div>
          <span className="mono">Resources</span>
          <a href="case-studies.html">Case studies</a>
          <a href="roi-calculator.html">ROI calculator</a>
          <a href="blog.html">Blog</a>
        </div>
        <div>
          <span className="mono">Company</span>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <div>
          <span className="mono">Account</span>
          <a href="https://app.masononsite.com/login">Sign in</a>
          <a href="https://app.masononsite.com/register">Start free trial</a>
          <a href="contact.html">Request demo</a>
        </div>
      </div>
    </div>
    <div className="container site-footer__legal">
      <span>© 2026 MASON · masononsite.com · Built by Certiva LLC</span>
      <span>Built for the jobsite.</span>
    </div>
  </footer>
);

Object.assign(window, { Footer });
