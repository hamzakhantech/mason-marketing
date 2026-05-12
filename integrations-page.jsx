// integrations-page.jsx

const IntHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Connect your stack</span>
        <h1 className="page-hero__title gsap-fade-up">
          MASON works with the tools<br />
          <span style={{color:"var(--accent)"}}>your team already uses.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          You do not have to throw out your existing tools to use MASON. We connect with the
          platforms that construction teams already depend on, from design authoring tools to
          scheduling software to ERP systems. Here is every integration we have today, what
          each one does, and what is coming next.
        </p>
      </div>
    </div>
  </section>
);

const IntGrid = () => {
  const cats = [
    {
      heading:"BIM and Design",
      items:[
        {logo:"?",name:"Autodesk Platform Services",desc:"Import models, sheets, and RFIs from Autodesk Construction Cloud. Two-way sync on RFI status. Model versions update automatically when a new revision is published.",badge:"live"},
        {logo:"?",name:"Revit direct export",desc:"Export IFC models from Revit with MASON metadata tags pre-configured. Discipline filters, level filters, and element categories map automatically to MASON's BIM module.",badge:"live"},
        {logo:"?",name:"Navisworks clash sets",desc:"Import Navisworks clash detection results directly into the MASON issue register. Each clash becomes a trackable issue with model reference, coordinates, and assigned discipline.",badge:"live"},
        {logo:"?",name:"ArchiCAD IFC export",desc:"Fully supported IFC 2x3 and IFC4 export from ArchiCAD. All element properties and classification codes transfer into the MASON BIM viewer with full attribute access.",badge:"live"}
      ]
    },
    {
      heading:"Scheduling",
      items:[
        {logo:"?",name:"Microsoft Project",desc:"Import and export schedule data via MS Project XML format. Task names, durations, predecessor logic, and resource assignments all transfer. Two-way sync keeps both systems current.",badge:"live"},
        {logo:"?",name:"Primavera P6",desc:"Import P6 schedules via XER format. Activity codes, WBS structure, and baseline comparisons transfer into the MASON schedule module. Read-only import currently, full two-way sync in development.",badge:"beta"},
        {logo:"?",name:"Asta Powerproject",desc:"Export from Asta via XML and import into MASON's schedule module. Bar chart and Gantt views both supported. Resource histograms coming in the next release.",badge:"beta"}
      ]
    },
    {
      heading:"Project Management Platforms",
      items:[
        {logo:"?",name:"Procore",desc:"Migrate issues, RFIs, submittals, and document registers from Procore into MASON with a one-time migration tool. For teams running both platforms during a transition, there is a read sync that keeps RFI status aligned.",badge:"live"},
        {logo:"?",name:"Aconex",desc:"Migrate document registers, RFI history, and correspondence from Aconex. One-way migration tool, full document history preserved including all revision records and response chains.",badge:"live"},
        {logo:"?",name:"Fieldwire",desc:"Import task lists, issues, and photo records from Fieldwire. Document annotations do not transfer but all structured data including location references do.",badge:"live"}
      ]
    },
    {
      heading:"Finance and ERP",
      items:[
        {logo:"?",name:"SAP",desc:"Cost code mapping between MASON's cost module and SAP project accounting. Committed cost and actuals sync via scheduled API calls. Custom field mapping available on Scale plan.",badge:"live"},
        {logo:"?",name:"Sage 300 Construction",desc:"Two-way sync on cost codes, committed costs, and progress billings. Budget variances visible in MASON's cost module update automatically when Sage posts new entries.",badge:"live"},
        {logo:"?",name:"QuickBooks",desc:"One-way sync of project cost data from MASON into QuickBooks. Designed for smaller teams who use QuickBooks as their accounting system but want MASON for project cost control.",badge:"beta"}
      ]
    },
    {
      heading:"Communication and Documents",
      items:[
        {logo:"?",name:"Microsoft 365",desc:"Outlook integration for RFI and issue notifications. SharePoint integration for document sync, teams get notified in their Teams channels when RFIs are assigned or overdue.",badge:"live"},
        {logo:"?",name:"Slack",desc:"Receive MASON notifications in Slack channels. Configure which project events trigger a notification and which channels they go to. Overdue RFIs, new issues, and daily log submissions all supported.",badge:"live"},
        {logo:"?",name:"Dropbox and Google Drive",desc:"One-way document import from Dropbox and Google Drive into the MASON document register. Files bring over with version history if structured correctly. Ongoing sync not currently supported.",badge:"beta"}
      ]
    },
    {
      heading:"Coming soon",
      items:[
        {logo:"?",name:"Oracle Primavera Cloud",desc:"Full two-way schedule sync with Primavera Cloud, including WBS, activities, milestones, and earned value data. In active development, expected Q3 2026.",badge:"soon"},
        {logo:"?",name:"iOS native app",desc:"Full feature parity with the Android app. Offline mode, AR overlay, daily logs, issues, and photo capture. In development, no release date confirmed.",badge:"soon"},
        {logo:"?",name:"Zapier and Make",desc:"Connect MASON to thousands of other tools via Zapier and Make triggers. Any MASON event, such as a new issue, an RFI status change, or a daily log submission, can trigger actions in connected apps.",badge:"soon"}
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        {cats.map((cat,ci)=>(
          <div key={ci} style={{marginBottom:60}}>
            <h2 className="h2 gsap-fade-up" style={{marginBottom:8}}>{cat.heading}</h2>
            <div className="int-grid">
              {cat.items.map((item,ii)=>(
                <div key={ii} className="int-card gsap-fade-up">
                  <div className="int-card__logo">{item.logo}</div>
                  <p className="int-card__name">{item.name}</p>
                  <p className="int-card__desc">{item.desc}</p>
                  <span className={"int-card__badge int-card__badge--"+item.badge}>
                    {item.badge==="live"?"Live now":item.badge==="beta"?"Beta":"Coming soon"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const IntAPI = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"start"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <h2>Build your own integration with the MASON API</h2>
          <p>
            Every piece of data in MASON is accessible via the REST API. Projects, issues, RFIs,
            documents, schedule tasks, cost items, daily logs, submittals, and user records all
            have full CRUD endpoints. The API is available on Professional and Scale plans.
          </p>
          <p>
            Authentication uses OAuth 2.0 with scoped access tokens. You can create tokens with
            read-only access for reporting integrations or full read and write access for two-way
            syncs. Rate limits are generous and documented in the API reference.
          </p>
          <h3>Webhooks for real-time triggers</h3>
          <p>
            Rather than polling for changes, you can register webhook endpoints that receive a
            POST request whenever a state change happens in your project. New issue created,
            RFI assigned, daily log submitted, document revision uploaded. Your system receives
            the event payload within seconds and can act on it immediately.
          </p>
          <h3>Full OpenAPI documentation</h3>
          <p>
            The MASON API is fully documented in OpenAPI 3.0 format. You can browse the
            interactive docs at developers.masononsite.com, generate client libraries in
            any language, and test endpoints directly in the browser without writing code.
          </p>
          <p>
            If you are building a custom integration and run into questions, our engineering
            team monitors the developer forum and typically responds within a business day.
          </p>
        </div>
        <div className="gsap-slide-right">
          <div style={{background:"#0a0a10",border:"1px solid var(--line)",borderRadius:14,padding:28,fontFamily:"var(--font-mono)",fontSize:13}}>
            <p style={{color:"var(--text-faint)",marginBottom:16,fontSize:11}}>// Fetch open RFIs for a project</p>
            <p style={{color:"#4ade80"}}>GET /api/v1/projects/:id/rfis</p>
            <p style={{color:"var(--text-muted)",marginTop:8}}>Authorization: Bearer &lt;token&gt;</p>
            <br/>
            <p style={{color:"var(--text-faint)"}}>// Response</p>
            <pre style={{color:"var(--text-muted)",fontSize:12,lineHeight:1.6,margin:0}}>{`{
  "data": [
    {
      "id": "rfi-204",
      "status": "open",
      "subject": "Penetration through L23 slab",
      "assigned_to": "k.okafor@project.com",
      "due_date": "2026-05-12",
      "bim_ref": "WLL-L23-STR-004",
      "created_at": "2026-05-08T09:14:00Z"
    }
  ],
  "meta": { "total": 47, "open": 12 }
}`}</pre>
            <div style={{marginTop:20,paddingTop:16,borderTop:"1px solid var(--line)"}}>
              <a href="https://developers.masononsite.com" style={{color:"var(--accent)",fontSize:13,textDecoration:"none",fontFamily:"var(--font-sans)"}}>
                View full API docs ->
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IntFAQ = () => {
  const [open, setOpen] = React.useState(null);
  const items = [
    {q:"Do I need a developer to set up integrations?",a:`Most of the pre-built integrations, Autodesk, MS Project, Procore migration, Slack notifications, are configured through the MASON settings interface with no code required. The API and webhooks do require a developer or someone comfortable with REST APIs and JSON.`},
    {q:"Are integrations included in all plans?",a:`Pre-built integrations with Autodesk, MS Project, and communication tools like Slack and Teams are included on all plans. The full REST API is available on Professional and Scale plans. Custom integration support and dedicated integration setup assistance is available on the Scale plan.`},
    {q:"Can I migrate my Procore project history into MASON?",a:`Yes. The Procore migration tool transfers issues, RFIs, submittals, and document registers with their full history. Photos and attachments transfer. Drawing annotations do not transfer due to format differences, but the underlying documents do. The migration process typically takes a few hours for a large project and we walk you through it.`},
    {q:"Do you support custom ERP integrations?",a:`Scale plan customers can request custom ERP integration work. We have done this for SAP, Oracle, Sage, and a few regional ERP systems. The scope and timeline depend on the ERP's API capability and the data model you want to sync. Contact us at enterprise@masononsite.com to discuss.`},
    {q:"What happens to the integration if you change the API?",a:`We version the API. Changes to existing endpoints are backwards compatible within the same major version. When we release a new major version, we give a minimum six month notice period and maintain the previous version in parallel. We have not had to do a breaking change yet but this is the commitment if we do.`}
  ];
  return (
    <section className="section">
      <div className="container" style={{maxWidth:820}}>
        <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
          <h2 className="h2">Integration questions</h2>
        </div>
        <div className="faq-list">
          {items.map((item,i)=>(
            <div key={i} className="faq-entry">
              <button className={"faq-entry__q"+(open===i?" is-open":"")} onClick={()=>setOpen(open===i?null:i)}>
                {item.q}<span className="faq-entry__chevron">?</span>
              </button>
              <div className={"faq-entry__a"+(open===i?" is-open":"")}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntCTA = () => (
  <section className="section bg-subtle">
    <div className="container" style={{textAlign:"center",maxWidth:580}}>
      <div className="gsap-fade-up">
        <h2 className="h2">Need an integration that is not listed?</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
          Tell us what you need. Some of our best integrations were built because a customer
          asked. Contact us at integrations@masononsite.com or use the form.
        </p>
        <a href="contact.html" className="btn btn-primary btn-lg">Request an integration</a>
      </div>
    </div>
  </section>
);

const IntegrationsPage = () => {
  React.useEffect(() => {
    document.body.classList.add('gsap-ready'); // CSS fallback: elements visible even if GSAP fails
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach(el => {
        gsap.from(el, {opacity:0,y:30,duration:0.6,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top 88%",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-left").forEach(el => {
        gsap.from(el, {opacity:0,x:-40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top 85%",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-right").forEach(el => {
        gsap.from(el, {opacity:0,x:40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top 85%",toggleActions:"play none none none"}});
      });
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <main>
        <IntHero />
        <IntGrid />
        <IntAPI />
        <IntFAQ />
        <IntCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IntegrationsPage />);
