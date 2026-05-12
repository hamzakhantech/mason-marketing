// home-extra.jsx -- Homepage sections: HowItWorks, CompareOldWay, SocialProof,
// PricingTeaser, HomeFAQ, TrustExtended, FinalCTA

// --- How It Works -------------------------------------------------------------

const HowItWorks = () => (
  <section className="sect" id="how">
    <div className="container">
      <div className="sect-head">
        <span className="eyebrow">How it works</span>
        <h2 className="h2">From first login to project closeout.</h2>
        <p className="lede">
          Most construction teams are fully operational inside MASON on the same day they sign up.
          No implementation consultant required. No six-week onboarding process. No migration
          service that costs more than the software itself. Here is the path from an empty
          account to a fully running project, step by step.
        </p>
      </div>

      <div className="how-grid">
        {[
          {
            n:"01",tag:"Setup",
            title:"Connect your entire team in under 15 minutes",
            body:`Invite project managers, site supervisors, engineers, and foremen by email address.
            Role-based permissions are assigned the moment each person accepts their invitation.
            Cost and budget data stays gated behind account administrator roles. Documents, issues,
            and daily logs open immediately for the full team. You do not need to configure anything
            manually. The permission structure maps to the way construction teams actually work,
            not to a generic org chart template.
            
            Subcontractors and consultants get their own permission tier. They can see what the
            main contractor wants them to see and nothing else. Adding a new subcontractor to
            a project takes about 30 seconds. Their access is revocable instantly if the
            engagement ends.`
          },
          {
            n:"02",tag:"Project",
            title:"Create your first project and load your documents",
            body:`Add a project, set a start date and target completion, then upload your existing
            drawings, specifications, and contract documents. MASON structures every file under
            a single project record from the moment it arrives. Documents are version-controlled
            automatically. When revision D replaces revision C, the old revision is archived
            with its timestamp and the new one becomes the current version visible to the team.
            
            No more emailing revised drawings to a distribution list and hoping everyone updates
            their folders. When a new revision is published in MASON, every team member who
            has access to that document sees the update the next time they open the project.
            The system keeps the full revision history so you always know what was current
            at any point in the project timeline.`
          },
          {
            n:"03",tag:"BIM",
            title:"Upload your IFC model and open it in the browser",
            body:`Drop an IFC file into the BIM tab. MASON processes it and opens it in a WebAssembly
            viewer that runs natively in Chrome, Firefox, Edge, or Safari. No Autodesk Forge
            account required. No Revit license. No plugin installation. No desktop application.
            The model opens in the browser on a MacBook in the site office, a Windows workstation
            in the engineering team's office, or a mid-tier Android phone in a foreman's pocket.
            
            Federated models work the same way. Upload the structural IFC, the MEP IFC, and
            the architectural IFC separately, then combine them into a federated view. Each
            discipline is toggleable independently. Clash detection runs in the browser and
            flags intersecting elements without requiring any additional software. Each clash
            can be converted into a trackable issue or an RFI in one click, with the model
            coordinates attached automatically.`
          },
          {
            n:"04",tag:"Execute",
            title:"Run issues, RFIs, and submittals through a proper system",
            body:`Field staff log issues directly from the Android app. Photo, GPS location, BIM
            element anchor, and descriptive text all captured in one workflow at the point of
            discovery. The issue appears in the project register immediately, assigned to the
            relevant discipline, with all the context the engineer needs to respond without
            a follow-up call.
            
            Engineers raise RFIs in the browser with the model open in the same tab. The AI
            Concierge can draft the RFI description from a plain language description of the
            problem. Submittals route to the correct reviewer automatically based on the
            submittal type and your project structure. The reviewer gets notified, responds
            in the platform, and the response is visible to everyone with access. No email
            chains. No "who has the submittal right now?" No lost approvals.`
          },
          {
            n:"05",tag:"AI",
            title:"Ask the Concierge anything about your project",
            body:`Type a question in plain language: "Which RFIs are blocking the level 23 MEP
            installation?" or "Summarise all open issues assigned to the structural team from
            the past two weeks" or "What was the weather on site during the concrete pour
            on May 3rd?" The AI Concierge reads your project data directly and returns a
            specific answer with citations.
            
            It does not search the internet. It does not generate generic construction advice.
            It reads your RFI register, your daily logs, your issue list, your document history,
            and your schedule. Every answer references the specific document or record it drew
            from. If the answer is not in your project data, the Concierge says so rather than
            guessing. This is the fundamental difference between a project-aware AI tool and
            a general-purpose chatbot with a construction theme.`
          },
          {
            n:"06",tag:"Close",
            title:"Close the project with a complete, exportable audit trail",
            body:`Every action taken in MASON across the life of the project is logged with
            a timestamp, the actor's name and role, and the full context of what changed.
            Document views, record edits, submittal approvals, RFI responses, cost updates,
            and permission changes are all captured. The audit trail is filterable and
            searchable. It can be exported to CSV for owner handover, insurance documentation,
            or litigation defence.
            
            At practical completion, the handover package is assembled from data that
            accumulated throughout the project rather than being compiled in a last-minute
            rush. O and M manuals, as-built records, commissioning certificates, and the
            full RFI and submittal history are all present and correctly versioned because
            MASON captured them as the project ran, not after it finished.`
          }
        ].map((s,i) => (
          <div className="how-step reveal" key={s.n} style={{animationDelay:`${i*60}ms`}}>
            <div className="how-step__head">
              <span className="mono how-step__n">{s.n}</span>
              <span className="chip">{s.tag}</span>
            </div>
            <h3 className="h3">{s.title}</h3>
            <p className="how-step__body" style={{whiteSpace:"pre-line",lineHeight:1.75}}>{s.body}</p>
          </div>
        ))}
      </div>

      <div className="how-cta-row">
        <a href="https://app.masononsite.com/register" className="btn btn-primary">
          Start free 30-day trial <IconArrowRight size={16} stroke={2} />
        </a>
        <span className="how-cta-note">No credit card required. Full access from day one.</span>
      </div>
    </div>
  </section>
);

// --- Compare: MASON vs the old way --------------------------------------------

const CompareOldWay = () => (
  <section className="sect sect--alt" id="compare">
    <div className="container">
      <div className="sect-head">
        <span className="eyebrow">Why teams switch</span>
        <h2 className="h2">Your current toolset is not broken.<br />It is just held together with email.</h2>
        <p className="lede">
          Most construction teams run on a combination of email chains, shared drives, PDFs, and
          one spreadsheet that only one person knows how to update. This works until the project
          gets complicated, the team gets bigger, or something goes wrong and someone needs to
          know exactly who approved what and when. Here is what fragmented tools cost you
          compared to a single connected system.
        </p>
      </div>

      <div className="compare-cards">
        <div className="compare-card compare-card--bad reveal">
          <div className="compare-card__label">
            <span className="chip danger">The current situation</span>
          </div>
          <ul className="compare-list">
            {[
              "RFIs tracked in email threads where three people have different final versions saved locally",
              "BIM model locked behind a Revit license that the site team does not have access to",
              "Daily logs typed into Word documents, emailed to a shared drive nobody actively checks",
              "Issues reported via WhatsApp, actioned sometimes, documented nowhere permanently",
              "Schedule lives in a .mpp file that only the project manager can open",
              "Cost updates happen after monthly meetings, not in real time as commitments are made",
              "Submittals routed manually by email with no reliable way to know where each one stands",
              "Audit trail at practical completion means searching email archives from last April",
              "New subcontractors get added to a Dropbox folder and a WhatsApp group and nothing else",
              "When something goes wrong, establishing a timeline takes days of manual reconstruction",
            ].map(t => (
              <li key={t}><span className="compare-x">x</span> {t}</li>
            ))}
          </ul>
        </div>

        <div className="compare-card compare-card--good reveal">
          <div className="compare-card__label">
            <span className="chip accent">With MASON</span>
          </div>
          <ul className="compare-list">
            {[
              "RFIs assigned, tracked, and closed inside the project with one thread and zero ambiguity about the current status",
              "BIM opens in any browser on any device, no license and no plugin installation required",
              "Daily logs structured, timestamped, and searchable across the full project portfolio instantly",
              "Issues logged on Android at the exact GPS location with the BIM element identified and a photo attached",
              "Schedule visible to every team member with the permission to see it, on any device",
              "Cost updated in real time with role-gated access so managers see the detail and field teams see their tasks",
              "Submittals route automatically to the correct reviewer and the status is visible to everyone involved",
              "Every action logged with timestamp, actor name, role, and full context, exportable to CSV at any point",
              "New subcontractors invited in 30 seconds with exactly the access they need and nothing beyond it",
              "When something goes wrong, the full audit trail is one search away rather than one week of email archaeology",
            ].map(t => (
              <li key={t}><IconCheck size={15} stroke={2} /> {t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{maxWidth:800,margin:"64px auto 0"}}>
        <h3 className="h3" style={{textAlign:"center",marginBottom:32}}>The hidden cost of disconnected tools</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:20}}>
          {[
            {stat:"6 to 10h",desc:"Average hours per week per project manager spent on RFI admin and coordination in fragmented tool environments"},
            {stat:"5 to 15%",desc:"Construction rework as a percentage of total project value, much of it caused by coordination failures and information gaps"},
            {stat:"3 days",desc:"Average delay added to RFI response time when the answerer does not have direct access to the current model revision"},
            {stat:"$50k+",desc:"Annual per-user licensing cost for enterprise platforms like Procore at scale -- MASON charges per project instead"},
          ].map((item,i)=>(
            <div key={i} className="reveal" style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:12,padding:"20px 24px"}}>
              <p style={{fontSize:32,fontWeight:800,color:"var(--accent)",margin:"0 0 8px",letterSpacing:"-1px"}}>{item.stat}</p>
              <p style={{fontSize:13,color:"var(--text-muted)",lineHeight:1.65,margin:0}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Social Proof -------------------------------------------------------------

const SocialProof = () => (
  <section className="sect" id="proof">
    <div className="container">
      <div className="sect-head">
        <span className="eyebrow">Real projects, real teams</span>
        <h2 className="h2">Running live on active construction projects right now.</h2>
        <p className="lede">
          MASON is not in beta and it is not a concept platform. It is running on active
          construction projects across six countries today, with real general contractors,
          real subcontractors, and real field teams using it daily for RFIs, BIM coordination,
          daily logging, and AI-assisted project management.
        </p>
      </div>

      <div className="proof-stats">
        {[
          {n:"47+",label:"Active projects\non MASON today",note:"Across 6 countries"},
          {n:"8",label:"Languages\nfully supported",note:"Including RTL Arabic and Urdu"},
          {n:"12",label:"Construction modules\nin one system",note:"No per-module add-ons"},
          {n:"30s",label:"BIM model opens\nin any browser",note:"No plugin or install required"},
        ].map(s => (
          <div className="proof-stat reveal" key={s.n}>
            <span className="proof-stat__n">{s.n}</span>
            <span className="proof-stat__label" style={{whiteSpace:"pre-line"}}>{s.label}</span>
            <span className="proof-stat__note">{s.note}</span>
          </div>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:24,marginTop:48}}>
        {[
          {
            quote:`"The BIM viewer on a phone browser, without installing anything, is what convinced
            me. I have been fighting with Autodesk licences for years on projects where half the
            team just needs to look at the model, not author it. MASON just opens the model."`,
            name:"Kwame O.",
            role:"Project Manager, High-rise Residential, UK"
          },
          {
            quote:`"We switched from Procore mid-project. The migration was smoother than expected
            and the per-project pricing immediately saved us money because we were paying
            per-user on a 60-person site team. The AI Concierge was the unexpected benefit.
            Our RFI response time dropped from 9 days to 3 days."`,
            name:"Fatima A.",
            role:"Senior Project Manager, Mixed-use Development, UAE"
          },
          {
            quote:`"The offline mode on Android is what the field team needed. We work in
            underground structures with no signal for hours at a time. Daily logs, issue
            creation, and photo capture all work offline and sync the moment we come back
            above ground. No data lost."`,
            name:"Marco S.",
            role:"Site Supervisor, Infrastructure Programme, Italy"
          }
        ].map((item,i)=>(
          <div key={i} className="proof-quote reveal" style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:14,padding:"28px 28px 24px"}}>
            <blockquote style={{margin:0}}>
              <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.75,margin:"0 0 20px",fontStyle:"italic",whiteSpace:"pre-line"}}>{item.quote}</p>
              <cite style={{display:"flex",alignItems:"center",gap:12,fontStyle:"normal"}}>
                <span style={{width:40,height:40,borderRadius:"50%",background:"rgba(232,148,46,.15)",border:"1px solid rgba(232,148,46,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"var(--accent)",flexShrink:0}}>
                  {item.name.split(" ").map(w=>w[0]).join("")}
                </span>
                <span>
                  <strong style={{display:"block",fontSize:14,color:"var(--text)"}}>{item.name}</strong>
                  <span style={{fontSize:12,color:"var(--text-muted)"}}>{item.role}</span>
                </span>
              </cite>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Pricing Teaser -----------------------------------------------------------

const PricingTeaser = () => (
  <section className="sect sect--alt" id="pricing-teaser">
    <div className="container">
      <div className="pricing-teaser">
        <div className="pricing-teaser__copy reveal">
          <span className="eyebrow">Pricing</span>
          <h2 className="h2">Per project, not per person.<br />That changes everything.</h2>
          <p className="lede">
            Construction platforms that charge per user per month create a hidden incentive
            for main contractors to limit access. When adding a subcontractor costs money,
            project managers find workarounds. Drawings get shared via email instead of
            through the system. The platform becomes less useful than it should be because
            the pricing model punishes collaboration.
          </p>
          <p style={{color:"var(--text-muted)",lineHeight:1.75,marginTop:16}}>
            MASON charges per active project. Your entire team, including subcontractors,
            consultants, and the client's representative, can be in the system without
            the cost going up. A 15-project contractor with 200 people across those projects
            pays for 15 projects, not 200 seats. Start with a 30-day free trial that
            includes every feature, unlimited team members, and full access to the
            AI Concierge and Android app from day one.
          </p>
          <ul className="checklist" style={{marginTop:24}}>
            {[
              "Full BIM viewer and AR on Android from the first day",
              "AI Concierge with full access to your project data",
              "All 12 modules with no feature-gating between plans",
              "Unlimited team members on each project during the trial",
              "Android app download available immediately",
              "Onboarding support included, no separate implementation fee",
            ].map(item=>(
              <li key={item}><IconCheck size={16} stroke={2} /> {item}</li>
            ))}
          </ul>
          <div style={{marginTop:40,display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}>
            <a href="https://app.masononsite.com/register" className="btn btn-primary">
              Start free trial <IconArrowRight size={16} stroke={2} />
            </a>
            <a href="pricing.html" className="btn btn-ghost">See full pricing</a>
          </div>
        </div>
        <div className="pricing-teaser__plans reveal">
          {[
            {name:"Starter",price:"$49",period:"/month",desc:"Up to 3 active projects and 25 team members. Full feature access.",cta:"Start free"},
            {name:"Professional",price:"$149",period:"/month",desc:"Up to 15 active projects and 100 team members. API access included.",cta:"Start free",featured:true},
            {name:"Scale",price:"$399",period:"/month",desc:"Unlimited projects and 250 team members. SAML SSO and priority support.",cta:"Start free"},
          ].map(p=>(
            <div className={"pricing-teaser__plan"+(p.featured?" is-featured":"")} key={p.name}>
              <div className="pricing-teaser__plan-name">{p.name}</div>
              <div className="pricing-teaser__plan-price">{p.price}<span>{p.period}</span></div>
              <div className="pricing-teaser__plan-desc">{p.desc}</div>
            </div>
          ))}
          <p className="pricing-teaser__note">
            <IconShield size={13} /> Every plan includes all 12 modules. No upsells. No add-ons.{" "}
            <a href="pricing.html" style={{color:"var(--accent)"}}>Full pricing details -></a>
          </p>
          <div style={{marginTop:16,padding:"16px 20px",background:"rgba(232,148,46,.06)",border:"1px solid rgba(232,148,46,.2)",borderRadius:10}}>
            <p style={{fontSize:13,fontWeight:700,margin:"0 0 4px",color:"var(--text)"}}>Annual plans save 20%</p>
            <p style={{fontSize:12,color:"var(--text-muted)",margin:0}}>Pay annually and the setup fee is waived. Most teams pay monthly during the trial and switch to annual when they know MASON is the right fit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Homepage FAQ -------------------------------------------------------------

const HOME_FAQS = [
  {
    q:"Do I need to install anything to use MASON?",
    a:`Nothing needs to be installed for the browser application. MASON runs entirely in Chrome, Firefox, Edge, and Safari on Windows, Mac, and Linux. The BIM viewer, RFI module, document register, cost module, and AI Concierge all run in the browser tab without any plugin or extension.

The only optional installation is the Android native app, available on the Google Play Store for field teams who need offline logging, the camera integration for issue photos, and the AR overlay for model viewing on site. The Android app is optional. Many teams run MASON entirely through the browser and never need the app.`
  },
  {
    q:"Can I open IFC and BIM models without an Autodesk account?",
    a:`Yes, completely. MASON's BIM viewer is built on open-source IFC technology and runs using WebAssembly in the browser. You do not need an Autodesk Forge account, a Revit licence, a Navisworks licence, or any CAD software of any kind. You upload an IFC file and it opens in the tab.

Federated multi-model viewing is also supported. Upload the structural model, the MEP model, and the architectural model separately and combine them into a single federated view. Each discipline is independently toggleable. Clash detection runs in the browser against the loaded models. This is a fundamental difference from platforms that require an Autodesk ecosystem connection to do anything useful with a BIM model.`
  },
  {
    q:"How does the AI Concierge work and is it just a generic chatbot?",
    a:`The AI Concierge is grounded in your specific project data. When you ask a question, it reads your RFI register, your daily logs, your issue list, your documents, your schedule, and your cost records to formulate a response. It does not query the public internet and it does not generate generic construction advice.

Every response cites the specific document, log entry, or record it drew from so you can verify the answer independently. If the information you are asking about is not in your project data, the Concierge says so directly rather than approximating. This is the difference between a project-aware tool and a general-purpose language model with a construction-themed interface. Your project data is never used to train any AI model and is never shared with other customers.`
  },
  {
    q:"What languages does MASON support?",
    a:`MASON currently supports eight languages: English, Arabic, Urdu, Hindi, Spanish, French, Portuguese, and German. Arabic and Urdu render correctly in right-to-left layout throughout the interface. Date formats, number conventions, and currency displays adapt to the selected locale automatically.

The AI Concierge can accept questions and return answers in all eight supported languages. Language detection is automatic. You can type a question in Spanish about an RFI that was written in English and receive a coherent response in Spanish. This is particularly useful for international projects where the site team and the design team work in different languages.`
  },
  {
    q:"What happens to project data if we cancel after the trial?",
    a:`Your data remains accessible for 30 days after the trial period ends or after a paid subscription lapses. During that 30-day window, you can export everything in open formats: documents as original files, RFI and issue history as CSV, daily logs as structured CSV, audit trail as CSV, and IFC models as the original uploaded files.

After 30 days from cancellation, data is permanently deleted from our production servers and from backup archives within 90 days. We provide written confirmation of deletion on request. MASON does not retain or use customer project data after an account is closed, and project data is never used for any AI model training purpose.`
  },
  {
    q:"Is MASON right for a small contractor with fewer than 10 employees?",
    a:`Yes. The Starter plan at $49 per month covers up to 3 active projects and 25 team members. A small general contractor running 1 to 3 active projects simultaneously gets the full platform: BIM viewer, AI Concierge, Android app, RFI module, document register, daily logs, issues, and everything else. There are no reduced-functionality tiers or paywalled features.

The flat-project pricing model is particularly well suited to smaller teams because you are not paying per person. If you have 25 people across your 3 active projects, you pay $49 per month total regardless of whether those 25 people log in every day or occasionally.`
  },
  {
    q:"How does MASON compare to Procore or Autodesk Construction Cloud?",
    a:`Procore and Autodesk CC are established enterprise platforms with longer track records and more complex feature sets in areas like earned value analysis and ERP integration. They are also significantly more expensive: independent estimates put typical Procore contracts for mid-size contractors at $15,000 to $60,000 per year, with BIM viewing requiring an Autodesk ecosystem connection.

MASON is flat-rate, browser-native, includes BIM viewing without any Autodesk account, ships a project-aware AI Concierge on all plans, and charges per project rather than per user. For teams that need the full feature set but cannot justify enterprise pricing, or for teams that want browser-native BIM without an Autodesk dependency, MASON is the more practical choice. We compare specific features honestly on the comparison pages for Procore, Fieldwire, and Asite.`
  },
  {
    q:"Can MASON work in low connectivity or no-signal environments?",
    a:`The Android app supports full offline operation. When signal is lost, field teams can continue creating daily logs, logging issues with photos, viewing cached BIM models, and completing inspection checklists. Everything queued locally on the device syncs automatically the moment connectivity returns.

When two team members both made changes to the same record while offline, the sync process surfaces the conflict and shows exactly what each person changed. You choose which version to keep rather than having one person's work silently overwrite the other's. The browser application requires a connection to sync, but the Android app is genuinely usable in areas with no signal, including basement and underground environments.`
  },
  {
    q:"What kind of support does MASON provide?",
    a:`Email support is included on all plans with a target response time of one business day. Professional and Scale plan customers get priority email support with a faster response target. Scale plan customers also get access to a dedicated customer success manager who can run onboarding sessions with the full project team, assist with BIM model setup, and provide ongoing guidance as the team's usage grows.

There is no paid implementation service required to get started. Most teams are fully operational on the same day they sign up. The onboarding documentation covers every module with worked examples specific to construction workflows. If you want a guided walkthrough of MASON before committing to a trial, book a demo and we will walk through your specific project type and team setup.`
  },
  {
    q:"Can we migrate our existing project data from another platform?",
    a:`Yes. We have migration tools for Procore and Aconex that transfer issues, RFIs, submittals, and document registers with their full history including response chains, timestamps, and attachments. The migration connects to the source platform's API and pulls data directly rather than requiring manual CSV exports.

For teams migrating from Fieldwire, the structured data transfers correctly though drawing annotations do not carry over due to format differences. For migrations from other platforms, we assess compatibility based on what export formats are available. Migration support is included in the onboarding for Professional and Scale plan customers. Contact us before starting a trial if migration from a specific platform is a requirement.`
  },
];

const HomeFAQ = () => {
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <section className="sect" id="faq">
      <div className="container">
        <div className="sect-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">Questions your team will ask before signing up.</h2>
          <p className="lede">
            We have answered the most common ones below. If yours is not covered,{" "}
            <a href="contact.html" style={{color:"var(--accent)"}}>talk to us directly</a>.
            We respond to every enquiry personally, not with a support ticket queue.
          </p>
        </div>

        <div className="faq-list" style={{maxWidth:800,margin:"56px auto 0"}}>
          {HOME_FAQS.map((f,i)=>(
            <div key={i} className={"faq-item"+(openIdx===i?" is-open":"")}>
              <button
                className="faq-item__btn"
                onClick={()=>setOpenIdx(openIdx===i?null:i)}
                aria-expanded={openIdx===i}
              >
                {f.q}
                <span className="faq-item__icon" aria-hidden="true">
                  {openIdx===i?(
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="6" x2="10" y2="6"/></svg>
                  ):(
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="2" x2="6" y2="10"/><line x1="2" y1="6" x2="10" y2="6"/></svg>
                  )}
                </span>
              </button>
              <div className="faq-item__body">
                <p className="faq-item__answer" style={{whiteSpace:"pre-line"}}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Security and Trust -------------------------------------------------------

const TrustExtended = () => (
  <section className="sect sect--alt" id="trust">
    <div className="container">
      <div className="sect-head">
        <span className="eyebrow">Built on trust</span>
        <h2 className="h2">Security and access control your clients will actually notice.</h2>
        <p className="lede">
          Construction data is commercially sensitive. Model files contain proprietary design work.
          RFIs and submittals carry contractual weight. Cost forecasts are confidential between
          the main contractor and the client. Daily logs can be used as evidence in disputes.
          MASON was built with this reality in mind, not as an afterthought.
        </p>
      </div>

      <div className="trust-grid reveal">
        {[
          {
            title:"Role-based access control that reflects how construction teams actually work",
            body:`Every module in MASON is gated by a two-tier permission system. Account-level roles
            define what a user can access across the full portfolio. Project-level roles define what
            they can do inside a specific project. A foreman sees exactly what a foreman should see.
            A quantity surveyor can see the full cost module without touching the BIM configuration.
            A subcontractor sees only the documents and issues relevant to their scope.
            
            This is not optional configuration. Every user in the system has a defined role and
            MASON enforces it on every page load and API call. Adding a new team member with
            the wrong role by mistake is immediately correctable. Deactivating an account
            removes access instantly across all projects.`,
            tags:["Account roles","Project roles","Permission gating"]
          },
          {
            title:"Audit log for every significant action, immutable and always exportable",
            body:`Every create, edit, approve, reject, and delete action is logged with a timestamp,
            the actor's name and role, the specific record affected, and the before and after state
            of any field that changed. The audit log is filterable by user, by record type, by
            date range, and by action type. It is tamper-proof and cannot be deleted by any user
            including account administrators.
            
            At project closeout, the audit trail is one of the most valuable documents you can
            hand to a client or a solicitor. Every decision, every approval, and every piece of
            information that was available at each point in the project is reconstructable from
            the log. Export to CSV at any time with a single click, no support request required.`,
            tags:["Immutable log","CSV export","Filter by actor"]
          },
          {
            title:"Encryption in transit and at rest, modern cloud infrastructure",
            body:`All MASON traffic uses HTTPS with TLS 1.3. Older TLS versions are not accepted.
            Data at rest is encrypted using AES-256 across all storage systems including document
            storage and database records. MASON runs on AWS infrastructure in the EU West region
            by default, with regional deployment available for Scale plan customers who have
            specific data residency requirements.
            
            File uploads including IFC models, PDF drawings, and issue photos are stored in
            object storage with signed URL access. A valid authenticated session is required
            to access any file. Direct file links are not permanently accessible and expire
            after a short window.`,
            tags:["TLS 1.3","AES-256","Signed URLs"]
          },
          {
            title:"Invitation-only team access with instant revocation",
            body:`Team members cannot self-register into your account. Every person arrives via
            an invitation email sent by an account administrator to a specific email address.
            The invitation expires after 48 hours if unused. Accepted invitations are logged
            in the audit trail with timestamp and IP address.
            
            Revoking access takes a single click and takes effect immediately. A deactivated
            account cannot log in, cannot access any data, and cannot receive further notifications.
            This matters when a subcontractor's engagement ends mid-project. There is no
            waiting period and no support ticket. Access ends when you end it.`,
            tags:["Invite only","Instant revocation","Access log"]
          },
          {
            title:"Your data is never used to train AI models",
            body:`The AI Concierge reads your project data to answer questions about your project.
            Your data is used as context within your account session only. It is never shared
            with other customers, never used to fine-tune any AI model, and never sent to
            third-party AI providers. The model that powers the Concierge runs on dedicated
            MASON infrastructure rather than a shared public API.
            
            When you close your account, your data is deleted from production systems within
            30 days and from backup archives within 90 days. Written confirmation of deletion
            is available on request. MASON has no commercial interest in retaining your
            project data after your relationship with us ends.`,
            tags:["No AI training","Data isolation","Deletion confirmed"]
          },
          {
            title:"Your data is exportable at any time without contacting support",
            body:`You are never locked in. Every piece of data in MASON can be exported in open,
            standard formats at any time without opening a support ticket or speaking to anyone.
            Documents export as their original files. RFI and issue histories export as structured
            CSV. Daily logs, cost records, submittal registers, and audit trails all export as CSV.
            IFC models export as the original uploaded file.
            
            This is not a courtesy. It is a core part of how we build trust with teams who are
            evaluating whether to commit their project data to a platform they have not used before.
            Your data belongs to you. The moment you want it, you can have it.`,
            tags:["Self-serve export","No lock-in","Open formats"]
          },
        ].map(t=>(
          <div className="feature-card reveal" key={t.title}>
            <div className="feature-card__icon"><IconShield size={20} stroke={1.5} /></div>
            <div className="feature-card__title">{t.title}</div>
            <div className="feature-card__body" style={{whiteSpace:"pre-line",lineHeight:1.7}}>{t.body}</div>
            <div className="feature-card__tags">
              {t.tags.map(tag=><span className="feature-card__tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div style={{textAlign:"center",marginTop:48}} className="reveal">
        <a href="security.html" className="btn btn-ghost">Read our full security documentation -></a>
      </div>
    </div>
  </section>
);

// --- Final CTA ----------------------------------------------------------------

const FinalCTA = () => (
  <section className="sect cta-band" id="contact">
    <div className="container" style={{position:"relative",zIndex:1}}>
      <span className="eyebrow" style={{display:"block",textAlign:"center",marginBottom:24}}>
        Get started today
      </span>
      <h2 className="cta-band__title">Your next project starts in MASON.</h2>
      <p className="cta-band__sub">
        30 days. Every feature. No credit card. One login and your whole team
        is inside the same system by end of day.
      </p>
      <div className="cta-band__actions">
        <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">
          Start free trial <IconArrowRight size={18} stroke={2} />
        </a>
        <a href="contact.html" className="btn btn-ghost btn-lg">Request a demo</a>
      </div>
      <p style={{marginTop:24,fontSize:13,color:"var(--text-faint)",textAlign:"center"}}>
        No implementation fee. No consultant required. No six-week onboarding. Just the software.
      </p>
    </div>
  </section>
);

Object.assign(window, {
  HowItWorks,
  CompareOldWay,
  SocialProof,
  PricingTeaser,
  HomeFAQ,
  TrustExtended,
  FinalCTA
});
