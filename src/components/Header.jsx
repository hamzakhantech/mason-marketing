import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChromeIcon } from "./ChromeIcon.jsx";

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
  { key: "platform", label: "Platform", to: "/platform" },
  { key: "pricing", label: "Pricing", to: "/pricing" },
  { key: "cases", label: "Case Studies", to: "/case-studies" },
  { key: "compare", label: "vs Procore", to: "/vs-procore" },
  { key: "blog", label: "Blog", to: "/blog" },
];

const HeaderShell = ({ dark, toggleDark }) => {
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
      const now = new Date();
      const tzAbbr = now.toLocaleTimeString("en", { timeZoneName: "short" }).split(" ").pop();
      const hm = now.toLocaleTimeString("en", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setLiveTime(tzAbbr + "\u00a0" + hm);
    }
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch("https://wttr.in/?format=j1")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!d) return;
        const c = d.current_condition[0];
        const country = d.nearest_area[0].country[0].value || "";
        const fCountries = [
          "United States",
          "Bahamas",
          "Cayman Islands",
          "Palau",
          "Belize",
          "Myanmar",
          "Marshall Islands",
          "Federated States of Micronesia",
        ];
        const usesF = fCountries.some((n) => country.indexOf(n) !== -1);
        const temp = usesF ? c.temp_F + "°F" : c.temp_C + "°C";
        const desc = c.weatherDesc[0].value;
        setLiveWeather(temp + "\u00a0·\u00a0" + desc);
      })
      .catch(() => {});
  }, []);

  return (
    <>
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
              <Link className="brand" to="/" aria-label="MASON home">
                <span className="brand-mark">M</span>
                <span>MASON</span>
              </Link>
              <div className="hide-md" style={{ display: "flex", gap: 22, alignItems: "center" }}>
                {NAV_LINKS.map((n) => (
                  <Link key={n.key} to={n.to} className="nav-link">
                    {n.label}
                  </Link>
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
              <Link className="btn primary mason-border-sweep" to="/contact">
                Book a demo <ChromeIcon name="arrow" size={12} />
              </Link>
            </div>
            <button
              type="button"
              className="nav-hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>
      {mobileOpen && (
        <>
          <div className="mob-drawer-backdrop" onClick={() => setMobileOpen(false)} role="presentation" />
          <div className="mob-drawer">
            <div className="mob-drawer__head">
              <Link className="brand" to="/" aria-label="MASON home" onClick={() => setMobileOpen(false)}>
                <span className="brand-mark">M</span>
                <span>MASON</span>
              </Link>
              <button type="button" className="mob-drawer__close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>
            {NAV_LINKS.map((n) => (
              <Link key={n.key} to={n.to} className="mob-link" onClick={() => setMobileOpen(false)}>
                {n.label}
              </Link>
            ))}
            <div className="mob-drawer__cta">
              <a href="https://app.masononsite.com" className="btn ghost" style={{ textAlign: "center" }}>
                Sign in
              </a>
              <Link to="/contact" className="btn primary" style={{ textAlign: "center" }} onClick={() => setMobileOpen(false)}>
                Book a demo →
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export function Header(props) {
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
    } catch {
      /* ignore */
    }
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
}
