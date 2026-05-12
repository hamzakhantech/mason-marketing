// hero.jsx -- Header with full dropdown navigation + Hero

const Header = ({ onSignIn }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (name) => setOpenMenu(name);
  const close = () => setOpenMenu(null);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container site-header__row">
        <a href="index.html" className="brand" aria-label="MASON home">
          <img src="assets/mason_horizontal_dark.png" alt="MASON" className="brand__wordmark brand__wordmark--dark" />
          <img src="assets/mason_horizontal_light.png" alt="MASON" className="brand__wordmark brand__wordmark--light" />
        </a>

        {/* Desktop nav */}
        <nav className="site-nav site-nav--desktop" aria-label="Primary">

          {/* Product dropdown */}
          <div className="nav-drop" onMouseEnter={() => open("product")} onMouseLeave={close}>
            <button className={"nav-drop__btn" + (openMenu === "product" ? " is-open" : "")}>
              Product <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft:4,verticalAlign:"middle"}}><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {openMenu === "product" && (
              <div className="nav-drop__panel nav-drop__panel--wide">
                <div className="nav-drop__col">
                  <p className="nav-drop__heading">Platform</p>
                  <a href="features.html" className="nav-drop__item">
                    <span className="nav-drop__icon">?</span>
                    <span>
                      <strong>All Features</strong>
                      <span className="nav-drop__sub">12 integrated modules in one login</span>
                    </span>
                  </a>
                  <a href="bim-ar.html" className="nav-drop__item">
                    <span className="nav-drop__icon">?</span>
                    <span>
                      <strong>BIM and AR</strong>
                      <span className="nav-drop__sub">Browser native IFC viewer plus Android AR overlay</span>
                    </span>
                  </a>
                  <a href="mobile.html" className="nav-drop__item">
                    <span className="nav-drop__icon">?</span>
                    <span>
                      <strong>Mobile App</strong>
                      <span className="nav-drop__sub">Android with full offline mode for the field</span>
                    </span>
                  </a>
                </div>
                <div className="nav-drop__col">
                  <p className="nav-drop__heading">Platform Details</p>
                  <a href="integrations.html" className="nav-drop__item">
                    <span className="nav-drop__icon">?</span>
                    <span>
                      <strong>Integrations</strong>
                      <span className="nav-drop__sub">Connect with Procore, Autodesk, MS Project and more</span>
                    </span>
                  </a>
                  <a href="security.html" className="nav-drop__item">
                    <span className="nav-drop__icon">?</span>
                    <span>
                      <strong>Security</strong>
                      <span className="nav-drop__sub">Encryption, access control and audit logs</span>
                    </span>
                  </a>
                  <a href="changelog.html" className="nav-drop__item">
                    <span className="nav-drop__icon">?</span>
                    <span>
                      <strong>Changelog</strong>
                      <span className="nav-drop__sub">What we shipped this month</span>
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Compare dropdown */}
          <div className="nav-drop" onMouseEnter={() => open("compare")} onMouseLeave={close}>
            <button className={"nav-drop__btn" + (openMenu === "compare" ? " is-open" : "")}>
              Compare <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft:4,verticalAlign:"middle"}}><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {openMenu === "compare" && (
              <div className="nav-drop__panel">
                <p className="nav-drop__heading">Side by Side Comparisons</p>
                <a href="compare-procore.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>MASON vs Procore</strong>
                    <span className="nav-drop__sub">Pricing, features, seat fees compared</span>
                  </span>
                </a>
                <a href="compare-fieldwire.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>MASON vs Fieldwire</strong>
                    <span className="nav-drop__sub">Field tool vs full platform</span>
                  </span>
                </a>
                <a href="compare-asite.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>MASON vs Asite</strong>
                    <span className="nav-drop__sub">Document management and beyond</span>
                  </span>
                </a>
              </div>
            )}
          </div>

          <a href="pricing.html" className="nav-link">Pricing</a>

          {/* Resources dropdown */}
          <div className="nav-drop" onMouseEnter={() => open("resources")} onMouseLeave={close}>
            <button className={"nav-drop__btn" + (openMenu === "resources" ? " is-open" : "")}>
              Resources <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft:4,verticalAlign:"middle"}}><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {openMenu === "resources" && (
              <div className="nav-drop__panel">
                <p className="nav-drop__heading">Learn and Decide</p>
                <a href="case-studies.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>Case Studies</strong>
                    <span className="nav-drop__sub">Real projects, real numbers</span>
                  </span>
                </a>
                <a href="roi-calculator.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>ROI Calculator</strong>
                    <span className="nav-drop__sub">What MASON saves your team per year</span>
                  </span>
                </a>
                <a href="blog.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>Blog and Guides</strong>
                    <span className="nav-drop__sub">Construction tech, tips and best practices</span>
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Company dropdown */}
          <div className="nav-drop" onMouseEnter={() => open("company")} onMouseLeave={close}>
            <button className={"nav-drop__btn" + (openMenu === "company" ? " is-open" : "")}>
              Company <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft:4,verticalAlign:"middle"}}><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {openMenu === "company" && (
              <div className="nav-drop__panel">
                <a href="about.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>About MASON</strong>
                    <span className="nav-drop__sub">Why we built it and what drives us</span>
                  </span>
                </a>
                <a href="contact.html" className="nav-drop__item">
                  <span className="nav-drop__icon">?</span>
                  <span>
                    <strong>Contact Us</strong>
                    <span className="nav-drop__sub">Book a demo or ask us anything</span>
                  </span>
                </a>
              </div>
            )}
          </div>

        </nav>

        <div className="site-header__cta">
          <a href="contact.html" className="hide-sm header-link">Request demo</a>
          <a href="https://app.masononsite.com/login" className="btn btn-primary btn-sm">
            Sign in <IconArrowRight size={14} stroke={2} />
          </a>
          <button className="nav-hamburger hide-lg" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="nav-mobile">
          <div className="nav-mobile__group">
            <p className="nav-mobile__label">Product</p>
            <a href="features.html">All Features</a>
            <a href="bim-ar.html">BIM and AR</a>
            <a href="mobile.html">Mobile App</a>
            <a href="integrations.html">Integrations</a>
            <a href="security.html">Security</a>
          </div>
          <div className="nav-mobile__group">
            <p className="nav-mobile__label">Compare</p>
            <a href="compare-procore.html">MASON vs Procore</a>
            <a href="compare-fieldwire.html">MASON vs Fieldwire</a>
          </div>
          <div className="nav-mobile__group">
            <p className="nav-mobile__label">Resources</p>
            <a href="case-studies.html">Case Studies</a>
            <a href="roi-calculator.html">ROI Calculator</a>
            <a href="blog.html">Blog and Guides</a>
          </div>
          <div className="nav-mobile__group">
            <p className="nav-mobile__label">Company</p>
            <a href="pricing.html">Pricing</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
          </div>
          <div className="nav-mobile__cta">
            <a href="contact.html" className="btn btn-ghost" style={{width:"100%",justifyContent:"center"}}>Request demo</a>
            <a href="https://app.masononsite.com/login" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>Sign in</a>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Hero -------------------------------------------------------------------

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow fade-up" style={{ animationDelay: "0ms" }}>
            Management . Analytics . Site
          </span>
          <h1 className="display fade-up" style={{ animationDelay: "80ms" }}>
            One command center<br />
            for construction <span className="accent">control</span>.
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
            <a href="contact.html" className="btn btn-ghost">Book a demo</a>
          </div>
          <div className="hero__meta fade-up" style={{ animationDelay: "320ms" }}>
            <div className="hero__meta-item">
              <span className="hero__meta-dot ok" /> Live on 47 active projects
            </div>
            <div className="hero__meta-sep" />
            <div className="hero__meta-item">No seat fees. No add-on modules. 30 day free trial.</div>
          </div>
        </div>

        <div className="hero__visual fade-up" style={{ animationDelay: "200ms" }}>
          <ProductPreview />
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

Object.assign(window, { Header, Hero, ProductPreview, BIMViewerStage });
