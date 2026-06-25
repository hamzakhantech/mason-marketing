import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const CSHero = () => (
  <InnerPageHero
    eyebrow="Real projects. Real results."
    title={
      <>
        Construction teams using MASON<br />
        <span className="inner-hero__accent">and the numbers they got.</span>
      </>
    }
    lead={
      <>
        Documented outcomes from GC and specialty sub teams that replaced spreadsheets and email threads with MASON. BIM coordination, RFI management, daily logs, change order tracking — the numbers below are from real projects. Names and locations are anonymised at clients' request.
      </>
    }
  />
);

const CSSummaryStats = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:24}} className="gsap-fade-up">
        {[
          {value:"62%",label:"Average reduction in RFI response time across documented projects"},
          {value:"3.4x",label:"More issues captured per project compared to pre-MASON baseline"},
          {value:"8 hrs",label:"Average weekly hours saved per project manager on reporting"},
          {value:"100%",label:"Field teams able to log daily data without internet connectivity"},
          {value:"47",label:"Active projects currently live on MASON across four continents"},
          {value:"$0",label:"Extra cost to add a subcontractor, consultant, or client user to any project"}
        ].map((s,i)=>(
          <div key={i} style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:12,padding:24,textAlign:"center"}}>
            <span className="stat-cell__value">{s.value}</span>
            <span className="stat-cell__label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => {
  const cases = [
    {
      type:"Residential High-Rise",
      headline:"A 34-storey residential tower in the Gulf cut their average RFI response time from 11 days to 4 days.",
      meta:"340,000 sqm GFA . 280 team members . Gulf region . 26 months",
      challenge:`This project came to MASON 8 months into construction, at a point where the RFI backlog had grown to over
      200 open items and the coordination team was spending most of their week manually chasing responses via email. The
      design team was in Europe. The contractor was running a team of site engineers across three shifts. Nobody had a
      reliable view of which RFIs were blocking which work packages.`,
      solution:`MASON replaced the email-based RFI workflow with a structured register where every RFI had an assigned
      reviewer, a due date, and a clear link to the relevant drawing revision and BIM element. The Concierge was configured
      to draft the initial response text for RFIs that referenced existing contract clauses, which took about 40% of the
      manual drafting work off the coordinator's plate. The project team also loaded the full federated IFC model into the
      MASON viewer, which let the coordination meetings happen directly inside the platform without needing to share screen
      on a separate BIM viewer.`,
      outcome:`Within 60 days of switching, the average RFI response time dropped from 11 working days to 4 working days.
      The backlog cleared within 90 days. The coordination team reported that they had better visibility into the status
      of open items than at any previous point in the project. The project manager noted that the weekly coordination
      meeting preparation time dropped from 3 hours to 45 minutes because the data was already live in the system.`,
      stats:[{value:"11->4",label:"Days average RFI response"},{value:"200+",label:"Backlog cleared in 90 days"},{value:"75%",label:"Reduction in meeting prep time"}],
      quote:"The federated model and the RFI register being in the same place changed how our coordination meetings worked completely. We stopped arguing about what the model showed and started actually making decisions.",
      cite:"Senior BIM Coordinator, residential tower project"
    },
    {
      type:"Infrastructure Contract",
      headline:"A road and bridge package in Southeast Asia used MASON's offline Android app to capture field data from 14 separate construction fronts simultaneously.",
      meta:"47 km road corridor . 6 bridges . 340 field staff . Southeast Asia . 38 months",
      challenge:`The project covered a 47 kilometre road corridor with six bridge structures and multiple cut and fill
      operations happening concurrently. Field supervisors at the remote construction fronts had no reliable mobile
      connectivity and had been using paper daily logs which were collected and manually transcribed into a spreadsheet
      at the site office each evening. This created a minimum 24 hour lag on progress data and frequent transcription
      errors that distorted the cost forecasts.`,
      solution:`MASON's Android app was deployed to 47 Android tablets across the 14 active construction fronts.
      Supervisors recorded daily progress, workforce counts, plant utilisation, and issue photos directly into the app
      in offline mode. When the tablets connected to site WiFi at the end of each shift, the data synced automatically
      to the central project account. The project team set up a custom daily log template that matched their existing
      paper form exactly, which made the transition straightforward for field staff who were not comfortable with technology.`,
      outcome:`The 24 hour data lag was eliminated on day one. Progress data was available in the system within minutes
      of each shift ending rather than the following morning after manual transcription. The cost team reported that
      the accuracy of their fortnightly forecast-at-completion calculations improved significantly because they were
      working from actual daily production data rather than estimated progress. The paper logs were phased out within
      three weeks with no pushback from field staff.`,
      stats:[{value:"24hr->0",label:"Data lag eliminated"},{value:"14",label:"Concurrent construction fronts connected"},{value:"3 weeks",label:"Full paper log phase-out"}],
      quote:"Our supervisors had never used a tablet for anything on site. Within a week they were faster on the app than they had been on paper. The offline mode meant there was no excuse not to log.",
      cite:"Project Controls Manager, infrastructure project"
    },
    {
      type:"Commercial Office Fit-out Programme",
      headline:"A property developer running a rolling programme of office fit-outs across six buildings used MASON to manage all coordination and cost tracking from a single account.",
      meta:"6 concurrent fit-out projects . 18,000 to 45,000 sqm each . Western Europe . Rolling programme",
      challenge:`The developer had six concurrent office fit-out projects in different stages of construction. Each project
      was managed by a different main contractor but the developer had their own project management team overseeing all
      six. The problem was that each contractor was using different software, which meant the developer's team had to
      log into six separate platforms to get a programme-level view. Cost data was in spreadsheets. Issues had to be
      chased via email. There was no standardised RFI or submittal format across the programme.`,
      solution:`MASON was set up with one account covering all six projects. Each project had its own separate data space
      with its own permission model, but the developer's programme management team had a cross-project dashboard view.
      All six main contractors were invited into the platform on the same account without additional cost. Standard
      templates were set up for RFIs, submittals, and daily logs that applied across all projects, giving the
      developer's team consistent data regardless of which contractor was running which site.`,
      outcome:`The developer's programme management team went from spending two hours each morning logging into six
      platforms and compiling a status summary to opening one dashboard and having the same information live. The
      cost team was able to do cross-programme cost analysis for the first time, comparing forecast-at-completion
      accuracy across different contractors and project types. Contractor on-boarding to the platform took less than
      a day per project because the templates were pre-configured.`,
      stats:[{value:"6 in 1",label:"Projects managed from a single account"},{value:"2hrs->15min",label:"Daily status compilation time"},{value:"6",label:"Contractors on one account with zero added seat cost"}],
      quote:"We could finally see across all six projects at once without building a spreadsheet every morning. The cost comparison across contractors was something we had never been able to do before.",
      cite:"Head of Project Management, property developer"
    }
  ];

  return (
    <section className="section">
      <div className="container" style={{display:"flex",flexDirection:"column",gap:40}}>
        {cases.map((c,i)=>(
          <div key={i} className="case-card gsap-fade-up">
            <div className="case-card__header">
              <span className="case-card__type">{c.type}</span>
              <h2 className="case-card__headline">{c.headline}</h2>
              <p className="case-card__meta">{c.meta}</p>
            </div>
            <div className="case-card__body">
              <div className="case-card__stats">
                {c.stats.map((s,j)=>(
                  <div key={j} className="case-stat">
                    <span className="case-stat__value">{s.value}</span>
                    <span className="case-stat__label">{s.label}</span>
                  </div>
                ))}
              </div>
              <h3 style={{fontSize:11,fontWeight:700,marginBottom:10,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:".06em"}}>The challenge</h3>
              <p style={{fontSize:14.5,color:"var(--text-muted)",lineHeight:1.75,marginBottom:20}}>{c.challenge}</p>
              <h3 style={{fontSize:11,fontWeight:700,marginBottom:10,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:".06em"}}>What they used</h3>
              <p style={{fontSize:14.5,color:"var(--text-muted)",lineHeight:1.75,marginBottom:20}}>{c.solution}</p>
              <h3 style={{fontSize:11,fontWeight:700,marginBottom:10,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:".06em"}}>The result</h3>
              <p style={{fontSize:14.5,color:"var(--text-muted)",lineHeight:1.75}}>{c.outcome}</p>
              <div className="case-card__quote">
                <p>"{c.quote}"</p>
                <cite>{c.cite}</cite>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CSCTA = () => (
  <section className="section bg-subtle">
    <div className="container" style={{textAlign:"center",maxWidth:600}}>
      <div className="gsap-fade-up">
        <h2 className="h2">Your project could be next</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
          Start a 30 day free trial with all 12 modules and no credit card. Or book a demo
          and we will walk through how MASON would work for your specific project type.
        </p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">Start free trial</a>
          <a href="/contact" className="btn btn-ghost btn-lg">Book a demo</a>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudiesPage = () => {
  React.useEffect(() => {
    document.body.classList.add('gsap-ready'); // CSS fallback: elements visible even if GSAP fails
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach(el => {
        gsap.from(el, {opacity:0,y:30,duration:0.6,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
    }
  }, []);
  return (
    <main>
        <CSHero />
        <CSSummaryStats />
        <CaseStudies />
        <CSCTA />
      </main>
  );
};
export default CaseStudiesPage;
