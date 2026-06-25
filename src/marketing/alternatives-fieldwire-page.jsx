import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const Hero = () => (
  <InnerPageHero
    eyebrow="Fieldwire alternatives 2026"
    title={
      <>
        Best Fieldwire Alternatives<br />
        <span className="inner-hero__accent">When You Need More Than Field Tasks</span>
      </>
    }
    lead={
      <>
        Fieldwire is good at what it does: punch lists, plan viewing, and field task tracking
        on iOS and Android. But it stops there. No BIM, no clash detection, no AIA pay
        applications, no scheduling module. If you've outgrown a field-only tool and need full
        construction project management, here's an honest look at your options.
      </>
    }
  />
);

const QuickCompare = () => {
  const tools = [
    { name: "MASON", price: "$219–$399/mo flat", bim: "✓ Browser-native", payApps: "✓ Built-in", scheduling: "✓ Gantt + Monte Carlo", field: "✓ Daily logs", perSeat: "No" },
    { name: "Procore", price: "$10K–$80K/yr", bim: "Via Autodesk", payApps: "✓ Add-on", scheduling: "✓ Enterprise", field: "✓ Field app", perSeat: "Yes" },
    { name: "Buildertrend", price: "$499–$799/mo", bim: "✗", payApps: "✗", scheduling: "✓ Basic", field: "✓ Field app", perSeat: "No" },
    { name: "Raken", price: "$15–$55/user/mo", bim: "✗", payApps: "✗", scheduling: "✗", field: "✓ Daily logs", perSeat: "Yes" },
    { name: "Fieldwire", price: "$54–$89/user/mo", bim: "✗", payApps: "✗", scheduling: "✗", field: "✓ Punch lists, tasks", perSeat: "Yes" },
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 40 }}>
          <h2 className="h2">Quick comparison</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12 }}>
            Fieldwire vs the tools teams typically consider when they need a full PM stack.
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
                <th>Scheduling</th>
                <th>Field ops</th>
                <th>Per-seat fees</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((t, i) => (
                <tr key={i} style={t.name === "MASON" ? { background: "rgba(232,148,46,.06)" } : {}}>
                  <td style={{ fontWeight: t.name === "MASON" ? 700 : 400, color: t.name === "MASON" ? "var(--accent)" : "var(--text)" }}>{t.name}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.price}</td>
                  <td style={{ color: t.bim.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.bim}</td>
                  <td style={{ color: t.payApps.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.payApps}</td>
                  <td style={{ color: t.scheduling.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.scheduling}</td>
                  <td style={{ color: t.field.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.field}</td>
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

const WhatFieldwireMisses = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 48 }}>
        <h2 className="h2">What Fieldwire doesn't cover</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12 }}>
          Fieldwire's strength is field execution. These are the gaps that push teams to look elsewhere.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {[
          { title: "No BIM or clash detection", body: "Fieldwire supports PDF plan viewing and markup — not IFC models. For BIM coordination and clash detection before construction, you need a separate platform." },
          { title: "No RFI or submittal management", body: "Field tasks are not the same as RFIs. Fieldwire has no RFI register, no submittal log, and no review workflow — all standard on commercial projects." },
          { title: "No AIA pay applications", body: "If your owner or GC requires G702/G703 billing, you're doing it manually outside Fieldwire. There's no Schedule of Values or pay app workflow." },
          { title: "No scheduling module", body: "Fieldwire has no Gantt chart, no predecessor logic, and no schedule simulation. You need a separate scheduling tool alongside it." },
          { title: "Per-seat pricing scales against you", body: "At $54–$89/user/month, a 20-person crew costs $1,080–$1,780/month — more than MASON Pro's flat $399 for the same team with a full PM stack." },
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
      tag: "Best full-stack Fieldwire alternative for GC and specialty sub teams",
      accent: true,
      price: "Core $219/month · Pro $399/month · Founding Partner $129/month locked for life",
      good: [
        "Browser-native BIM with Navisworks-class clash detection — the feature Fieldwire doesn't have",
        "Full RFI management with AI-assisted drafting",
        "AIA G702/G703 pay apps built in natively — no add-on needed",
        "Gantt scheduling with predecessor logic + Monte Carlo simulation (P50/P80/P90)",
        "Daily logs and field ops — all the Fieldwire use cases, plus the full office stack",
        "Flat pricing: 25 users at $399/month vs Fieldwire's per-seat model",
      ],
      limited: [
        "iOS app is in development — Android only currently",
        "Less proven for pure punch list workflows than Fieldwire",
        "No free plan — 14-day pilot instead",
      ],
      cta: { label: "Book your 14-day pilot", href: "/contact" },
    },
    {
      name: "Procore",
      tag: "Enterprise full-stack — if budget isn't the constraint",
      price: "$10,000–$80,000/year",
      good: [
        "The most complete construction PM platform on the market",
        "Deep field app, document control, BIM (with Autodesk), cost management",
        "SOC 2 Type II, large integration ecosystem",
      ],
      limited: [
        "6–17x more expensive than MASON for comparable team sizes",
        "BIM requires a separate Autodesk license",
        "Per-seat fees on top of the annual ACV",
        "Implementation cost often $5K–$20K additional",
      ],
    },
    {
      name: "Buildertrend",
      tag: "For residential homebuilders who need more than field tracking",
      price: "$499–$799/month",
      good: [
        "Strong residential construction workflow with client portal and selections",
        "Good scheduling for homebuilders",
        "Flat per-company pricing",
      ],
      limited: [
        "No BIM, no clash detection",
        "No AIA pay apps for commercial billing",
        "Residential-focused — limited for commercial GC or specialty sub workflows",
      ],
    },
    {
      name: "Raken",
      tag: "Daily logs only — same category as Fieldwire",
      price: "$15–$55/user/month",
      good: [
        "Very fast daily log entry on mobile",
        "Good weather logging and crew tracking",
        "Simple for field crews",
      ],
      limited: [
        "Field reporting only — even more limited than Fieldwire",
        "Per-seat pricing",
        "Not a Fieldwire replacement — similar capability with different UX emphasis",
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
        <h2 className="h2">Field ops plus the full office stack. One flat price.</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, margin: "16px 0 32px" }}>
          Daily logs, punch lists, BIM, RFIs, pay apps, scheduling — everything in one platform at $399/month for 25 users.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn-primary btn-lg">Book your 14-day pilot</a>
          <a href="/pricing" className="btn btn-ghost btn-lg">See pricing</a>
        </div>
      </div>
    </div>
  </section>
);

const AlternativesFieldwirePage = () => {
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
      <WhatFieldwireMisses />
      <Alternatives />
      <CTA />
    </main>
  );
};

export default AlternativesFieldwirePage;
