// contact-page.jsx -- Full Contact page for MASON

var CON_ICONS={"calendar":`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,"mail":`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,"refresh":`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,"handshake":`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.77L12 21.23l7.65-7.65.77-.77a5.4 5.4 0 0 0 0-7.23z"/></svg>`};

const ContactHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" />
    <div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Talk to us</span>
        <h1 className="page-hero__title gsap-fade-up">
          We are a real team.<br />
          <span style={{color:"var(--accent)"}}>Real responses, same day.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Whether you want to book a 30 minute demo, ask a specific question about a module,
          or talk through migrating from another platform, there is a real person at MASON who
          handles each of these things and will actually get back to you. Here is how to reach us.
        </p>
      </div>
    </div>
  </section>
);

const ContactOptions = () => (
  <section className="section">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:24,marginBottom:72}}>
        {[
          {
            icon:"calendar",
            heading:"Book a product demo",
            sub:"30 minutes, live walkthrough",
            body:`We will walk you through the platform using your specific project type as the
            example. Not a sales call. Not a pitch. A working session where we show you exactly
            how MASON would handle your RFI workflow, your BIM coordination, your daily logs,
            and your reporting. Fill in the form below and select "Product demo" as the reason.`,
            cta:"Book a demo",
            href:"#contact-form"
          },
          {
            icon:"mail",
            heading:"Ask a technical question",
            sub:"We answer the same day",
            body:`Have a specific question about how the BIM viewer handles federated models, or
            whether MASON supports the contract format your project is running on, or how the
            offline sync works on Android? Ask us. We will give you a straight answer, not a
            sales brochure. Use the form below and select "Technical question."`,
            cta:"Send a question",
            href:"#contact-form"
          },
          {
            icon:"refresh",
            heading:"Migration consultation",
            sub:"Moving from Procore, Aconex, Fieldwire",
            body:`If you are currently on another platform and thinking about switching, we can
            help you understand exactly what a migration would look like for your data. We have
            done this enough times that we have a clear picture of what is straightforward and
            what takes more planning. There are no surprises if we talk through it first.`,
            cta:"Discuss migration",
            href:"#contact-form"
          },
          {
            icon:"handshake",
            heading:"Partnership enquiry",
            sub:"Integrations, resellers, referrals",
            body:`If you represent a software company that wants to build an integration with
            MASON, a consultancy that wants to recommend it to clients, or a company that
            operates in adjacent spaces and wants to explore a partnership, we want to hear
            from you. Email us at partners@masononsite.com or use the form.`,
            cta:"Explore partnership",
            href:"#contact-form"
          }
        ].map((opt,i)=>(
          <div key={i} className="value-card gsap-fade-up" style={{display:"flex",flexDirection:"column"}}>
            <div style={{fontSize:32,marginBottom:14}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:48,height:48,background:"rgba(232,148,46,.1)",borderRadius:12,marginBottom:14}} dangerouslySetInnerHTML={{__html:CON_ICONS[opt.icon]||""}}/></div>
            <p style={{fontWeight:700,fontSize:16,margin:"0 0 4px"}}>{opt.heading}</p>
            <p style={{fontSize:12,color:"var(--accent)",fontWeight:600,margin:"0 0 14px",letterSpacing:".04em"}}>{opt.sub}</p>
            <p style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.7,flex:1,margin:"0 0 20px"}}>{opt.body}</p>
            <a href={opt.href} className="btn btn-ghost" style={{alignSelf:"flex-start"}}>{opt.cta}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({name:"",email:"",company:"",role:"",reason:"demo",projects:"",message:""});
  const set = (k) => (e) => setForm({...form,[k]:e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section bg-subtle" id="contact-form">
        <div className="container" style={{maxWidth:600,textAlign:"center"}}>
          <div className="gsap-fade-up" style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,padding:48}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(74,222,128,.12)",border:"1px solid rgba(74,222,128,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,margin:"0 auto 24px"}}>check</div>
            <h2 style={{fontSize:24,fontWeight:700,marginBottom:12}}>Message sent</h2>
            <p style={{fontSize:15,color:"var(--text-muted)",lineHeight:1.7,marginBottom:24}}>
              Thank you. We will get back to you at {form.email} within one business day.
              If you booked a demo, expect a calendar invite within a few hours.
            </p>
            <p style={{fontSize:13,color:"var(--text-faint)"}}>
              While you wait, you might want to read about{" "}
              <a href="features.html" style={{color:"var(--accent)"}}>all 12 MASON modules</a> or
              check out <a href="pricing.html" style={{color:"var(--accent)"}}>the pricing page</a>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-subtle" id="contact-form">
      <div className="container" style={{maxWidth:760}}>
        <div className="section__header gsap-fade-up" style={{maxWidth:560,marginBottom:40}}>
          <h2 className="h2">Send us a message</h2>
          <p style={{fontSize:15,color:"var(--text-muted)",marginTop:12,lineHeight:1.7}}>
            Fill in the form below and the right person on our team will respond.
            We do not route everything through a general inbox and hope for the best.
            Demos go to the product team. Technical questions go to engineering. Migration
            queries go to the people who have actually done the migrations.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:20}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
            <div>
              <label className="form-label">Your name <span>*</span></label>
              <input className="form-input" value={form.name} onChange={set("name")} placeholder="James Okafor" required />
            </div>
            <div>
              <label className="form-label">Work email <span>*</span></label>
              <input className="form-input" type="email" value={form.email} onChange={set("email")} placeholder="james@constructco.com" required />
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
            <div>
              <label className="form-label">Company or project name <span>*</span></label>
              <input className="form-input" value={form.company} onChange={set("company")} placeholder="Construct Co." required />
            </div>
            <div>
              <label className="form-label">Your role</label>
              <input className="form-input" value={form.role} onChange={set("role")} placeholder="Project Manager, BIM Coordinator..." />
            </div>
          </div>
          <div>
            <label className="form-label">What is this about? <span>*</span></label>
            <select className="form-select" value={form.reason} onChange={set("reason")} required>
              <option value="demo">I want to book a product demo</option>
              <option value="technical">I have a technical question</option>
              <option value="migration">I want to discuss migrating from another platform</option>
              <option value="trial">I started a trial and need help</option>
              <option value="pricing">I have a pricing or billing question</option>
              <option value="partnership">I want to discuss a partnership</option>
              <option value="press">Press or media enquiry</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div>
            <label className="form-label">How many active projects does your team typically run?</label>
            <select className="form-select" value={form.projects} onChange={set("projects")}>
              <option value="">Not sure yet</option>
              <option value="1-3">1 to 3 projects</option>
              <option value="4-10">4 to 10 projects</option>
              <option value="11-25">11 to 25 projects</option>
              <option value="25+">More than 25 projects</option>
            </select>
          </div>
          <div>
            <label className="form-label">Your message <span>*</span></label>
            <textarea className="form-textarea" value={form.message} onChange={set("message")}
              placeholder="Tell us what you are working on, what questions you have, or what you would like to cover in the demo. The more detail you give us, the more useful the conversation will be."
              style={{minHeight:140}} required />
          </div>
          <div className="form-submit-row">
            <button type="submit" className="btn btn-primary btn-lg">Send message</button>
            <p className="form-note">We respond within one business day. Usually faster.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

const WhatHappensInADemo = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <h2 className="h2">What actually happens in a demo</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          We have run hundreds of product demos and we have learned that the most useful ones
          are the ones that use a real project scenario rather than a canned walkthrough.
          Here is exactly how we run them.
        </p>
      </div>
      <div className="steps" style={{maxWidth:640}}>
        {[
          {
            heading:"Before the call",
            body:`We read what you told us in the contact form. If you mentioned a specific project
            type, a specific challenge, or a platform you are coming from, we prepare the demo
            around that context. We do not show you a generic residential project if your team
            runs infrastructure contracts.`
          },
          {
            heading:"First 5 minutes: understanding your situation",
            body:`We start by asking a few questions to make sure we are showing you the right
            parts of the platform. How big is your team? What modules matter most right now?
            What is the biggest frustration with how you are currently working? This is not a
            qualification call. We want to know where to focus.`
          },
          {
            heading:"The live walkthrough: 20 minutes",
            body:`We walk you through the platform live, not a recording. We load a real IFC model
            in the BIM viewer, show you how an issue created from a clash automatically populates
            an RFI draft, run through the daily log on mobile, and show you what a generated
            report looks like from the actual data. If you want to go deeper on a specific
            module, we do that. If you want to skip something that is not relevant, we skip it.`
          },
          {
            heading:"Questions and honest answers: 5 minutes",
            body:`We leave time at the end for whatever questions you have. This includes the
            questions we do not love answering, like whether a specific integration you need
            exists yet, or whether a particular feature on your requirements list is on the
            roadmap. We give you straight answers. If something is not there yet, we tell you.`
          },
          {
            heading:"Next steps: your choice",
            body:`At the end of the demo, you decide what happens next. If you want to start a
            30 day free trial, we set that up in the same call. If you want to share the recording
            with colleagues before deciding, we send you that. If you are not ready, that is fine
            too. There is no follow-up pressure.`
          }
        ].map((step,i)=>(
          <div key={i} className="step gsap-fade-up">
            <div className="step__num">{i+1}</div>
            <div>
              <p className="step__heading">{step.heading}</p>
              <p style={{fontSize:14.5,color:"var(--text-muted)",lineHeight:1.75,margin:0}}>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactInfoCards = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <h2 className="h2">Other ways to reach us</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          The contact form is the fastest route to the right person, but here are the
          direct channels for specific situations.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20,marginTop:48}}>
        {[
          {
            heading:"General enquiries",
            email:"hello@masononsite.com",
            note:"For anything not covered by the categories above. We read every email."
          },
          {
            heading:"Technical support",
            email:"support@masononsite.com",
            note:"For customers with active accounts needing help with a specific issue. Response within 4 hours on Professional and Scale plans."
          },
          {
            heading:"Partnership and integrations",
            email:"partners@masononsite.com",
            note:"For API integration requests, reseller conversations, and technology partnerships."
          },
          {
            heading:"Press and media",
            email:"press@masononsite.com",
            note:"For interview requests, product coverage, or data on MASON usage. We respond to press enquiries within 24 hours."
          }
        ].map((card,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <p style={{fontWeight:700,fontSize:15,margin:"0 0 8px"}}>{card.heading}</p>
            <a href={"mailto:"+card.email} style={{color:"var(--accent)",fontWeight:600,fontSize:15,display:"block",marginBottom:10,textDecoration:"none"}}>{card.email}</a>
            <p style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.65,margin:0}}>{card.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactBeforeDemo = () => (
  <section className="section">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"start"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <h2>Common questions before the demo</h2>
          <p>
            Most people who book a demo have a few of the same questions before they get on the
            call. We have answered them here so you do not have to wait.
          </p>
          <h3>Do I need to prepare anything?</h3>
          <p>
            No. The demo is set up for you to show up and ask questions. If you want to get
            more out of it, the most useful thing you can bring is a specific challenge your
            current team is dealing with, or a specific module you want to understand in depth.
            That lets us focus the 30 minutes on what matters to you.
          </p>
          <h3>Will someone try to sell me on the call?</h3>
          <p>
            No. The demo is run by a product person, not a sales person. Our goal is to show
            you honestly what MASON can and cannot do for your team. If it is a good fit, you
            will be able to see that yourself. If it is not, we would rather tell you that than
            waste your time or ours.
          </p>
          <h3>Can I record the demo to share with colleagues?</h3>
          <p>
            Yes. Let us know when you book and we will record the session and send you the link
            afterward. We have had teams where the final decision maker was not on the initial
            call, and this makes that process easier.
          </p>
          <h3>What if I want to start a trial immediately?</h3>
          <p>
            We can set up your trial account during the call. You will have full access to all
            12 modules from the moment the trial starts. No credit card is required and the trial
            runs for 30 days on the Professional plan so you can test everything without restrictions.
          </p>
          <h3>Can I invite my whole team to the demo?</h3>
          <p>
            Yes. Some of our best demo sessions have had four or five people from the same team
            on the call, covering different disciplines. If your BIM coordinator, project manager,
            and quantity surveyor all want to be there, we are very happy to make that work.
          </p>
        </div>
        <div className="gsap-slide-right">
          <div style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,padding:32}}>
            <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:20}}>What the 30 minute demo covers</p>
            {[
              "Live BIM viewer with a real IFC model in the browser",
              "Issue creation from a BIM clash with automatic RFI draft",
              "Daily log workflow on the Android app",
              "Schedule and cost module overview",
              "AI Concierge responding to a project specific query",
              "Report generation from live module data",
              "Permission model and user management",
              "How to start your 30 day trial on the same call"
            ].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:"1px solid var(--line)"}}>
                <span style={{color:"var(--accent)",fontWeight:700,flexShrink:0}}>-></span>
                <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
              </div>
            ))}
            <p style={{fontSize:13,color:"var(--text-faint)",marginTop:16,lineHeight:1.6}}>
              The demo is 30 minutes. We cover what matters to you, not a fixed script.
              Add any specific requests in the contact form before we meet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactForCustomers = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <h2 className="h2">Already a MASON customer?</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          Your account includes support access. Here is how to get help depending on what you need.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20,marginTop:48}}>
        {[
          {
            heading:"In-app support chat",
            desc:"The fastest route for most questions. Open MASON, click the support icon in the lower right corner, and start a conversation. We monitor the in-app chat during business hours across all time zones.",
            badge:"Fastest"
          },
          {
            heading:"Email support",
            desc:"Send an email to support@masononsite.com. Include your project ID if the question is project specific. All plans get a one business day response. Professional plans get a four hour response during business hours.",
            badge:"All plans"
          },
          {
            heading:"Priority phone support",
            desc:"Scale plan customers have a dedicated customer success manager and phone support number included in their contract. If you need to speak with someone urgently, this is the channel.",
            badge:"Scale plan"
          },
          {
            heading:"Monthly customer webinar",
            desc:"Every month we run a 45 minute webinar for all customers covering what shipped in the last month, what is coming next, and tips from teams using MASON on active projects. Registration link is sent to all active accounts.",
            badge:"All customers"
          }
        ].map((card,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <span style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",display:"block",marginBottom:10}}>{card.badge}</span>
            <p style={{fontWeight:700,fontSize:15,margin:"0 0 10px"}}>{card.heading}</p>
            <p style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.65,margin:0}}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactFAQ = () => {
  const [open, setOpen] = React.useState(null);
  const items = [
    {q:"How quickly do you respond to demo requests?",a:`We confirm demo bookings within a few hours and typically schedule them within two to three business days depending on availability. If you have an urgent timeline, mention it in the message and we will try to accommodate same or next day.`},
    {q:"Do you offer demos outside of standard business hours?",a:`Yes. We have team members across multiple time zones and can schedule demos to cover most of the working day from UTC-8 to UTC+8. If you are based outside those hours, mention your time zone in the form and we will find a time that works.`},
    {q:"I already started a trial but I am stuck. What do I do?",a:`Go to the in-app help chat first, that is the fastest route. Alternatively email support@masononsite.com with your project name and a description of what you are trying to do. We can also schedule a 15 minute screen share to walk you through whatever is blocking you.`},
    {q:"Can I talk to an actual customer before deciding?",a:`Yes. We have a small group of customers who have agreed to speak with prospective teams about their experience with MASON. They are independent and will give you an honest account. Ask us to arrange this in the contact form.`},
    {q:"Do you have a self-service trial without booking a demo?",a:`Yes. You can start a free trial directly at app.masononsite.com/register without talking to anyone. You get 30 days on the Professional plan with all 12 modules. The demo is optional, not required. A lot of teams prefer to explore the platform on their own first.`},
    {q:"I want to use MASON for a large programme. Is there an enterprise option?",a:`Yes. The Scale plan covers unlimited active projects and includes SAML SSO, a dedicated support manager, and custom onboarding. For very large programmes or organisations with specific data residency, custom integration, or audit requirements, we handle those on a custom contract. Use the contact form and select "partnership" or email us directly at enterprise@masononsite.com.`}
  ];
  return (
    <section className="section">
      <div className="container" style={{maxWidth:820}}>
        <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
          <h2 className="h2">Frequently asked questions about contacting us</h2>
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

const ContactPage = () => {
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
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <WhatHappensInADemo />
        <ContactBeforeDemo />
        <ContactInfoCards />
        <ContactForCustomers />
        <ContactFAQ />
      </main>
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContactPage />);
