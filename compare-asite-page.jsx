// compare-asite-page.jsx

const CAHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Honest comparison</span>
        <h1 className="page-hero__title gsap-fade-up">
          MASON vs Asite.<br />
          <span style={{color:"var(--accent)"}}>CDE platform vs modern construction OS.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Asite is an established common data environment used by large infrastructure
          programmes and enterprise construction firms. MASON is a newer platform built
          around browser-native BIM, AI-assisted workflows, and per-project pricing that
          does not penalise you for adding team members. Here is a direct comparison
          so you can make an informed decision.
        </p>
      </div>
    </div>
  </section>
);

const CATable = () => {
  const rows = [
    {feature:"Pricing model",mason:"Per active project, unlimited users",asite:"Per user per month, custom enterprise contracts"},
    {feature:"Free trial",mason:"30 days, all features, no card required",asite:"Demo only, no self-serve trial"},
    {feature:"BIM viewer",mason:"Browser native, no plugin required",asite:"Requires desktop viewer install or plugin"},
    {feature:"BIM format support",mason:"IFC 2x3 and IFC4 native",asite:"IFC import, primarily DWG and NWD focused"},
    {feature:"Federated models",mason:"Yes, multi-discipline in one browser view",asite:"Yes, via desktop viewer"},
    {feature:"AR overlay",mason:"Android AR with full IFC model",asite:"Not available"},
    {feature:"Mobile app",mason:"Android, full feature set, full offline mode",asite:"iOS and Android, limited feature set"},
    {feature:"Offline field logging",mason:"Full offline mode with auto sync",asite:"Limited offline capability"},
    {feature:"AI assistant",mason:"Project-aware Concierge on all plans",asite:"Not available"},
    {feature:"RFI management",mason:"Full register, AI drafting, BIM-linked",asite:"Full register within CDE workflow"},
    {feature:"Submittal register",mason:"Yes, included",asite:"Yes, included"},
    {feature:"Document management",mason:"Full version control, all file types",asite:"Core strength, full CDE document control"},
    {feature:"Issue management",mason:"Linked to BIM elements and RFIs",asite:"Workflow-based issue management"},
    {feature:"Daily logs",mason:"Full module, mobile, offline",asite:"Limited daily reporting"},
    {feature:"Cost control",mason:"Budget tracking, forecast at completion",asite:"Basic cost module"},
    {feature:"Schedule module",mason:"Gantt with predecessor logic",asite:"Basic schedule management"},
    {feature:"REST API",mason:"Full API on Professional and Scale plans",asite:"API available on enterprise plans"},
    {feature:"SAML SSO",mason:"Scale plan",asite:"Available on enterprise plans"},
    {feature:"Data residency",mason:"EU West default, US/APAC/UAE on Scale",asite:"Multiple regional options"},
    {feature:"Audit logs",mason:"All plans, tamper-proof",asite:"Available"},
    {feature:"Support",mason:"Email all plans, priority on Pro and Scale",asite:"Support on paid plans"},
    {feature:"Setup and onboarding",mason:"Included on Pro and Scale",asite:"Implementation services available"}
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr><th>Feature</th><th className="compare-mason">MASON</th><th>Asite</th></tr>
            </thead>
            <tbody>
              {rows.map((row,i)=>(
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td className="compare-mason" style={{color:"var(--text)"}}>{row.mason}</td>
                  <td style={{color:"var(--text-muted)"}}>{row.asite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const CAWhereTheyDiffer = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:680}}>
        <h2 className="h2">Where these platforms actually differ</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          Both platforms manage construction project information. But they make different
          assumptions about who uses the platform, how they access it, and what the
          most important workflows are.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:24,marginTop:48}}>
        {[
          {
            heading:"Browser-native vs desktop-first",
            body:`Asite was built when desktop applications were the primary way to view and
            manage construction documents. Much of its functionality still works best through
            a dedicated desktop client or browser plugin. MASON was built entirely for the
            browser. The BIM viewer, RFI register, document module, and everything else runs
            natively in Chrome, Edge, or Safari with no installation required. For teams where
            not everyone has a dedicated workstation, and especially for teams where subcontractors
            and consultants need occasional access, this is a meaningful practical difference.`
          },
          {
            heading:"AI vs no AI",
            body:`MASON includes an AI Concierge on every plan that is genuinely project-aware.
            It knows the RFI register, the issue log, the schedule, and the document history
            for your project. You can ask it to draft an RFI response, summarise overdue
            items, or explain what is blocking a specific area of the programme. Asite
            does not currently offer AI-assisted project management. If AI-assisted
            workflows are a priority for your team, this is the clearest differentiator
            between the two platforms today.`
          },
          {
            heading:"Field-first vs document-first",
            body:`Asite's core strength is document management and CDE compliance. It is the
            record-of-truth for everything that flows between the client, designer, and
            contractor in a formal contract environment. MASON's strength is that field
            teams can do their actual job in the app: log daily progress offline, create
            issues from the AR view on their Android phone, mark up RFIs without going
            to a desktop. MASON has a full document module too, but the field experience
            is more developed than Asite's current mobile capability.`
          },
          {
            heading:"Per project vs per user pricing",
            body:`Asite charges per user per month. On a large project with 50 active team
            members, that is 50 seats per month regardless of how often each person actually
            uses the platform. MASON charges per active project. You can have 50, 100, or
            200 people on a project and the monthly cost does not change. For main contractors
            managing large project teams including subcontractors and specialist consultants,
            MASON's pricing model is almost always significantly cheaper once you count
            everyone who actually needs access.`
          },
          {
            heading:"Newer platform, faster iteration",
            body:`Asite has been operating for more than 20 years. That means a proven track
            record and deep integrations with enterprise procurement processes. It also means
            a product built on older architectural decisions that are slow to update. MASON
            was designed from scratch in 2023. We move faster on product development, we
            ship significant new features monthly, and we have not yet accumulated the
            technical debt that slows down older platforms. The tradeoff is that MASON
            has a shorter track record. We are honest about this and we offer a 30-day
            full trial so you can evaluate the actual product before committing.`
          },
          {
            heading:"Enterprise certifications",
            body:`Asite has a longer list of enterprise compliance certifications built up
            over two decades. For some public sector and large infrastructure programmes,
            the procurement process specifically requires ISO 27001 certification or
            equivalent. MASON is ISO 27001 aligned and currently undergoing formal certification,
            with SOC 2 Type II in progress for completion in Q4 2026. GDPR and UK GDPR compliance
            are in place. If your procurement process requires specific certifications that
            MASON does not yet hold, we will tell you honestly. We would rather lose a deal
            than promise something we cannot deliver.`
          }
        ].map((item,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <p style={{fontWeight:700,fontSize:15,margin:"0 0 10px"}}>{item.heading}</p>
            <p style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.65,margin:0}}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CAWhenToChoose = () => (
  <section className="section">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}} className="about-story-grid">
        <div className="value-card gsap-slide-left" style={{borderColor:"rgba(232,148,46,.35)"}}>
          <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:16}}>Choose MASON when</p>
          {[
            "You need browser-native BIM with no desktop installs",
            "Your field team needs full offline capability on Android",
            "You want an AI assistant that actually knows your project data",
            "Per user pricing is creating friction when adding subcontractors",
            "You want a self-serve 30-day trial before any sales conversation",
            "Your team spans multiple companies and many occasional users",
            "AR model overlay on site for verification and clash resolution matters",
            "You want all modules included without per-feature pricing"
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:"1px solid var(--line)"}}>
              <span style={{color:"#4ade80",fontWeight:700,flexShrink:0}}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
            </div>
          ))}
        </div>
        <div className="value-card gsap-slide-right">
          <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:16}}>Asite may be better when</p>
          {[
            "Your procurement process requires ISO 27001 or SOC 2 certification today",
            "Your project requires formal CDE compliance with specific regulatory standards",
            "You have existing enterprise contracts and integrations with Asite",
            "iOS mobile is the primary platform for your field team",
            "Your legal team has already approved Asite in your vendor list",
            "The project is a large infrastructure programme with multi-decade record keeping"
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:"1px solid var(--line)"}}>
              <span style={{color:"var(--text-muted)",fontWeight:700,flexShrink:0}}>-></span>
              <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CAMigration = () => (
  <section className="section bg-subtle">
    <div className="container" style={{maxWidth:740}}>
      <div className="prose-section gsap-fade-up">
        <h2>Migrating from Asite to MASON</h2>
        <p>
          We have helped teams migrate document registers, RFI histories, and issue logs from
          Asite into MASON. The process is more manual than our Procore migration because Asite
          does not offer the same level of API access, but it is entirely workable for most
          project types.
        </p>
        <h3>What we can migrate</h3>
        <p>
          Document registers transfer with their full revision history. We export from Asite
          in standard formats and import into MASON's document module with metadata intact.
          RFI history, issue logs, and correspondence records all transfer with their response
          chains and timestamps. If you have an active project on Asite and want to move it
          mid-flight, we have done this before and we can walk you through the process without
          disrupting the project.
        </p>
        <h3>What requires attention</h3>
        <p>
          Asite-specific workflow automations and approval chains do not transfer directly.
          MASON has its own approval workflow structure and you will need to re-configure
          your approval chains in the new system. For most teams this takes a few hours
          rather than days, but it is not zero effort. Custom report templates from Asite
          also need to be rebuilt in MASON. The underlying data transfers. The presentation
          layer needs to be reconfigured.
        </p>
        <h3>Running both during transition</h3>
        <p>
          If you have long-running projects that need to stay on Asite for contractual
          reasons while new projects start on MASON, this is a common approach and works
          well. You do not need to migrate everything at once. Many teams start MASON on
          a new project to evaluate it properly before committing to a full migration.
          The 30-day free trial is designed for exactly this: run MASON in parallel on a
          real project and compare the experience directly.
        </p>
      </div>
    </div>
  </section>
);

const CAComparePage = () => {
  React.useEffect(() => {
    document.body.classList.add('gsap-ready'); // CSS fallback: elements visible even if GSAP fails
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
    <React.Fragment>
      <Header />
      <main>
        <CAHero />
        <CATable />
        <CAWhereTheyDiffer />
        <CAWhenToChoose />
        <CAMigration />
        <section className="section">
          <div className="container" style={{textAlign:"center",maxWidth:580}}>
            <div className="gsap-fade-up">
              <h2 className="h2">Try MASON on a real project</h2>
              <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
                30 days free, all 12 modules, no credit card. Run it in parallel with your
                current setup and compare the experience directly before making any decisions.
              </p>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">Start free trial</a>
                <a href="contact.html" className="btn btn-ghost btn-lg">Book a demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CAComparePage />);
