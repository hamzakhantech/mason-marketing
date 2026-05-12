// compare-procore-page.jsx

const CPHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Honest comparison</span>
        <h1 className="page-hero__title gsap-fade-up">
          MASON vs Procore.<br />
          <span style={{color:"var(--accent)"}}>The facts, not the sales pitch.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Procore is the largest construction platform in the world. MASON is a newer platform
          that makes different choices about pricing, BIM capability, and AI. This page is a
          direct comparison. We try to be fair about what Procore does well and clear about
          where we think MASON is the better choice.
        </p>
      </div>
    </div>
  </section>
);

const CPPriceBlock = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640,marginBottom:40}}>
        <h2 className="h2">The pricing difference</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          Procore does not publish pricing publicly. Based on publicly available data, independent
          reports, and information from teams who have switched from Procore to MASON, a typical
          Procore contract for a mid-size construction company runs between $15,000 and $60,000 per
          year depending on revenue, user count, and modules. MASON is priced by active project.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 40px 1fr",gap:16,alignItems:"center",maxWidth:700}}>
        <div className="compare-side compare-side--mason gsap-fade-up">
          <span className="compare-side__badge">MASON</span>
          <p className="compare-side__price"><sup>$</sup>149</p>
          <p className="compare-side__note">per active project / month<br/>Unlimited team members included</p>
          <div style={{marginTop:16,fontSize:13,color:"var(--text-muted)",textAlign:"left"}}>
            {["15 active projects","All 12 modules included","All users included","BIM viewer included","AI Concierge included","API included"].map((f,i)=>(
              <div key={i} style={{display:"flex",gap:8,padding:"6px 0",borderBottom:"1px solid var(--line)"}}>
                <span style={{color:"#4ade80",fontWeight:700}}>✓</span>{f}
              </div>
            ))}
          </div>
        </div>
        <div className="vs-circle gsap-fade-up">vs</div>
        <div className="compare-side gsap-fade-up">
          <span className="compare-side__badge" style={{color:"var(--text-muted)",borderColor:"var(--text-muted)"}}>Procore</span>
          <p className="compare-side__price" style={{color:"var(--text-muted)"}}><sup>$</sup>???</p>
          <p className="compare-side__note">Custom pricing, not published<br/>Estimated $1,250 to $5,000/month</p>
          <div style={{marginTop:16,fontSize:13,color:"var(--text-muted)",textAlign:"left"}}>
            {["Per-user licensing","Modules sold separately","BIM requires Autodesk integration","AI features in early access","API on enterprise plans","Annual contracts typically required"].map((f,i)=>(
              <div key={i} style={{display:"flex",gap:8,padding:"6px 0",borderBottom:"1px solid var(--line)"}}>
                <span style={{color:"#ef4444",fontWeight:700}}>✕</span>{f}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p style={{fontSize:13,color:"var(--text-faint)",marginTop:20}}>
        Procore pricing is based on publicly available analyst reports and user-submitted data.
        Actual Procore pricing varies significantly by contract. We encourage you to get a quote
        from both and compare directly.
      </p>
    </div>
  </section>
);

const CPTable = () => {
  const rows = [
    {feature:"Pricing model",mason:"Per active project, unlimited users",procore:"Per user per year, custom contract"},
    {feature:"All modules included",mason:"Yes, every module on every plan",procore:"No, many modules sold as add-ons"},
    {feature:"BIM viewer",mason:"Browser native, no Autodesk required",procore:"Requires Autodesk integration and account"},
    {feature:"BIM format support",mason:"IFC 2x3 and IFC4 native",procore:"Autodesk proprietary formats native, IFC via conversion"},
    {feature:"Federated models",mason:"Yes, multi-discipline in one view",procore:"Yes, via Autodesk"},
    {feature:"AR on mobile",mason:"Android AR with IFC overlay",procore:"Not available natively"},
    {feature:"Mobile app",mason:"Android, full offline mode",procore:"iOS and Android, offline limited"},
    {feature:"iOS app",mason:"In development",procore:"Available"},
    {feature:"AI assistant",mason:"Project aware Concierge, all plans",procore:"Procore Copilot, limited availability"},
    {feature:"AI language support",mason:"8 languages",procore:"English primary"},
    {feature:"Offline field logging",mason:"Full offline mode, auto sync",procore:"Limited offline capability"},
    {feature:"RFI management",mason:"Full register, Concierge drafting",procore:"Full register, no AI drafting"},
    {feature:"Submittal register",mason:"Yes, included",procore:"Yes, included"},
    {feature:"Daily logs",mason:"Yes, mobile and offline",procore:"Yes, mobile"},
    {feature:"Cost control",mason:"Yes, forecast at completion",procore:"Yes, more advanced module"},
    {feature:"Schedule module",mason:"Gantt with predecessor logic",procore:"Gantt and Lookahead, more advanced"},
    {feature:"REST API",mason:"Full API, Professional and Scale plans",procore:"Full API, enterprise plans"},
    {feature:"Webhooks",mason:"Yes, all plans",procore:"Yes, enterprise plans"},
    {feature:"SAML SSO",mason:"Scale plan",procore:"Enterprise plan"},
    {feature:"Audit logs",mason:"Yes, all plans",procore:"Yes, all plans"},
    {feature:"Data export",mason:"Full export, any time, all plans",procore:"Export available"},
    {feature:"Free trial",mason:"30 days, all features, no card required",procore:"Demo only, no self-serve trial"},
    {feature:"Support",mason:"Email all plans, priority on Pro and Scale",procore:"Phone and email on most plans"},
    {feature:"Onboarding",mason:"Included on Pro and Scale",procore:"Paid implementation typically required"}
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 gsap-fade-up" style={{marginBottom:32}}>Feature by feature</h2>
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="compare-mason">MASON</th>
                <th>Procore</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row,i)=>(
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td className="compare-mason" style={{color:"var(--text)"}}>{row.mason}</td>
                  <td style={{color:"var(--text-muted)"}}>{row.procore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const CPWhenToChoose = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"start"}} className="about-story-grid">
        <div className="value-card gsap-slide-left" style={{borderColor:"rgba(232,148,46,.35)"}}>
          <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:16}}>Choose MASON when</p>
          {[
            "You want unlimited team members without per user fees",
            "Your team needs browser native BIM without an Autodesk account",
            "You want an AI assistant that is actually project aware today",
            "You need full offline mobile capability in the field",
            "You want a 30 day self-serve trial before committing",
            "You need a full platform but cannot justify an enterprise contract",
            "Your project team crosses multiple companies, subs, and consultants",
            "You want AR model overlay on Android without extra hardware"
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:"1px solid var(--line)"}}>
              <span style={{color:"#4ade80",fontWeight:700,flexShrink:0}}>✓</span>
              <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
            </div>
          ))}
        </div>
        <div className="value-card gsap-slide-right">
          <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:16}}>Procore may be better when</p>
          {[
            "You need an iOS app right now (ours is in development)",
            "You need the most advanced schedule module with earned value analysis",
            "You rely heavily on the Autodesk ecosystem for design workflow",
            "Your organisation requires SOC 2 Type II certification today",
            "You need phone support on a standard plan",
            "Your existing workflows are built entirely around Procore's specific data model",
            "You need a pre-built integration with a specific ERP that MASON does not yet support"
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:"1px solid var(--line)"}}>
              <span style={{color:"var(--text-muted)",fontWeight:700,flexShrink:0}}>→</span>
              <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CPMigration = () => (
  <section className="section">
    <div className="container" style={{maxWidth:740}}>
      <div className="prose-section gsap-fade-up">
        <h2>Switching from Procore to MASON</h2>
        <p>
          We have helped a number of teams migrate from Procore to MASON and we are honest about
          what that process involves. It is not a one-click import, but it is not as complicated
          as it might sound either.
        </p>
        <h3>What transfers cleanly</h3>
        <p>
          Issues, RFIs, submittals, and document registers all transfer with their full history.
          We have a migration tool that connects to the Procore API and pulls your data directly,
          so you do not need to export and re-import CSV files manually. The migration preserves
          record IDs, response chains, and document version history.
        </p>
        <h3>What requires some work</h3>
        <p>
          Drawing annotations do not transfer because Procore and MASON use different annotation
          formats. The documents themselves transfer but any markups made directly on drawings
          in Procore will need to be recreated. In practice, teams usually decide the annotation
          history is less important than the document history and move forward with clean documents
          in MASON.
        </p>
        <p>
          Custom workflows that were built in Procore using their workflow builder do not have
          a direct equivalent in MASON. We have standard workflows for RFIs, submittals, and
          approvals, but if you built something highly custom in Procore, we will need to
          discuss what the equivalent setup looks like in MASON.
        </p>
        <h3>How long does it take?</h3>
        <p>
          For a single project with a typical data set, the migration itself takes a few hours.
          The more significant time investment is getting your team familiar with how MASON works
          and setting up your permission structure. We include migration support in the onboarding
          for Professional and Scale plan customers and can do the migration for you rather than
          walking you through doing it yourself.
        </p>
      </div>
    </div>
  </section>
);

const CPComparePage = () => {
  React.useEffect(() => {
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
        <CPHero />
        <CPPriceBlock />
        <CPTable />
        <CPWhenToChoose />
        <CPMigration />
        <section className="section bg-subtle">
          <div className="container" style={{textAlign:"center",maxWidth:580}}>
            <div className="gsap-fade-up">
              <h2 className="h2">Try MASON free for 30 days</h2>
              <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
                No credit card. All 12 modules. Unlimited team members on your trial project.
                If you are migrating from Procore, book a demo and we will walk through the migration together.
              </p>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">Start free trial</a>
                <a href="contact.html" className="btn btn-ghost btn-lg">Talk about migration</a>
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
root.render(<CPComparePage />);
