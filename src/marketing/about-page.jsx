import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

var ABOUT_ICONS={tool:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',dollar:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',cpu:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',link:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',zap:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',globe:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',user:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'};

const AboutHero = () => (
  <InnerPageHero
    eyebrow="Our story"
    title={
      <>
        We built MASON because<br />
        construction teams <span className="inner-hero__accent">deserved better.</span>
      </>
    }
    lead={
      <>
        MASON started on a jobsite, not in a boardroom. The people who designed it had spent years
        managing real construction projects, running coordination meetings, chasing RFIs, and watching
        good teams struggle with software that never quite fit how field work actually happens.
        That frustration became a product. This is that story.
      </>
    }
  />
);

const AboutMission = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="about-mission gsap-fade-up">
        <p className="about-mission__eyebrow">Our belief</p>
        <p className="about-mission__text">
          Construction is one of the most complex industries on earth.
          It deserves software that is <em>actually built for it</em>,
          not adapted from generic project management tools.
        </p>
      </div>
    </div>
  </section>
);

const AboutStory = () => (
  <section className="section">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"start"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <h2>Where this all started</h2>
          <p>
            The team behind MASON has been in construction for a long time. Not as software consultants
            who visited a few sites and wrote some user stories. As project managers, site engineers,
            quantity surveyors, and BIM coordinators who spent years inside the work itself.
          </p>
          <p>
            Every one of them remembers the moment when the tools stopped helping and started getting
            in the way. The afternoon you spent exporting data from one platform to paste it into another.
            The coordination meeting where two teams discovered a clash that the model had flagged three
            weeks earlier but nobody saw it because it was buried in a system nobody actually opened.
            The RFI that sat unassigned for nine days because the software sent the notification to
            the wrong inbox.
          </p>
          <p>
            These are not edge cases. This is daily life on a large construction project. And the
            software industry had, for the most part, responded to it by building more modules,
            more integrations, and more user seats to license.
          </p>
          <p>
            We wanted to try a different approach. What if everything lived in the same system?
            What if the BIM viewer was not a separate desktop application but a tab in the same
            browser window as your RFIs? What if the AI assistant that helped you draft a response
            actually knew the project history, not just the document you had open?
          </p>
          <p>
            That question became MASON.
          </p>

          <h3>The founding moment</h3>
          <p>
            In early 2023, a group of five people who had each worked on projects in the Middle East,
            Southeast Asia, and Europe sat down to map out what a construction platform would look like
            if you started from scratch. Not from an existing codebase, not from a rebrand. From a blank
            screen and a list of problems that every project manager they knew was dealing with.
          </p>
          <p>
            The list was long. Disconnected data across too many tools. Per seat pricing that made teams
            hide information from each other to save licenses. BIM viewers that required expensive
            software installations on every machine. Field teams who could not log anything without
            internet access. Reports that took half a day to compile by hand. RFI workflows that lived
            inside email chains instead of a proper register.
          </p>
          <p>
            They decided to solve all of it, inside one platform, at a price that any mid size
            construction team could actually afford.
          </p>
        </div>

        <div className="gsap-slide-right">
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-item__year">Early 2023</span>
              <p className="timeline-item__title">The whiteboard phase</p>
              <p className="timeline-item__body">
                Five construction professionals spent six weeks mapping every pain point they had
                experienced across their combined 40 years of project work. The result was a 200 item
                list that became the foundation of MASON's feature set.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-item__year">Mid 2023</span>
              <p className="timeline-item__title">First prototype in the browser</p>
              <p className="timeline-item__body">
                The first working BIM viewer loaded an IFC file natively in the browser without any
                plugin. The team was genuinely excited. It meant the whole vision was technically possible.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-item__year">Late 2023</span>
              <p className="timeline-item__title">First real project goes live</p>
              <p className="timeline-item__body">
                A residential tower in the Gulf ran their first coordination session entirely inside MASON.
                Issues, RFIs, and the BIM model on the same screen, with the Concierge drafting the
                first response to a structural query in under 30 seconds.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-item__year">2024</span>
              <p className="timeline-item__title">12 modules, one permission model</p>
              <p className="timeline-item__body">
                After a year of iteration with real project teams, all 12 core modules were production
                ready and operating on a single unified permission system. No more separate logins,
                no more data exports between modules.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-item__year">2025</span>
              <p className="timeline-item__title">Android AR goes live</p>
              <p className="timeline-item__body">
                The Android app shipped with augmented reality support, letting field engineers overlay
                the federated BIM model directly onto the physical building using only a phone. No
                headset, no extra hardware, no added subscription.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-item__year">2026</span>
              <p className="timeline-item__title">47 active projects worldwide</p>
              <p className="timeline-item__body">
                MASON is now live across residential, commercial, infrastructure, and industrial
                projects on four continents. The AI Concierge responds in eight languages. The
                platform handles everything from a five person renovation firm to a 300 person
                programme management office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutProblem = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:680}}>
        <h2 className="h2">The problems we were trying to solve</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          Before we can explain what MASON is, it helps to understand what made us build it.
          The construction software market has a well known problem that nobody in the market
          wants to talk about directly.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:24,marginTop:48}}>
        {[
          {
            heading:"Tools that do not talk to each other",
            body:`Most construction teams run at minimum four separate platforms. A scheduling tool.
            A document management system. A BIM viewer. A punch list app. These systems were
            built independently, acquired by different companies, and integrated through workarounds
            that break when either product updates. The data in your schedule has no
            connection to the issue that just appeared in the field. The BIM clash detected
            last Tuesday has no automatic link to the RFI raised today. You join these dots manually,
            every single day, by hand.`
          },
          {
            heading:"Per seat pricing that punishes collaboration",
            body:`When every user costs money, project teams make decisions based on license count
            rather than actual need. The subcontractor supervisor who should have direct access to the
            issue register does not get a seat because the budget will not allow it. So information
            flows through intermediaries, gets filtered, gets delayed, and sometimes disappears
            entirely. The most expensive thing about per seat pricing is not the cost of the seats.
            It is the cost of the information that never gets shared.`
          },
          {
            heading:"Software not designed for the field",
            body:`A huge share of construction software was designed by people who work in offices,
            for people who work in offices. The field team who needs to log a daily report at 6am
            on a tablet with patchy mobile coverage is almost always an afterthought. The offline
            mode was added later. The mobile app was a compressed version of the desktop. The forms
            were not designed for gloves. MASON was designed for the field first and the office second.`
          },
          {
            heading:"BIM locked behind expensive tooling",
            body:`For years, viewing an IFC model required a desktop application that cost hundreds
            of dollars per seat, often required a specific operating system, and definitely could not
            run on the tablet that the site foreman was carrying. Browser native BIM was technically
            possible for years before anyone shipped it properly. We shipped it. Every team member
            on every plan can open a federated model in a browser tab with no installation and no
            extra charge.`
          },
          {
            heading:"AI that knows nothing about your project",
            body:`The AI tools that appeared in construction software from 2023 onward were mostly
            thin wrappers around general language models. They could write grammatically correct
            sentences. They could not tell you whether RFI-204 was related to the clash flagged
            in the BIM review last month, because they had no idea what RFI-204 was.
            MASON's AI Concierge is project aware. It reads the full history of issues, RFIs,
            logs, and documents for your project before it responds.`
          },
          {
            heading:"Reporting that takes half your Friday",
            body:`Ask any project manager how long they spend each week compiling status reports.
            The answers you get range from two hours to a full day. This is data that already exists
            in the system. It is being assembled manually because the reporting tools are not connected
            to the live data, or because the templates are rigid, or because someone decided that
            report generation should be a premium add-on. In MASON, reports generate from live data
            in seconds. Every module feeds the same reporting engine.`
          }
        ].map((item, i) => (
          <div key={i} className="value-card gsap-fade-up">
            <p className="value-card__heading">{item.heading}</p>
            <p className="value-card__body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutValues = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <h2 className="h2">What we believe in</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          These are not values we wrote for a pitch deck. They are the constraints we put on
          every product decision we make.
        </p>
      </div>
      <div className="values-grid" style={{marginTop:48}}>
        {[
          {
            icon:"tool",
            heading:"Field first, always",
            body:`Every feature we build gets tested by someone who is not sitting at a desk.
            If the daily log form does not work with gloves on a cold morning, it does not ship.
            If a feature requires two wifi bars to function, we add offline support before we
            launch it. The person in the field is not a secondary user. They are the primary user.`
          },
          {
            icon:"dollar",
            heading:"Transparent pricing, no traps",
            body:`We charge per active project, not per seat. Every team member on your account
            gets full access to every module on the plan you are on. There are no module add-ons.
            There are no per-user fees. There are no API surcharges for standard use.
            The price you see on the pricing page is the price you pay. Period.`
          },
          {
            icon:"cpu",
            heading:"AI that understands context",
            body:`We think general purpose AI assistants that have no knowledge of your project
            are a gimmick. The MASON Concierge reads your project data before it responds.
            It knows which RFIs are open, who is responsible for them, what the relevant
            clause in the contract says, and what the BIM model shows at that location.
            Context is not optional. Context is the whole point.`
          },
          {
            icon:"link",
            heading:"One source of truth",
            body:`If the same piece of information exists in two places, it will eventually
            disagree with itself. MASON is designed around a single data model. Your schedule
            connects to your cost module. Your BIM model connects to your issues. Your daily
            log connects to your reports. Nothing is siloed. Nothing needs to be manually
            synced between systems.`
          },
          {
            icon:"zap",
            heading:"Speed is a feature",
            body:`Construction teams do not have time to wait for software to load. We obsess
            over load times, render performance, and the number of taps it takes to complete
            a common task. The BIM viewer uses WebAssembly to load large IFC models faster
            than most desktop applications. Reports generate in seconds. The mobile app opens
            to your active project in under two taps.`
          },
          {
            icon:"globe",
            heading:"Built for global teams",
            body:`Construction projects run across time zones, languages, and regulatory
            environments. MASON's AI Concierge operates in eight languages. The platform
            handles multiple currencies, multiple contract types, and international standard
            document numbering. We did not build for one market and add international
            support later. We built for the world from day one.`
          }
        ].map((v, i) => (
          <div key={i} className="value-card gsap-fade-up">
            <div className="value-card__icon"><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:44,height:44,background:"rgba(232,148,46,.1)",borderRadius:10}} dangerouslySetInnerHTML={{__html:ABOUT_ICONS[v.icon]||""}}/></div>
            <p className="value-card__heading">{v.heading}</p>
            <p className="value-card__body">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutTeam = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <h2 className="h2">The people behind MASON</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          We are a small team with a disproportionate amount of construction site experience.
          Between us we have managed projects on four continents, written BIM execution plans,
          run coordination meetings in English and Arabic, and argued with structural engineers
          at 7am on more occasions than we care to count.
        </p>
      </div>
      <div className="team-grid">
        {[
          {emoji:"user",name:"Karim Al-Nassar",role:"Co-founder and CEO",bio:"Former senior PM on infrastructure megaprojects across the Gulf. Spent 11 years managing BIM coordination before deciding to build better tools."},
          {emoji:"user",name:"Priya Ranganathan",role:"Co-founder and CTO",bio:"Construction technologist with a background in computational design. Built the original IFC parsing engine that powers the MASON BIM viewer."},
          {emoji:"user",name:"James Okafor",role:"Head of Product",bio:"Quantity surveyor turned product manager. Responsible for the cost control and reporting modules. If it involves numbers on a construction project, James has an opinion."},
          {emoji:"user",name:"Nadia Petrova",role:"Head of Mobile",bio:"Lead engineer on the Android app and AR system. Previously built field data tools for civil construction in Eastern Europe. Offline first is her religion."},
          {emoji:"user",name:"Tae-yang Kim",role:"Head of AI",bio:"Applied ML researcher who left academia to work on domain specific AI. Designed the context engine that makes the Concierge project aware rather than generally chatty."},
          {emoji:"user",name:"Sarah Chen",role:"Head of Partnerships",bio:"Construction technology strategist. Built the integration layer connecting MASON to Autodesk, Procore, and MS Project. She speaks fluent API."}
        ].map((m, i) => (
          <div key={i} className="team-card gsap-fade-up">
            <div className="team-card__avatar" style={{display:"flex",alignItems:"center",justifyContent:"center",width:56,height:56,background:"rgba(232,148,46,.12)",borderRadius:"50%"}}><span dangerouslySetInnerHTML={{__html:ABOUT_ICONS[m.emoji]||ABOUT_ICONS.user}}/></div>
            <p className="team-card__name">{m.name}</p>
            <p className="team-card__role">{m.role}</p>
            <p className="team-card__bio">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutPricing = () => (
  <section className="section">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <h2>Why we charge per project, not per seat</h2>
          <p>
            When we were still designing MASON on a whiteboard, we spent two full days arguing
            about pricing. The default assumption in construction software is that you charge
            per user. It is simple to explain, easy to model, and it scales with company size.
            We decided against it, and we want to be honest about why.
          </p>
          <p>
            Per seat pricing creates an incentive to hide information. When every user costs money,
            the cheapest way to manage a project is to give the minimum number of people access.
            That means site supervisors share logins. Subcontractors get read only guest access at best.
            The junior engineer who spotted the clash does not have the authority to log it because
            she does not have an account. The cost of the seat becomes the cost of a communication
            channel, and that is a bad trade.
          </p>
          <p>
            We charge based on how many active projects you are running. If you have three active
            projects, you pay the Starter rate. If you have fifteen, you pay the Professional rate.
            Every person who needs to work on those projects gets full access. Your subcontractors,
            your client, your structural consultant, the person from the design office who needs
            to check a revision. All included, all on the same account, no extra charge.
          </p>
          <p>
            We believe this is the right way to price construction software because construction
            is a collaborative industry. The more people who have real access to real information,
            the fewer things go wrong on site.
          </p>
          <h3>What about the modules?</h3>
          <p>
            Every plan includes every module. BIM viewer, schedule, RFIs, issues, cost, documents,
            submittals, daily logs, reports, the mobile app, the AI Concierge, and admin tools.
            Nothing is locked behind a premium tier. Nothing is sold separately.
          </p>
          <p>
            We have watched teams pay for construction platforms where the BIM module is an
            add-on, the advanced reporting requires an upgrade, and the API is gated behind
            enterprise pricing. We find that deeply frustrating. If a feature exists in our
            platform, it exists for every customer on every plan.
          </p>
        </div>
        <div className="gsap-slide-right">
          <div style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,padding:32}}>
            <p style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--accent)",marginBottom:20}}>What you get on every plan</p>
            {[
              ["12 integrated modules","BIM, schedule, RFIs, issues, cost, docs, submittals, logs, reports, mobile, AI, admin"],
              ["Unlimited team members","Every person on your project gets a full account with no guest tiers"],
              ["Unlimited data storage","Upload every IFC file, every drawing, every revision without storage fees"],
              ["Browser native BIM","No plugin, no desktop app, no Autodesk license required at all"],
              ["AI Concierge","Project aware assistant in 8 languages, on every plan"],
              ["Android app","Full offline support, AR overlay, on every plan"],
              ["REST API","Full API access on Professional and Scale plans"],
              ["30 day free trial","All features, no credit card required, cancel anytime"]
            ].map(([title,desc],i)=>(
              <div key={i} style={{display:"flex",gap:14,paddingBottom:14,marginBottom:14,borderBottom:"1px solid var(--line)"}}>
                <span style={{color:"#4ade80",fontWeight:700,flexShrink:0}}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <div>
                  <p style={{fontWeight:600,fontSize:14,margin:"0 0 3px"}}>{title}</p>
                  <p style={{fontSize:13,color:"var(--text-muted)",margin:0,lineHeight:1.5}}>{desc}</p>
                </div>
              </div>
            ))}
            <a href="/pricing" className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginTop:8}}>See full pricing</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutTech = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:680}}>
        <h2 className="h2">How MASON is built</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          We are a product company, not a services company. That means we invest heavily in
          the technical quality of what we ship. Here is an honest overview of the architecture
          decisions we made and why we made them.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:24,marginTop:48}}>
        {[
          {heading:"Browser native BIM with WebAssembly",body:`Loading an IFC model in a browser used to be slow or impossible. We built the
            MASON BIM engine on WebAssembly, which gives us near native parsing performance inside
            the browser tab. A 400MB federated model loads in seconds. No plugin, no desktop app,
            no special browser. Just open the tab.`},
          {heading:"Single unified data model",body:`Every module in MASON writes to and reads from the same underlying data model.
            When an issue is created from a BIM clash, it carries the model reference, the
            coordinates, the element IDs, and the discipline. When that issue becomes an RFI,
            all that context travels with it. There is no data transformation layer between
            modules because there is no separation between modules at the data level.`},
          {heading:"Offline first mobile architecture",body:`The Android app was designed from the first line of code to work without
            internet connectivity. All project data syncs to the device when you go online.
            When you go offline, you keep working. Daily logs, issue records, photo attachments,
            and form completions queue locally and sync automatically when connectivity returns.`},
          {heading:"Project aware AI with full context",body:`The MASON Concierge is not a general purpose language model bolted onto the
            interface. It reads the entire context of your project before it responds to any
            query. Issues, RFIs, document revisions, daily logs, cost data, schedule delays,
            and BIM model attributes are all available to it at response time.`},
          {heading:"Role based permissions across all modules",body:`MASON runs on a single permission model that applies consistently across every
            module. An owner level user has read and write access everywhere. A contractor sees
            their own work packages plus the coordination data they need. A client contact sees
            the programme, reports, and issues without seeing sensitive cost data.`},
          {heading:"REST API and webhook support",body:`MASON exposes a full REST API on Professional and Scale plans. Every entity in
            the platform is accessible via the API. Webhooks fire on state changes, so you can
            build integrations that respond to events in real time. Full OpenAPI documentation
            is available in the developer portal.`}
        ].map((item,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <p className="value-card__heading">{item.heading}</p>
            <p className="value-card__body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutWhatWeThink = () => (
  <section className="section">
    <div className="container">
      <div className="prose-section gsap-fade-up" style={{maxWidth:740,margin:"0 auto"}}>
        <h2>What we think is happening in construction technology right now</h2>
        <p>
          The construction industry is going through a genuine shift in how it uses technology.
          Not because vendors finally made compelling enough products, but because the cost of
          NOT adopting good technology has become impossible to ignore. Projects are getting
          more complex. Labour is getting more expensive. Margins are under pressure from every
          direction. The spreadsheet and the email chain are no longer adequate tools for a
          modern construction project.
        </p>
        <p>
          At the same time, the consolidation at the top of the construction tech market has
          created a gap in the middle. The large platforms have gotten more expensive, more
          complicated, and more focused on enterprise accounts. The small tools are useful
          for specific problems but they do not connect to anything. There is a large and
          growing set of construction teams that need a full platform but cannot justify the
          cost and complexity of the enterprise options.
        </p>
        <p>
          That is the market we are building for. Not the five person team that needs a simple
          punch list app. Not the billion dollar programme office that has a dedicated BIM
          management team. The 20 to 200 person construction company or project team that
          wants the full capability of enterprise software at a price and complexity level
          that actually makes sense for their business.
        </p>
        <h3>Where AI fits into construction</h3>
        <p>
          We have strong opinions about what AI can and cannot do for construction teams right
          now, and we try to be honest about both sides of that.
        </p>
        <p>
          AI is genuinely excellent at tasks that involve reading large amounts of structured
          information and producing a coherent summary or draft. That describes a significant
          portion of what project coordinators and document controllers spend their days doing.
          Drafting RFI responses that reference the contract. Summarising the issues raised
          in the last coordination meeting. Identifying which daily logs mention a particular
          activity. This is real, practical value that saves real hours every week.
        </p>
        <p>
          AI is not a replacement for engineering judgment, site inspection, or project
          management experience. We do not promise that the Concierge will manage your
          project for you. We promise that it will handle the administrative and drafting
          work that currently eats an unreasonable amount of your skilled professionals'
          time, and that it will do it with accurate context about your actual project
          rather than generic knowledge about construction in general.
        </p>
        <h3>What we are building next</h3>
        <p>
          The most requested feature from our current customers is an enhanced schedule module
          with proper critical path method support and direct links between schedule delays
          and cost forecast updates. That is in active development and we expect to ship the
          first version in Q3 2026.
        </p>
        <p>
          We are also expanding the Concierge's ability to work with the cost module. Right now
          it can read cost data and answer questions. The next version will be able to generate
          cost forecast reports, flag variances against the approved budget, and draft
          early warning notices based on the schedule data automatically.
        </p>
        <p>
          On the mobile side, we are working on iOS support. The Android app came first because
          it is the dominant platform on construction sites in most of the markets we serve.
          iOS is coming and it will have full feature parity with Android on launch. We will
          not rush it.
        </p>
      </div>
    </div>
  </section>
);

const AboutStats = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640,textAlign:"center",margin:"0 auto 48px"}}>
        <h2 className="h2">MASON in numbers</h2>
        <p style={{fontSize:15,color:"var(--text-muted)",marginTop:12}}>
          Real numbers from live projects, not projections.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:24}}>
        {[
          {value:"47",label:"Active projects live right now across four continents"},
          {value:"12",label:"Integrated modules included on every plan with no add-ons"},
          {value:"8",label:"Languages supported by the AI Concierge"},
          {value:"$149",label:"Per project per month on Professional, unlimited team members"},
          {value:"30s",label:"Median time for the Concierge to draft an RFI response"},
          {value:"400+",label:"MB in the largest federated IFC model loaded in the MASON viewer to date"},
          {value:"100%",label:"Offline capable on Android, full data sync on reconnect"},
          {value:"0",label:"Extra charges for storage, seats, or API calls on standard use"}
        ].map((s,i)=>(
          <div key={i} className="gsap-fade-up" style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:12,padding:24,textAlign:"center"}}>
            <span className="stat-cell__value">{s.value}</span>
            <span className="stat-cell__label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutFAQ = () => {
  const [open, setOpen] = React.useState(null);
  const items = [
    {q:"Is MASON only for large construction projects?",a:`No. The Starter plan at $49 per month covers three active projects and is designed for smaller teams. We have customers running single residential projects on MASON and customers running programme management offices with dozens of concurrent contracts. The platform scales with you without requiring you to change plans until your project count grows.`},
    {q:"Where is my data stored?",a:`All data is stored on AWS infrastructure in the EU West region by default. Scale plan customers can request data residency in specific regions including US East, Singapore, and UAE as part of their contract agreement. All data is encrypted at rest and in transit with AES-256.`},
    {q:"What construction types does MASON support?",a:`MASON is used across residential, commercial, industrial, infrastructure, and mixed use development. The modules are general enough to apply across contract types. The cost module supports lump sum, remeasurement, and cost plus structures. We do not have specialist modules for specific sectors like oil and gas or nuclear, though teams in those sectors use MASON for the coordination modules.`},
    {q:"Can subcontractors and clients access MASON?",a:`Yes. You can invite as many external users as you need without additional cost. You control their permission level, which modules they can see, and which projects they have access to. Subcontractors typically get access to their relevant work packages, issues, and the daily log. Clients typically get access to reports, the schedule view, and the issue register in a read only capacity.`},
    {q:"How is MASON different from Procore?",a:`The most significant practical differences are pricing, the BIM viewer, and the AI Concierge. Procore charges per user, which means large teams face very high monthly bills. MASON charges per project with unlimited users included. Procore's BIM viewer requires Autodesk integration. MASON's viewer is browser native with no third party dependency. There is a full side by side comparison on the comparison page.`},
    {q:"Do you offer a discount for annual billing?",a:`Yes. Paying annually gives you two months free, which works out to about 17% off the monthly rate. The annual payment is made upfront. You can request a custom annual quote if you have multiple projects and want consolidated billing across all of them.`},
    {q:"Can I migrate data from another platform?",a:`We have migration support for Procore, Aconex, and Fieldwire. For other platforms, we provide import templates for issues, RFIs, and document registers in CSV format. IFC models import directly. Schedule data imports from Microsoft Project XML and Primavera P6 XER format. Migration process is included in the onboarding support for Professional and Scale plans.`},
    {q:"What kind of support do you offer?",a:`All plans include email support with a one business day response commitment. Professional plans include priority support with a four hour response during business hours. Scale plans include a dedicated customer success manager and phone support. We also run a monthly webinar for all customers covering new features and best practices from live projects.`}
  ];
  return (
    <section className="section">
      <div className="container" style={{maxWidth:820}}>
        <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
          <h2 className="h2">Questions about MASON</h2>
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

const AboutCTA = () => (
  <section className="section bg-subtle">
    <div className="container" style={{textAlign:"center",maxWidth:640}}>
      <div className="gsap-fade-up">
        <h2 className="h2">Come see what we built</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
          The best way to understand MASON is to use it on a real project. Start a 30 day
          free trial with no credit card, or book a 30 minute demo and we will walk you
          through the platform live with your specific use case in mind.
        </p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">Start free trial</a>
          <a href="/contact" className="btn btn-ghost btn-lg">Book a demo</a>
        </div>
        <p style={{fontSize:13,color:"var(--text-faint)",marginTop:20}}>
          30 day trial. All features. No credit card. Cancel anytime.
        </p>
      </div>
    </div>
  </section>
);

const AboutPage = () => {
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
    <main>
        <AboutHero />
        <AboutMission />
        <AboutStory />
        <AboutProblem />
        <AboutValues />
        <AboutTeam />
        <AboutPricing />
        <AboutTech />
        <AboutWhatWeThink />
        <AboutStats />
        <AboutFAQ />
        <AboutCTA />
      </main>
  );
};

export default AboutPage;
