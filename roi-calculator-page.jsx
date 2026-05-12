// roi-calculator-page.jsx

const ROIHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">ROI calculator</span>
        <h1 className="page-hero__title gsap-fade-up">
          What does your current setup<br />
          <span style={{color:"var(--accent)"}}>actually cost you?</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Most teams underestimate how much they spend managing construction projects across
          disconnected tools. Use this calculator to see what your current setup costs in
          software, rework time, and admin overhead versus a single MASON deployment.
        </p>
      </div>
    </div>
  </section>
);

const ROICalculator = () => {
  const [team, setTeam] = React.useState(20);
  const [projects, setProjects] = React.useState(5);
  const [rfiHours, setRfiHours] = React.useState(8);
  const [reportHours, setReportHours] = React.useState(6);
  const [reworkPct, setReworkPct] = React.useState(4);
  const [avgSalary, setAvgSalary] = React.useState(85000);
  const [currentSoftware, setCurrentSoftware] = React.useState(3500);

  const hourlyRate = avgSalary / 2080;
  const weeklyRFICost = rfiHours * team * 0.3 * hourlyRate;
  const weeklyReportCost = reportHours * team * 0.4 * hourlyRate;
  const annualRFICost = weeklyRFICost * 52;
  const annualReportCost = weeklyReportCost * 52;
  const annualReworkCost = (reworkPct / 100) * projects * 500000 * 0.02;
  const annualSoftwareCost = currentSoftware * 12;
  const totalCurrentCost = annualRFICost + annualReportCost + annualReworkCost + annualSoftwareCost;
  const masonCost = projects * 149 * 12;
  const annualSavings = totalCurrentCost - masonCost;
  const roiMultiple = totalCurrentCost > 0 ? (annualSavings / masonCost).toFixed(1) : 0;
  const paybackMonths = annualSavings > 0 ? Math.ceil((masonCost / annualSavings) * 12) : 0;

  const fmt = (n) => new Intl.NumberFormat("en-US", {style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);

  return (
    <section className="section">
      <div className="container">
        <div className="roi-calc">
          <div className="roi-calc__inputs">
            <h2 style={{fontSize:20,fontWeight:700,marginBottom:28}}>Tell us about your operation</h2>

            <div className="roi-input-group">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <label style={{fontSize:14,fontWeight:600}}>Team members on projects</label>
                <span style={{fontSize:14,color:"var(--accent)",fontWeight:700}}>{team}</span>
              </div>
              <input type="range" min={5} max={200} value={team} onChange={e=>setTeam(+e.target.value)} className="roi-slider" />
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                <span>5</span><span>200</span>
              </div>
            </div>

            <div className="roi-input-group">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <label style={{fontSize:14,fontWeight:600}}>Active projects at once</label>
                <span style={{fontSize:14,color:"var(--accent)",fontWeight:700}}>{projects}</span>
              </div>
              <input type="range" min={1} max={50} value={projects} onChange={e=>setProjects(+e.target.value)} className="roi-slider" />
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                <span>1</span><span>50</span>
              </div>
            </div>

            <div className="roi-input-group">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <label style={{fontSize:14,fontWeight:600}}>Hours per week per person on RFI admin</label>
                <span style={{fontSize:14,color:"var(--accent)",fontWeight:700}}>{rfiHours}h</span>
              </div>
              <input type="range" min={1} max={20} value={rfiHours} onChange={e=>setRfiHours(+e.target.value)} className="roi-slider" />
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                <span>1h</span><span>20h</span>
              </div>
            </div>

            <div className="roi-input-group">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <label style={{fontSize:14,fontWeight:600}}>Hours per week per person on reports</label>
                <span style={{fontSize:14,color:"var(--accent)",fontWeight:700}}>{reportHours}h</span>
              </div>
              <input type="range" min={1} max={15} value={reportHours} onChange={e=>setReportHours(+e.target.value)} className="roi-slider" />
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                <span>1h</span><span>15h</span>
              </div>
            </div>

            <div className="roi-input-group">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <label style={{fontSize:14,fontWeight:600}}>Estimated rework as % of project value</label>
                <span style={{fontSize:14,color:"var(--accent)",fontWeight:700}}>{reworkPct}%</span>
              </div>
              <input type="range" min={1} max={15} value={reworkPct} onChange={e=>setReworkPct(+e.target.value)} className="roi-slider" />
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                <span>1%</span><span>15%</span>
              </div>
            </div>

            <div className="roi-input-group">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <label style={{fontSize:14,fontWeight:600}}>Average staff salary (USD per year)</label>
                <span style={{fontSize:14,color:"var(--accent)",fontWeight:700}}>{fmt(avgSalary)}</span>
              </div>
              <input type="range" min={40000} max={200000} step={5000} value={avgSalary} onChange={e=>setAvgSalary(+e.target.value)} className="roi-slider" />
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                <span>{fmt(40000)}</span><span>{fmt(200000)}</span>
              </div>
            </div>

            <div className="roi-input-group">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <label style={{fontSize:14,fontWeight:600}}>Current software spend per month (USD)</label>
                <span style={{fontSize:14,color:"var(--accent)",fontWeight:700}}>{fmt(currentSoftware)}/mo</span>
              </div>
              <input type="range" min={0} max={20000} step={250} value={currentSoftware} onChange={e=>setCurrentSoftware(+e.target.value)} className="roi-slider" />
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                <span>0</span><span>{fmt(20000)}</span>
              </div>
            </div>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            <h2 style={{fontSize:20,fontWeight:700,marginBottom:4}}>Your estimated numbers</h2>

            <div className="roi-result-card roi-result-card--highlight">
              <p style={{fontSize:12,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",color:"var(--accent)",marginBottom:6}}>Annual savings with MASON</p>
              <p style={{fontSize:44,fontWeight:800,letterSpacing:"-1px",color:"var(--text)",margin:0}}>{fmt(Math.max(annualSavings,0))}</p>
              <p style={{fontSize:13,color:"var(--text-muted)",marginTop:4}}>Based on your inputs below</p>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <div className="roi-result-card">
                <p style={{fontSize:11,color:"var(--text-muted)",marginBottom:4,fontWeight:600,textTransform:"uppercase",letterSpacing:".08em"}}>ROI multiple</p>
                <p style={{fontSize:28,fontWeight:800,color:"var(--text)",margin:0}}>{roiMultiple}x</p>
              </div>
              <div className="roi-result-card">
                <p style={{fontSize:11,color:"var(--text-muted)",marginBottom:4,fontWeight:600,textTransform:"uppercase",letterSpacing:".08em"}}>Payback period</p>
                <p style={{fontSize:28,fontWeight:800,color:"var(--text)",margin:0}}>{paybackMonths} mo</p>
              </div>
            </div>

            <div className="roi-result-card">
              <p style={{fontSize:13,fontWeight:700,marginBottom:12}}>Cost breakdown: current setup</p>
              {[
                {label:"RFI and coordination admin time",value:annualRFICost},
                {label:"Reporting and document admin time",value:annualReportCost},
                {label:"Rework and clash resolution cost",value:annualReworkCost},
                {label:"Current software subscriptions",value:annualSoftwareCost},
              ].map((row,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid var(--line)",fontSize:13}}>
                  <span style={{color:"var(--text-muted)"}}>{row.label}</span>
                  <span style={{fontWeight:600,color:"var(--text)"}}>{fmt(row.value)}</span>
                </div>
              ))}
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0 0",fontSize:14,fontWeight:700}}>
                <span>Total annual cost</span>
                <span style={{color:"#ef4444"}}>{fmt(totalCurrentCost)}</span>
              </div>
            </div>

            <div className="roi-result-card">
              <p style={{fontSize:13,fontWeight:700,marginBottom:12}}>MASON cost for your setup</p>
              <div style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid var(--line)",fontSize:13}}>
                <span style={{color:"var(--text-muted)"}}>{projects} active projects x $149/mo x 12</span>
                <span style={{fontWeight:600,color:"var(--text)"}}>{fmt(masonCost)}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid var(--line)",fontSize:13}}>
                <span style={{color:"var(--text-muted)"}}>Additional seats</span>
                <span style={{fontWeight:600,color:"#4ade80"}}>Included</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"7px 0",fontSize:13}}>
                <span style={{color:"var(--text-muted)"}}>All 12 modules</span>
                <span style={{fontWeight:600,color:"#4ade80"}}>Included</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0 0",fontSize:14,fontWeight:700}}>
                <span>Total annual MASON cost</span>
                <span style={{color:"#4ade80"}}>{fmt(masonCost)}</span>
              </div>
            </div>

            <p style={{fontSize:12,color:"var(--text-muted)",lineHeight:1.6}}>
              These calculations are estimates based on industry averages. Your actual numbers
              will depend on your specific workflows, team size, and project types. We recommend
              booking a demo to get a customised analysis for your operation.
            </p>

            <a href="https://app.masononsite.com/register" className="btn btn-primary" style={{textAlign:"center"}}>Start free trial</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ROIContext = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:680}}>
        <h2 className="h2">Where construction teams lose money without knowing it</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          The direct cost of construction management software is easy to see on a credit card
          statement. The hidden costs are much larger and rarely tracked properly.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:24,marginTop:48}}>
        {[
          {
            icon:"?",
            heading:"RFI admin time",
            body:`The average site engineer on a mid-size project spends between six and ten hours
            per week just on RFI coordination. That is writing them, chasing responses, logging
            status updates, and formatting the register. At a fully loaded labour rate of even
            $50 per hour, a 20-person project team generates $60,000 or more per year in RFI
            admin cost alone. MASON cuts this by automating drafts, tracking status automatically,
            and linking RFIs to the BIM model so context is always in the same place.`
          },
          {
            icon:"?",
            heading:"Reporting overhead",
            body:`Daily logs, weekly progress reports, monthly owner reports, and end-of-project
            handover documents are all necessary. But on most projects, the same data gets
            re-entered three or four times across different systems before it ends up in a
            report. The MASON daily log, issue register, and RFI module all feed a single
            data model, so generating a progress report at any point is a matter of clicking
            generate rather than manually compiling from emails, spreadsheets, and
            disconnected apps.`
          },
          {
            icon:"?",
            heading:"Rework from coordination failures",
            body:`Industry benchmarks put construction rework costs at between 5% and 15% of
            total project value. The primary cause is coordination failures: clashes that were
            in the model but not caught in time, RFIs answered incorrectly because the
            answerer did not see the latest design version, and issues that stayed open past
            their impact window. MASON keeps the BIM model, RFI register, and issue log in
            the same system with automatic cross-references, so the information that prevents
            rework is available to everyone at the same time.`
          },
          {
            icon:"?",
            heading:"Per-user software licensing",
            body:`Most construction platforms charge per user per month. A 30-person project
            team at $50 per user per month is $18,000 per year before you add a second project.
            MASON charges per active project with unlimited users on that project. If you run
            ten simultaneous projects with 30 people on each, the per-user model costs
            $180,000 per year. MASON costs $17,880 for the same setup. The economics become
            more obvious as team size grows.`
          },
          {
            icon:"?",
            heading:"Integration and data re-entry",
            body:`When BIM lives in one tool, RFIs in another, cost in a spreadsheet, and
            schedule in a third application, someone has to keep them all in sync. That someone
            is usually a project administrator spending 20 or more hours per week on data
            re-entry that adds no value to the project. MASON puts all of this in one place.
            The BIM viewer, RFI register, cost module, schedule, and field logs all read from
            the same project data without any manual synchronisation.`
          },
          {
            icon:"?",
            heading:"Decision delays from poor visibility",
            body:`Decisions that could be made in an hour when the right information is
            immediately available can take days when that information is scattered across
            emails, shared drives, and disconnected applications. A contractor waiting two
            days for an RFI response that took three hours to get is a half-day delay on
            a compressed schedule. Multiply this across a project lifecycle and the cumulative
            impact on the programme is measurable. MASON gives every stakeholder the
            visibility they need to make faster, better-informed decisions.`
          }
        ].map((item,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <div style={{fontSize:28,marginBottom:14}}>{item.icon}</div>
            <p style={{fontWeight:700,fontSize:15,margin:"0 0 10px"}}>{item.heading}</p>
            <p style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.65,margin:0}}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ROIMethodology = () => (
  <section className="section">
    <div className="container" style={{maxWidth:740}}>
      <div className="prose-section gsap-fade-up">
        <h2>How we built this calculator</h2>
        <p>
          The figures in the ROI calculator are based on a combination of published industry
          research, data shared by MASON customers, and standard construction industry benchmarks.
          We have tried to be conservative rather than optimistic in every estimate, because we
          would rather understate the case and let the trial speak for itself than promise savings
          that do not materialise.
        </p>
        <h3>RFI admin time assumption</h3>
        <p>
          We assume that 30% of your team members spend a meaningful portion of their week on
          RFI coordination. This is based on average figures from construction productivity
          studies and our own customer conversations. If your team has dedicated document
          controllers, your number may be lower. If field engineers are doing their own RFI
          admin, it may be higher. Adjust the slider to match your reality.
        </p>
        <h3>Reporting overhead assumption</h3>
        <p>
          We assume 40% of your team spends meaningful time on reporting and documentation tasks.
          This includes daily logs, weekly summaries, and the overhead of maintaining consistent
          records across multiple systems. Teams that have invested in good processes may be
          lower. Teams running four or five disconnected tools may be higher.
        </p>
        <h3>Rework cost assumption</h3>
        <p>
          We use a conservative estimate that 2% of your rework percentage applies to
          coordination-related rework that better information management would have prevented.
          The full rework figure you enter is the industry-standard estimate for your project type.
          We are not claiming MASON eliminates all rework. We are claiming it eliminates the
          portion that comes from people not having the right information at the right time.
        </p>
        <h3>Software cost comparison</h3>
        <p>
          The calculator compares your current monthly software spend against MASON's per-project
          pricing of $149 per active project per month, with unlimited users and all 12 modules
          included. Your current spend should include all tools you are replacing or supplementing,
          not just the primary platform. Include the BIM viewer, the RFI tool, the document
          management system, and any project management software in that number.
        </p>
        <h3>What the calculator does not include</h3>
        <p>
          The calculator does not try to put a number on faster client satisfaction, lower stress
          on your project team, or the reputational benefit of fewer coordination failures. These
          are real but hard to quantify honestly. What the calculator does show is that even on
          a purely financial basis, the cost of fragmented project management tools is significantly
          higher than most teams realise.
        </p>
      </div>
    </div>
  </section>
);

const ROICTA = () => (
  <section className="section bg-subtle">
    <div className="container" style={{textAlign:"center",maxWidth:580}}>
      <div className="gsap-fade-up">
        <h2 className="h2">See the real numbers for your project</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
          The calculator gives you estimates. A demo gives you a real conversation about your
          specific operation. Book 30 minutes and we will model the numbers for your actual
          project setup, team size, and existing tools.
        </p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">Start free trial</a>
          <a href="contact.html" className="btn btn-ghost btn-lg">Book a demo</a>
        </div>
      </div>
    </div>
  </section>
);

const ROIPage = () => {
  React.useEffect(() => {
    document.body.classList.add('gsap-ready'); // CSS fallback: elements visible even if GSAP fails
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach(el => {
        gsap.from(el, {opacity:0,y:30,duration:0.6,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top 88%",toggleActions:"play none none none"}});
      });
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <main>
        <ROIHero />
        <ROICalculator />
        <ROIContext />
        <ROIMethodology />
        <ROICTA />
      </main>
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ROIPage />);
