import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const Hero = () => (
  <InnerPageHero
    eyebrow="Buildertrend alternatives 2026"
    title={
      <>
        Best Buildertrend Alternatives<br />
        <span className="inner-hero__accent">for Commercial GCs &amp; Specialty Subs</span>
      </>
    }
    lead={
      <>
        Buildertrend is built for residential homebuilders and remodelers. If you're running
        commercial GC work or specialty sub operations, you've likely hit its ceiling: no BIM,
        no clash detection, no AIA pay apps, and recent price increases up to $799/month.
        Here are the honest alternatives.
      </>
    }
  />
);

const QuickCompare = () => {
  const tools = [
    { name: "MASON", price: "$219–$399/mo flat", bim: "✓ Browser-native", aia: "✓ Built-in", commercial: "✓ Full stack", perSeat: "No" },
    { name: "Fieldwire", price: "$54–$89/user/mo", bim: "✗", aia: "✗", commercial: "Field only", perSeat: "Yes" },
    { name: "Procore", price: "$10K–$80K/yr", bim: "Via Autodesk", aia: "✓ Add-on", commercial: "✓ Enterprise", perSeat: "Yes" },
    { name: "JobTread", price: "$149–$349/mo", bim: "✗", aia: "✗", commercial: "Limited", perSeat: "No" },
    { name: "Buildertrend", price: "$499–$799/mo", bim: "✗", aia: "✗", commercial: "Residential only", perSeat: "No" },
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 40 }}>
          <h2 className="h2">Quick comparison</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12 }}>
            Buildertrend vs the alternatives most teams consider when they outgrow it.
          </p>
        </div>
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Pricing</th>
                <th>Browser BIM</th>
                <th>AIA Pay Apps</th>
                <th>Commercial GC fit</th>
                <th>Per-seat fees</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((t, i) => (
                <tr key={i} style={t.name === "MASON" ? { background: "rgba(232,148,46,.06)" } : {}}>
                  <td style={{ fontWeight: t.name === "MASON" ? 700 : 400, color: t.name === "MASON" ? "var(--accent)" : "var(--text)" }}>{t.name}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.price}</td>
                  <td style={{ color: t.bim.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.bim}</td>
                  <td style={{ color: t.aia.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.aia}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.commercial}</td>
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
        <h2 className="h2">Why commercial teams outgrow Buildertrend</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {[
          {
            title: "Built for residential — not commercial workflows",
            body: "Buildertrend's core is homebuilder scheduling, client selections, and residential estimating. Commercial GC workflows — RFI registers, submittal logs, AIA billing, BIM coordination — are either absent or bolted on.",
          },
          {
            title: "No BIM, no clash detection",
            body: "Commercial projects increasingly require IFC model coordination and clash detection before breaking ground. Buildertrend has no BIM viewer and no path to clash detection without a separate Autodesk subscription.",
          },
          {
            title: "No AIA G702/G703 pay applications",
            body: "If your owner or GC requires AIA standard billing forms, you're generating them manually outside Buildertrend. There's no G702, no G703, and no Schedule of Values workflow built in.",
          },
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

const Alternatives = () => {
  const alts = [
    {
      name: "MASON",
      tag: "Best Buildertrend alternative for commercial GCs and specialty subs",
      accent: true,
      price: "Core $219/month · Pro $399/month · Founding Partner $129/month locked for life",
      good: [
        "Browser-native BIM with Navisworks-class clash detection — the feature Buildertrend users most commonly switch for",
        "AIA G702/G703 pay apps built in — generates Schedule of Values, G702, and G703 natively",
        "Full commercial GC stack: BIM, RFIs, submittals, change orders, daily logs, Gantt scheduling",
        "Flat pricing, no seat fees — Core $219/mo (10 users), Pro $399/mo (25 users)",
        "Monte Carlo schedule simulation (P50/P80/P90) — no other sub-$500/mo platform has this",
        "14-day pilot on your real project, MASON handles the setup",
      ],
      limited: [
        "No residential estimating or client selections portal (Buildertrend's strength)",
        "iOS app in development — Android only currently",
        "Smaller integration library than Buildertrend",
      ],
      cta: { label: "Book your 14-day pilot", href: "/contact" },
    },
    {
      name: "Procore",
      tag: "For enterprise GCs where budget isn't the constraint",
      price: "$10,000–$80,000/year (ACV-based)",
      good: [
        "Industry-standard platform with deep integration ecosystem",
        "Advanced cost control and earned value management",
        "iOS and Android apps, large user community",
        "SOC 2 Type II certified",
      ],
      limited: [
        "ACV pricing makes it 6–17x more expensive than MASON for typical small teams",
        "BIM requires a separate Autodesk license and account",
        "Per-seat fees on top of the base ACV",
        "Paid implementation often required ($5K–$20K)",
      ],
    },
    {
      name: "Fieldwire",
      tag: "For field-only task tracking (not a full PM replacement)",
      price: "$54–$89/user/month",
      good: [
        "Strong iOS and Android field apps",
        "Good punch list workflow",
        "Simple enough for field crews",
      ],
      limited: [
        "Field operations only — no BIM, no pay apps, no scheduling module",
        "Per-seat pricing gets expensive fast",
        "Not a Buildertrend replacement — covers a fraction of the workflow",
      ],
    },
    {
      name: "JobTread",
      tag: "For very small residential GCs who prioritize simplicity",
      price: "$149–$349/month",
      good: [
        "Simple estimating and job costing for small residential GCs",
        "Flat per-company pricing",
        "Easy to learn",
      ],
      limited: [
        "No BIM, no AIA pay apps, no RFI management",
        "Limited commercial or specialty sub capabilities",
        "Not a step up from Buildertrend for commercial workflows",
      ],
    },
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <h2 className="h2 gsap-fade-up" style={{ marginBottom: 40 }}>The alternatives, reviewed</h2>
        {alts.map((alt, i) => (
          <div key={i} className="value-card gsap-fade-up" style={{ borderColor: alt.accent ? "rgba(232,148,46,.4)" : undefined, marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{alt.name}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: alt.accent ? "var(--accent)" : "var(--text-muted)" }}>{alt.tag}</p>
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
            {alt.cta && <div style={{ marginTop: 20 }}><a href={alt.cta.href} className="btn btn-primary">{alt.cta.label}</a></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="section">
    <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
      <div className="gsap-fade-up">
        <h2 className="h2">Move from residential PM to full commercial stack.</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, margin: "16px 0 32px" }}>
          BIM, RFIs, AIA pay apps, Monte Carlo scheduling — everything Buildertrend doesn't have, at $399/month flat.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn-primary btn-lg">Book your 14-day pilot</a>
          <a href="/vs-procore" className="btn btn-ghost btn-lg">MASON vs Procore</a>
        </div>
      </div>
    </div>
  </section>
);

const AlternativesBuildertrendPage = () => {
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
      <Alternatives />
      <CTA />
    </main>
  );
};

export default AlternativesBuildertrendPage;
