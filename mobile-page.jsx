// mobile-page.jsx

const MobHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Android app</span>
        <h1 className="page-hero__title gsap-fade-up">
          Full MASON in your pocket.<br />
          <span style={{color:"var(--accent)"}}>With or without internet.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          The MASON Android app was built for the field, not adapted from a desktop interface.
          Every feature that a site engineer, field supervisor, or project manager needs to do
          their job is there. And when the signal disappears, the app keeps working.
        </p>
        <div style={{display:"flex",gap:12,marginTop:32}} className="gsap-fade-up">
          <a href="https://app.masononsite.com/register" className="btn btn-primary">Start free trial</a>
          <a href="contact.html" className="btn btn-ghost">Book a demo</a>
        </div>
      </div>
    </div>
  </section>
);

const MobOffline = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="about-story-grid">
        <div className="prose-section gsap-slide-left">
          <h2>Offline mode that actually works</h2>
          <p>
            Most apps that claim offline support mean they show you cached data if you lose
            connection. MASON's Android app means you can keep doing your job completely.
            Log issues with photos. Submit daily reports. Update task status. Mark up RFIs.
            Everything queues locally on the device and syncs the moment you get connectivity back.
          </p>
          <p>
            When you sync, the app handles conflicts intelligently. If two people updated the
            same record while both offline, you see exactly what each person changed and choose
            which version to keep. You never lose work.
          </p>
          <h3>What is available offline</h3>
          {[
            "Full project data including all active records",
            "Daily log creation and submission",
            "Issue creation with photos and location tags",
            "RFI viewing and status updates",
            "Document viewing for all downloaded files",
            "BIM model viewing for models downloaded to the device",
            "AR overlay for models cached on the device"
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"7px 0",borderBottom:"1px solid var(--line)"}}>
              <span style={{color:"#4ade80",fontWeight:700,flexShrink:0}}>check</span>
              <span style={{fontSize:14,color:"var(--text-muted)"}}>{item}</span>
            </div>
          ))}
        </div>
        <div className="gsap-slide-right" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:20}}>
          <div className="mobile-phone">
            <div className="mobile-phone__notch" />
            <div className="mobile-phone__screen">
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontWeight:700,fontSize:13}}>Daily Log</span>
                <span className="mob-offline-badge">? Offline</span>
              </div>
              <div className="mob-row">
                <div className="mob-row__label">Date</div>
                <div className="mob-row__val">8 May 2026</div>
              </div>
              <div className="mob-row">
                <div className="mob-row__label">Workforce on site</div>
                <div className="mob-row__val">47 workers . 3 supervisors</div>
              </div>
              <div className="mob-row">
                <div className="mob-row__label">Progress note</div>
                <div className="mob-row__val">Poured L12 slab, east bay complete</div>
              </div>
              <div className="mob-row" style={{background:"rgba(74,222,128,.08)",borderColor:"rgba(74,222,128,.2)"}}>
                <div className="mob-row__label" style={{color:"#4ade80"}}>3 photos attached</div>
                <div className="mob-row__val" style={{fontSize:11,color:"var(--text-muted)"}}>Will sync on reconnect</div>
              </div>
              <button style={{background:"var(--accent)",border:"none",color:"#fff",borderRadius:8,padding:"10px 0",fontWeight:700,fontSize:13,width:"100%",marginTop:4}}>
                Save log locally
              </button>
            </div>
          </div>
          <p style={{fontSize:13,color:"var(--text-muted)",textAlign:"center",maxWidth:200}}>
            Logs saved offline sync automatically when connectivity returns. No manual action required.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MobAR = () => (
  <section className="section">
    <div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="about-story-grid">
        <div className="gsap-slide-left" style={{order:2}}>
          <div style={{background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:16,padding:32,textAlign:"center"}}>
            <div style={{fontSize:80,marginBottom:16}}>?</div>
            <p style={{fontWeight:700,fontSize:16,marginBottom:8}}>Point. See the model.</p>
            <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.7}}>
              Hold up your Android phone at any point on site. MASON's AR engine overlays
              the relevant section of the federated IFC model onto what the camera sees,
              positioned using the building's coordinate system and your GPS location.
            </p>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginTop:16}}>
              {["IFC 2x3","IFC4","Federated models","All disciplines"].map((tag,i)=>(
                <span key={i} style={{fontSize:11,fontWeight:600,padding:"4px 10px",background:"rgba(232,148,46,.1)",border:"1px solid rgba(232,148,46,.25)",borderRadius:20,color:"var(--accent)"}}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="prose-section gsap-slide-right" style={{order:1}}>
          <h2>Augmented reality on Android</h2>
          <p>
            The MASON Android app includes AR support that lets you overlay the federated
            BIM model directly onto the physical building using the phone camera. No headset.
            No additional hardware. No extra charge. Just the same phone the field team
            already carries.
          </p>
          <p>
            This is particularly useful for below-slab MEP coordination, structural
            verification, and clash resolution on site. Instead of explaining where a
            conflict is with grid references and elevations, you walk to the location,
            point the phone, and the model shows you exactly what is supposed to be there
            and what is actually there.
          </p>
          <h3>How it works in practice</h3>
          <p>
            You open the BIM module in the Android app, load the federated model or a
            single discipline model, and tap the AR button. The app uses the building's
            coordinate reference system and your location to position the model. You can
            filter which disciplines are visible, adjust the opacity of the overlay, and
            take a screenshot that saves directly to the project record with the model
            overlay included.
          </p>
          <p>
            If a clash was logged in the BIM viewer on desktop, you can navigate to that
            clash in the AR view on site and see exactly what the model says should be
            there relative to what has actually been installed.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MobFeatures = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <h2 className="h2">Everything in the app</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          The MASON Android app is not a stripped down version of the desktop platform.
          It is a full implementation of the modules field teams need, built for a touch
          interface and designed to work without a desk or reliable internet.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:24,marginTop:48}}>
        {[
          {icon:"?",heading:"Daily logs",body:"Create structured daily logs with workforce counts, progress notes, weather records, and photo evidence. Works fully offline. Logs sync when connectivity returns."},
          {icon:"?",heading:"Issue management",body:"Create, update, and close issues on site with photo evidence and location tags. Issues link automatically to BIM elements if created from the AR view."},
          {icon:"?",heading:"RFI access",body:"View the full RFI register, update status, add responses, and attach photos. Create new RFIs from the field with all the required fields pre-populated from the project template."},
          {icon:"?",heading:"Document access",body:"Download and view any document in the project register. PDF drawings, IFC models, and all file types supported. Cached documents available offline."},
          {icon:"?",heading:"BIM viewer",body:"Full IFC model viewer in the app. Navigate between floors, filter disciplines, measure elements, and create issues directly from the model. Works offline for cached models."},
          {icon:"?",heading:"AR overlay",body:"Overlay the federated BIM model onto the physical building through the camera. Filter by discipline, adjust opacity, and capture screenshots to the project record."},
          {icon:"?",heading:"Punch lists and inspections",body:"Run structured inspection checklists with pass, fail, and observation outcomes. Attach photos to each item. Generate the inspection report directly from the completed checklist."},
          {icon:"?",heading:"Push notifications",body:"Receive real-time notifications for RFIs assigned to you, issues that require your action, and daily log reminders configured by the project administrator."}
        ].map((f,i)=>(
          <div key={i} className="value-card gsap-fade-up">
            <div style={{fontSize:28,marginBottom:14}}>{f.icon}</div>
            <p style={{fontWeight:700,fontSize:15,margin:"0 0 10px"}}>{f.heading}</p>
            <p style={{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.65,margin:0}}>{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MobDevices = () => (
  <section className="section">
    <div className="container" style={{maxWidth:740}}>
      <div className="prose-section gsap-fade-up">
        <h2>Device requirements and recommendations</h2>
        <p>
          The MASON Android app runs on Android 9.0 and above. For standard features including
          offline logging, issue management, and document viewing, almost any Android device
          from the last five years will work. For AR overlay, you need a device with a rear
          camera of at least 12 megapixels and a processor from 2019 or later to get smooth
          AR rendering.
        </p>
        <h3>Recommended devices for full functionality</h3>
        <p>
          For teams that want the full feature set including AR at the best performance, we
          recommend any current generation Android device in the Samsung Galaxy S or A series,
          Google Pixel series, or equivalent. The Samsung Galaxy A54 and above offers excellent
          field durability with good camera quality and enough processor power for smooth AR
          at a reasonable price point.
        </p>
        <p>
          For environments with extreme dust, water, or impact risk, the Samsung Galaxy XCover
          series, Kyocera DuraForce, or Sonim XP10 are supported and tested. These rugged
          devices run standard Android and the MASON app installs from the Google Play Store
          like any other device.
        </p>
        <h3>About iOS</h3>
        <p>
          The iOS app is in development. We know that is not ideal for teams where the project
          manager and quantity surveyor are on iPhones while the field team is on Android.
          The Android app covers the full feature set for field use. The desktop browser
          application works fully on iPhone Safari in the meantime, covering all the modules
          that are primarily used at a desk. The native iOS app will have full feature parity
          with Android including AR when it launches.
        </p>
      </div>
    </div>
  </section>
);

const MobilePage = () => {
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
        <MobHero />
        <MobOffline />
        <MobAR />
        <MobFeatures />
        <MobDevices />
        <section className="section bg-subtle">
          <div className="container" style={{textAlign:"center",maxWidth:580}}>
            <div className="gsap-fade-up">
              <h2 className="h2">Download the app</h2>
              <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 36px"}}>
                The MASON Android app is available on the Google Play Store. Start a free trial on desktop and the app connects to your account automatically.
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
root.render(<MobilePage />);
