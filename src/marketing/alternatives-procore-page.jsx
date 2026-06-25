import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
const Hero = () => (
  <InnerPageHero
    eyebrow="Procore alternatives 2026"
    title={
      <>
        Best Procore Alternatives<br />
        <span className="inner-hero__accent">for Small &amp; Mid-Size Contractors</span>
      </>
    }
    lead={
      <>
        Procore is built for ENR 400 firms doing $1B+ in annual volume. If you're running a
        5–50 person GC or specialty sub team, you're paying pricing that was designed for
        someone 10× your size — typically $15,000–$80,000/year. Here are the honest
        alternatives, what they're good at, and where each one falls short.
      </>
    }
  />
);

/* ─── Quick comparison table ────────────────────────────────────────────────── */
const QuickCompare = () => {
  const tools = [
    { name: "MASON", price: "$219–$399/mo flat", bim: "✓ Browser-native", payApps: "✓ Built-in", perSeat: "No", pilot: "14-day pilot", bestFor: "5–50 person GC / specialty sub" },
    { name: "Buildertrend", price: "$499–$799/mo", bim: "✗", payApps: "✗", perSeat: "No", pilot: "Free trial", bestFor: "Residential builders" },
    { name: "Fieldwire", price: "$54–$89/user/mo", bim: "✗", payApps: "✗", perSeat: "Yes", pilot: "Free plan (3 users)", bestFor: "Field-only task tracking" },
    { name: "JobTread", price: "$149–$349/mo", bim: "✗", payApps: "Limited", perSeat: "No", pilot: "Free trial", bestFor: "Small residential GCs" },
    { name: "Raken", price: "$15–$55/user/mo", bim: "✗", payApps: "✗", perSeat: "Yes", pilot: "Free trial", bestFor: "Daily logs only" },
    { name: "Procore", price: "$10K–$80K/yr (ACV)", bim: "Via Autodesk license", payApps: "✓ Add-on", perSeat: "Yes", pilot: "Demo only", bestFor: "Enterprise GC ($1B+ volume)" },
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 40 }}>
          <h2 className="h2">Quick comparison</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12 }}>
            Five Procore alternatives for teams under 50 people — plus Procore itself for context.
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
                <th>Per-seat fees</th>
                <th>Pilot / Trial</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((t, i) => (
                <tr key={i} style={t.name === "MASON" ? { background: "rgba(232,148,46,.06)" } : {}}>
                  <td style={{ fontWeight: t.name === "MASON" ? 700 : 400, color: t.name === "MASON" ? "var(--accent)" : "var(--text)" }}>{t.name}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.price}</td>
                  <td style={{ color: t.bim.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.bim}</td>
                  <td style={{ color: t.payApps.startsWith("✓") ? "var(--text)" : "var(--text-faint)" }}>{t.payApps}</td>
                  <td style={{ color: t.perSeat === "No" ? "#4ade80" : "var(--text-faint)" }}>{t.perSeat}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.pilot}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

/* ─── Individual tool writeups ──────────────────────────────────────────────── */
const tools = [
  {
    name: "MASON",
    tag: "Best overall for 5–50 person GC and specialty sub teams",
    accent: true,
    price: "Core $219/month · Pro $399/month · Founding Partner $129/month (locked for life, first 10 firms)",
    good: [
      "Browser-native BIM with Navisworks-class clash detection — no Autodesk license, no plugin",
      "AIA G702/G703 pay applications built into every plan — not an add-on",
      "Monte Carlo schedule simulation (P50/P80/P90) — no other sub-$500/mo competitor has this",
      "Flat pricing — no seat fees, no volume-based billing, all 12 modules included",
      "Full 12-module stack: BIM, RFIs, change orders, pay apps, daily logs, scheduling, documents",
      "14-day pilot on your real project — MASON sets it up for you",
    ],
    limited: [
      "iOS app is in development (Android only currently)",
      "Smaller integration library than Procore's marketplace",
      "No SOC 2 Type II certification yet",
    ],
    cta: { label: "Book your 14-day pilot", href: "/contact" },
  },
  {
    name: "Buildertrend",
    tag: "Best for residential homebuilders",
    price: "Approximately $499–$799/month",
    good: [
      "Strong residential construction workflow (estimating, selections, client portal)",
      "Good mobile app for homebuilders and remodelers",
      "No per-seat fees — flat per-company pricing",
      "Well-established with large user base and integration library",
    ],
    limited: [
      "Built for residential — limited for commercial GC or specialty sub workflows",
      "No BIM viewer or clash detection",
      "No AIA G702/G703 pay application support",
      "No Monte Carlo scheduling or risk analysis",
      "Recent price increases have pushed many small teams to alternatives",
    ],
  },
  {
    name: "Fieldwire",
    tag: "Best for field-only task and punch list tracking",
    price: "Approximately $54–$89/user/month (per-seat)",
    good: [
      "Strong iOS and Android apps for field crews",
      "Good punch list and task management workflow",
      "Plan viewing and markup on mobile",
      "Free plan available for very small teams (3 users)",
    ],
    limited: [
      "Field operations only — no BIM, no clash detection",
      "No AIA pay applications or billing module",
      "No scheduling module (Gantt or otherwise)",
      "No RFI or submittal workflow",
      "Per-seat pricing gets expensive as teams grow",
      "Acquired by Hilti — pricing and roadmap direction uncertain",
    ],
  },
  {
    name: "JobTread",
    tag: "Best for small residential GCs who need estimating",
    price: "Approximately $149–$349/month",
    good: [
      "Good estimating and budgeting workflow for small residential GCs",
      "No per-seat fees — flat per-company pricing",
      "Simple, approachable UI for non-technical users",
      "Strong customer support reputation",
    ],
    limited: [
      "No BIM or clash detection",
      "Limited commercial GC feature set",
      "No AIA G702/G703 pay apps",
      "Limited RFI and submittal management",
      "Not built for specialty subs",
    ],
  },
  {
    name: "Raken",
    tag: "Best for daily log and field reporting only",
    price: "Approximately $15–$55/user/month",
    good: [
      "Very fast daily log and timecard entry on mobile",
      "Good weather logging and crew tracking",
      "Simple enough for field crews to adopt quickly",
    ],
    limited: [
      "Daily logs and field reporting only — not a full PM platform",
      "No BIM, no pay apps, no scheduling, no RFI management",
      "Per-seat pricing",
      "If you need full project management, Raken is only one piece of the stack",
    ],
  },
];

const ToolWriteup = ({ tool }) => (
  <div className={`value-card gsap-fade-up`} style={{ borderColor: tool.accent ? "rgba(232,148,46,.4)" : undefined, marginBottom: 24 }}>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
      <div>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{tool.name}</h3>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: tool.accent ? "var(--accent)" : "var(--text-muted)" }}>
          {tool.tag}
        </p>
      </div>
      <p style={{ fontSize: 13, color: "var(--text-muted)", background: "var(--surface)", padding: "4px 10px", borderRadius: 4, whiteSpace: "nowrap" }}>{tool.price}</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="about-story-grid">
      <div>
        <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "#4ade80", marginBottom: 10 }}>What it's good at</p>
        {tool.good.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: "1px solid var(--line)" }}>
            <span style={{ color: "#4ade80", flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
      <div>
        <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-faint)", marginBottom: 10 }}>Where it falls short</p>
        {tool.limited.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: "1px solid var(--line)" }}>
            <span style={{ color: "var(--text-faint)", flexShrink: 0 }}>–</span>
            <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
    {tool.cta && (
      <div style={{ marginTop: 20 }}>
        <a href={tool.cta.href} className="btn btn-primary">{tool.cta.label}</a>
      </div>
    )}
  </div>
);

const ToolWriteups = () => (
  <section className="section">
    <div className="container">
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 40 }}>Each alternative, honestly reviewed</h2>
      {tools.map((t, i) => <ToolWriteup key={i} tool={t} />)}
    </div>
  </section>
);

/* ─── Decision guide ────────────────────────────────────────────────────────── */
const DecisionGuide = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ maxWidth: 740 }}>
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>How to choose</h2>
      <div className="prose-section gsap-fade-up">
        <p><strong>If you need BIM and clash detection without an Autodesk license</strong> — only MASON offers browser-native Navisworks-class clash detection under $500/month. Fieldwire, Buildertrend, JobTread, and Raken have no BIM capability at all.</p>
        <p><strong>If you bill using AIA G702/G703 pay apps</strong> — only MASON has this built in as a native module. Other alternatives either don't have it (Fieldwire, JobTread, Raken) or require Procore at enterprise pricing.</p>
        <p><strong>If you're a residential homebuilder</strong> — Buildertrend's client portal, estimating, and selections workflow is genuinely better for residential. MASON is optimized for commercial GCs and specialty subs.</p>
        <p><strong>If you only need daily logs and field reporting</strong> — Raken or Fieldwire are simpler and cheaper for that specific use case. MASON is a full PM platform; it's overkill if field logs are all you need.</p>
        <p><strong>If your team is 5–50 people doing commercial or specialty sub work</strong> — MASON is the only platform in this list that gives you the full stack (BIM, RFIs, pay apps, scheduling, change orders, daily logs) at flat pricing without seat fees.</p>
      </div>
    </div>
  </section>
);

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
const CTA = () => (
  <section className="section">
    <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
      <div className="gsap-fade-up">
        <h2 className="h2">Try MASON on a real project for 14 days.</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, margin: "16px 0 32px" }}>
          All 12 modules. Your team, your data. We handle the setup. Pro starts at $399/month — flat, no seat fees.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn-primary btn-lg">Book your pilot</a>
          <a href="/pricing" className="btn btn-ghost btn-lg">See pricing</a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────────────────────────────────── */
const AlternativesProcorePage = () => {
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
      <ToolWriteups />
      <DecisionGuide />
      <CTA />
    </main>
  );
};

export default AlternativesProcorePage;
