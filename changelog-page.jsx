// changelog-page.jsx

const ChangelogHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Product changelog</span>
        <h1 className="page-hero__title gsap-fade-up">
          Every update we ship,<br />
          <span style={{color:"var(--accent)"}}>documented honestly.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          We ship significant product updates every two to four weeks. This page records
          every change, why we made it, and what it means for your workflow. Nothing
          is buried, repackaged, or presented as more than it is.
        </p>
      </div>
    </div>
  </section>
);

const ChangelogEntries = () => {
  const entries = [
    {
      version:"2.4.0",
      date:"8 May 2026",
      label:"Major release",
      labelColor:"var(--accent)",
      heading:"AI Concierge context depth expanded to full project history",
      summary:`The AI Concierge can now answer questions drawing on the complete history of
      a project, not just the current state. You can ask about an RFI that was raised and
      closed three months ago, a design decision that was documented in a daily log, or a
      cost variance that was approved in a previous period. The Concierge retrieves the
      relevant context automatically rather than requiring you to navigate to it first.`,
      changes:[
        {type:"new",text:"Full project history context for AI Concierge queries across all modules"},
        {type:"new",text:"Concierge can now reference daily log entries and their attached photos in responses"},
        {type:"new",text:"Cross-module answers: ask about an RFI and the Concierge can relate it to the relevant cost item and schedule task simultaneously"},
        {type:"improved",text:"Response quality significantly improved for questions about closed records and historical decisions"},
        {type:"improved",text:"Response latency reduced by 40% for history-heavy queries through improved retrieval architecture"},
        {type:"fixed",text:"Concierge occasionally hallucinated record IDs for RFIs with very long subject lines. This is resolved."}
      ]
    },
    {
      version:"2.3.2",
      date:"21 April 2026",
      label:"Patch",
      labelColor:"var(--text-muted)",
      heading:"Android AR stability improvements and offline sync conflict resolution upgrade",
      summary:`Two specific improvements in this patch. First, a stability issue in the Android
      AR overlay that caused the model to drift when the user moved quickly between floors.
      Second, an improvement to the conflict resolution interface when multiple offline devices
      sync simultaneously.`,
      changes:[
        {type:"fixed",text:"AR model drift when moving vertically between floors on tall buildings. Root cause was a coordinate system recalculation being triggered too aggressively on elevation change."},
        {type:"fixed",text:"AR session ending unexpectedly on Android 14 devices with specific camera permission configurations"},
        {type:"improved",text:"Offline sync conflict resolution interface now shows a side-by-side diff of the conflicting changes rather than just the field names"},
        {type:"improved",text:"Sync queue now shows estimated sync time based on queue depth and connection speed"},
        {type:"fixed",text:"Daily logs created offline sometimes appeared with incorrect date on sync when device timezone differed from project timezone. Fixed by storing timestamps in UTC at creation."}
      ]
    },
    {
      version:"2.3.1",
      date:"9 April 2026",
      label:"Patch",
      labelColor:"var(--text-muted)",
      heading:"BIM viewer performance improvements for large federated models",
      summary:`Teams working with federated models above 800MB were experiencing slow initial
      load times and choppy navigation in the browser viewer. This patch introduces progressive
      loading and improved LOD switching that makes large model navigation significantly smoother.`,
      changes:[
        {type:"improved",text:"Federated model initial load time reduced by approximately 60% for models above 500MB through progressive geometry streaming"},
        {type:"improved",text:"Level of detail switching is now adaptive based on navigation speed, reducing geometry pop-in during fast camera movement"},
        {type:"new",text:"Model loading progress bar now shows per-discipline progress rather than a single aggregate percentage"},
        {type:"fixed",text:"IFC4 models with certain element property set structures were not displaying attribute data in the properties panel. Fixed."},
        {type:"fixed",text:"Clash issue creation from the BIM viewer was not preserving the correct model coordinates when the model had a non-standard origin point"}
      ]
    },
    {
      version:"2.3.0",
      date:"24 March 2026",
      label:"Major release",
      labelColor:"var(--accent)",
      heading:"Gantt schedule module with predecessor logic and baseline comparison",
      summary:`The MASON schedule module now supports full predecessor logic across all
      standard dependency types (finish to start, start to start, finish to finish, start to
      finish) with lead and lag. You can compare the live schedule against a saved baseline
      and see slippage highlighted directly on the Gantt chart.`,
      changes:[
        {type:"new",text:"Full predecessor logic with FS, SS, FF, SF dependency types and lead/lag values"},
        {type:"new",text:"Baseline comparison mode: save any schedule state as a baseline and compare against it at any time"},
        {type:"new",text:"Critical path visualisation highlighted on the Gantt chart"},
        {type:"new",text:"Two-way sync with Microsoft Project via XML import/export"},
        {type:"new",text:"Schedule tasks can now be linked to RFIs and issues so blocking items are visible directly on the Gantt"},
        {type:"improved",text:"Gantt drag and resize interactions rewritten for better precision and performance on dense schedules"},
        {type:"improved",text:"MS Project import now preserves resource assignments and WBS structure"},
        {type:"fixed",text:"Task duration was rounding to the nearest whole day in some edge cases. Now preserves half-day precision."}
      ]
    },
    {
      version:"2.2.3",
      date:"10 March 2026",
      label:"Patch",
      labelColor:"var(--text-muted)",
      heading:"Submittal register improvements and document version comparison",
      summary:`Several improvements to the submittal workflow based on feedback from customers
      running large-volume submittal registers, plus a new document version comparison tool
      that shows what changed between two revisions of a drawing.`,
      changes:[
        {type:"new",text:"Document version comparison: select two revisions of any PDF drawing and see a visual overlay highlighting what changed"},
        {type:"new",text:"Bulk submittal status update for large registers"},
        {type:"new",text:"Submittal due date reminders configurable per project by the project administrator"},
        {type:"improved",text:"Submittal register filter performance significantly improved for registers above 2,000 items"},
        {type:"improved",text:"Submittal response email notifications now include the response content inline rather than requiring a login to read"},
        {type:"fixed",text:"Submittal package PDF export was not including transmittal cover page when the cover page template had custom fields with special characters"}
      ]
    },
    {
      version:"2.2.0",
      date:"18 February 2026",
      label:"Major release",
      labelColor:"var(--accent)",
      heading:"Cost module: forecast at completion with variance analysis",
      summary:`The cost module now supports full forecast at completion analysis with committed
      cost tracking, variation management, and variance reporting against the original budget.
      The previous cost module tracked actuals. The new module lets you see where you are
      heading, not just where you have been.`,
      changes:[
        {type:"new",text:"Forecast at completion (FAC) calculation with configurable methodology per cost item"},
        {type:"new",text:"Committed cost register separate from actuals, with commitment approval workflow"},
        {type:"new",text:"Variation log integrated with cost module: approved variations update the revised contract sum automatically"},
        {type:"new",text:"Budget variance reporting: dashboard showing original budget, revised budget, committed, actual, and FAC in one view"},
        {type:"new",text:"Cost code mapping for SAP and Sage 300 two-way sync (live integrations)"},
        {type:"improved",text:"Cost item bulk import from CSV with column mapping tool"},
        {type:"improved",text:"Cost module permissions now support read-only access without needing to restrict at the project level"}
      ]
    },
    {
      version:"2.1.1",
      date:"2 February 2026",
      label:"Patch",
      labelColor:"var(--text-muted)",
      heading:"Push notification reliability and Android background sync fixes",
      summary:`Push notifications were being delivered late or not at all for some Android devices
      running aggressive battery management. This patch improves notification delivery reliability
      and fixes a background sync issue affecting certain device manufacturers.`,
      changes:[
        {type:"fixed",text:"Push notifications delayed by up to 4 hours on Samsung devices with strict battery optimisation enabled. MASON now requests battery optimisation exemption on first install."},
        {type:"fixed",text:"Background sync was being killed by the OS on Xiaomi and Oppo devices with custom Android skins. Resolved through a revised sync scheduling approach."},
        {type:"improved",text:"Notification settings in the app now show which notification types are enabled and allow per-project configuration"},
        {type:"fixed",text:"Daily log reminder notifications were showing the previous day's date in the notification body on devices where midnight crossed during notification delivery"}
      ]
    },
    {
      version:"2.1.0",
      date:"20 January 2026",
      label:"Major release",
      labelColor:"var(--accent)",
      heading:"AI Concierge language support expanded to 8 languages",
      summary:`The AI Concierge now accepts questions and returns answers in English, Arabic,
      Spanish, French, Portuguese, Mandarin, Hindi, and Urdu. Language detection is automatic.
      You type in your language and the Concierge responds in the same language. Project data
      stays in its original language and the Concierge reads and interprets it correctly regardless
      of the language it was entered in.`,
      changes:[
        {type:"new",text:"AI Concierge responses in Arabic, Spanish, French, Portuguese, Mandarin, Hindi, and Urdu in addition to English"},
        {type:"new",text:"Automatic language detection, no configuration required"},
        {type:"new",text:"Cross-language queries: ask a question in Spanish about an RFI that was written in English and receive a coherent response"},
        {type:"improved",text:"Arabic and Urdu UI text direction support improved throughout the interface"},
        {type:"improved",text:"RFI and issue descriptions now display correctly in all supported languages in exported PDF reports"},
        {type:"fixed",text:"Date formats were inconsistent in Concierge responses for non-English queries. Standardised to the date format set in the project settings."}
      ]
    }
  ];

  const typeColor = {new:"#4ade80",improved:"var(--accent)",fixed:"#60a5fa"};
  const typeLabel = {new:"New",improved:"Improved",fixed:"Fixed"};

  return (
    <section className="section">
      <div className="container" style={{maxWidth:800}}>
        <div className="changelog-list">
          {entries.map((entry,i)=>(
            <div key={i} className="changelog-entry gsap-fade-up">
              <div className="changelog-entry__header">
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontFamily:"var(--font-mono)",fontWeight:700,fontSize:16,color:"var(--text)"}}>v{entry.version}</span>
                  <span style={{fontSize:11,fontWeight:600,padding:"3px 8px",border:`1px solid ${entry.labelColor}`,borderRadius:20,color:entry.labelColor,textTransform:"uppercase",letterSpacing:".08em"}}>{entry.label}</span>
                </div>
                <span style={{fontSize:13,color:"var(--text-muted)"}}>{entry.date}</span>
              </div>
              <h3 style={{fontSize:18,fontWeight:700,margin:"12px 0 8px",lineHeight:1.4,color:"var(--text)"}}>{entry.heading}</h3>
              <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.7,margin:"0 0 20px"}}>{entry.summary}</p>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {entry.changes.map((c,j)=>(
                  <div key={j} style={{display:"flex",gap:10,alignItems:"baseline"}}>
                    <span style={{fontSize:11,fontWeight:700,flexShrink:0,width:64,textAlign:"right",color:typeColor[c.type]}}>{typeLabel[c.type]}</span>
                    <span style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.6}}>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:60,padding:32,background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,textAlign:"center"}} className="gsap-fade-up">
          <h3 style={{fontSize:18,fontWeight:700,marginBottom:8}}>Want updates in your inbox?</h3>
          <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.7,marginBottom:24}}>
            We send a changelog email every time we ship a major release. No marketing.
            Just the changes.
          </p>
          <form style={{display:"flex",gap:8,maxWidth:380,margin:"0 auto"}} onSubmit={e=>e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{flex:1,padding:"10px 14px",background:"var(--bg-base)",border:"1px solid var(--line)",borderRadius:8,color:"var(--text)",fontSize:13,outline:"none"}}
            />
            <button type="submit" className="btn btn-primary" style={{flexShrink:0,fontSize:13}}>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ChangelogPage = () => {
  React.useEffect(() => {
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
        <ChangelogHero />
        <ChangelogEntries />
      </main>
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChangelogPage />);
