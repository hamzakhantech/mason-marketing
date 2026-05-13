/* MASON v2 Blueprint Industrial — Shared Layout (JSX) */
/* global React, ReactDOM */

const LayoutIcon = ({ name, size = 18, stroke = 1.5 }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow": return <svg {...p}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
    case "sparkle": return <svg {...p}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>;
    default: return null;
  }
};

const FCOLS = [
  { h: "Platform", items: [["BIM Viewer","features.html"],["Schedule","features.html"],["RFIs","features.html"],["Issues and Punch","features.html"],["AI Concierge","features.html"],["Mobile Apps","mobile.html"],["Integrations","integrations.html"]] },
  { h: "Solutions", items: [["General Contractors","enterprise.html"],["Owners","enterprise.html"],["Subcontractors","smb.html"],["Case Studies","case-studies.html"]] },
  { h: "Company",  items: [["About","about.html"],["Blog","blog.html"],["Security","security.html"],["Pricing","pricing.html"],["Contact","contact.html"]] },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg"></div>
    <div className="container">
      <div className="footer-top">
        <div className="footer-cta">
          <div className="label-num" style={{ color: "rgba(242,238,229,.5)" }}>GET STARTED</div>
          <h2 className="display" style={{ marginTop: 8, color: "var(--paper)", fontSize: "clamp(36px,4vw,58px)", letterSpacing: "-0.035em" }}>
            Pour the foundation <em className="serif-it">today.</em>
          </h2>
          <p style={{ color: "rgba(242,238,229,.7)", maxWidth: "34ch", marginTop: 14 }}>
            14-day pilot on your live project. We bring the model. No credit card, no procurement call.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
            <a className="btn primary" href="contact.html">Book a demo <LayoutIcon name="arrow" size={12}/></a>
            <a className="btn" style={{ borderColor: "rgba(242,238,229,.3)", color: "var(--paper)" }} href="contact.html">Talk to sales</a>
          </div>
        </div>
        {FCOLS.map(col => (
          <div className="footer-col" key={col.h}>
            <h5>{col.h}</h5>
            <ul>{col.items.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="footer-mid">
        <div className="ml">
          <LayoutIcon name="sparkle" size={14}/>
          <input type="email" placeholder="your@email.com — get the monthly Field Notes dispatch"/>
          <button>Subscribe</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span className="label-num" style={{ color: "rgba(242,238,229,.5)" }}>FOLLOW</span>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">In</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">Yt</a>
            <a href="#" aria-label="GitHub">Gh</a>
          </div>
        </div>
      </div>
      <div className="footer-mark" aria-hidden="true">MAS<span className="o-dot"></span>N</div>
      <div className="footer-base">
        <div>© 2026 MASON LABS, INC. · MADE IN OAKLAND, CA</div>
        <div className="links">
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="security.html">Security</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>v 4.2 · 2026-05-12</div>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
