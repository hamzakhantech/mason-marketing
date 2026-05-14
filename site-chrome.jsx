/**
 * Home page header + footer (index.html) — shared across marketing inner pages.
 * Depends: React (global), icons.jsx optional (uses HomeChromeIcon for parity).
 */
/* global React */

const MASON_THEME_KEY = "mason-theme";

const TICKER_ITEMS = [
  "Live · 147 firms synced across 7 countries",
  "430 active projects · all running today",
  "RFI #8812 resolved in 2h on Naresco Tower, Dubai",
  "Schedule slip detected · Block C · 1.5 days · auto-flagged",
  "Depenbrock AG synced federated BIM · 420 disciplines",
  "Conlan Company cut RFI cycle 58% in month one",
  "AI Concierge now reads submittals · 100k+ indexed",
  "Issue closeout rate up 42% this quarter globally",
];

const NAV_LINKS = [
  { key: "platform", label: "Platform", href: "features.html" },
  { key: "pricing", label: "Pricing", href: "pricing.html" },
  { key: "cases", label: "Case Studies", href: "case-studies.html" },
  { key: "compare", label: "vs Procore", href: "compare-procore.html" },
  { key: "blog", label: "Blog", href: "blog.html" },
];

const FCOLS = [
  {
    h: "Platform",
    items: [
      ["BIM Viewer", "features.html"],
      ["Schedule", "features.html"],
      ["RFIs", "features.html"],
      ["Issues and Punch", "features.html"],
      ["Daily Logs", "features.html"],
      ["AI Concierge", "features.html"],
      ["Mobile Apps", "mobile.html"],
      ["Integrations", "integrations.html"],
    ],
  },
  {
    h: "Solutions",
    items: [
      ["General Contractors", "enterprise.html"],
      ["Owners and Developers", "enterprise.html"],
      ["Subcontractors", "smb.html"],
      ["Healthcare", "case-studies.html"],
      ["Infrastructure", "case-studies.html"],
    ],
  },
  {
    h: "Company",
    items: [
      ["About", "about.html"],
      ["Case Studies", "case-studies.html"],
      ["Field Notes Blog", "blog.html"],
      ["Security · SOC 2", "security.html"],
      ["Contact", "contact.html"],
      ["Pricing", "pricing.html"],
    ],
  },
];

/** Same stroke icons as index.html `Icon` for header/footer usage */
const HomeChromeIcon = ({ name, size = 18, stroke = 1.5 }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    case "sun":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
        </svg>
      );
    case "moon":
      return (
        <svg {...props}>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
      );
    default:
      return null;
  }
};

function navKeyForPath() {
  try {
    var p = (window.location.pathname || "").replace(/^\//, "").split("/").pop() || "";
    if (!p || p === "index.html") return null;
    var map = {
      "features.html": "platform",
      "pricing.html": "pricing",
      "case-studies.html": "cases",
      "compare-procore.html": "compare",
      "compare-fieldwire.html": "compare",
      "compare-asite.html": "compare",
      "blog.html": "blog",
    };
    return map[p] || null;
  } catch (e) {
    return null;
  }
}

const Header = () => {
  const { useState, useEffect } = React;
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.getAttribute("data-theme") !== "light");

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem(MASON_THEME_KEY, theme);
    } catch (e) {}
  }, [dark]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== MASON_THEME_KEY) return;
      if (e.newValue === "light") setDark(false);
      else if (e.newValue === "dark") setDark(true);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeKey = navKeyForPath();

  return (
    <header className={"header-wrap" + (scrolled ? " is-scrolled" : "")}>
      <div className="ticker">
        <div className="badge">
          <span className="pulse"></span>JOBSITE · LIVE
        </div>
        <div className="scroll">
          <div className="scroll-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <span key={i}>
                <i></i>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div
          className="badge"
          style={{
            background: "var(--paper)",
            color: "var(--ink)",
            borderLeft: "1px solid var(--ink)",
            borderRight: 0,
          }}
        >
          PDT 14:22 · 71°F
        </div>
      </div>
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="index.html" aria-label="MASON home">
              <span className="brand-mark">M</span>
              <span>MASON</span>
            </a>
            <div className="hide-md" style={{ display: "flex", gap: 22, alignItems: "center" }}>
              {NAV_LINKS.map((n) => (
                <a
                  key={n.key}
                  href={n.href}
                  className={"nav-link" + (activeKey === n.key ? " is-active" : "")}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hide-lg" style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--muted)",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              v 4.2 · 2026
            </span>
          </div>
          <div className="nav-right">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              className="mode-toggle"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <HomeChromeIcon name={dark ? "moon" : "sun"} size={13} />
              {dark ? "Dark" : "Light"}
            </button>
            <a className="btn ghost hide-md" href="contact.html">
              Sign in
            </a>
            <a className="btn primary mason-border-sweep" href="contact.html">
              Book a demo <HomeChromeIcon name="arrow" size={12} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg"></div>
    <div className="container">
      <div className="footer-top">
        <div className="footer-cta">
          <div className="label-num" style={{ color: "rgba(242,238,229,.5)" }}>
            SECTION · 08 — CONTACT
          </div>
          <h2 className="display" style={{ marginTop: 8 }}>
            Pour the
            <br />
            foundation
            <br />
            <em className="serif-it">today.</em>
          </h2>
          <p style={{ color: "rgba(242,238,229,.7)", maxWidth: "34ch", marginTop: 14 }}>
            14-day pilot on your live project. We bring the model. No credit card, no procurement call.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
            <a className="btn primary mason-border-sweep" href="contact.html">
              Book a demo <HomeChromeIcon name="arrow" size={12} />
            </a>
            <a
              className="btn"
              style={{ borderColor: "rgba(242,238,229,.3)", color: "var(--paper)" }}
              href="contact.html"
            >
              Talk to sales
            </a>
          </div>
        </div>
        {FCOLS.map((col) => (
          <div className="footer-col" key={col.h}>
            <h5>{col.h}</h5>
            <ul>
              {col.items.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-mid">
        <div className="ml">
          <HomeChromeIcon name="sparkle" size={14} />
          <input type="email" placeholder="your@email.com — get the monthly Field Notes dispatch" />
          <button type="button">Subscribe</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <span className="label-num" style={{ color: "rgba(242,238,229,.5)" }}>
            FOLLOW
          </span>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">
              In
            </a>
            <a href="#" aria-label="X">
              X
            </a>
            <a href="#" aria-label="YouTube">
              Yt
            </a>
            <a href="#" aria-label="GitHub">
              Gh
            </a>
          </div>
        </div>
      </div>
      <div className="footer-mark" aria-hidden="true">
        MAS<span className="o-dot"></span>N
      </div>
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

Object.assign(window, { Header, Footer });
