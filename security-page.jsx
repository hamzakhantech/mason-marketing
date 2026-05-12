// security-page.jsx

const SecHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Trust and transparency</span>
        <h1 className="page-hero__title gsap-fade-up">
          Your project data is<br />
          <span style={{color:"var(--accent)"}}>your project data.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Construction projects contain commercially sensitive information. Contract values,
          cost forecasts, design documentation, and site survey data are all things that need
          to be handled carefully. Here is exactly how MASON protects your data, who can access it,
          and what happens when you decide to leave.
        </p>
      </div>
    </div>
  </section>
);

const SecCards = () => (
  <section className="section">
    <div className="container">
      <div className="security-grid">
        {[
          {icon:"?",heading:"Encryption at rest and in transit",body:`All data stored in MASON is encrypted at rest using AES-256. All data in transit uses TLS 1.3. This applies to everything, project documents, IFC models, daily log photos, cost data, and user records. There are no unencrypted data stores in the MASON infrastructure.`},
          {icon:"?",heading:"AWS infrastructure, EU West by default",body:`MASON runs on Amazon Web Services in the EU West (Ireland) region. Compute, storage, and database services are all within the same region by default. Scale plan customers can request specific regional deployment for data residency requirements.`},
          {icon:"?",heading:"Role-based access control",body:`Every user in MASON has a role that defines exactly what they can see and do. Roles are applied at the project level and the module level. An external consultant can be given read-only access to the BIM module while being completely unable to see the cost module. This is not an optional configuration. It is how the platform works.`},
          {icon:"?",heading:"Audit logs for every action",body:`Every significant action in MASON is logged with a timestamp, user identity, and action detail. Document views, record edits, user role changes, and permission modifications are all captured. Audit logs are available to account administrators and cannot be deleted by any user including administrators.`},
          {icon:"?",heading:"Single sign-on and SAML",body:`SAML 2.0 SSO is available on the Scale plan, enabling integration with your corporate identity provider including Okta, Azure AD, and Google Workspace. SSO enforces your organisation's authentication policies including MFA requirements across all MASON access.`},
          {icon:"?",heading:"Two factor authentication",body:`All MASON accounts support two factor authentication via an authenticator app or SMS. Administrators can enforce 2FA as a requirement for all users on their account. We recommend enabling this on any account that contains commercially sensitive project data.`},
          {icon:"?",heading:"Data export at any time",body:`You can export your complete project data in standard formats at any time, without contacting support. Documents export as original files. RFIs, issues, and logs export as structured CSV or JSON. IFC models export as they were uploaded. Your data is never held hostage.`},
          {icon:"?",heading:"Right to deletion",body:`If you close your MASON account, all project data is deleted from production servers within 30 days and from backup archives within 90 days. We provide a written confirmation of deletion on request. We do not retain project data for training AI models.`},
          {icon:"?",heading:"Your data is not used to train AI",body:`The AI Concierge is powered by a language model that MASON runs on dedicated infrastructure. Your project content is used as context for responses within your account only. It is never shared with other customers, never used to train or fine-tune any model, and never sent to third party AI providers.`}
        ].map((c,i)=>(
          <div key={i} className="sec-card gsap-fade-up">
            <div className="sec-card__icon">{c.icon}</div>
            <p className="sec-card__heading">{c.heading}</p>
            <p className="sec-card__body">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SecCompliance = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:680}}>
        <h2 className="h2">Compliance and certifications</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          Here is the honest picture of where we are on certifications and what is in progress.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20,marginTop:48}}>
        {[
          {status:"check",color:"#4ade80",heading:"GDPR compliant",body:"MASON's data processing practices comply with EU GDPR requirements. A Data Processing Agreement is available on request for customers who need it for their own compliance documentation."},
          {status:"check",color:"#4ade80",heading:"ISO 27001 aligned",body:"Our security management practices are aligned with ISO 27001. We are currently preparing for formal certification, which we expect to complete in 2026."},
          {status:"check",color:"#4ade80",heading:"TLS 1.3 and AES-256",body:"All connections use TLS 1.3 minimum. Older TLS versions are not accepted. Data at rest uses AES-256 encryption across all storage systems."},
          {status:"?",color:"var(--accent)",heading:"SOC 2 Type II in progress",body:"We are currently undergoing a SOC 2 Type II audit. The audit period started in Q1 2026. We expect to have the report available in Q4 2026. Contact us if you need a draft controls description in the meantime."},
          {status:"check",color:"#4ade80",heading:"UK GDPR and DPA 2018",body:"For customers based in the UK, MASON's data handling complies with UK GDPR and the Data Protection Act 2018. A UK-specific DPA is available alongside the EU version."},
          {status:"check",color:"#4ade80",heading:"Penetration tested annually",body:"MASON undergoes annual penetration testing by an independent third party security firm. The most recent test was completed in Q1 2026. Executive summary available to Scale plan customers under NDA."}
        ].map((c,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <p style={{fontSize:20,marginBottom:8,color:c.color}}>{c.status}</p>
            <p style={{fontWeight:700,fontSize:15,margin:"0 0 10px"}}>{c.heading}</p>
            <p style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.65,margin:0}}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SecFAQ = () => {
  const [open, setOpen] = React.useState(null);
  const items = [
    {q:"Where exactly is my data stored?",a:`By default, all MASON data is stored on AWS in the EU West (Ireland) region. This includes project files, IFC models, database records, and backup copies. Scale plan customers can request regional deployment in US East (Virginia), Singapore, or UAE (Dubai) for data residency compliance.`},
    {q:"Can MASON employees access my project data?",a:`MASON employees can access project data only in specific circumstances: to investigate a reported technical issue, to respond to a lawful legal request, or during the account setup process if explicitly invited by the account administrator. All employee access is logged and reviewed. We do not browse customer project data for any purpose including product development.`},
    {q:"What happens if there is a data breach?",a:`We maintain an incident response plan and are contractually required to notify affected customers within 72 hours of discovering a breach that may affect their data, in line with GDPR requirements. We would also notify the relevant supervisory authority. We have not had a breach to date but the process is documented and tested annually.`},
    {q:"Can I host MASON on my own infrastructure?",a:`Not currently. MASON is a cloud-hosted platform and self-hosted deployment is not offered. If you have specific infrastructure requirements, the Scale plan with regional deployment is the closest option. Enterprise customers with genuine on-premise requirements can discuss this with our team but it is not on the standard roadmap.`},
    {q:"How do you handle subprocessors?",a:`MASON uses a small number of subprocessors including AWS for infrastructure, Stripe for payment processing, and an email delivery service for notifications. A complete list of subprocessors is available in our Privacy Policy and we notify customers of any material changes to that list.`},
    {q:"Do you have a bug bounty programme?",a:`Not yet, but we accept responsible disclosure reports at security@masononsite.com. We acknowledge all reports within two business days and keep the reporter informed of the investigation progress. We do not threaten legal action for good faith disclosures.`}
  ];
  return (
    <section className="section">
      <div className="container" style={{maxWidth:820}}>
        <div className="section__header gsap-fade-up"><h2 className="h2">Security questions</h2></div>
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
        <div style={{marginTop:40,background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:12,padding:28}} className="gsap-fade-up">
          <p style={{fontWeight:700,fontSize:15,marginBottom:8}}>Security documentation requests</p>
          <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.7,marginBottom:16}}>
            If you need security documentation for procurement, legal, or compliance purposes,
            including vendor questionnaire responses, DPA templates, or penetration test summaries,
            email security@masononsite.com. We respond within two business days.
          </p>
          <a href="mailto:security@masononsite.com" style={{color:"var(--accent)",fontWeight:600,textDecoration:"none",fontSize:14}}>
            security@masononsite.com ->
          </a>
        </div>
      </div>
    </section>
  );
};

const SecurityPage = () => {
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
        <SecHero />
        <SecCards />
        <SecCompliance />
        <SecFAQ />
      </main>
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecurityPage />);
