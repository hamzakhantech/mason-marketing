import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const Hero = () => (
  <InnerPageHero
    eyebrow="Autodesk Construction Cloud alternatives 2026"
    title={
      <>
        Best Autodesk ACC Alternatives<br />
        <span className="inner-hero__accent">for Teams That Don't Need Enterprise Licensing</span>
      </>
    }
    lead={
      <>
        Autodesk Construction Cloud (and Navisworks before it) was built for large AEC firms
        managing hundreds of millions in construction volume. The licensing model reflects
        that: $5,000–$20,000+/year per team, desktop installation required, and a separate
        BIM 360 / ACC license on top of design tools. Here are the alternatives that give you
        real BIM capability without the enterprise tax.
      </>
    }
  />
);

const QuickCompare = () => {
  const tools = [
    { name: "MASON", price: "$219–$399/mo flat", bimType: "Browser-native IFC", clash: "✓ Navisworks-class", install: "No", plugin: "None required", perSeat: "No" },
    { name: "Autodesk ACC", price: "$5K–$20K+/yr", bimType: "Desktop + cloud", clash: "✓ Via Navisworks", install: "Desktop required", plugin: "Navisworks", perSeat: "Yes" },
    { name: "Procore", price: "$10K–$80K/yr", bimType: "Via ACC license", clash: "Via Autodesk", install: "App available", plugin: "Autodesk license", perSeat: "Yes" },
    { name: "Trimble Connect", price: "$25–$40/user/mo", bimType: "Cloud IFC", clash: "Limited", install: "No", plugin: "Sketchup preferred", perSeat: "Yes" },
    { name: "BIMcollab", price: "$35–$65/user/mo", bimType: "Cloud BCF/IFC", clash: "✓ BCF workflows", install: "No", plugin: "Works with all BIM tools", perSeat: "Yes" },
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 40 }}>
          <h2 className="h2">Quick comparison</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12 }}>
            Autodesk ACC / Navisworks vs alternatives that don't require desktop installs or enterprise contracts.
          </p>
        </div>
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Pricing</th>
                <th>BIM type</th>
                <th>Clash detection</th>
                <th>Desktop install?</th>
                <th>Plugin required?</th>
                <th>Per-seat fees</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((t, i) => (
                <tr key={i} style={t.name === "MASON" ? { background: "rgba(232,148,46,.06)" } : {}}>
                  <td style={{ fontWeight: t.name === "MASON" ? 700 : 400, color: t.name === "MASON" ? "var(--accent)" : "var(--text)" }}>{t.name}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.price}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.bimType}</td>
                  <td style={{ color: t.clash.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.clash}</td>
                  <td style={{ color: t.install === "No" ? "#4ade80" : "var(--text-faint)" }}>{t.install}</td>
                  <td style={{ color: t.plugin === "None required" ? "#4ade80" : "var(--text-faint)", fontSize: 13 }}>{t.plugin}</td>
                  <td style={{ color: t.perSeat === "No" ? "#4ade80" : "var(--text-faint)" }}>{t.perSeat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const WhyLeave = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 48 }}>
        <h2 className="h2">Why smaller teams leave Autodesk's ecosystem</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {[
          { title: "Licensing stacks are expensive", body: "To get BIM coordination + clash detection + project management with Autodesk, you need at minimum ACC, Navisworks (or ACC Collaboration), and likely Revit. Each is licensed separately. Stacked, this easily exceeds $10,000/year for a small team." },
          { title: "Desktop-first, not browser-native", body: "Navisworks and most Autodesk BIM tools require desktop installs. ACC's cloud viewer has improved but is still limited compared to desktop Navisworks for clash detection depth and model federation." },
          { title: "Not a construction PM platform", body: "Autodesk's tools are great for BIM authoring and coordination, but ACC isn't a Procore or MASON replacement for RFIs, AIA billing, daily logs, and change orders. You still need a separate PM layer." },
          { title: "Steep learning curve for field teams", body: "Autodesk tools are built for design engineers and BIM coordinators. Field teams adopting Autodesk face a steep learning curve that requires training investment." },
        ].map((item, i) => (
          <div key={i} className="value-card gsap-fade-up">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MasonBimSection = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="about-story-grid">
        <div className="gsap-fade-up">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: 16 }}>
            Navisworks-class. No Autodesk account.
          </span>
          <h2 className="h2" style={{ marginBottom: 20 }}>Browser-native BIM at a fraction of the cost</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
            MASON's BIM viewer runs fully in the browser — no desktop install, no plugin, no Autodesk license. Upload your IFC files directly. MASON federates multi-discipline models and runs Navisworks-class hard and soft clash detection.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "IFC 2x3 and IFC4 support — upload from Revit, ArchiCAD, Tekla, or any IFC-compatible tool",
              "Hard clash and soft clash (clearance) detection with configurable tolerance",
              "Federated model viewing — architectural, structural, MEP in one browser view",
              "Clash groups, clash tracking, assignable to RFIs",
              "No Autodesk subscription required — ever",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <a href="/contact" className="btn btn-primary">Book your pilot</a>
            <a href="/pricing" className="btn btn-ghost">See pricing</a>
          </div>
        </div>
        <div className="gsap-fade-up" style={{ background: "var(--surface)", borderRadius: 12, border: "1px solid var(--line)", padding: 36 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 24 }}>3-year cost comparison</p>
          {[
            { label: "Autodesk ACC + Navisworks (10 users)", cost: "$45,000–$75,000+", highlight: false },
            { label: "Procore + Autodesk BIM 360 (10 users)", cost: "$90,000–$240,000+", highlight: false },
            { label: "MASON Pro (25 users, BIM included)", cost: "~$14,400", highlight: true },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid var(--line)", gap: 16 }}>
              <span style={{ fontSize: 13, color: row.highlight ? "var(--text)" : "var(--text-muted)", lineHeight: 1.4, flex: 1 }}>{row.label}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, color: row.highlight ? "var(--accent)" : "var(--text-faint)", whiteSpace: "nowrap" }}>{row.cost}</span>
            </div>
          ))}
          <p style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 16, lineHeight: 1.5 }}>Autodesk estimates based on published ACC and Navisworks subscription pricing. Procore estimates based on ACV model for 10-user team. MASON Pro at $399/month × 36 months = $14,364.</p>
        </div>
      </div>
    </div>
  </section>
);

const OtherAlts = () => {
  const alts = [
    {
      name: "Trimble Connect",
      tag: "Cloud BIM for teams in the Trimble / SketchUp ecosystem",
      price: "$25–$40/user/month",
      good: ["Cloud-based, no desktop install required", "Good IFC support", "Works well with Trimble and SketchUp workflows"],
      limited: ["Clash detection is more limited than Navisworks-class", "Per-seat pricing", "Less mature construction PM workflow than MASON or Procore", "Best when team is already in the Trimble ecosystem"],
    },
    {
      name: "BIMcollab",
      tag: "BCF-based clash management across BIM authoring tools",
      price: "$35–$65/user/month",
      good: ["Strong BCF workflow — works alongside Revit, ArchiCAD, Tekla without replacing them", "Cloud-based, no installation", "Good for multi-discipline teams using different authoring tools"],
      limited: ["BIM coordination tool, not a full construction PM platform", "Per-seat pricing", "Still requires BIM authoring tools for model creation", "No AIA billing, no daily logs, no scheduling"],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 gsap-fade-up" style={{ marginBottom: 40 }}>Other BIM alternatives</h2>
        {alts.map((alt, i) => (
          <div key={i} className="value-card gsap-fade-up" style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{alt.name}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)" }}>{alt.tag}</p>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", background: "var(--surface)", padding: "4px 10px", borderRadius: 4 }}>{alt.price}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="about-story-grid">
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "#4ade80", marginBottom: 10 }}>Strengths</p>
                {alt.good.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ color: "#4ade80", flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-faint)", marginBottom: 10 }}>Limitations</p>
                {alt.limited.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ color: "var(--text-faint)", flexShrink: 0 }}>–</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
      <div className="gsap-fade-up">
        <h2 className="h2">Navisworks-class BIM. No Autodesk license. $399/month flat.</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, margin: "16px 0 32px" }}>
          Upload your IFC files, federate your models, and run clash detection in the browser on day one. No install, no plugin, no enterprise contract.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn-primary btn-lg">Book your 14-day pilot</a>
          <a href="/platform" className="btn btn-ghost btn-lg">See the BIM platform</a>
        </div>
      </div>
    </div>
  </section>
);

const AlternativesAutodeskPage = () => {
  React.useEffect(() => {
    document.body.classList.add("gsap-ready");
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
        gsap.from(el, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top bottom", toggleActions: "play none none none" } });
      });
    }
  }, []);
  return (
    <main>
      <Hero />
      <QuickCompare />
      <WhyLeave />
      <MasonBimSection />
      <OtherAlts />
      <CTA />
    </main>
  );
};

export default AlternativesAutodeskPage;
