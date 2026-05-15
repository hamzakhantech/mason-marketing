// integrations-page.jsx

import React from "react";

var INT_ICON=`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M7 6h1m8 0h1M6 7v1m0 8v1m11-1v1m-5-9v9m-4-4h9"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/></svg>`;

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
          You do not have to replace your existing toolchain to use MASON. We connect
          with the platforms construction teams depend on — from BIM authoring and
          scheduling software to ERP and communication tools. Every integration below
          is production-ready unless marked otherwise.
        </p>
      </div>
    </div>
  </section>
);

const BADGE_LABELS = {live:"Live",beta:"Beta",soon:"Coming soon"};

const IntGrid = () => {
  const cats = [
    {
      heading:"BIM and Design",
      items:[
        {name:"Autodesk Platform Services",desc:"Import models, sheets, and RFIs from Autodesk Construction Cloud. Two-way RFI status sync. Model versions update automatically when a new revision is published.",badge:"live"},
        {name:"Revit direct export",desc:"Export IFC from Revit with MASON metadata pre-configured. Discipline filters, level filters, and element categories map automatically to MASON's BIM module.",badge:"live"},
        {name:"Navisworks clash sets",desc:"Import Navisworks clash detection results directly into the MASON issue register. Each clash becomes a trackable issue with model reference, coordinates, and assigned discipline.",badge:"live"},
        {name:"ArchiCAD IFC export",desc:"Full IFC 2x3 and IFC4 support. All element properties and classification codes transfer into the BIM viewer with complete attribute access.",badge:"live"}
      ]
    },
    {
      heading:"Scheduling",
      items:[
        {name:"Microsoft Project",desc:"Import and export via MS Project XML. Task names, durations, predecessor logic, and resource assignments all transfer. Two-way sync keeps both systems current.",badge:"live"},
        {name:"Primavera P6",desc:"Import P6 schedules via XER format. Activity codes, WBS structure, and baseline comparisons transfer into the MASON schedule module. Full two-way sync in development.",badge:"beta"},
        {name:"Asta Powerproject",desc:"Export from Asta via XML and import into MASON's schedule module. Bar chart and Gantt views both supported.",badge:"beta"}
      ]
    },
    {
      heading:"Project Management Platforms",
      items:[
        {name:"Procore",desc:"One-time migration tool for issues, RFIs, submittals, and document registers. Live read-sync keeps RFI status aligned for teams running both platforms during a transition.",badge:"live"},
        {name:"Aconex",desc:"Migrate document registers, RFI history, and correspondence from Aconex. Full document history preserved including all revision records and response chains.",badge:"live"},
        {name:"Fieldwire",desc:"Import task lists, issues, and photo records. All structured data including location references transfer; drawing annotations do not.",badge:"live"}
      ]
    },
    {
      heading:"Finance and ERP",
      items:[
        {name:"SAP",desc:"Cost code mapping between MASON's cost module and SAP project accounting. Committed cost and actuals sync via scheduled API calls. Custom field mapping on Scale plan.",badge:"live"},
        {name:"Sage 300 Construction",desc:"Two-way sync on cost codes, committed costs, and progress billings. Budget variances in MASON update automatically when Sage posts new entries.",badge:"live"},
        {name:"QuickBooks",desc:"One-way sync of project cost data from MASON into QuickBooks. Designed for smaller teams who use QuickBooks for accounting but want MASON for project cost control.",badge:"beta"}
      ]
    },
    {
      heading:"Communication and Documents",
      items:[
        {name:"Microsoft 365",desc:"Outlook notifications for RFIs and issues. SharePoint document sync. Teams channel alerts when RFIs are assigned or overdue.",badge:"live"},
        {name:"Slack",desc:"MASON notifications in Slack channels. Configure which project events trigger a notification and which channel receives it. Overdue RFIs, new issues, and daily log submissions all supported.",badge:"live"},
        {name:"Dropbox and Google Drive",desc:"One-way document import into the MASON document register. Files transfer with version history when structured correctly. Ongoing sync not currently supported.",badge:"beta"}
      ]
    },
    {
      heading:"Coming soon",
      items:[
        {name:"Oracle Primavera Cloud",desc:"Full two-way schedule sync including WBS, activities, milestones, and earned value data. In active development, expected Q3 2026.",badge:"soon"},
        {name:"iOS native app",desc:"Full feature parity with the Android app. Offline mode, AR overlay, daily logs, issues, and photo capture. In development.",badge:"soon"},
        {name:"Zapier and Make",desc:"Connect MASON events — new issue, RFI status change, daily log submission — to thousands of other tools via Zapier and Make triggers.",badge:"soon"}
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
                  <div className="int-card__logo">
                    <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:40,height:40,background:"rgba(232,148,46,.08)",borderRadius:8}} dangerouslySetInnerHTML={{__html:INT_ICON}}/>
                  </div>
                  <p className="int-card__name">{item.name}</p>
                  <p className="int-card__desc">{item.desc}</p>
                  <span className={"int-card__badge int-card__badge--"+item.badge}>{BADGE_LABELS[item.badge]}</span>
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
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <h2>REST API and webhooks</h2>
          <p>
            Every piece of data in MASON — projects, issues, RFIs, documents, schedule tasks,
            cost items, daily logs, submittals, and user records — is accessible via a versioned
            REST API. The API is available on Professional and Scale plans.
          </p>
          <p>
            Authentication uses OAuth 2.0 with scoped access tokens. Create read-only tokens
            for reporting integrations or full read-write tokens for two-way syncs. Rate limits
            are generous and fully documented.
          </p>
          <h3>Webhooks for real-time triggers</h3>
          <p>
            Register webhook endpoints that receive a POST request the moment a state change
            occurs in your project — new issue created, RFI assigned, document revision uploaded.
            No polling required. Your system receives the event payload within seconds.
          </p>
          <h3>Want to build a custom integration?</h3>
          <p>
            Email us at <a href="mailto:connect@masononsite.com" style={{color:"var(--accent)",textDecoration:"none",fontWeight:600}}>connect@masononsite.com</a>.
            Our engineering team reviews every request and responds within one business day.
            Scale plan customers receive dedicated integration support.
          </p>
        </div>
        <div className="gsap-slide-right">
          <div style={{background:"#0a0a10",border:"1px solid var(--line)",borderRadius:14,padding:28,fontFamily:"var(--font-mono)",fontSize:13}}>
            <p style={{color:"var(--text-faint)",marginBottom:16,fontSize:11}}>// Fetch open RFIs for a project</p>
            <p style={{color:"#4ade80"}}>GET /api/v1/projects/:id/rfis</p>
            <p style={{color:"var(--text-muted)",marginTop:8}}>Authorization: Bearer &lt;token&gt;</p>
            <br/>
            <p style={{color:"var(--text-faint)"}}>// Response</p>
            <pre style={{color:"var(--text-muted)",fontSize:12,lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"}}>{`{
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
              <p style={{color:"var(--text-faint)",fontSize:12,fontFamily:"var(--font-sans)",margin:0}}>
                API documentation available to Professional and Scale plan customers.
                Contact <a href="mailto:connect@masononsite.com" style={{color:"var(--accent)",textDecoration:"none"}}>connect@masononsite.com</a> to get access.
              </p>
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
    {q:"Do I need a developer to set up integrations?",a:`Most pre-built integrations — Autodesk, MS Project, Procore migration, Slack and Teams notifications — are configured through the MASON settings interface with no code required. The REST API and webhooks require a developer or someone comfortable with REST and JSON.`},
    {q:"Are integrations included in all plans?",a:`Pre-built integrations with Autodesk, MS Project, Slack, and Teams are included on all paid plans. The full REST API is available on Professional and Scale plans. Custom integration support and dedicated setup assistance is available on Scale.`},
    {q:"Can I migrate my Procore project history into MASON?",a:`Yes. The Procore migration tool transfers issues, RFIs, submittals, and document registers with full history. Photos and attachments transfer. Drawing annotations do not transfer due to format differences, but the underlying documents do. The process typically takes a few hours for a large project.`},
    {q:"Do you support custom ERP integrations?",a:`Scale plan customers can request custom ERP integration work. We have done this for SAP, Oracle, Sage, and several regional ERP systems. Scope and timeline depend on the ERP's API capability and the data model required. Email connect@masononsite.com to discuss.`},
    {q:"What happens to integrations when you update the API?",a:`We version the API. Changes within a major version are backwards compatible. When a new major version ships, we give a minimum six-month notice period and maintain the previous version in parallel. We have not had a breaking change yet, but this is the commitment if we do.`}
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
    <div className="container" style={{maxWidth:600}}>
      <div style={{textAlign:"center"}} className="gsap-fade-up">
        <h2 className="h2">Need an integration that is not listed?</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 12px"}}>
          Some of our best integrations were built because a customer asked.
          If there is a tool you rely on that is not here, let us know.
        </p>
        <p style={{fontSize:15,margin:"0 0 32px"}}>
          <a href="mailto:connect@masononsite.com" style={{color:"var(--accent)",fontWeight:600,textDecoration:"none"}}>
            connect@masononsite.com
          </a>
        </p>
        <p style={{fontSize:13,color:"var(--text-faint)",lineHeight:1.6}}>
          Enterprise customers with bespoke ERP or data residency requirements should
          email <a href="mailto:connect@masononsite.com" style={{color:"var(--accent)",textDecoration:"none"}}>connect@masononsite.com</a>.
        </p>
      </div>
    </div>
  </section>
);

const IntegrationsPage = () => {
  React.useEffect(() => {
    document.body.classList.add('gsap-ready');
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach(el => {
        gsap.from(el, {opacity:0,y:30,duration:0.6,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-left").forEach(el => {
        gsap.from(el, {opacity:0,x:-40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-right").forEach(el => {
        gsap.from(el, {opacity:0,x:40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
    }
  }, []);
  return (
    <main>
        <IntHero />
        <IntGrid />
        <IntAPI />
        <IntFAQ />
        <IntCTA />
      </main>
  );
};

export default IntegrationsPage;
