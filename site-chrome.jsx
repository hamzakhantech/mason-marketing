/**
 * Single global marketing header + footer (same DOM as index.html / live site).
 * Loaded on index.html and every public marketing page. Do not duplicate this markup elsewhere.
 */
/* global React */

const MASON_THEME_KEY = "mason-theme";

/** Same `Icon` as index.html — used only inside this file for chrome. */
const ChromeIcon = ({ name, size = 18, stroke = 1.5 }) => {
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
    case "cube":
      return (
        <svg {...props}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "chat":
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "alert":
      return (
        <svg {...props}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
      );
    case "doc":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 13h6M9 17h6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "play":
      return (
        <svg {...props}>
          <polygon points="5 3 19 12 5 21 5 3" />
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
    case "dollar":
      return (
        <svg {...props}>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "zap":
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "bar-chart":
      return (
        <svg {...props}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "link":
      return (
        <svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    default:
      return null;
  }
};

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

const HeaderShell = ({ dark, toggleDark }) => {
  const { useState, useEffect } = React;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [liveTime, setLiveTime] = useState("");
  const [liveWeather, setLiveWeather] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function tick() {
      var now = new Date();
      var tzAbbr = now.toLocaleTimeString("en", { timeZoneName: "short" }).split(" ").pop();
      var hm = now.toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit", hour12: false });
      setLiveTime(tzAbbr + "\u00a0" + hm);
    }
    tick();
    var t = setInterval(tick, 30000);
    return function () {
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    fetch("https://wttr.in/?format=j1")
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (d) {
        if (!d) return;
        var c = d.current_condition[0];
        var country = d.nearest_area[0].country[0].value || "";
        var fCountries = [
          "United States",
          "Bahamas",
          "Cayman Islands",
          "Palau",
          "Belize",
          "Myanmar",
          "Marshall Islands",
          "Federated States of Micronesia",
        ];
        var usesF = fCountries.some(function (n) {
          return country.indexOf(n) !== -1;
        });
        var temp = usesF ? c.temp_F + "°F" : c.temp_C + "°C";
        var desc = c.weatherDesc[0].value;
        setLiveWeather(temp + "\u00a0·\u00a0" + desc);
      })
      .catch(function () {});
  }, []);

  return (
    <React.Fragment>
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
          {(liveTime || liveWeather) && (
            <div
              className="badge"
              style={{
                background: "var(--paper)",
                color: "var(--ink)",
                borderLeft: "1px solid var(--ink)",
                borderRight: 0,
                maxWidth: 260,
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {liveTime}
              {liveTime && liveWeather ? "\u00a0·\u00a0" : ""}
              {liveWeather}
            </div>
          )}
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
                  <a key={n.key} href={n.href} className="nav-link">
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
                onClick={toggleDark}
                style={{
                  background: "none",
                  border: "1px solid var(--rule-soft)",
                  borderRadius: "999px",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  cursor: "pointer",
                }}
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              >
                <ChromeIcon name={dark ? "moon" : "sun"} size={13} />
                {dark ? "Dark" : "Light"}
              </button>
              <a className="btn ghost hide-md" href="https://app.masononsite.com">
                Sign in
              </a>
              <a className="btn primary mason-border-sweep" href="contact.html">
                Book a demo <ChromeIcon name="arrow" size={12} />
              </a>
            </div>
            <button className="nav-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open navigation menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>
      {mobileOpen && (
        <React.Fragment>
          <div className="mob-drawer-backdrop" onClick={() => setMobileOpen(false)} />
          <div className="mob-drawer">
            <div className="mob-drawer__head">
              <a className="brand" href="index.html" aria-label="MASON home">
                <span className="brand-mark">M</span>
                <span>MASON</span>
              </a>
              <button className="mob-drawer__close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>
            {NAV_LINKS.map((n) => (
              <a key={n.key} href={n.href} className="mob-link">
                {n.label}
              </a>
            ))}
            <div className="mob-drawer__cta">
              <a href="https://app.masononsite.com" className="btn ghost" style={{ textAlign: "center" }}>
                Sign in
              </a>
              <a href="contact.html" className="btn primary" style={{ textAlign: "center" }}>
                Book a demo →
              </a>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const Header = (props) => {
  const { useState, useEffect } = React;
  const controlled =
    props && typeof props.toggleDark === "function" && typeof props.dark === "boolean";
  const [localDark, setLocalDark] = useState(
    () => document.documentElement.getAttribute("data-theme") !== "light"
  );
  const dark = controlled ? props.dark : localDark;
  const toggleDark = controlled ? props.toggleDark : () => setLocalDark((d) => !d);

  useEffect(() => {
    if (controlled) return;
    const theme = localDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    if (localDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem(MASON_THEME_KEY, theme);
    } catch (e) {}
  }, [localDark, controlled]);

  useEffect(() => {
    if (controlled) return;
    const onStorage = (e) => {
      if (e.key !== MASON_THEME_KEY) return;
      if (e.newValue === "light") setLocalDark(false);
      else if (e.newValue === "dark") setLocalDark(true);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [controlled]);

  return <HeaderShell dark={dark} toggleDark={toggleDark} />;
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
              Book a demo <ChromeIcon name="arrow" size={12} />
            </a>
            <a className="btn" style={{ borderColor: "rgba(242,238,229,.3)", color: "var(--paper)" }} href="contact.html">
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
          <ChromeIcon name="sparkle" size={14} />
          <input type="email" placeholder="your@email.com — get the monthly Field Notes dispatch" />
          <button>Subscribe</button>
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
