// new-sections.jsx -- Personas, Concierge spotlight, Workflow

const PERSONAS = [
  {
    id: "pm",
    tag: "Project managers . engineers",
    title: "Portfolio truth, every project, one click away.",
    body: "Dashboard, schedule, BIM, cost roll-up, reports -- at the desk where decisions actually get made. Federated models open in the same tab as the RFI they're tied to.",
    bullets: ["Multi-project Dashboard", "Schedule (Gantt) + Reports", "Federated BIM viewer", "Cost & document control"],
    surface: "desk",
  },
  {
    id: "super",
    tag: "Supers . owners' reps",
    title: "Mobile that doesn't apologize for being mobile.",
    body: 'Issues, RFIs, documents, and the BIM model -- full workflows on a phone browser. No locked-out screens, no "open this on desktop" walls in the way of your day.',
    bullets: ["BIM + AR on phone browser", "Issues & RFIs unblocked", "Documents in one tap", "Full read/write parity"],
    surface: "mob",
  },
  {
    id: "field",
    tag: "Foremen . field staff",
    title: "Capture-first. Built for the jobsite.",
    body: "The native Android app puts the camera, push notifications, GPS, and AI Concierge directly in the hands of the field team. Daily logs can be drafted from the issues and activities recorded during the shift rather than typed from memory at the end of the day. Offline mode means the work continues in basements, plant rooms, and any other location where signal disappears. Data syncs the moment connectivity returns.",
    bullets: ["Full offline mode with automatic sync", "Camera integration for issue photos", "GPS location tagging for every issue", "Push notifications for assigned RFIs", "AI Concierge aware of your current project", "Bottom navigation designed for one-handed use"],
    surface: "and",
  },
];

const Personas = () => {
  const [active, setActive] = React.useState("pm");
  const p = PERSONAS.find((x) => x.id === active);
  return (
    <section className="sect personas" id="personas">
      <div className="container">
        <div className="sect-head">
          <span className="eyebrow">Built for three audiences</span>
          <h2 className="h2">Office. Mobile. Site.<br/>One product, three jobs to do.</h2>
          <p className="lede">
            MASON respects how construction teams actually divide work across a desk, a phone browser,
            and a foreman's pocket -- without forking the data.
          </p>
        </div>

        <div className="personas__tabs" role="tablist">
          {PERSONAS.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={active === x.id}
              className={"personas__tab" + (active === x.id ? " is-active" : "")}
              onClick={() => setActive(x.id)}
            >
              <span className="mono">{`0${PERSONAS.indexOf(x)+1}`}</span>
              <span className="personas__tab-tag">{x.tag}</span>
            </button>
          ))}
        </div>

        <div className="personas__panel">
          <div className="personas__copy">
            <h3 className="h2" style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}>{p.title}</h3>
            <p className="lede" style={{ fontSize: 16 }}>{p.body}</p>
            <ul className="checklist">
              {p.bullets.map((b) => (<li key={b}><IconCheck size={16} stroke={2} /> {b}</li>))}
            </ul>
          </div>
          <div className="personas__visual">
            {p.surface === "desk" && <DesktopFrame />}
            {p.surface === "mob"  && <MobileFrame />}
            {p.surface === "and"  && <AndroidFrame />}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Concierge spotlight ----------------------------------------------------

const ConciergeSpotlight = () => (
  <section className="sect concierge" id="concierge">
    <div className="grid-bg" aria-hidden="true" style={{ opacity: .4 }} />
    <div className="container concierge__inner">
      <div className="concierge__copy">
        <span className="eyebrow">AI Concierge</span>
        <h2 className="h2">An assistant that knows<br/><span className="accent">your project</span> -- not just the internet.</h2>
        <p className="lede">
          Concierge is grounded in your portfolio data: documents, RFIs, schedule, BIM model, daily logs,
          issues, and cost records. It cites the specific source it drew from rather than generating a
          plausible-sounding response from general knowledge. It can draft an RFI from a clash reference,
          summarise overdue items across the project, or tell you what changed on site yesterday, all
          without leaving the current tab.
        </p>
        <p style={{color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          The Concierge is available in eight languages and responds in the language you type in.
          It is available on the browser interface and the Android app. Every response it gives
          can be acted on directly: send the drafted RFI, apply the suggested assignment, or
          navigate to the referenced document with one click. It is not a chatbot bolted onto
          the side of a project management tool. It is built into the same data layer that
          every other module reads from.
        </p>
        <div className="concierge__stats">
          <div><span className="mono">Sources</span><b>RFIs . Docs . BIM . Logs</b></div>
          <div><span className="mono">Surfaces</span><b>Desk . Mobile . Android</b></div>
          <div><span className="mono">Permissions</span><b>Role-aware by default</b></div>
        </div>
      </div>
      <div className="concierge__visual">
        <ConciergeChat />
      </div>
    </div>
  </section>
);

const ConciergeChat = () => (
  <div className="cnc">
    <div className="cnc__hd">
      <div className="cnc__orb">
        <IconConcierge size={16} stroke={1.7} />
      </div>
      <div className="cnc__hd-t">
        <span>MASON Concierge</span>
        <em>Riverside Tower . L23 context</em>
      </div>
      <span className="chip ok"><span className="dot" /> Live</span>
    </div>
    <div className="cnc__body">
      <div className="cnc__msg cnc__msg--user">Why is L23 behind schedule?</div>

      <div className="cnc__msg">
        <span className="mono">Concierge</span>
        Two factors. RFI-204 (slab penetration) is open -- blocking pour 23-A. Yesterday's daily log shows
        the ductwork install slipped half a day at gridline E/4 due to a clash with conduit (ISS-118).
      </div>

      <div className="cnc__sources">
        <span className="mono">Cited</span>
        <span className="cnc__src"><IconRFI size={11} /> RFI-204</span>
        <span className="cnc__src"><IconIssues size={11} /> ISS-118</span>
        <span className="cnc__src"><IconLogs size={11} /> Log . May 6</span>
        <span className="cnc__src"><IconBIM size={11} /> Model . L23 MEP</span>
      </div>

      <div className="cnc__msg cnc__msg--user">Draft an RFI from ISS-118.</div>

      <div className="cnc__msg cnc__msg--draft">
        <span className="mono">Drafting RFI . 4 sources</span>
        <div className="cnc__draft">
          <div className="cnc__draft-row"><span>Subject</span><b>Coordination -- conduit/duct clash, gridline E/4, +12.40 m</b></div>
          <div className="cnc__draft-row"><span>To</span><b>K. Okafor (Structural)</b></div>
          <div className="cnc__draft-row"><span>Due</span><b>2 days</b></div>
          <div className="cnc__draft-row"><span>Attached</span><b>Model snapshot . ISS-118</b></div>
        </div>
        <div className="cnc__draft-actions">
          <button className="btn btn-primary btn-sm">Send <IconArrowRight size={12} stroke={2} /></button>
          <button className="btn btn-ghost btn-sm">Edit</button>
        </div>
      </div>
    </div>
  </div>
);

// --- Workflow ribbon --------------------------------------------------------

const Workflow = () => (
  <section className="sect-tight workflow" id="workflow">
    <div className="container">
      <div className="workflow__row">
        <div className="workflow__step">
          <span className="mono">01</span>
          <h4>Capture in the field</h4>
          <p>The foreman pins an issue directly from the BIM viewer on Android.
          Photo, GPS coordinates, and the relevant model element all captured
          in the same workflow without switching between apps.</p>
        </div>
        <Connector />
        <div className="workflow__step">
          <span className="mono">02</span>
          <h4>Concierge drafts the RFI</h4>
          <p>The issue auto-links to the corresponding model clash. The AI Concierge
          drafts a complete RFI with subject, description, assigned party, and due date.
          The engineer reviews it and sends with one click.</p>
        </div>
        <Connector />
        <div className="workflow__step">
          <span className="mono">03</span>
          <h4>Office reviews in context</h4>
          <p>The project manager opens the RFI in the browser with the federated model
          visible in the same tab. They can see the clash, the surrounding elements,
          and the full RFI history without switching tools or re-entering context.</p>
        </div>
        <Connector />
        <div className="workflow__step">
          <span className="mono">04</span>
          <h4>Daily log drafted automatically</h4>
          <p>At end of shift, the Concierge compiles a structured daily log from
          the issues raised, RFIs updated, and tasks completed during the day.
          The supervisor reviews, adds any notes, and submits in under two minutes.</p>
        </div>
      </div>
    </div>
  </section>
);

const Connector = () => (
  <svg className="workflow__conn" viewBox="0 0 80 24" aria-hidden="true">
    <path d="M2 12 H78" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
    <path d="M70 6 L78 12 L70 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Object.assign(window, { Personas, ConciergeSpotlight, Workflow, ConciergeChat });
