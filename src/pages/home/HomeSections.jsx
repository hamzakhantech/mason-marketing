import React from "react";

const Icon = ({ name, size = 18, stroke = 1.5 }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow":    return (<svg {...props}><path d="M5 12h14M12 5l7 7-7 7"/></svg>);
    case "cube":     return (<svg {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>);
    case "calendar": return (<svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
    case "chat":     return (<svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
    case "alert":    return (<svg {...props}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>);
    case "clipboard":return (<svg {...props}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>);
    case "sparkle":  return (<svg {...props}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>);
    case "doc":      return (<svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>);
    case "shield":   return (<svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>);
    case "search":   return (<svg {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>);
    case "menu":     return (<svg {...props}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);
    case "x":        return (<svg {...props}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
    case "play":     return (<svg {...props}><polygon points="5 3 19 12 5 21 5 3"/></svg>);
    case "sun":      return (<svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></svg>);
    case "moon":     return (<svg {...props}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>);
    case "dollar":   return (<svg {...props}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>);
    case "check":    return (<svg {...props}><polyline points="20 6 9 17 4 12"/></svg>);
    case "globe":    return (<svg {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>);
    case "layers":   return (<svg {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>);
    case "zap":      return (<svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
    case "bar-chart":return (<svg {...props}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>);
    case "link":     return (<svg {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>);
    default: return null;
  }
};
const Hero = () => (
  <section className="hero mason-glow-zone mason-line-reveal mason-parallax-slow">
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
        <span className="section-tag">SECTION · 01 — INTRO</span>
        <span className="label-num hide-mobile">147 CLIENTS · 7 COUNTRIES · 430 ACTIVE PROJECTS</span>
      </div>
      <h1 className="display">
        <span className="hero-line"><span className="hero-line-inner">One command</span></span>
        <span className="hero-line"><span className="hero-line-inner">center for the</span></span>
        <span className="hero-line"><span className="hero-line-inner"><span className="marked">jobsite</span>,</span></span>
        <span className="hero-line"><span className="hero-line-inner"><em>not the back office.</em></span></span>
      </h1>
      <div className="hero-meta fade-up">
        <p className="hero-lede">
          MASON puts BIM, schedule, RFIs, issues and daily logs on a single database — with an AI Concierge that reads your spec book, your submittals and your RFI history. 147 firms across 7 countries run their projects on it today.
        </p>
        <div className="hero-stat">
          <div className="v">430</div>
          <span className="k">active projects<br/>running today</span>
        </div>
        <div className="hero-stat">
          <div className="v">58%</div>
          <span className="k">faster RFI<br/>closeout average</span>
        </div>
      </div>
      <div className="hero-cta fade-up">
        <a className="btn primary mason-border-sweep" href="/contact">Book a demo <Icon name="arrow" size={12}/></a>
        <a className="btn ghost" href="/platform">
          <Icon name="play" size={10}/> See the platform
        </a>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: ".08em", textTransform: "uppercase", marginLeft: 10 }}>
          No credit card · 14-day pilot on your live project
        </span>
      </div>
      <div className="tech-rail">
        <div className="cell"><span className="swatch"></span> <b>STATUS</b> · OPERATIONAL</div>
        <div className="cell hide-mobile"><b>SOC 2</b> · TYPE II</div>
        <div className="cell hide-mobile"><b>IFC 4.3</b> · OPENBIM</div>
        <div className="cell hide-mobile"><b>iOS · ANDROID</b> · OFFLINE-FIRST</div>
        <div className="cell"><b>v 4.2</b> · SHIPPED MAY 2026</div>
      </div>
    </div>
  </section>
);
const MODULE_DATA = [
  { n: "01", name: "BIM Viewer",       desc: "Stream IFC, RVT and NWD in the browser. Section, mark up and pin RFIs to 3D coordinates. No plugin, no install.", icon: "cube",      stamp: "OPENBIM" },
  { n: "02", name: "Schedule",         desc: "Gantt plus 3-week lookahead, linked to the model and crew roster. Slippage auto-flags before it costs you a day.", icon: "calendar",  stamp: "P6 IMPORT" },
  { n: "03", name: "RFIs",             desc: "Threaded, time-stamped, pinned to a sheet or a 3D coordinate. Ball-in-court is always obvious. SLA timer built in.", icon: "chat",      stamp: "SLA TIMER" },
  { n: "04", name: "Issues & Punch",   desc: "Photos, GPS locations, trade routing. Sign off in the field with a thumbprint. No printed lists ever.", icon: "alert",     stamp: "OFFLINE" },
  { n: "05", name: "Daily Logs",       desc: "Voice-to-log, weather auto-pulled, photo geotag. Sign and submit in under 90 seconds from any device.", icon: "clipboard", stamp: "VOICE" },
  { n: "07", name: "Cost Management",  desc: "Budget tracking linked to schedule and change orders. Forecast burn before the invoice arrives.", icon: "dollar",    stamp: "LIVE" },
  { n: "08", name: "Submittals",       desc: "Route submittals with automatic ball-in-court tracking. AI Concierge indexes every approved submittal for instant lookup.", icon: "doc",       stamp: "AI-INDEXED" },
  { n: "09", name: "Drawings",         desc: "Version-controlled drawing sets. Markups sync to model coordinates. Field and office always on the same sheet.", icon: "layers",    stamp: "VERSIONED" },
  { n: "10", name: "Inspections",      desc: "Pre-pour, closeout and LEED checklist workflows. Pass or fail in the field. Inspector signs on glass.", icon: "check",     stamp: "LEED" },
  { n: "11", name: "Meetings",         desc: "Agenda, minutes and action items auto-generated. Items link directly to RFIs and issues. Nothing falls through.", icon: "clipboard", stamp: "AUTO-MIN" },
  { n: "12", name: "Change Orders",    desc: "Generate, route and track change orders with audit trail. Tied to budget and schedule impact automatically.", icon: "zap",       stamp: "AUDIT" },
  { n: "13", name: "Procurement",      desc: "Bid packages, award tracking and delivery logs. Supplier docs stored in the model context.", icon: "link",      stamp: "SUPPLIER" },
  { n: "14", name: "Safety",           desc: "Near-miss reports, toolbox talk logs and incident tracking. Real-time safety score per crew and per site.", icon: "shield",    stamp: "OSHA" },
  { n: "15", name: "Commissioning",    desc: "System-by-system commissioning checklists with BIM zone mapping. Handover package ready in one click.", icon: "check",     stamp: "COBie" },
  { n: "16", name: "AR Walkthrough",   desc: "Walk the model on iPad with spatial tracking. Pin issues in AR, see design intent layered on real structure.", icon: "cube",      stamp: "WebXR" },
  { n: "17", name: "Analytics & BI",   desc: "Cross-project dashboards: RFI velocity, punch close rate, schedule variance. Executive views built in, no BI tool needed.", icon: "bar-chart", stamp: "EXPORT" },
  { n: "18", name: "Integrations",     desc: "Procore, Autodesk, Primavera P6, MS Project, Sage, Timberline, Procore and Revit — bi-directional, always in sync.", icon: "link",      stamp: "100+ APPS" },
];

const Modules = () => (
  <section className="section reveal" id="platform">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="section-tag">SECTION · 02 — THE PLATFORM</span>
          <h2 className="display">18 modules,<br/>one database.</h2>
        </div>
        <p className="h2-side">
          Most platforms bolt features together. MASON was designed top-down: every RFI, log and issue is a row your superintendent and your VDC lead can both query. <em className="serif-it">Nothing is siloed because there are no silos.</em>
        </p>
      </div>
      <div className="modules">
        <article className="module big reveal" style={{ "--reveal-delay": "0ms" }}>
          <div>
            <span className="num" style={{ color: "rgba(242,238,229,.7)" }}>06 · FEATURED</span>
            <h3 className="name">AI Concierge<br/><span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>for the jobsite.</span></h3>
            <p className="desc" style={{ color: "rgba(242,238,229,.85)", maxWidth: "46ch" }}>
              Ask "what is the fire-rated assembly at grid C4?" and get the spec page, the submittal and the approved product — read aloud if your hands are full.
            </p>
          </div>
          <div className="stamp">NEW · 2026</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 16, flexWrap: "wrap" }}>
            <a className="btn primary mason-border-sweep" href="/platform">Try it live <Icon name="arrow" size={12}/></a>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(242,238,229,.6)", letterSpacing: ".08em", textTransform: "uppercase" }}>
              Field-tested · 100k+ queries answered
            </span>
          </div>
          <svg style={{ position: "absolute", right: -40, bottom: -40, width: 360, height: 360, opacity: .9 }} viewBox="0 0 360 360">
            <defs><radialGradient id="g1"><stop offset="0%" stopColor="var(--accent)" stopOpacity=".7"/><stop offset="60%" stopColor="var(--accent)" stopOpacity="0"/></radialGradient></defs>
            <circle cx="180" cy="180" r="180" fill="url(#g1)"/>
            <g stroke="rgba(242,238,229,.18)" strokeWidth="1" fill="none">
              <circle cx="180" cy="180" r="60"/><circle cx="180" cy="180" r="100"/><circle cx="180" cy="180" r="140"/>
              <line x1="0" y1="180" x2="360" y2="180"/><line x1="180" y1="0" x2="180" y2="360"/>
            </g>
            <circle cx="180" cy="180" r="14" fill="var(--accent)"/>
          </svg>
        </article>
        {MODULE_DATA.map((m, i) => (
          <article key={m.n} className="module reveal" style={{ "--reveal-delay": Math.min(i, 14) * 42 + "ms" }}>
            <div>
              <span className="num">{m.n}</span>
              <h3 className="name">{m.name}</h3>
              <p className="desc">{m.desc}</p>
            </div>
            <div className="stamp">{m.stamp}</div>
            <div className="glyph"><Icon name={m.icon} size={56} stroke={1.25}/></div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
const GANTT_ROWS = [
  { label: "L4 deck pour",          pill: "CONC",  start: "8%",  width: "22%", cls: "" },
  { label: "MEP rough-in L3",       pill: "MEP",   start: "22%", width: "32%", cls: "accent" },
  { label: "Curtain wall mock-up",  pill: "ENV",   start: "18%", width: "18%", cls: "" },
  { label: "Elev. shaft inspection",pill: "VERT",  start: "38%", width: "8%",  cls: "" },
  { label: "Rebar placement L5",    pill: "STEEL", start: "12%", width: "14%", cls: "" },
  { label: "Waterproofing delay",   pill: "RISK",  start: "44%", width: "20%", cls: "late" },
];

const Showcase = () => (
  <section className="showcase reveal" id="product">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="section-tag" style={{ color: "var(--paper)" }}>SECTION · 03 — IN THE FIELD</span>
          <h2 className="display">Looks like a tool,<br/>not a CRM.</h2>
        </div>
        <p className="h2-side">
          Schedule, RFI list and AI Concierge sharing one model and one source of truth. Your foreman does not need a training course to use it.
        </p>
      </div>
      <div className="shot shot-motion" role="img" aria-label="MASON product interface">
        <div className="shot-bar">
          <div className="dots">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
          </div>
          <span>mason.app / conlan-tower-dubai / schedule</span>
          <span style={{ marginLeft: "auto" }}>● 18 online · sync OK</span>
        </div>
        <aside className="panel-left">
          <div className="proj">Conlan Tower · Dubai</div>
          <div className="proj-sub">Mixed-use · 22 floors · Phase 2</div>
          <div className="menu">
            {[
              ["cube",      "BIM Viewer",  "ON"],
              ["calendar",  "Schedule",    "12"],
              ["chat",      "RFIs",        "04"],
              ["alert",     "Issues",      "19"],
              ["clipboard", "Daily Logs",  "—"],
              ["sparkle",   "AI Concierge","•"],
              ["doc",       "Drawings",    "338"],
              ["shield",    "Safety",      "—"],
            ].map(([ic, lb, ct]) => (
              <div key={lb} className={`item ${lb === "Schedule" ? "active" : ""}`}>
                <span className="icn"><Icon name={ic} size={14}/></span>
                <span>{lb}</span>
                <span className="count">{ct}</span>
              </div>
            ))}
          </div>
        </aside>
        <main className="panel-main">
          <div className="h">
            <div className="t">Schedule · 3-week lookahead</div>
            <div className="meta">WK 18 · MAY 04 — MAY 24</div>
          </div>
          <div className="gantt">
            {GANTT_ROWS.map((g) => (
              <div key={g.label} className="gantt-row">
                <div className="gantt-label">
                  <span className="pill">{g.pill}</span>
                  <span>{g.label}</span>
                </div>
                <div className="gantt-track">
                  <div className={`gantt-bar ${g.cls}`} style={{ left: g.start, width: g.width }}>{g.cls === "late" ? "SLIP" : ""}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className="panel-right">
          <div className="rfi-card">
            <div className="head">
              <span>RFI-4421</span>
              <span className="st open">OPEN · 14h</span>
            </div>
            <div className="t">Fire-rated penetration at grid C4 — confirm UL assembly spec</div>
            <div className="meta">assigned · N. Reyes — Level 3 MEP</div>
          </div>
          <div className="rfi-card">
            <div className="head">
              <span>RFI-4418</span>
              <span className="st resolved">RESOLVED</span>
            </div>
            <div className="t">Curtain wall expansion joint at col. B7 per spec 08 44 00</div>
            <div className="meta">closed by · Hayes Engineering — 6h ago</div>
          </div>
          <div className="ai-card">
            <div className="label mono">⌁ AI CONCIERGE</div>
            <div className="msg">Section 07 84 00, Table 3 covers that penetration. The UL assembly is U419 — approved submittal is on file from March 14.</div>
            <div className="input">ask anything about this project</div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);
const BIM_FEATS = [
  { n: "[ 01 ]", t: "Federated model viewer", p: "Layer IFC files from structural, MEP and architectural in one viewport. Discipline toggles, section cuts, measurement tools — all in the browser." },
  { n: "[ 02 ]", t: "Clash detection",          p: "Run hard-clash and soft-clash checks across disciplines. Flag to an RFI in one click. No Navisworks license required." },
  { n: "[ 03 ]", t: "AR field overlay",          p: "Walk the building with iPad. See the federated model anchored to real space via WebXR. Pin issues directly in AR." },
  { n: "[ 04 ]", t: "AI model queries",          p: "Type or speak in plain language. The AI reads your model, your specs and your submittals to answer immediately." },
];

const BimVis = () => (
  <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="360" fill="var(--ink)"/>
    <defs>
      <pattern id="bg-dot" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="rgba(242,238,229,.12)"/>
      </pattern>
    </defs>
    <rect width="480" height="360" fill="url(#bg-dot)"/>
    <g transform="translate(240,180)">
      <g stroke="rgba(242,238,229,.25)" strokeWidth="1" fill="none">
        <polygon points="0,-90 90,-45 90,45 0,90 -90,45 -90,-45" />
        <polygon points="0,-50 50,-25 50,25 0,50 -50,25 -50,-25" />
        <line x1="0" y1="-90" x2="0" y2="-50"/><line x1="90" y1="-45" x2="50" y2="-25"/>
        <line x1="90" y1="45" x2="50" y2="25"/><line x1="0" y1="90" x2="0" y2="50"/>
        <line x1="-90" y1="45" x2="-50" y2="25"/><line x1="-90" y1="-45" x2="-50" y2="-25"/>
      </g>
      <polygon points="0,-90 90,-45 90,45 0,90 -90,45 -90,-45" fill="rgba(255,91,20,.08)" stroke="var(--accent)" strokeWidth="1.5"/>
      <polygon points="0,-50 50,-25 50,25 0,50 -50,25 -50,-25" fill="rgba(255,91,20,.18)" stroke="var(--accent)" strokeWidth="2"/>
      <circle cx="0" cy="0" r="6" fill="var(--accent)"/>
      <g fill="rgba(242,238,229,.6)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.06em">
        <text x="0" y="-100" textAnchor="middle">STRUCTURE</text>
        <text x="100" y="-50" textAnchor="start">MEP</text>
        <text x="100" y="55" textAnchor="start">ARCH</text>
      </g>
      <circle cx="60" cy="-30" r="5" fill="var(--accent)" opacity=".9"/>
      <text x="68" y="-26" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="8">CLASH</text>
    </g>
    <rect x="14" y="14" width="120" height="28" rx="4" fill="rgba(14,14,14,.7)" stroke="rgba(242,238,229,.2)" strokeWidth=".5"/>
    <text x="24" y="32" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.08em">⌁ FEDERATED · 3 IFC</text>
    <rect x="346" y="14" width="120" height="28" rx="4" fill="rgba(255,91,20,.15)" stroke="var(--accent)" strokeWidth=".5"/>
    <text x="356" y="32" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.08em">1 CLASH FOUND</text>
  </svg>
);

const BIM = () => (
  <section className="bim reveal" id="bim">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="section-tag">SECTION · 04 — BIM</span>
          <h2 className="display">The model is the<br/>source of truth.</h2>
        </div>
        <p className="h2-side">
          IFC, RVT or NWD — stream it in the browser, clash-check across disciplines, walk it in AR and ask the AI questions that used to take a day to answer.
        </p>
      </div>
      <div className="bim-grid">
        <div className="bim-vis"><BimVis /></div>
        <div className="bim-list">
          {BIM_FEATS.map((f) => (
            <a key={f.n} className="bim-feat cursor-card-hover hover-arrow-cursor magnetic-click-card" href="/platform">
              <span className="n">{f.n}</span>
              <div className="body"><h3>{f.t}</h3><p>{f.p}</p></div>
              <span className="go"><Icon name="arrow" size={14}/></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
const CASES = [
  {
    cat: "GEN. CONTRACTOR · USA · 22 FLOORS",
    title: "The Conlan Company cut RFI cycle time by 58%.",
    blurb: "Conlan adopted MASON mid-project on their mixed-use tower in Chicago after a curtain-wall RFI stalled work for five days. In month one, RFI closeout time dropped from 11 days to under 5.",
    n1: "58%", k1: "Faster RFIs",
    n2: "$2.4M", k2: "Rework avoided",
    n3: "5 mo", k3: "Ahead of schedule",
    color: "#FF5B14",
  },
  {
    cat: "INFRASTRUCTURE · UAE · TRANSIT HUB",
    title: "Naresco went fully paperless on punch — 2,200 items, zero printed lists.",
    blurb: "The Dubai metro station expansion ran 14 trades and 11,000 square metres of finishes through MASON. Every punch item was signed off on iPad. The handover package compiled itself.",
    n1: "2,200", k1: "Punch items",
    n2: "0", k2: "Paper sheets",
    n3: "98%", k3: "On-time subs",
    color: "#1F7A4D",
  },
  {
    cat: "CIVIL · GERMANY · BRIDGE PROJECT",
    title: "Depenbrock caught a EUR 5.1M structural clash in week two.",
    blurb: "A federated model sync across three IFC files flagged an MEP-versus-structural conflict before any steel was set. The fix took two hours. The alternative was a four-week delay.",
    n1: "EUR 5.1M", k1: "Clash avoided",
    n2: "Wk 02", k2: "Caught at",
    n3: "0", k3: "Field RFIs",
    color: "#1B3A8A",
  },
];

const CasePh = ({ color, idx }) => (
  <svg className="ph-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id={"ph-" + idx} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0 20L20 0M-5 5L5 -5M15 25L25 15" stroke="rgba(14,14,14,.08)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="400" height="300" fill="var(--paper-2)"/>
    <rect width="400" height="300" fill={"url(#ph-" + idx + ")"}/>
    <g stroke="var(--ink)" strokeWidth="1.2" fill="none">
      <rect x="80" y="80" width="240" height="160"/>
      <line x1="80" y1="120" x2="320" y2="120"/>
      <line x1="80" y1="160" x2="320" y2="160"/>
      <line x1="80" y1="200" x2="320" y2="200"/>
      <line x1="140" y1="80" x2="140" y2="240"/>
      <line x1="200" y1="80" x2="200" y2="240"/>
      <line x1="260" y1="80" x2="260" y2="240"/>
    </g>
    <rect className="ph-spot" x="200" y="120" width="60" height="40" fill={color} opacity="0.85"/>
    <g stroke="var(--ink)" strokeWidth="0.8" fontFamily="var(--font-mono)" fontSize="9">
      <path d="M80 60L320 60M80 56L80 64M320 56L320 64"/>
      <text x="200" y="54" textAnchor="middle" fill="var(--ink)">240 FT TYPICAL BAY</text>
    </g>
  </svg>
);

const Cases = () => (
  <section className="cases reveal mason-line-reveal mason-section-proof" id="cases">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="section-tag">SECTION · 05 — PROOF</span>
          <h2 className="display mason-proof-display">
            <span className="mason-proof-line"><span className="mason-proof-line__text">Built by the</span></span>
            <br/>
            <span className="mason-proof-line"><span className="mason-proof-line__text">people building.</span></span>
          </h2>
        </div>
        <p className="h2-side">
          Three projects, three problems, one platform. Every number is signed off by the GC. Read the full deconstructs in our case study archive.
        </p>
      </div>
      <div className="case-grid">
        {CASES.map((c, i) => (
          <a key={i} className="case-card mason-proof-case cursor-card-hover hover-arrow-cursor magnetic-click-card" href="/case-studies">
            <div className="ph">
              <span className="tag">CASE · 0{i + 1}</span>
              <CasePh color={c.color} idx={i}/>
            </div>
            <div className="body">
              <div className="meta">{c.cat}</div>
              <h3>{c.title}</h3>
              <p>{c.blurb}</p>
              <div className="nums">
                <div><div className="n">{c.n1}</div><div className="k">{c.k1}</div></div>
                <div><div className="n">{c.n2}</div><div className="k">{c.k2}</div></div>
                <div><div className="n">{c.n3}</div><div className="k">{c.k3}</div></div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span className="label-num">SHOWING 03 OF 28 CASE STUDIES · UPDATED MAY 2026</span>
        <a className="btn" href="/case-studies">All case studies <Icon name="arrow" size={12}/></a>
      </div>
    </div>
  </section>
);
const TIERS = [
  {
    name: "Site",
    badge: null,
    blurb: "For a single jobsite. The full platform — BIM, schedule, RFIs, issues, AI Concierge — sized for one project.",
    price: "$49",
    unit: "/ project / month",
    feat: false,
    features: [
      "1 active project",
      "Up to 25 users",
      "BIM viewer · 2 federated models",
      "Schedule, RFIs, Issues, Daily Logs",
      "AI Concierge · 100 queries / month",
      "iOS and Android · offline-first",
      "Email support",
    ],
  },
  {
    name: "Multi-Site",
    badge: "MOST PICKED",
    blurb: "For a full project team running multiple sites. Advanced workflows, clash detection and audit-ready exports.",
    price: "$149",
    unit: "/ project / month",
    feat: true,
    features: [
      "Up to 10 active projects",
      "Unlimited users per project",
      "BIM viewer · unlimited models",
      "Clash detection and clash reports",
      "AI Concierge · unlimited queries",
      "AR walkthrough on iPad",
      "P6 and MS Project bidirectional sync",
      "Custom roles and ball-in-court",
      "Priority chat support",
    ],
  },
  {
    name: "Portfolio",
    badge: "ENTERPRISE",
    blurb: "For GCs, owners and programs running 20-plus projects. Single sign-on, dedicated success and custom data residency.",
    price: "$399",
    unit: "/ project / month",
    feat: false,
    features: [
      "Unlimited projects",
      "SSO · SAML · SCIM",
      "Custom data residency · SOC 2",
      "Bring-your-own AI model",
      "Cross-project portfolio dashboard",
      "Dedicated CSM and onboarding",
      "99.9% uptime SLA",
      "Custom integrations",
    ],
  },
];

const Pricing = () => (
  <section className="pricing reveal" id="pricing">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="section-tag">SECTION · 06 — PRICING</span>
          <h2 className="display">Priced per project,<br/>not per seat.</h2>
        </div>
        <p className="h2-side">
          Add your whole team at no extra cost. Pick a tier, activate the project, and stop paying the month it wraps. <em className="serif-it">That is it.</em>
        </p>
      </div>
      <div className="price-grid">
        {TIERS.map((t, i) => (
          <div key={t.name} className={`tier ${t.feat ? "feat" : ""}`}>
            <div className="nm">
              <div className="name">{t.name}</div>
              {t.badge && <div className="badge">{t.badge}</div>}
            </div>
            <p className="blurb">{t.blurb}</p>
            <div className="price">
              {t.price}<span className="unit">{t.unit}</span>
            </div>
            <ul className="feature-list">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a className={`btn ${t.feat ? "primary" : ""}`} href="/pricing" style={{ marginTop: "auto", alignSelf: "flex-start" }}>
              {i === 2 ? "Contact sales" : "Start 14-day pilot"} <Icon name="arrow" size={12}/>
            </a>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, borderTop: "1px solid var(--rule-soft)", paddingTop: 28 }}>
        {[
          ["No per-seat fees",      "Unlimited users on every project."],
          ["Annual saves 2 months", "Switch billing anytime."],
          ["Free for non-profits",  "Habitat for Humanity and RTI."],
          ["Cancel any month",      "Export everything. IFC plus CSV."],
        ].map(([title, sub]) => (
          <div key={title}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "-0.02em", fontWeight: 500 }}>{title}</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
const POSTS = [
  { cat: "FIELD NOTES", title: "Why we replaced the punch list with a thumbprint sign-off.", ex: "A 6-month rewrite of the most-hated workflow on the jobsite. The new flow takes 90 seconds.", when: "MAY 06", read: "8 MIN READ", feat: true, bg: "linear-gradient(135deg, #FF5B14 0%, #FFD400 100%)" },
  { cat: "PRODUCT",     title: "AI Concierge now reads your spec book and answers in plain English.", when: "APR 28", read: "5 MIN", bg: "var(--ink)" },
  { cat: "INDUSTRY",    title: "The IFC 4.3 transition — what general contractors actually need to know.", when: "APR 22", read: "11 MIN", bg: "#1B3A8A" },
  { cat: "CASE STUDY",  title: "How Naresco went paperless on 2,200 punch items across 14 trades.", when: "APR 14", read: "7 MIN", bg: "#1F7A4D" },
];

const Blog = () => (
  <section className="blog reveal mason-line-reveal mason-section-premium" id="blog">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="section-tag">SECTION · 07 — FIELD NOTES</span>
          <h2 className="display">From the<br/>site office.</h2>
        </div>
        <p className="h2-side">
          Written by people who have run projects. No generic SaaS content, no AI lorem ipsum. If you are a superintendent, these are worth your time.
        </p>
      </div>
      <div className="blog-grid">
        {POSTS.map((p, i) => (
          <a key={i} className={"post cursor-card-hover hover-arrow-cursor magnetic-click-card" + (p.feat ? " feat" : "")} href="/blog">
            <div className="cat">{p.cat}</div>
            <h3>{p.title}</h3>
            {p.ex && <p className="ex">{p.ex}</p>}
            <div className="ph" style={{ background: p.bg }}></div>
            <div className="meta">
              <span>{p.when}</span>
              <span>{p.read}</span>
            </div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
        <a className="btn" href="/blog">All Field Notes <Icon name="arrow" size={12}/></a>
      </div>
    </div>
  </section>
);


export function HomeMain() {
  return (
    <>
      <Hero />
      <hr className="rule" />
      <Modules />
      <Showcase />
      <BIM />
      <Cases />
      <Pricing />
      <Blog />
    </>
  );
}

export { Icon };
