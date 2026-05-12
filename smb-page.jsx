// smb-page.jsx -- SMB audience page for MASON

const SmbHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" />
    <div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">MASON for growing contractors</span>
        <h1 className="page-hero__title gsap-fade-up">
          Ship jobs with less<br />
          <span style={{color:"var(--accent)"}}>tool chaos.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Small and mid-size general contractors do not need enterprise software complexity.
          They need one system that handles RFIs, issues, daily logs, documents, and schedule —
          that works on the phone in the foreman's pocket and on the laptop in the site office —
          at a price that makes sense for a 3-project team running 6 next year.
        </p>
        <div className="page-hero__cta gsap-fade-up" style={{display:"flex",gap:14,flexWrap:"wrap",marginTop:32}}>
          <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">Start free trial</a>
          <a href="pricing.html" className="btn btn-ghost btn-lg">See pricing</a>
        </div>
        <p className="gsap-fade-up" style={{fontSize:13,color:"var(--text-faint)",marginTop:16}}>
          30-day free trial. No credit card. All 12 modules from day one.
        </p>
      </div>
    </div>
  </section>
);

const SmbWins = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <span className="eyebrow">Day-one wins</span>
        <h2 className="h2">Replace the tools your team already resents.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          Most small GC teams manage construction with a combination of email threads, shared
          folders, WhatsApp groups, and a spreadsheet someone built three jobs ago. MASON
          replaces all of it without a six-month rollout.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:24,marginTop:56}}>
        {[
          {
            before:"Email chains for RFIs",
            after:"Structured RFI log with deadlines, responses, and automatic document linking. Every RFI is traceable, searchable, and attached to the drawing revision it relates to."
          },
          {
            before:"WhatsApp for issues",
            after:"A single issues log with photos, assignments, due dates, and priority levels. The foreman adds it on the Android app. The PM sees it immediately. No information lost in a chat thread."
          },
          {
            before:"Shared folders for documents",
            after:"A document register with revision control, distribution records, and one-click download. Subcontractors access the documents they need. Nothing else."
          },
          {
            before:"Spreadsheets for daily logs",
            after:"Daily log capture on mobile, with weather, crew count, work completed, and equipment. Exportable to PDF for contract record purposes in one click."
          }
        ].map((win,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"rgba(244,239,230,.3)",background:"rgba(255,255,255,.05)",padding:"4px 8px",borderRadius:4,textDecoration:"line-through"}}>Before</span>
              <span style={{fontSize:13,color:"rgba(244,239,230,.4)"}}>{win.before}</span>
            </div>
            <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.75,margin:0}}>{win.after}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SmbBIM = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <span className="eyebrow">BIM without the enterprise tax</span>
          <h2>Your IFC models in the browser. No Autodesk account required.</h2>
          <p>
            BIM used to mean an expensive viewer licence on top of an expensive modelling
            licence on top of a coordination platform that only large companies could afford.
            MASON includes a full federated IFC viewer in every plan.
          </p>
          <p>
            Upload your IFC file. Open it in the browser. Federate multiple models from different
            disciplines. Isolate floors, systems, or trades. When you find a clash, convert it
            into an RFI in one click — the model coordinates, the affected parties, and the
            relevant document revision all attach automatically.
          </p>
          <p>
            On the Android app, point your phone at the site and overlay BIM elements onto the
            live camera view. No specialist hardware. No dedicated AR viewer. Just the app your
            foreman already has on their phone.
          </p>
          <a href="bim-ar.html" style={{color:"var(--accent)",display:"inline-flex",alignItems:"center",gap:6,fontWeight:600,marginTop:8,textDecoration:"none"}}>Read more about BIM and AR →</a>
        </div>
        <div className="gsap-slide-right">
          <div style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,padding:32}}>
            <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:20}}>What you get with BIM on MASON</p>
            {[
              "Federated IFC viewer in the browser",
              "No Autodesk account or Forge licence needed",
              "Clash detection with RFI creation in one click",
              "Android AR field overlay — IFC on site",
              "Model isolation by floor, trade, or system",
              "Linked to document revisions and issues",
              "BIM access on mobile browser and Android app",
              "Included on every plan — no add-on fee"
            ].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:"1px solid var(--line)"}}>
                <span style={{color:"var(--accent)",fontWeight:700,flexShrink:0}}>→</span>
                <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SmbPricing = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <span className="eyebrow">Pricing that makes sense</span>
        <h2 className="h2">Per project, not per person. That changes everything.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          Per-seat pricing punishes you for bringing subcontractors into the system. MASON
          charges per active project. Add your whole team, all your subcontractors, and all
          your clients. The price does not change based on how many people are in the room.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:24,marginTop:56}}>
        {[
          {
            title:"Starter",
            price:"$49",
            unit:"/project/month",
            desc:"For small contractors and independent PMs. Up to 3 active projects, all 12 modules, unlimited users, 30-day free trial included.",
            cta:"Start free trial",
            href:"https://app.masononsite.com/register"
          },
          {
            title:"Professional",
            price:"$149",
            unit:"/project/month",
            desc:"For growing GCs and project teams. Up to 15 active projects, unlimited AI Concierge, advanced reports, and full API access.",
            cta:"Start free trial",
            href:"https://app.masononsite.com/register",
            featured:true
          },
          {
            title:"Scale",
            price:"$399",
            unit:"/project/month",
            desc:"For principal contractors and programme managers. Unlimited projects, SAML SSO, dedicated support manager, DPA, and 99.9% SLA.",
            cta:"Start free trial",
            href:"https://app.masononsite.com/register"
          }
        ].map((tier,i)=>(
          <div key={i} className={"value-card gsap-fade-up"+(tier.featured?" value-card--featured":"")} style={tier.featured?{borderColor:"var(--accent)"}:{}}>
            {tier.featured && <span style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--accent)",display:"block",marginBottom:12}}>Most popular</span>}
            <p style={{fontWeight:700,fontSize:17,margin:"0 0 4px"}}>{tier.title}</p>
            <div style={{display:"flex",alignItems:"baseline",gap:4,margin:"12px 0 16px"}}>
              <span style={{fontSize:32,fontWeight:800,color:"var(--text)"}}>{tier.price}</span>
              {tier.unit && <span style={{fontSize:13,color:"var(--text-muted)"}}>{tier.unit}</span>}
            </div>
            <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.7,margin:"0 0 24px",flex:1}}>{tier.desc}</p>
            <a href={tier.href} className={"btn "+(tier.featured?"btn-primary":"btn-ghost")} style={{alignSelf:"flex-start"}}>{tier.cta}</a>
          </div>
        ))}
      </div>
      <p style={{marginTop:32,fontSize:13,color:"var(--text-faint)",textAlign:"center"}}>
        All prices are per active project per month. Annual billing available with a 20% discount.
        Unlimited team members on every plan. <a href="pricing.html" style={{color:"var(--accent)"}}>See full pricing details →</a>
      </p>
    </div>
  </section>
);

const SmbSurfaces = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <span className="eyebrow">Works everywhere your team works</span>
        <h2 className="h2">Same workflows. No compromise on desk or site.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          The PM runs the schedule on their laptop. The super checks RFIs on their phone in
          the site office trailer. The foreman logs daily progress on the Android app from the
          fourth floor. MASON is the same system, adapted for all three.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24,marginTop:56}} className="surfaces-grid">
        {[
          {
            label:"Desktop browser",
            badge:"Full command deck",
            items:["All 12 modules","Gantt schedule editor","Full BIM viewer + clash detection","Document management + revisions","Cost and budget module","PDF and Excel report export","Admin and user management"]
          },
          {
            label:"Mobile browser",
            badge:"Same app, any phone",
            items:["Issues, RFIs, submittals","Document download and review","Daily log capture","BIM viewer on mobile","Meeting notes","Real-time notifications","Works on any modern smartphone"]
          },
          {
            label:"Android app",
            badge:"Capture-first for field",
            items:["Native Android install","Camera-based issue logging","AR field BIM overlay","Biometric sign-in","AI Concierge on site","Offline sync for poor signal areas","Bottom nav built for one hand"]
          }
        ].map((surface,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <span style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--accent)",display:"block",marginBottom:8}}>{surface.badge}</span>
            <h3 style={{fontSize:16,fontWeight:700,margin:"0 0 20px"}}>{surface.label}</h3>
            {surface.items.map((item,j)=>(
              <div key={j} style={{display:"flex",gap:10,padding:"7px 0",borderBottom:"1px solid var(--line)"}}>
                <span style={{color:"var(--accent)",fontWeight:700,flexShrink:0,fontSize:12}}>·</span>
                <span style={{fontSize:13.5,color:"var(--text-muted)"}}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SmbConcierge = () => (
  <section className="section">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <span className="eyebrow">AI Concierge</span>
          <h2>Ask it what you would normally have to search for yourself.</h2>
          <p>
            The AI Concierge in MASON is not a general-purpose chatbot. It is grounded in your
            actual project data — the RFIs filed, the issues logged, the documents uploaded,
            the daily logs submitted. When you ask it a question, it answers from that data, not
            from the internet.
          </p>
          <p>
            For a small team, this means you can ask "what are the three oldest open RFIs on
            the Riverside site?" and get the answer immediately instead of opening a filter
            and scrolling. You can ask "summarise the issues logged this week" and get a
            structured summary with counts by status and assignee.
          </p>
          <p>
            It can draft an RFI from a clash you found in the BIM viewer. It can pull together
            a weekly status report from the daily logs. It can tell you which submittals are
            still pending a response. For a team of four managing three projects, this is
            the kind of leverage that used to require a dedicated project coordinator.
          </p>
        </div>
        <div className="gsap-slide-right">
          <div style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,padding:32}}>
            <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:24}}>What teams ask the Concierge</p>
            {[
              "What are the open RFIs past their due date on this project?",
              "Summarise the issues logged in the last seven days",
              "Draft an RFI for the clash between the MEP duct and the structural beam at gridline C4",
              "Which submittals are waiting on a response from the engineer?",
              "What did the foreman log on Tuesday for the groundworks crew?",
              "Generate a weekly progress summary from the daily logs"
            ].map((q,i)=>(
              <div key={i} style={{display:"flex",gap:12,padding:"11px 0",borderBottom:"1px solid var(--line)"}}>
                <span style={{color:"var(--accent)",fontWeight:700,flexShrink:0,fontSize:14}}>"</span>
                <span style={{fontSize:13.5,color:"var(--text-muted)",fontStyle:"italic",lineHeight:1.6}}>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SmbFAQ = () => {
  const [open,setOpen]=React.useState(null);
  const items=[
    {q:"How long does it take to get a project running in MASON?",a:"Most teams have their first project set up and their team invited within 15 minutes of starting the trial. Loading a BIM model and configuring the document structure takes another 30 minutes. We have a step-by-step setup guide and you can book a free 30-minute setup call if you want someone to walk you through it."},
    {q:"Do I have to train my subcontractors?",a:"No. Subcontractors are invited to a project and given access to only the documents and workflows they need. The interface for filing a daily log or responding to an RFI is straightforward enough that most subcontractors do not need any training. If someone gets stuck, they contact us — not you."},
    {q:"What happens if I finish a project? Do I keep paying?",a:"No. You only pay for active projects. When a project is complete, you mark it as closed and it drops off your billing. You can archive it and access the records at any time. The billing adjusts at your next cycle."},
    {q:"Can I start with one project and add more later?",a:"Yes. This is the most common way teams start. Start a trial on one active project, get your team comfortable with the workflow, and add additional projects as you need them. The pricing scales with the number of active projects you are running."},
    {q:"Does MASON work without an internet connection?",a:"The Android app has offline sync capability for daily logs and issue capture — your team can work in areas with poor connectivity and the data syncs when signal returns. The browser-based interface requires an internet connection."},
    {q:"Do I need to be technical to set up MASON?",a:"No. MASON is configured through a browser interface. Loading a BIM model, inviting users, setting up a document folder structure, and configuring RFI workflows are all done through the UI — no code, no IT department required. If you can use Google Drive, you can set up MASON."},
    {q:"What support do I get on the Starter plan?",a:"The Starter plan includes email support with a one business day response time and access to our documentation and video library. You can also post in the community forum where both the MASON team and other users answer questions."}
  ];
  return (
    <section className="section bg-subtle">
      <div className="container" style={{maxWidth:820}}>
        <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
          <span className="eyebrow">Common questions</span>
          <h2 className="h2">What small teams ask before switching.</h2>
        </div>
        <div className="faq-list" style={{marginTop:48}}>
          {items.map((item,i)=>(
            <div key={i} className="faq-entry">
              <button className={"faq-entry__q"+(open===i?" is-open":"")} onClick={()=>setOpen(open===i?null:i)}>
                {item.q}<span className="faq-entry__chevron">›</span>
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

const SmbCTA = () => (
  <section className="section">
    <div className="container" style={{maxWidth:700,textAlign:"center"}}>
      <div className="gsap-fade-up" style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:20,padding:"56px 48px"}}>
        <span className="eyebrow" style={{display:"block",marginBottom:20}}>Ready to run cleaner projects</span>
        <h2 className="h2" style={{margin:"0 0 20px"}}>Start your first project in MASON today.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginBottom:36,maxWidth:480,margin:"0 auto 36px"}}>
          Thirty day free trial, no credit card, all 12 modules from the moment you sign up.
          Most teams are logging their first issue within 20 minutes.
        </p>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">Start free trial</a>
          <a href="contact.html" className="btn btn-ghost btn-lg">Book a walkthrough</a>
        </div>
        <p style={{fontSize:13,color:"var(--text-faint)",marginTop:20}}>
          Questions? <a href="contact.html" style={{color:"var(--accent)"}}>Talk to us first</a> — no pressure.
        </p>
      </div>
    </div>
  </section>
);

const SmbPage = () => {
  React.useEffect(() => {
    document.body.classList.add("gsap-ready");
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach(el => {
        gsap.from(el,{opacity:0,y:30,duration:0.6,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-left").forEach(el => {
        gsap.from(el,{opacity:0,x:-40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-right").forEach(el => {
        gsap.from(el,{opacity:0,x:40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
    }
  },[]);
  return (
    <React.Fragment>
      <Header />
      <main>
        <SmbHero />
        <SmbWins />
        <SmbBIM />
        <SmbPricing />
        <SmbSurfaces />
        <SmbConcierge />
        <SmbFAQ />
        <SmbCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SmbPage />);
