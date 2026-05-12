// compare-fieldwire-page.jsx

const CFHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Honest comparison</span>
        <h1 className="page-hero__title gsap-fade-up">
          MASON vs Fieldwire.<br />
          <span style={{color:"var(--accent)"}}>Field tool vs full platform.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Fieldwire is a strong field management tool, particularly for task tracking, plan
          viewing, and punch lists on iOS and Android. MASON is a complete construction
          platform that covers BIM, RFIs, cost, schedule, and field work in one system.
          Here is a direct comparison so you can decide what your project actually needs.
        </p>
      </div>
    </div>
  </section>
);

const CFTable = () => {
  const rows = [
    {feature:"Pricing model",mason:"Per active project, unlimited users",fieldwire:"Per user per month"},
    {feature:"Free plan",mason:"No, but 30-day full trial",fieldwire:"Yes, limited to 3 users"},
    {feature:"BIM / IFC viewer",mason:"Browser native, IFC 2x3 and IFC4",fieldwire:"No IFC support, PDF plans only"},
    {feature:"Federated models",mason:"Yes, multi-discipline",fieldwire:"No"},
    {feature:"AR overlay on Android",mason:"Yes, full IFC model in AR",fieldwire:"No"},
    {feature:"RFI management",mason:"Full register with AI drafting",fieldwire:"Basic task-based RFI workflow"},
    {feature:"Submittal register",mason:"Yes, full submittal workflow",fieldwire:"No"},
    {feature:"Cost control",mason:"Yes, forecast at completion, budget tracking",fieldwire:"No"},
    {feature:"Schedule / Gantt",mason:"Yes, Gantt with predecessor logic",fieldwire:"No dedicated schedule module"},
    {feature:"Daily logs",mason:"Yes, with offline Android support",fieldwire:"Yes, mobile logs"},
    {feature:"Issues / punch list",mason:"Yes, linked to BIM and RFIs",fieldwire:"Yes, strong punch list"},
    {feature:"AI assistant",mason:"Project aware, 8 languages",fieldwire:"No"},
    {feature:"Document register",mason:"Full version controlled register",fieldwire:"Plan management focused"},
    {feature:"Offline mode",mason:"Full Android offline sync",fieldwire:"Plan viewing offline, limited data entry"},
    {feature:"iOS app",mason:"In development",fieldwire:"Yes, strong iOS"},
    {feature:"REST API",mason:"Professional and Scale plans",fieldwire:"Business plan and above"},
    {feature:"Reporting",mason:"Cross module report generation",fieldwire:"Basic task and progress reports"},
    {feature:"Free trial",mason:"30 days, all features, no card",fieldwire:"Free plan available"}
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr><th>Feature</th><th className="compare-mason">MASON</th><th>Fieldwire</th></tr>
            </thead>
            <tbody>
              {rows.map((row,i)=>(
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td className="compare-mason" style={{color:"var(--text)"}}>{row.mason}</td>
                  <td style={{color:"var(--text-muted)"}}>{row.fieldwire}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const CFWhenToChoose = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}} className="about-story-grid">
        <div className="value-card gsap-slide-left" style={{borderColor:"rgba(232,148,46,.35)"}}>
          <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:16}}>Choose MASON when</p>
          {[
            "You need BIM coordination alongside field management",
            "Your team needs RFIs, submittals, and cost control in one place",
            "You need an AI assistant that knows your project",
            "Per user pricing is creating a collaboration bottleneck",
            "You need AR overlay on Android for site verification",
            "You want a full construction platform rather than a field tool"
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:"1px solid var(--line)"}}>
              <span style={{color:"#4ade80",fontWeight:700,flexShrink:0}}>✓</span>
              <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
            </div>
          ))}
        </div>
        <div className="value-card gsap-slide-right">
          <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:16}}>Fieldwire may be better when</p>
          {[
            "You primarily need a punch list and task management tool",
            "iOS is the main mobile platform for your field team",
            "You want a free tier to start with minimal commitment",
            "Your workflow is built around PDF plan markup rather than IFC models",
            "You have a small team that fits within Fieldwire's free user limit"
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

const CFComparePage = () => {
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
        <CFHero />
        <CFTable />
        <CFWhenToChoose />
        <section className="section">
          <div className="container" style={{textAlign:"center",maxWidth:580}}>
            <div className="gsap-fade-up">
              <h2 className="h2">See MASON in action</h2>
              <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
                Start a 30 day free trial with all 12 modules. No credit card required. Or book a demo to see the BIM viewer, RFI workflow, and AI Concierge live.
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
root.render(<CFComparePage />);
