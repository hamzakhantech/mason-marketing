// sections.jsx -- Why MASON, Module grid, BIM, Surfaces, Trust, CTA.
// Marketing footer: site-chrome.jsx only (never register Footer on window here).

// --- Why MASON: 3 pillars ---------------------------------------------------

const Pillars = () => (
  <section className="sect" id="product">
    <div className="container">
      <div className="sect-head reveal">
        <span className="eyebrow">Why MASON</span>
        <h2 className="h2 h2-reveal">Built for the way construction actually runs.</h2>
        <p className="lede">
          Three principles guide every module: portfolio truth, project context, and
          decisions that hold up on site. Most construction platforms optimize for
          one of these. MASON is built around all three working together in the
          same system, because the data that comes from the field has no value
          if the office cannot see it, and the models in the office have no value
          if the field team cannot access them.
        </p>
      </div>

      <div className="pillars">
        <PillarCard
          n="01"
          title="Control"
          body="One source of truth across your full portfolio and every individual project. Issues, RFIs, submittals, documents, cost records, and daily logs all live under the same record. Permissions reflect how your organisation actually works: the client can see what you want them to see, the foreman sees what is relevant to their scope, and the quantity surveyor sees the cost module without accessing the BIM configuration."
          accent={<PillarVizControl />}
        />
        <PillarCard
          n="02"
          title="Context"
          body="BIM, augmented reality, schedule, and cost are all stitched into the same project record. Federate multiple IFC models across disciplines and view them together in the browser without any Autodesk account. Isolate specific trades or levels to reduce visual noise. When the model shows a clash, convert it into an RFI or an issue with one click. The model coordinates, the relevant document revision, and the assigned parties attach automatically."
          accent={<PillarVizContext />}
        />
        <PillarCard
          n="03"
          title="Clarity"
          body="An AI Concierge grounded in your project data. Search across projects, summarize logs, and triage notifications -- without leaving the tab you're in."
          accent={<PillarVizClarity />}
        />
      </div>
    </div>
  </section>
);

const PillarCard = ({ n, title, body, accent }) => (
  <article className="pillar reveal mason-card-hover">
    <div className="pillar__viz mason-media-zoom">{accent}</div>
    <div className="pillar__body">
      <span className="mono pillar__n">{n}</span>
      <h3 className="h3">{title}</h3>
      <p>{body}</p>
    </div>
  </article>
);

const PillarVizControl = () => (
  <svg viewBox="0 0 220 130" className="viz">
    <defs>
      <linearGradient id="vc-g" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#e8942e" />
        <stop offset="1" stopColor="#c97816" />
      </linearGradient>
    </defs>
    {/* nodes (modules) connected to a central hub */}
    <g stroke="rgba(255,255,255,.18)" fill="none">
      <line x1="110" y1="65" x2="32" y2="22" />
      <line x1="110" y1="65" x2="32" y2="108" />
      <line x1="110" y1="65" x2="200" y2="32" />
      <line x1="110" y1="65" x2="200" y2="100" />
      <line x1="110" y1="65" x2="110" y2="14" />
      <line x1="110" y1="65" x2="110" y2="116" />
    </g>
    {[
      [32,22], [32,108], [200,32], [200,100], [110,14], [110,116],
    ].map(([x,y], i) => (
      <g key={i}>
        <rect x={x-14} y={y-9} width="28" height="18" rx="4" fill="#14141c" stroke="rgba(255,255,255,.15)" />
      </g>
    ))}
    <circle cx="110" cy="65" r="14" fill="url(#vc-g)" />
    <circle cx="110" cy="65" r="22" fill="none" stroke="rgba(232,148,46,.4)" strokeDasharray="2 3" />
  </svg>
);

const PillarVizContext = () => (
  <svg viewBox="0 0 220 130" className="viz">
    {/* layered planes */}
    <g transform="translate(110 75)">
      {[0,1,2].map(i => (
        <polygon
          key={i}
          points="-70,0 0,-30 70,0 0,30"
          fill={i===0 ? "rgba(232,148,46,.18)" : "rgba(255,255,255,.04)"}
          stroke={i===0 ? "#e8942e" : "rgba(255,255,255,.18)"}
          transform={`translate(0 ${-i*18})`}
        />
      ))}
    </g>
    {/* labels */}
    <g fontFamily="ui-monospace, Menlo, monospace" fontSize="9" fill="rgba(255,255,255,.55)">
      <text x="186" y="42">BIM</text>
      <text x="186" y="62">SCHEDULE</text>
      <text x="186" y="82">COST</text>
    </g>
    <g stroke="rgba(255,255,255,.18)">
      <line x1="180" y1="40" x2="160" y2="42" />
      <line x1="180" y1="60" x2="160" y2="60" />
      <line x1="180" y1="80" x2="160" y2="78" />
    </g>
  </svg>
);

const PillarVizClarity = () => (
  <svg viewBox="0 0 220 130" className="viz">
    <defs>
      <radialGradient id="cl-orb" cx="50%" cy="50%">
        <stop offset="0" stopColor="#f4a847" />
        <stop offset="1" stopColor="#c97816" />
      </radialGradient>
    </defs>
    {/* search field */}
    <rect x="20" y="86" width="180" height="28" rx="14" fill="#14141c" stroke="rgba(255,255,255,.12)" />
    <circle cx="36" cy="100" r="5" fill="none" stroke="rgba(255,255,255,.5)" />
    <line x1="40" y1="104" x2="46" y2="110" stroke="rgba(255,255,255,.5)" />
    <text x="52" y="104" fontSize="10" fontFamily="Inter, system-ui" fill="rgba(255,255,255,.7)">Why is L23 behind?</text>
    {/* orb */}
    <circle cx="110" cy="48" r="22" fill="url(#cl-orb)" />
    <circle cx="110" cy="48" r="32" fill="none" stroke="rgba(232,148,46,.35)" strokeDasharray="2 3" />
    <circle cx="110" cy="48" r="42" fill="none" stroke="rgba(232,148,46,.18)" />
  </svg>
);

// --- Module grid -----------------------------------------------------------

const MODULES = {
  Plan: [
    { n: "Dashboard",  Icon: IconDashboard },
    { n: "Projects",   Icon: IconProjects },
    { n: "Schedule",   Icon: IconSchedule },
    { n: "Documents",  Icon: IconDocuments },
    { n: "Team",       Icon: IconTeam },
    { n: "Companies",  Icon: IconProjects },
  ],
  Execute: [
    { n: "Issues",      Icon: IconIssues },
    { n: "RFIs",        Icon: IconRFI },
    { n: "Submittals",  Icon: IconSubmittals },
    { n: "Daily logs",  Icon: IconLogs },
    { n: "Messages",    Icon: IconMessages },
    { n: "Meetings",    Icon: IconMeetings },
    { n: "Quality",     Icon: IconQuality },
    { n: "Safety",      Icon: IconSafety },
  ],
  Insights: [
    { n: "BIM",         Icon: IconBIM, accent: true },
    { n: "AR on site",  Icon: IconAR },
    { n: "Cost",        Icon: IconCost },
    { n: "Reports",     Icon: IconReports },
    { n: "Concierge",   Icon: IconConcierge, accent: true },
    { n: "Search",      Icon: IconSearch },
  ],
};

const ModuleGrid = () => (
  <section className="sect" id="modules">
    <div className="container">
      <div className="sect-head reveal">
        <span className="eyebrow">What's inside</span>
        <h2 className="h2 h2-reveal">Every module your team already lives in -- in one place.</h2>
        <p className="lede">
          Grouped the way work actually flows: <strong>Plan</strong> the job,
          <strong> Execute</strong> on it, draw <strong>Insight</strong> from the data it generates.
          Every module reads from and writes to the same project data store, which means an issue
          created from the BIM viewer appears in the issues register, links to the relevant RFI,
          and shows up in the daily log for that date automatically. Nothing needs to be manually
          synced or re-entered across systems.
        </p>
      </div>

      <div className="modules">
        {Object.entries(MODULES).map(([group, items]) => (
          <div className="module-col" key={group}>
            <header className="module-col__head">
              <span className="module-col__dot" />
              <h3 className="h3">{group}</h3>
              <span className="mono">{items.length} modules</span>
            </header>
            <div className="module-col__grid">
              {items.map(({ n, Icon, accent }) => (
                <div className={"module mason-card-hover" + (accent ? " is-accent" : "")} key={n}>
                  <span className="module__icon"><Icon size={18} stroke={1.5} /></span>
                  <span className="module__name">{n}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="modules__foot">
        <IconShield size={14} /> Permission-aware. Cost and audit trails are admin-gated by default.
      </p>
    </div>
  </section>
);

// --- BIM + Field proof ----------------------------------------------------

const BIMProof = () => (
  <section className="sect bim-proof mason-line-reveal" id="bim">
    <div className="grid-bg mason-parallax-bg" aria-hidden="true" style={{ opacity: .35 }} />
    <div className="container bim-proof__inner">
      <div className="bim-proof__copy">
        <span className="eyebrow">BIM &amp; field</span>
        <h2 className="h2">The model your office trusts -- on the phone in your foreman's pocket.</h2>
        <p className="lede">
          MASON federates IFC models in a web viewer that runs natively in the browser
          on any desktop and on a mid-tier Android phone. No Autodesk account. No Forge
          subscription. No plugin installation. The model opens in the tab, on whatever
          device the person holding the question happens to have in front of them.
        </p>
        <p style={{color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          For site teams, the Android app adds an AR overlay that positions the
          federated model onto the physical building through the camera. Point the phone
          at the slab and see where the MEP penetrations are supposed to be. Compare what
          the model says to what has actually been installed. Create an issue directly from
          the AR view with the model element, GPS coordinates, and a photo all captured
          in the same workflow. No headset. No additional hardware.
        </p>
        <ul className="checklist">
          <li><IconCheck size={16} stroke={2} /> Federated multi-model viewing across all disciplines in one browser tab</li>
          <li><IconCheck size={16} stroke={2} /> Isolate, hide, and section by trade, level, or element type</li>
          <li><IconCheck size={16} stroke={2} /> Clash detection runs in the browser, no external software required</li>
          <li><IconCheck size={16} stroke={2} /> Convert any clash directly into an RFI or issue with coordinates attached</li>
          <li><IconCheck size={16} stroke={2} /> AR overlay on Android positions the model onto the physical building</li>
          <li><IconCheck size={16} stroke={2} /> Create issues from AR view with photo, GPS, and model element captured</li>
          <li><IconCheck size={16} stroke={2} /> IFC 2x3 and IFC4 supported natively, no format conversion needed</li>
        </ul>
        <a href="bim-ar.html" className="btn btn-ghost" style={{marginTop:24,display:"inline-flex",alignItems:"center",gap:8}}>
          Read more about BIM and AR ->
        </a>
      </div>
      <div className="bim-proof__visual">
        <BIMHeroVisual />
      </div>
    </div>
  </section>
);

const BIMHeroVisual = () => (
  <div className="bim-card">
    <div className="bim-card__hd">
      <span className="chip accent"><span className="dot" /> BIM viewer</span>
      <span className="mono">RIVERSIDE TOWER . L19-L24</span>
    </div>
    <div className="bim-card__stage">
      <svg viewBox="0 0 480 320" className="bim-card__svg" aria-hidden="true">
        <defs>
          <linearGradient id="bm-orange" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f4a847" />
            <stop offset="1" stopColor="#c97816" />
          </linearGradient>
          <pattern id="bm-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M0 0H24M0 0V24" stroke="rgba(255,255,255,.05)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="480" height="320" fill="url(#bm-grid)" />

        {/* tower stack -- 6 floors isometric */}
        <g transform="translate(140 40)">
          {[0,1,2,3,4,5].map(i => {
            const y = i * 32;
            const isSel = i === 2;
            return (
              <g key={i} transform={`translate(0 ${y})`}>
                {/* top */}
                <polygon points="0,0 110,-55 220,0 110,55"
                  fill={isSel ? "url(#bm-orange)" : "#1a1a24"}
                  stroke="rgba(255,255,255,.15)" />
                {/* left */}
                <polygon points="0,0 0,28 110,83 110,55"
                  fill={isSel ? "#a8650f" : "#0e0e15"}
                  stroke="rgba(255,255,255,.15)" />
                {/* right */}
                <polygon points="110,55 110,83 220,28 220,0"
                  fill={isSel ? "#d8851a" : "#15151d"}
                  stroke="rgba(255,255,255,.15)" />
              </g>
            );
          })}

          {/* clash hot-spot */}
          <g transform="translate(150 80)">
            <circle r="22" fill="rgba(226,109,92,.15)" />
            <circle r="14" fill="rgba(226,109,92,.3)" stroke="#e26d5c" strokeDasharray="3 2" />
            <circle r="5" fill="#e26d5c" />
          </g>
          {/* leader line + label */}
          <g stroke="rgba(255,255,255,.5)">
            <line x1="172" y1="80" x2="240" y2="40" />
            <circle cx="240" cy="40" r="2.5" fill="#fff" stroke="none" />
          </g>
          <g fontFamily="ui-monospace, Menlo, monospace">
            <rect x="244" y="22" width="120" height="36" rx="6" fill="rgba(7,7,10,.85)" stroke="rgba(255,255,255,.18)" />
            <text x="252" y="38" fontSize="10" fill="#e26d5c" fontWeight="600">CLASH . 3 elements</text>
            <text x="252" y="51" fontSize="9" fill="rgba(255,255,255,.7)">Conduit ? HVAC duct</text>
          </g>
        </g>
      </svg>

      {/* floating rfi card */}
      <div className="bim-card__rfi">
        <div className="bim-card__rfi-row">
          <span className="chip danger"><span className="dot" /> Open</span>
          <span className="mono">RFI-204</span>
        </div>
        <div className="bim-card__rfi-title">Coordination needed: penetration through L23 slab.</div>
        <div className="bim-card__rfi-meta">
          <span>Auto-linked from clash</span>
          <span>.</span>
          <span>Due in 2 days</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Surfaces strip --------------------------------------------------------

const Surfaces = () => (
  <section className="sect" id="surfaces">
    <div className="container">
      <div className="sect-head reveal">
        <span className="eyebrow">Works everywhere your team works</span>
        <h2 className="h2 h2-reveal">Desk. Mobile. Site.</h2>
        <p className="lede">
          The same data. The same permissions. Three surfaces tuned to where your
          people are when they touch the project. The project manager at a desk gets
          the full browser interface. The site supervisor on an Android gets the full
          feature set including offline mode and the AR overlay. The client representative
          checking in from a laptop gets a permission-filtered view of exactly what the
          main contractor wants them to see. One system, three entry points, no data re-entry.
        </p>
      </div>

      <div className="surfaces">
        <SurfaceCard
          tag="Desktop browser"
          title="The full command deck."
          bullets={["Sidebar + topbar AppShell", "BIM viewer . Gantt . Reports", "Print &amp; PDF for handoff"]}
          frame={<DesktopFrame />}
        />
        <SurfaceCard
          tag="Mobile browser"
          title="Same workflows. No compromise."
          bullets={["Issues, RFIs, Documents -- all unblocked", "BIM &amp; AR on phone", '"Best on desktop" hint only where needed']}
          frame={<MobileFrame />}
          spotlight
        />
        <SurfaceCard
          tag="Native Android"
          title="Capture-first for the field."
          bullets={["Camera, biometrics, push", "Bottom-nav, jobsite ergonomics", "Concierge built into the shell"]}
          frame={<AndroidFrame />}
        />
      </div>
    </div>
  </section>
);

const SurfaceCard = ({ tag, title, bullets, frame, spotlight }) => (
  <div className={"surface mason-card-hover" + (spotlight ? " is-spotlight" : "")}>
    <div className="surface__frame mason-media-zoom">{frame}</div>
    <div className="surface__body">
      <span className="mono">{tag}</span>
      <h3 className="h3">{title}</h3>
      <ul>
        {bullets.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
        ))}
      </ul>
    </div>
  </div>
);

const DesktopFrame = () => (
  <div className="frm frm-desk">
    <div className="frm-desk__bar"><span /><span /><span /></div>
    <div className="frm-desk__body">
      <div className="frm-desk__sb">
        <div className="frm-desk__sb-row" />
        <div className="frm-desk__sb-row is-active" />
        <div className="frm-desk__sb-row" />
        <div className="frm-desk__sb-row" />
        <div className="frm-desk__sb-row" />
      </div>
      <div className="frm-desk__main">
        <div className="frm-desk__hd"></div>
        <div className="frm-desk__chart">
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={i} style={{ height: `${30 + (i*7)%55}%` }} />
          ))}
        </div>
        <div className="frm-desk__rows">
          <span /><span /><span />
        </div>
      </div>
    </div>
  </div>
);

const MobileFrame = () => (
  <div className="frm frm-mob">
    <div className="frm-mob__notch" />
    <div className="frm-mob__top">
      <span className="mono">RFIs</span>
      <span className="frm-mob__bell"><IconBell size={12} /><i>3</i></span>
    </div>
    <div className="frm-mob__list">
      {[
        { k: "RFI-204", s: "danger", t: "L23 slab penetration" },
        { k: "RFI-203", s: "warn",   t: "Curtain wall bracket spec" },
        { k: "RFI-198", s: "ok",     t: "Roof drain location . resolved" },
      ].map((r) => (
        <div className="frm-mob__row" key={r.k}>
          <div className="frm-mob__row-top">
            <span className={"chip " + r.s}><span className="dot" /></span>
            <span className="mono">{r.k}</span>
          </div>
          <div className="frm-mob__row-t">{r.t}</div>
        </div>
      ))}
    </div>
    <div className="frm-mob__cta">
      <span>Open in BIM</span>
      <IconArrowRight size={12} stroke={2} />
    </div>
  </div>
);

const AndroidFrame = () => (
  <div className="frm frm-and">
    <div className="frm-and__top">
      <span className="mono">Concierge</span>
      <img src="assets/mason_mark_grid.png" alt="" />
    </div>
    <div className="frm-and__chat">
      <div className="frm-and__bub frm-and__bub--user">Daily on L23 -- what changed?</div>
      <div className="frm-and__bub">
        <span className="mono">MASON</span>
        2 issues raised, RFI-204 still open, concrete pour pushed 1d.
      </div>
      <div className="frm-and__bub frm-and__bub--user">Draft the daily.</div>
      <div className="frm-and__bub frm-and__bub--accent">
        <span className="mono">Drafting . 4 sources</span>
      </div>
    </div>
    <div className="frm-and__nav">
      <span className="is-active"><IconConcierge size={14} /></span>
      <span><IconLogs size={14} /></span>
      <span><IconBIM size={14} /></span>
      <span><IconBell size={14} /></span>
    </div>
  </div>
);

// --- Trust ----------------------------------------------------------------

const Trust = () => (
  <section className="sect trust mason-line-reveal" id="trust">
    <div className="container">
      <div className="trust__inner">
        <div className="reveal">
          <span className="eyebrow">Trust &amp; control</span>
          <h2 className="h2 h2-reveal">Built to pass the audit, not just the demo.</h2>
        </div>
        <div className="trust__grid">
          <TrustCard Icon={IconKey} title="Role-based access"
            body="Project, company, and module-level permissions. Cost and audit logs are gated by default -- admins decide who sees what." />
          <TrustCard Icon={IconAudit} title="Audit-friendly workflows"
            body="Every RFI, issue, and submittal has a provable trail. The in-app Audit log mirrors what your QA team needs at handover." />
          <TrustCard Icon={IconShield} title="Modern cloud hosting"
            body="API and frontend deployed on managed cloud platforms with TLS by default and isolated tenant data." />
        </div>
      </div>
    </div>
  </section>
);

const TrustCard = ({ Icon, title, body }) => (
  <div className="trust-card mason-card-hover">
    <span className="trust-card__icon"><Icon size={20} stroke={1.6} /></span>
    <h3 className="h3">{title}</h3>
    <p>{body}</p>
  </div>
);

// --- CTA band (legacy; app.jsx uses FinalCTA from home-extra.jsx) -----------

const CTABand = () => (
  <section className="sect cta-band" id="contact">
    <div className="container">
      <div className="cta-band__card mason-glow-zone mason-card-hover">
        <div>
          <span className="eyebrow">Get started</span>
          <h2 className="h2">Bring your jobsite into MASON.</h2>
          <p className="lede">
            Sign in to your account, or talk to us about onboarding your portfolio.
          </p>
        </div>
        <div className="cta-band__actions">
          <a href="https://app.masononsite.com" className="btn btn-primary mason-border-sweep">
            Sign in <IconArrowRight size={16} stroke={2} />
          </a>
          <a href="mailto:connect@masononsite.com" className="btn btn-ghost">
            Request a demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  Pillars, ModuleGrid, BIMProof, Surfaces, Trust, CTABand,
});
