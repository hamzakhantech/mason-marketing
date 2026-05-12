// bim-ar-page.jsx — BIM & AR deep-dive

const BIMARHero = () => (
  <section className="page-hero">
    <div className="page-hero__glow" aria-hidden="true" />
    <div className="container page-hero__inner">
      <span className="eyebrow gsap-fade-up">BIM &amp; Augmented Reality</span>
      <h1 className="display gsap-fade-up">
        Your building model,<br />
        <span className="accent">in the browser</span> and on the wall.
      </h1>
      <p className="lede gsap-fade-up">
        MASON loads IFC files natively in the browser — no plugins, no Autodesk account,
        no desktop app. Federate multiple discipline models. Detect clashes automatically.
        Pin issues to elements. Then take the model to the field in AR — point your Android
        camera at the wall and see the MEP behind it.
      </p>
      <div className="hero__cta gsap-fade-up">
        <a href="https://app.masononsite.com/register" className="btn btn-primary">
          Try BIM free for 30 days <IconArrowRight size={16} stroke={2} />
        </a>
        <a href="contact.html" className="btn btn-ghost">See a demo</a>
      </div>
    </div>
  </section>
);

// ─── BIM tech grid ────────────────────────────────────────────────────────────
const BIMTechGrid = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">How it works</span>
        <h2 className="h2">Browser-native BIM — no compromise.</h2>
        <p className="section__sub">
          MASON's BIM viewer is built on web-ifc, an open-source WebAssembly library
          that parses IFC files directly in the browser. Combined with a Three.js rendering
          engine and a custom scene graph optimised for construction models, it delivers
          a viewer experience previously only possible in desktop software — without the
          installation overhead or the Autodesk licence cost.
        </p>
      </div>
      <div className="bim-tech-grid">
        {[
          { label: "IFC 2x3", desc: "Full support including property sets, type objects, and spatial structure" },
          { label: "IFC4", desc: "Alignment, rebar, and geometry improvements over 2x3" },
          { label: "WebAssembly", desc: "web-ifc compiled to WASM for near-native parsing performance" },
          { label: "Three.js r165", desc: "WebGL 2.0 rendering with instancing for large repetitive elements" },
          { label: "Federated scenes", desc: "Merge multiple discipline IFCs into one coordinated scene" },
          { label: "Property sets", desc: "Every IfcPropertySet exposed in the inspector panel" },
          { label: "Spatial structure", desc: "Site → Building → Storey → Space hierarchy navigation" },
          { label: "Clash detection", desc: "Server-side intersection analysis on federation upload" },
        ].map((t, i) => (
          <div key={i} className="bim-tech-cell gsap-scale-in">
            <span className="bim-tech-cell__label mono">{t.label}</span>
            <span className="bim-tech-cell__desc">{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── IFC workflow ─────────────────────────────────────────────────────────────
const IFCWorkflow = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">Workflow</span>
        <h2 className="h2">From Revit to MASON in under 5 minutes.</h2>
        <p className="section__sub">
          You don't need to change how your BIM team works. They keep using Revit, ArchiCAD,
          Tekla, or whatever tool they're authorising in. You export IFC, upload to MASON, done.
        </p>
      </div>
      <div className="steps gsap-fade-up">
        {[
          {
            n: "01",
            heading: "Export IFC from your BIM tool",
            body: `In Revit: File → Export → IFC. Choose IFC 2x3 or IFC4. The Revit IFC exporter is free and built-in — no additional plugin required for basic export. For higher-quality exports with better geometry and property mapping, the open-source OpenBIM Revit exporter (IFCexporter on GitHub) is recommended and free. In ArchiCAD: File → Save As → IFC. In Tekla: File → Export → IFC. The process is the same — open standard, any BIM tool.`
          },
          {
            n: "02",
            heading: "Upload to MASON",
            body: `In MASON, open your project and go to BIM. Click Upload Model. Select the IFC file (up to 300 MB on Pro and Scale plans). MASON processes the file server-side: parsing the spatial structure, extracting property sets, building a search index, and running the initial clash analysis if other discipline models are already loaded. Processing typically takes 30–90 seconds for a 100 MB file. You'll get a notification when it's ready.`
          },
          {
            n: "03",
            heading: "Federate disciplines",
            body: `Upload your structural, MEP, and architectural IFCs separately. MASON federates them into one scene automatically. The federation process runs a clash detection pass across all loaded models and writes any geometric intersections into the Issues register with the element IDs, discipline pair, grid reference, and elevation. Your team can see the full federated model from the first day they're on the platform.`
          },
          {
            n: "04",
            heading: "Navigate, inspect, and annotate",
            body: `The BIM viewer loads in the browser — no install required. Use the tree panel to navigate disciplines, floors, and building systems. Click any element to see its full property set. Use the Isolate, Section, and Hide tools to focus on specific areas. Pin issues directly to elements. The viewer saves your camera position between sessions so you pick up where you left off.`
          },
          {
            n: "05",
            heading: "Take it to the field with AR",
            body: `On Android (via the native app), open the BIM viewer and tap the AR button. MASON uses your device camera to detect the physical space around you. It asks you to calibrate by pointing at a known reference point (a corner, a mark on the floor) and then overlays the digital model on the physical building. Walk through the building and see ductwork, conduit runs, and structural elements rendered on your camera view.`
          }
        ].map((s) => (
          <div key={s.n} className="step">
            <div className="step__number">{s.n}</div>
            <div className="step__content">
              <h3 className="step__heading">{s.heading}</h3>
              <p className="step__body">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Viewer capabilities ──────────────────────────────────────────────────────
const ViewerCapabilities = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">Viewer tools</span>
        <h2 className="h2">What you can do in the viewer.</h2>
      </div>
      <div className="feature-grid">
        {[
          {
            title: "Navigation",
            body: "Orbit, pan, zoom with mouse or touch. First-person walk mode for interior inspection. Fly mode for exterior navigation on large sites. Keyboard shortcuts for power users. On mobile: pinch-to-zoom, two-finger pan, tap-to-select."
          },
          {
            title: "Element inspection",
            body: "Click any element to open the inspector panel: IFC type, GUID, name, material, and all custom property sets. Quantities are extracted automatically — area, volume, count — useful for take-off verification. Copy the GUID to cross-reference with the BIM authoring tool."
          },
          {
            title: "Isolate and section",
            body: "Isolate command shows only selected elements (useful for single-system coordination). Section cuts through the model on any axis — horizontal for floor plans, vertical for sections. The section plane is draggable. Save up to 5 named section positions per project."
          },
          {
            title: "Discipline layers",
            body: "Toggle disciplines on/off independently. Structural only, MEP only, architectural only, or any combination. Each discipline is colour-coded in the federation. Create and save custom layer combinations (e.g. 'Structural + MEP Level 5') as named views."
          },
          {
            title: "Issue pins",
            body: "Tap any element and select 'Pin Issue'. A 3D pin appears at the click point on the element surface. The pin links bidirectionally to an Issue card — the issue ID, status, and priority are shown on the pin. Closed issues show green pins; open issues show amber or red based on priority."
          },
          {
            title: "Measurement",
            body: "Click-to-click measurement tool for verifying dimensions against IFC geometry. Useful for checking clearances, slab-to-slab heights, and duct-to-structure clearances before coordination meetings. Measurements are shown in your project's unit system (metric or imperial)."
          },
          {
            title: "Clash markers",
            body: "Clashes detected on federation upload are shown as red markers in the model. Click a clash marker to see the two elements involved, their discipline origin, the intersection volume, and the linked Issue card. The marker disappears when the linked issue is closed — giving you a visual 'cleared clash' view."
          },
          {
            title: "Saved views",
            body: "Save named camera positions for use in meetings and reports. 'South elevation', 'L23 MEP plan', 'Clash E/4 detail' — share a named view link and your colleague opens the model at exactly that camera position. Views are per-project and visible to all permissioned users."
          }
        ].map((item, i) => (
          <div key={i} className="feature-card gsap-scale-in">
            <h3 className="feature-card__title">{item.title}</h3>
            <p className="feature-card__body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── AR deep-dive ─────────────────────────────────────────────────────────────
const ARDeepDive = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="split-sect gsap-slide-left">
        <div className="split-copy">
          <span className="eyebrow">Augmented Reality</span>
          <h2 className="h2">See through the walls.</h2>
          <p className="split-copy__body">
            MASON AR overlays the digital building model on the physical site using the
            Android device camera. It uses a combination of ARCore (Google's AR platform,
            built into modern Android devices) and WebXR — so no app update is required
            when AR capabilities improve.
          </p>
          <p className="split-copy__body">
            Point the camera at a slab void and see the MEP running through it. Stand at a
            gridline intersection and see the steel connections above you. Walk a concrete
            pour and compare the poured element to the model geometry. Construction professionals
            who use AR consistently report that it surfaces clashes and coordination issues
            earlier and with less rework than 2D-only coordination.
          </p>
          <p className="split-copy__body">
            MASON AR is currently Android-only via the native app. iOS AR support is on the
            roadmap, dependent on WebXR support improvements in Safari. Minimum device
            requirement: Android 10, ARCore-compatible, 4 GB RAM. A list of ARCore-compatible
            devices is maintained by Google.
          </p>
          <h3 className="split-copy__heading" style={{ marginTop: "1.75rem" }}>AR calibration</h3>
          <p className="split-copy__body">
            MASON AR requires a one-time calibration per floor visit. Open the AR viewer
            and tap the reference point icon. Point your camera at a physical reference
            (survey marker, column face, or control point visible on the as-built drawings).
            Tap to set the MASON coordinate origin. The model snaps to the physical space
            and remains stable as you move. Recalibration takes about 15 seconds.
          </p>
        </div>
        <div className="split-visual">
          <div className="ar-demo-card">
            <div className="ar-demo-card__screen">
              <svg viewBox="0 0 280 200" style={{ width: "100%", height: "auto" }} aria-hidden="true">
                <defs>
                  <linearGradient id="ar-bg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#0f1420" />
                    <stop offset="1" stopColor="#0a0d18" />
                  </linearGradient>
                </defs>
                <rect width="280" height="200" fill="url(#ar-bg)" rx="8" />
                {/* Camera frame lines */}
                <rect x="20" y="15" width="20" height="3" fill="rgba(232,148,46,.6)" rx="1" />
                <rect x="20" y="15" width="3" height="20" fill="rgba(232,148,46,.6)" rx="1" />
                <rect x="240" y="15" width="20" height="3" fill="rgba(232,148,46,.6)" rx="1" />
                <rect x="257" y="15" width="3" height="20" fill="rgba(232,148,46,.6)" rx="1" />
                <rect x="20" y="182" width="20" height="3" fill="rgba(232,148,46,.6)" rx="1" />
                <rect x="20" y="162" width="3" height="20" fill="rgba(232,148,46,.6)" rx="1" />
                <rect x="240" y="182" width="20" height="3" fill="rgba(232,148,46,.6)" rx="1" />
                <rect x="257" y="162" width="3" height="20" fill="rgba(232,148,46,.6)" rx="1" />
                {/* Building background (real world) */}
                <rect x="0" y="80" width="280" height="120" fill="rgba(255,255,255,.03)" />
                <line x1="80" y1="80" x2="80" y2="200" stroke="rgba(255,255,255,.08)" />
                <line x1="160" y1="80" x2="160" y2="200" stroke="rgba(255,255,255,.08)" />
                <line x1="240" y1="80" x2="240" y2="200" stroke="rgba(255,255,255,.08)" />
                {/* AR overlaid MEP duct */}
                <rect x="50" y="90" width="180" height="20" fill="rgba(232,148,46,.12)" stroke="#e8942e" strokeWidth="1" rx="3" />
                <text x="140" y="104" textAnchor="middle" fill="#e8942e" fontSize="7" fontFamily="monospace">HVAC SUPPLY 600×300 · L4</text>
                {/* AR overlaid conduit */}
                <rect x="100" y="115" width="80" height="8" fill="rgba(59,130,246,.12)" stroke="#3b82f6" strokeWidth="1" rx="1.5" />
                <text x="140" y="121" textAnchor="middle" fill="#93c5fd" fontSize="6" fontFamily="monospace">ELE 100mm conduit</text>
                {/* Clash indicator */}
                <circle cx="138" cy="113" r="8" fill="rgba(226,109,92,.15)" stroke="#e26d5c" strokeWidth="1.5" />
                <text x="138" y="116" textAnchor="middle" fill="#e26d5c" fontSize="7" fontWeight="bold">!</text>
                {/* HUD bottom */}
                <rect x="0" y="175" width="280" height="25" fill="rgba(0,0,0,.5)" />
                <text x="14" y="190" fill="rgba(232,148,46,.9)" fontSize="8" fontFamily="monospace">AR · L4 MEP · 1 clash detected</text>
                <text x="200" y="190" fill="rgba(255,255,255,.5)" fontSize="7" fontFamily="monospace">Calibrated</text>
                <circle cx="252" cy="187" r="4" fill="none" stroke="rgba(74,222,128,.8)" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="ar-demo-card__caption">
              AR overlay — HVAC duct and electrical conduit on Level 4.
              Clash marker visible at intersection.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Clash detection deep-dive ────────────────────────────────────────────────
const ClashDetection = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">Clash detection</span>
        <h2 className="h2">From federated model to RFI in two clicks.</h2>
        <p className="section__sub">
          Clash detection happens automatically when you upload a discipline model to a
          federated project. Every geometric intersection between discipline models is
          recorded — element IDs, discipline pair, intersection bounding box, grid reference,
          and elevation. Clashes are classified by severity (hard, soft, workflow) and
          written directly into the Issues register.
        </p>
      </div>
      <div className="feature-grid">
        {[
          {
            title: "Hard clashes",
            body: "Two solid objects occupy the same space. A structural beam passing through a duct. A pipe running through a column. Hard clashes must be resolved before construction proceeds. MASON marks them as Critical priority issues."
          },
          {
            title: "Soft clashes (clearance)",
            body: "Objects are within a defined clearance threshold but not actually intersecting. An electrical cable tray with less than 50mm clearance to a structural beam — technically compliant but likely to cause installation problems. Clearance thresholds are configurable per project."
          },
          {
            title: "Workflow clashes",
            body: "Sequencing and access conflicts. Element A must be installed before Element B and there's no physical access once B is in place. These require trade-sequence coordination rather than design changes. MASON captures them as a separate clash type."
          },
          {
            title: "Clash-to-RFI workflow",
            body: "Select a clash in the Issues register. Tap 'Draft RFI'. The AI Concierge reads the element properties, the relevant specification section, and your project's RFI template, then drafts the RFI body. Review, edit, assign — the RFI is raised in under 2 minutes."
          },
          {
            title: "Grouping and filtering",
            body: "On large projects, clash detection may surface hundreds of intersections. Group clashes by discipline pair (Structural vs MEP, Architectural vs Mechanical), by floor level, or by severity. Filter to only unresolved clashes in a specific area for coordination meetings."
          },
          {
            title: "Re-run on model update",
            body: "When a revised IFC is uploaded (Revit RE-01, RE-02 etc.), MASON re-runs clash detection and compares against the previous run. New clashes are flagged as New. Previously identified clashes that no longer exist are auto-closed. Resolved clashes that have re-emerged are flagged as Reopened."
          }
        ].map((item, i) => (
          <div key={i} className="feature-card gsap-scale-in">
            <h3 className="feature-card__title">{item.title}</h3>
            <p className="feature-card__body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── BIM FAQ ──────────────────────────────────────────────────────────────────
const BIMFAQ = () => {
  const [open, setOpen] = React.useState(null);
  const items = [
    { q: "Do I need an Autodesk account to use MASON BIM?", a: "No. MASON parses IFC files natively in the browser using web-ifc, an open-source library. IFC is an open BIM standard — any BIM tool can export it, and MASON reads it without any Autodesk products. You don't need Autodesk Construction Cloud, BIM 360, Autodesk Docs, Navisworks, or any other Autodesk product." },
    { q: "What's the maximum IFC file size?", a: "Starter plan: 500 MB per file upload, with up to 100 GB total document storage. Professional: 2 GB per file, 500 GB total. Scale: 5 GB per file, unlimited total. Practical performance in the browser viewer is best for models under 300 MB on desktop and under 80 MB on Android. Larger models load and work — they're just slower on initial load. The server-side clash detection process has no size limit." },
    { q: "Can multiple people be in the BIM viewer simultaneously?", a: "Yes. The BIM viewer is a shared view — any permissioned user can open it simultaneously. Issue pins, clash markers, and saved views are shared in real time. However, the viewer is not a collaborative editing environment — MASON is a viewer, not a BIM authoring tool. Users see the same model and can annotate it, but they're not editing the IFC geometry." },
    { q: "Why IFC and not RVT or NWC?", a: "Proprietary formats lock you into a vendor. RVT requires Revit. NWC requires Navisworks. IFC is an open ISO standard (ISO 16739) supported by every serious BIM tool in the world. Choosing IFC means your project data remains interoperable and accessible regardless of which tools your team or your clients use in the future." },
    { q: "How accurate is the AR overlay?", a: "After calibration, AR accuracy is typically 5–15mm at close range, degrading to 30–50mm at distances over 10m. This is sufficient for verifying service routes, checking clearances, and confirming element positions, but not for precision tasks like setting out. The calibration accuracy depends on the quality of the physical reference point used — a laser-punched survey mark is more accurate than a pencil mark on a concrete floor." },
    { q: "Is AR available on iOS?", a: "Not yet. AR on iOS requires WebXR support in Safari, which has been inconsistently implemented by Apple. We're monitoring Safari's WebXR implementation and plan to add iOS AR support when the quality is sufficient. The rest of the MASON platform (BIM viewer, issues, logs, etc.) works fully on iOS via the mobile browser." },
    { q: "Can I use the BIM viewer offline?", a: "On Android (native app), models you've previously opened are cached locally and available offline for viewing and inspection. Issue pinning and annotation work offline and sync when connectivity resumes. On desktop browser, offline BIM viewing is not currently supported — the model loads fresh from the server each session, though property data is indexed and fast to load." },
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <div className="section__header gsap-fade-up">
          <span className="eyebrow">BIM &amp; AR FAQ</span>
          <h2 className="h2">Technical questions answered.</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={"faq-item gsap-fade-up" + (open === i ? " is-open" : "")}>
              <button className="faq-item__btn" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-item__chevron">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="faq-item__body"><p>{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────────────────────────────
const BIMARCTA = () => (
  <section className="cta-band">
    <div className="container cta-band__inner">
      <h2 className="cta-band__heading">Bring your IFC. See it load.</h2>
      <p className="cta-band__sub">
        Start the 30-day free trial, upload your model, and see the MASON BIM viewer
        on your actual project data. No Autodesk account required. No plugin to install.
        Works in your browser in under 2 minutes.
      </p>
      <div className="cta-band__actions">
        <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">
          Start free trial <IconArrowRight size={18} stroke={2} />
        </a>
        <a href="contact.html" className="btn btn-ghost btn-lg">Book a BIM demo</a>
      </div>
    </div>
  </section>
);

// ─── Root ─────────────────────────────────────────────────────────────────────
const BIMARPage = () => {
  React.useEffect(() => {
    document.body.classList.add('gsap-ready'); // CSS fallback: elements visible even if GSAP fails
    if (typeof gsap === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const animateEls = (selector, vars) => {
      document.querySelectorAll(selector).forEach((el) => {
        gsap.fromTo(el, { opacity: 0, ...vars.from }, {
          opacity: 1, ...vars.to, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
        });
      });
    };
    animateEls(".gsap-fade-up", { from: { y: 40 }, to: { y: 0 } });
    animateEls(".gsap-slide-left", { from: { x: -50 }, to: { x: 0 } });
    animateEls(".gsap-scale-in", { from: { scale: 0.92 }, to: { scale: 1 } });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="site">
      <Header />
      <BIMARHero />
      <BIMTechGrid />
      <IFCWorkflow />
      <ViewerCapabilities />
      <ARDeepDive />
      <ClashDetection />
      <BIMFAQ />
      <BIMARCTA />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<BIMARPage />);
