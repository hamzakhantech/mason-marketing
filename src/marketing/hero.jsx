import React from "react";

// --- Hero -------------------------------------------------------------------

const Hero = () => {
  const heroVisRef = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = heroVisRef.current;
    if (reduce || !el) return undefined;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const shift = Math.min(y * 0.06, 36);
      el.style.transform = `translate3d(0,${shift.toFixed(2)}px,0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow fade-up" style={{ animationDelay: "0ms" }}>
            Management . Analytics . Site
          </span>
          <h1 className="display">
            <span className="hero-line">
              <span className="hero-line-inner">One command center</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">
                for construction <span className="accent">control</span>.
              </span>
            </span>
          </h1>
          <p className="lede fade-up" style={{ animationDelay: "160ms" }}>
            From BIM and schedule to RFIs, issues, and field logs, MASON brings the
            office and the jobsite into a single, permission aware system, with an AI
            Concierge that knows your project inside and out.
          </p>
          <div className="hero__cta fade-up" style={{ animationDelay: "240ms" }}>
            <a href="https://app.masononsite.com/register" className="btn btn-primary">
              Start free trial <IconArrowRight size={16} stroke={2} />
            </a>
            <a href="/contact" className="btn btn-ghost">Book a demo</a>
          </div>
          <div className="hero__meta fade-up" style={{ animationDelay: "320ms" }}>
            <div className="hero__meta-item">
              <span className="hero__meta-dot ok" /> Live on 47 active projects
            </div>
            <div className="hero__meta-sep" />
            <div className="hero__meta-item">No seat fees. No add-on modules. 30 day free trial.</div>
          </div>
        </div>

        <div className="hero__visual fade-up hero__visual-parallax" style={{ animationDelay: "200ms" }}>
          <div className="hero__visual-scale" ref={heroVisRef}>
            <ProductPreview />
          </div>
        </div>
      </div>

      <div className="hero__expansion container">
        <span className="mono">M.A.S.O.N</span>
        <span className="hero__expansion-sep" aria-hidden="true">/</span>
        <span className="hero__expansion-text">
          <span>Management</span>
          <span>Analytics</span>
          <span>System</span>
          <span>On-site</span>
          <span>Navigation</span>
        </span>
      </div>
    </section>
  );
};

// --- Product preview mockup -------------------------------------------------

const ProductPreview = () => {
  return (
    <div className="prod">
      <div className="prod__chrome">
        <div className="prod__lights">
          <span /><span /><span />
        </div>
        <div className="prod__url">
          <IconLock size={11} stroke={2} />
          <span>masononsite.com / projects / Riverside Tower / bim</span>
        </div>
        <div className="prod__chrome-spacer" />
      </div>

      <div className="prod__shell">
        <aside className="prod__sidebar">
          <div className="prod__sb-brand">
            <img src="assets/mason_mark_grid.png" alt="" />
            <span>MASON</span>
          </div>
          <div className="prod__sb-section">Portfolio</div>
          <div className="prod__sb-item"><IconDashboard size={14} /><span>Dashboard</span></div>
          <div className="prod__sb-item"><IconProjects size={14} /><span>Projects</span></div>
          <div className="prod__sb-item"><IconSchedule size={14} /><span>Schedule</span></div>
          <div className="prod__sb-item is-active"><IconBIM size={14} /><span>BIM</span></div>
          <div className="prod__sb-item"><IconIssues size={14} /><span>Issues<em>12</em></span></div>
          <div className="prod__sb-item"><IconRFI size={14} /><span>RFIs<em>3</em></span></div>
          <div className="prod__sb-item"><IconDocuments size={14} /><span>Documents</span></div>
          <div className="prod__sb-section">Project</div>
          <div className="prod__sb-item"><IconLogs size={14} /><span>Daily logs</span></div>
          <div className="prod__sb-item"><IconReports size={14} /><span>Reports</span></div>
        </aside>

        <main className="prod__main">
          <div className="prod__topbar">
            <div className="prod__crumb">
              <span>Riverside Tower</span><i>/</i><span>BIM</span><i>/</i><span className="strong">L23 MEP</span>
            </div>
            <div className="prod__topbar-right">
              <span className="chip">IFC . Federated</span>
              <span className="prod__avatar" />
            </div>
          </div>

          <BIMViewerStage />

          <div className="prod__rail">
            <div className="prod__rail-card">
              <div className="prod__rail-row">
                <span className="chip danger"><span className="dot" /> Open</span>
                <span className="prod__rail-key">RFI-204</span>
              </div>
              <div className="prod__rail-title">Penetration through L23 slab -- coordination needed with structural.</div>
              <div className="prod__rail-meta">Due in 2 days . K. Okafor</div>
            </div>
            <div className="prod__rail-card">
              <div className="prod__rail-row">
                <span className="chip warn"><span className="dot" /> Pending</span>
                <span className="prod__rail-key">ISS-118</span>
              </div>
              <div className="prod__rail-title">Conduit clash with duct, gridline E/4, at +12.40 m.</div>
              <div className="prod__rail-meta">From BIM viewer . auto-linked</div>
            </div>
          </div>
        </main>
      </div>

      <div className="prod__orb" aria-hidden="true">
        <div className="prod__orb-ring" />
        <div className="prod__orb-core">
          <IconConcierge size={18} stroke={1.7} />
        </div>
        <div className="prod__orb-bubble">
          <span className="prod__orb-bubble-pre">Concierge</span>
          <span>Drafting RFI from clash ISS-118...</span>
        </div>
      </div>
    </div>
  );
};

const BIMViewerStage = () => (
  <div className="prod__viewer">
    <svg viewBox="0 0 600 320" className="prod__viewer-svg" aria-hidden="true">
      <defs>
        <pattern id="iso-grid" width="32" height="18" patternUnits="userSpaceOnUse" patternTransform="skewX(-30)">
          <path d="M0 0H32" stroke="rgba(255,255,255,.06)" />
        </pattern>
        <pattern id="iso-grid-2" width="32" height="18" patternUnits="userSpaceOnUse" patternTransform="skewX(30)">
          <path d="M0 0H32" stroke="rgba(255,255,255,.06)" />
        </pattern>
        <linearGradient id="mass-orange" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f4a847" />
          <stop offset="1" stopColor="#c97816" />
        </linearGradient>
        <linearGradient id="mass-dark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2a2a36" />
          <stop offset="1" stopColor="#15151d" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="320" fill="url(#iso-grid)" />
      <rect x="0" y="0" width="600" height="320" fill="url(#iso-grid-2)" />
      <g transform="translate(300 220)">
        <polygon points="0,0 180,-90 360,0 180,90" fill="rgba(232,148,46,.06)" stroke="rgba(232,148,46,.35)" strokeDasharray="3 3" transform="translate(-180 0)" />
      </g>
      <g transform="translate(220 60)">
        <polygon points="0,0 120,-60 180,-30 60,30" fill="url(#mass-dark)" />
        <polygon points="0,0 0,140 60,170 60,30" fill="#0e0e15" stroke="rgba(255,255,255,.15)" strokeWidth=".8" />
        <polygon points="60,30 60,170 180,110 180,-30" fill="#1a1a24" stroke="rgba(255,255,255,.15)" strokeWidth=".8" />
        {[0,1,2,3,4].map(i => (
          <line key={i} x1="60" y1={50 + i*24} x2="180" y2={-10 + i*24} stroke="rgba(255,255,255,.08)" />
        ))}
      </g>
      <g transform="translate(150 110)">
        <polygon points="0,0 100,-50 160,-20 60,30" fill="url(#mass-orange)" />
        <polygon points="0,0 0,120 60,150 60,30" fill="#a8650f" />
        <polygon points="60,30 60,150 160,100 160,-20" fill="#d8851a" />
        <polygon points="60,78 160,28 160,42 60,92" fill="#fff" opacity=".85" />
        <polygon points="60,78 0,48 0,62 60,92" fill="#fff" opacity=".4" />
        <polygon points="-6,-6 166,-92 230,-58 60,32" fill="none" stroke="#fff" strokeOpacity=".7" strokeDasharray="3 4" strokeWidth="1" />
        <g transform="translate(110 50)">
          <circle r="14" fill="rgba(226,109,92,.18)" stroke="#e26d5c" />
          <circle r="4" fill="#e26d5c" />
        </g>
      </g>
      <g stroke="rgba(255,255,255,.4)" fill="rgba(255,255,255,.7)" fontSize="9" fontFamily="ui-monospace, Menlo, monospace">
        <line x1="380" y1="220" x2="430" y2="195" />
        <circle cx="430" cy="195" r="2.5" fill="#e8942e" stroke="none" />
        <text x="436" y="193" fill="#e8942e">L23 . +71.40m</text>
      </g>
    </svg>
    <div className="prod__viewer-controls">
      <button title="Isolate"><IconBIM size={14} /></button>
      <button title="Section"><IconAR size={14} /></button>
      <button title="Hide"><IconCheck size={14} /></button>
    </div>
    <div className="prod__viewer-legend">
      <span><i style={{ background: "#e8942e" }} /> Selected . L23 MEP</span>
      <span><i style={{ background: "#e26d5c" }} /> 1 clash</span>
    </div>
  </div>
);


export { Hero, ProductPreview, BIMViewerStage };
