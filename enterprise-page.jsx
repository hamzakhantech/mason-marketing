// enterprise-page.jsx -- Enterprise audience page for MASON

import React from "react";

const EntHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" />
    <div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">MASON for Enterprise</span>
        <h1 className="page-hero__title gsap-fade-up">
          One system for your<br />
          <span style={{color:"var(--accent)"}}>full construction programme.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Large general contractors and owners' representatives need more than a field tool.
          They need a system that gives every stakeholder — from the PMO to the foreman on site —
          the right view of the right data, with the access controls and audit trail that
          procurement and IT will actually accept.
        </p>
        <div className="page-hero__cta gsap-fade-up" style={{display:"flex",gap:14,flexWrap:"wrap",marginTop:32}}>
          <a href="/contact" className="btn btn-primary btn-lg">Contact sales</a>
          <a href="https://app.masononsite.com" className="btn btn-ghost btn-lg">Sign in</a>
        </div>
      </div>
    </div>
  </section>
);

const EntWhy = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <span className="eyebrow">Why enterprise teams evaluate MASON</span>
        <h2 className="h2">Built for programmes, not just projects.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          Most construction platforms are optimised for a single project team. MASON is
          designed around the reality that enterprise organisations run multiple concurrent
          projects, with different stakeholder groups needing different levels of access,
          and different reporting requirements rolling up to a programme level.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:24,marginTop:56}}>
        {[
          {
            n:"01",
            title:"Portfolio visibility",
            body:"Every active project visible in one dashboard. Issues, RFIs, open submittals, schedule variance, and cost summary across your full programme — not just the ones you happen to remember to check."
          },
          {
            n:"02",
            title:"Permission-aware access",
            body:"Role hierarchy covers account-level and project-level permissions independently. The client sees what you want them to see. The subcontractor sees their scope. The QS sees cost without touching the model configuration."
          },
          {
            n:"03",
            title:"Audit-ready workflows",
            body:"Every document revision, RFI response, issue resolution, and submittal decision is time-stamped and attributed to a named user. The audit log exports to PDF or CSV for contract and regulatory purposes."
          },
          {
            n:"04",
            title:"BIM in the browser",
            body:"Federate multiple IFC models across disciplines and view them together without any Autodesk account or Forge licence. Clashes convert to RFIs with one click. The model, the issue, and the document version link automatically."
          }
        ].map((c,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <span className="mono" style={{fontSize:11,color:"var(--accent)",letterSpacing:".1em",display:"block",marginBottom:12}}>{c.n}</span>
            <h3 style={{fontSize:17,fontWeight:700,margin:"0 0 10px"}}>{c.title}</h3>
            <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.75,margin:0}}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EntModules = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"start"}} className="about-story-grid">
        <div className="gsap-slide-left">
          <span className="eyebrow">What is included</span>
          <h2 className="h2" style={{marginTop:16}}>All 12 modules. Every plan. No module gating.</h2>
          <p style={{fontSize:15,color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
            Enterprise deals do not unlock features that smaller teams cannot access.
            MASON is one product. The difference at enterprise scale is governance, onboarding
            depth, support SLA, and the ability to negotiate custom data terms for very large programmes.
          </p>
          <p style={{fontSize:15,color:"var(--text-muted)",lineHeight:1.75,marginTop:12}}>
            Every team on every plan gets: portfolio dashboard, projects, BIM viewer, AR field
            overlay, schedule (Gantt + baseline), cost and budget module, issues, RFIs, submittals,
            documents, daily logs, meetings, quality, safety, reports, AI Concierge, and the
            native Android app.
          </p>
          <div style={{marginTop:32,display:"flex",gap:12,flexWrap:"wrap"}}>
            <a href="/platform" className="btn btn-ghost">See all 12 modules</a>
            <a href="/contact" className="btn btn-primary">Talk to enterprise sales</a>
          </div>
        </div>
        <div className="gsap-slide-right">
          <div style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,padding:32}}>
            <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:20}}>Enterprise plan includes</p>
            {[
              ["Portfolio dashboard","All projects, all metrics, one screen"],
              ["Unlimited active projects","No project caps on Scale"],
              ["Unlimited team members","No per-seat pricing on any plan"],
              ["BIM + AR field overlay","Browser IFC viewer, Android AR"],
              ["Full audit log","Time-stamped, exportable, attributed"],
              ["AI Concierge","Project-grounded retrieval and drafting"],
              ["SAML SSO","Available on Scale plan"],
              ["Dedicated support manager","Named contact, priority SLA"],
              ["Custom onboarding","Structured programme rollout support"],
              ["Custom data terms","For programmes with specific residency needs"]
            ].map(([feat,note],i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"10px 0",borderBottom:"1px solid var(--line)",gap:16}}>
                <span style={{fontSize:14,fontWeight:500}}>{feat}</span>
                <span style={{fontSize:12,color:"var(--text-muted)",textAlign:"right",flexShrink:0,maxWidth:"45%"}}>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EntGovernance = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <span className="eyebrow">Governance and access</span>
        <h2 className="h2">The permission model your organisation already expects.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          Enterprise construction organisations cannot have a flat permission model. Different
          people need different access to different projects at different stages.
          MASON handles this natively.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:24,marginTop:56}}>
        {[
          {
            title:"Account-level roles",
            body:"Organisation owners, admins, and members operate at the account level. Account owners can see and configure any project. Admins manage users and settings. Members only see projects they are explicitly added to."
          },
          {
            title:"Project-level roles",
            body:"Within each project, roles include Project Manager, Engineer, BIM Coordinator, Subcontractor, Client Observer, and more. Each role has a defined permission set covering what they can create, view, edit, and approve."
          },
          {
            title:"Module-level visibility",
            body:"Cost and budget data is permission-gated independently of other modules. A subcontractor can file daily logs and respond to RFIs without ever seeing the contract cost breakdown or budget variance."
          },
          {
            title:"Company isolation",
            body:"Subcontractor companies are scoped to their assigned scope of work. They cannot see other subcontractors' submissions, private RFI threads, or documents they are not party to — even within the same project."
          }
        ].map((c,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <h3 style={{fontSize:16,fontWeight:700,margin:"0 0 10px"}}>{c.title}</h3>
            <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.75,margin:0}}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EntSecurity = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <span className="eyebrow">Security and trust</span>
          <h2>What your IT and procurement team will ask about.</h2>
          <p>
            We have been through enough procurement questionnaires to know the questions
            that come up every time. Here are straight answers.
          </p>
          <h3>Data in transit and at rest</h3>
          <p>
            All data transmitted to and from MASON is encrypted in transit using TLS 1.2
            or higher. Data at rest is encrypted using AES-256. File storage uses Cloudflare R2
            with server-side encryption enabled.
          </p>
          <h3>Hosting and infrastructure</h3>
          <p>
            The MASON API runs on Render. The frontend is served via Vercel's edge network.
            File assets are stored on Cloudflare R2. All three providers maintain their own
            SOC 2 compliance programmes. We can provide their compliance documentation on request.
          </p>
          <h3>Access control and authentication</h3>
          <p>
            MASON supports email/password authentication with bcrypt hashing and SAML SSO
            on the Scale plan for organisations that require it. Session tokens are short-lived.
            Brute-force protection is applied to all authentication endpoints.
          </p>
          <h3>Audit logs and data export</h3>
          <p>
            Every user action that modifies data is recorded in the audit log with timestamp,
            user identity, and change description. Audit logs can be exported at any time.
            Your data can be exported in full on request — we do not hold it hostage.
          </p>
          <a href="/security" style={{color:"var(--accent)",display:"inline-flex",alignItems:"center",gap:6,fontWeight:600,marginTop:8,textDecoration:"none"}}>Read the full security documentation →</a>
        </div>
        <div className="gsap-slide-right">
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {[
              {label:"Encryption in transit",detail:"TLS 1.2+"},
              {label:"Encryption at rest",detail:"AES-256"},
              {label:"File storage",detail:"Cloudflare R2"},
              {label:"Authentication",detail:"Email/password + SAML SSO (Scale)"},
              {label:"Session management",detail:"Short-lived tokens, auto-expiry"},
              {label:"Audit log",detail:"Full action history, exportable"},
              {label:"Data export",detail:"Available on request, no lock-in"},
              {label:"Infrastructure compliance",detail:"SOC 2 (Render + Vercel + Cloudflare)"}
            ].map((row,i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:10,gap:16}}>
                <span style={{fontSize:14,color:"var(--text-muted)"}}>{row.label}</span>
                <span style={{fontSize:13,fontWeight:600,color:"var(--accent)",textAlign:"right"}}>{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EntDeployment = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <span className="eyebrow">Deployment and onboarding</span>
        <h2 className="h2">From procurement to live on your first project in under two weeks.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
          Enterprise onboarding is not a 90-day implementation project. MASON is browser-first —
          there is nothing to install on desktops, no infrastructure to provision, no VPN to configure.
          Your team signs in and starts working.
        </p>
      </div>
      <div className="steps" style={{maxWidth:680,marginTop:48}}>
        {[
          {
            heading:"Week 1: Account setup and user provisioning",
            body:"We create your organisation account, configure SAML SSO if required, import your initial user list, and assign roles. Your IT team is typically involved for one 30-minute call to handle SSO configuration. Everything else happens in the MASON admin panel."
          },
          {
            heading:"Week 1–2: Pilot project configuration",
            body:"We work with your project team to set up one active project as the pilot. We load an IFC model, configure the document structure, walk through the RFI and submittal workflow with your coordinators, and show the foreman team how the daily log and issues work on the Android app."
          },
          {
            heading:"Week 2: Programme-wide rollout planning",
            body:"Once the pilot team is confident, we plan the rollout to remaining projects. This typically involves one 60-minute session per project team, a recorded walkthrough they can share with subcontractors, and written setup guides in your preferred format."
          },
          {
            heading:"Ongoing: Named support manager",
            body:"Scale plan customers have a named support manager who knows your programme and is reachable directly — not through a support ticket queue. Quarterly reviews are standard. We flag platform changes that affect your workflows before they ship."
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

const EntFAQ = () => {
  const [open,setOpen]=React.useState(null);
  const items=[
    {q:"Do you have a formal security questionnaire response?",a:"Yes. We maintain a pre-filled security questionnaire covering our infrastructure, data handling, access controls, and incident response process. We can provide this under NDA during procurement. Contact connect@masononsite.com to request it."},
    {q:"What are your data residency options?",a:"By default, MASON data is stored on infrastructure located in the US and EU (Cloudflare R2 multi-region, Render US East). For programmes with specific data residency requirements, we can discuss custom arrangements on the Scale enterprise contract. This is handled case-by-case — contact sales to scope it."},
    {q:"Does MASON support SAML SSO?",a:"Yes. SAML 2.0 SSO is included on the Scale plan. We support major identity providers including Okta, Azure AD, and Google Workspace. The setup typically takes 30 minutes with your IT team's involvement. We provide a step-by-step configuration guide for each provider."},
    {q:"Can we pilot MASON on one project before committing to a programme?",a:"Yes. This is the most common path for enterprise teams. Start a 30-day free trial on one project, run it with a real project team, and evaluate the results before negotiating a programme contract. We are very comfortable with this approach — it is how most enterprise relationships start."},
    {q:"What happens to our data if we decide to leave?",a:"You own your data. On any plan, you can export your projects, documents, RFIs, issues, schedules, and cost records at any time. We provide a full data export in standard formats (JSON, CSV, PDF for documents). We do not lock you in and we do not charge for data export."},
    {q:"What SLAs do you offer?",a:"The Scale plan includes a 99.9% uptime SLA for the API and frontend, with 4-hour response time for critical issues and next-business-day resolution targets for non-critical issues. SLA terms are included in the Scale contract. Custom SLAs for very large programmes are negotiable."},
    {q:"Can MASON integrate with our existing ERP or project controls software?",a:"Current integrations include export-compatible formats (PDF, CSV, IFC) that work with most ERP and project controls systems. Native API integrations with specific systems are on our roadmap. If you have a specific integration requirement, tell us — we have built custom integrations for enterprise customers where the volume justifies it."}
  ];
  return (
    <section className="section bg-subtle">
      <div className="container" style={{maxWidth:820}}>
        <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
          <span className="eyebrow">Enterprise FAQ</span>
          <h2 className="h2">Procurement and IT questions, answered directly.</h2>
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

const EntCTA = () => (
  <section className="section">
    <div className="container" style={{maxWidth:700,textAlign:"center"}}>
      <div className="gsap-fade-up" style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:20,padding:"56px 48px"}}>
        <span className="eyebrow" style={{display:"block",marginBottom:20}}>Ready to talk</span>
        <h2 className="h2" style={{margin:"0 0 20px"}}>Let us show you MASON on a programme that looks like yours.</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.75,marginBottom:36,maxWidth:520,margin:"0 auto 36px"}}>
          30 minutes with a product person, not a sales script. We use your project type as the
          demo scenario. Contact sales or start a free trial on your first project today.
        </p>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="/contact" className="btn btn-primary btn-lg">Contact sales</a>
          <a href="https://app.masononsite.com/register" className="btn btn-ghost btn-lg">Start free trial</a>
        </div>
        <p style={{fontSize:13,color:"var(--text-faint)",marginTop:20}}>
          No credit card required. 30-day free trial. Full access to all 12 modules.
        </p>
      </div>
    </div>
  </section>
);

const EnterprisePage = () => {
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
    <main>
        <EntHero />
        <EntWhy />
        <EntModules />
        <EntGovernance />
        <EntSecurity />
        <EntDeployment />
        <EntFAQ />
        <EntCTA />
      </main>
  );
};

export default EnterprisePage;
