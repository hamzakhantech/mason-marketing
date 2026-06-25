import React, { useState, useMemo } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const fmt = (n) =>
  n == null || isNaN(n) ? "$0" : "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });
const fmtHrs = (n) => (isNaN(n) ? "0" : Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 }));
const num = (v) => parseFloat(String(v).replace(/,/g, "")) || 0;

const MASON_TIERS = [
  { name: "Core", users: 10, price: 219 },
  { name: "Pro", users: 25, price: 399 },
  { name: "Founding Partner", users: 25, price: 129, note: "Locked for life — first 10 firms only" },
];

const Calculator = () => {
  const [vals, setVals] = useState({
    teamSize: "",
    hoursPerWeek: "",
    hourlyRate: "",
    currentSoftwareCost: "0",
  });

  const set = (k) => (e) => setVals((v) => ({ ...v, [k]: e.target.value }));

  const calc = useMemo(() => {
    const team = num(vals.teamSize);
    const hrs = num(vals.hoursPerWeek);
    const rate = num(vals.hourlyRate);
    const currentSw = num(vals.currentSoftwareCost);
    if (!team || !hrs || !rate) return null;

    const hoursPerYearPerPerson = hrs * 52;
    const totalHoursPerYear = hoursPerYearPerPerson * team;
    const laborCostPerYear = totalHoursPerYear * rate;
    const currentSoftwareCostPerYear = currentSw * 12;
    const totalCurrentCost = laborCostPerYear + currentSoftwareCostPerYear;

    // Estimate 70% time savings on manual tasks (conservative)
    const timeReductionPct = 0.70;
    const hoursSavedPerYear = totalHoursPerYear * timeReductionPct;

    // Pick MASON tier
    const tier = team <= 10 ? MASON_TIERS[0] : MASON_TIERS[1];
    const masonCostPerYear = tier.price * 12;

    const annualSavings = laborCostPerYear * timeReductionPct - masonCostPerYear;
    const netSavings = totalCurrentCost * timeReductionPct - masonCostPerYear;
    const paybackMonths = annualSavings > 0 ? (masonCostPerYear / (annualSavings / 12)) : null;

    return { totalHoursPerYear, laborCostPerYear, currentSoftwareCostPerYear, totalCurrentCost, hoursSavedPerYear, tier, masonCostPerYear, annualSavings, netSavings, paybackMonths };
  }, [vals]);

  const inputStyle = {
    width: "100%", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 6,
    padding: "10px 14px", color: "var(--text)", fontSize: 15, fontFamily: "var(--font-mono)", outline: "none", boxSizing: "border-box",
  };
  const labelStyle = { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", display: "block", marginBottom: 6 };

  return (
    <section className="section bg-subtle">
      <div className="container" style={{ maxWidth: 920 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="about-story-grid">
          {/* Inputs */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 32 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>Your team today</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle}>Field + office team size</label>
                <input style={inputStyle} type="number" min="1" placeholder="e.g. 8" value={vals.teamSize} onChange={set("teamSize")} />
                <p style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 4 }}>PMs, superintendents, project engineers, billing staff</p>
              </div>
              <div>
                <label style={labelStyle}>Hours/week per person on manual tasks</label>
                <input style={inputStyle} type="number" min="0" placeholder="e.g. 6" value={vals.hoursPerWeek} onChange={set("hoursPerWeek")} />
                <p style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 4 }}>Reporting, RFIs, billing prep, change order paperwork, schedule updates</p>
              </div>
              <div>
                <label style={labelStyle}>Average PM hourly rate ($)</label>
                <input style={inputStyle} type="text" inputMode="numeric" placeholder="e.g. 65" value={vals.hourlyRate} onChange={set("hourlyRate")} />
                <p style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 4 }}>Fully-loaded cost including benefits and overhead</p>
              </div>
              <div>
                <label style={labelStyle}>Current PM software cost ($/mo)</label>
                <input style={inputStyle} type="text" inputMode="numeric" placeholder="0 if none / spreadsheets only" value={vals.currentSoftwareCost} onChange={set("currentSoftwareCost")} />
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 32, display: "flex", flexDirection: "column", gap: 0 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>Your ROI with MASON</p>
            {!calc ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, minHeight: 280, gap: 10, color: "var(--text-faint)" }}>
                <span style={{ fontSize: 36 }}>↗</span>
                <p style={{ fontSize: 13, textAlign: "center" }}>Enter your team size, hours on manual tasks, and hourly rate</p>
              </div>
            ) : (
              <>
                {/* Key metric */}
                <div style={{ background: "rgba(232,148,46,.08)", border: "1px solid rgba(232,148,46,.25)", borderRadius: 10, padding: "20px 20px", marginBottom: 24, textAlign: "center" }}>
                  <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>Annual savings with MASON</p>
                  <p style={{ fontSize: 40, fontWeight: 900, fontFamily: "var(--font-mono)", color: "var(--accent)", lineHeight: 1 }}>{fmt(calc.annualSavings)}</p>
                  {calc.paybackMonths != null && (
                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>Payback in {calc.paybackMonths < 2 ? "under 2 months" : `~${Math.ceil(calc.paybackMonths)} months`}</p>
                  )}
                </div>

                {[
                  { label: "Annual labor cost on manual tasks", value: fmt(calc.laborCostPerYear), muted: true },
                  { label: "Current software cost/year", value: fmt(calc.currentSoftwareCostPerYear), muted: true },
                  { label: "Total current process cost/year", value: fmt(calc.totalCurrentCost) },
                  { label: "Hours saved/year (70% reduction)", value: fmtHrs(calc.hoursSavedPerYear) + " hrs", accent: true },
                  { label: `MASON ${calc.tier.name} (${calc.teamSize || "your"} team)/year`, value: fmt(calc.masonCostPerYear), muted: true },
                ].map((row, i, arr) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}>
                    <span style={{ fontSize: 13, color: row.accent ? "var(--text)" : "var(--text-muted)" }}>{row.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: row.accent ? "#4ade80" : "var(--text-muted)", whiteSpace: "nowrap" }}>{row.value}</span>
                  </div>
                ))}

                <div style={{ marginTop: 16, fontSize: 11, color: "var(--text-faint)", lineHeight: 1.5 }}>
                  Based on 70% reduction in manual admin time — conservative for teams currently using spreadsheets. MASON recommended tier: <strong style={{ color: "var(--text-muted)" }}>{calc.tier.name} ({fmt(calc.tier.price)}/mo)</strong>.
                </div>
              </>
            )}
          </div>
        </div>

        {/* Founding partner callout */}
        <div style={{ marginTop: 20, padding: "20px 24px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: 4 }}>First 10 firms get Founding Partner pricing: $129/mo locked for life.</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Pro features (25 users, 10 projects, BIM clash detection) at $129/mo instead of $399/mo — permanently.</p>
          </div>
          <a href="/contact" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Book your 14-day pilot</a>
        </div>
      </div>
    </section>
  );
};

const WhatWeCount = () => (
  <section className="section">
    <div className="container" style={{ maxWidth: 720 }}>
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>What counts as "manual admin time" in construction?</h2>
      <div className="gsap-fade-up">
        <p>Most small construction firms dramatically underestimate how much time their PMs and project engineers spend on work that doesn't directly build anything. It tends to be invisible because it happens in small chunks throughout the day — but it adds up fast.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "28px 0" }}>
          {[
            { category: "Reporting & updates", examples: "Weekly owner reports, daily logs, cost-to-complete updates, schedule status emails" },
            { category: "RFI management", examples: "Writing RFIs, tracking responses, forwarding to subs, logging in spreadsheets" },
            { category: "Pay application prep", examples: "Building G703 Schedule of Values, calculating % complete, compiling backup packages" },
            { category: "Change order process", examples: "Pricing COs, getting sub quotes, writing scope descriptions, chasing approvals" },
            { category: "Schedule maintenance", examples: "Updating baseline schedule, issuing look-ahead schedules, notifying subs of changes" },
            { category: "Document control", examples: "Filing RFIs, submittals, drawing revisions, distributing updates to the field" },
          ].map((item, i) => (
            <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 8, padding: "16px 18px" }}>
              <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.category}</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{item.examples}</p>
            </div>
          ))}
        </div>
        <p>A 6-person PM team spending 6 hours each per week on these tasks is losing <strong>1,872 person-hours per year</strong> — the equivalent of almost one full-time PM — to work that software should handle automatically. At $65/hr fully loaded, that's over $120,000 in annual labor cost for admin work alone.</p>
        <p style={{ marginTop: 12 }}>The ROI on construction PM software isn't complicated. The question is whether the tool your team uses actually eliminates the work, or just moves it from a spreadsheet to a different screen.</p>
      </div>
    </div>
  </section>
);

const RelatedTools = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ maxWidth: 720 }}>
      <h3 className="gsap-fade-up" style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>More free construction tools</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "Retainage Calculator", href: "/tools/retainage-calculator", desc: "Calculate retainage balance" },
          { label: "AIA G702/G703 Generator", href: "/tools/aia-g702-generator", desc: "Build your pay app" },
          { label: "Change Order Calculator", href: "/tools/change-order-calculator", desc: "Price your change orders" },
        ].map((t, i) => (
          <a key={i} href={t.href} className="value-card gsap-fade-up" style={{ flex: "1 1 200px", textDecoration: "none", display: "block" }}>
            <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{t.label}</p>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.desc} →</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const ROICalculatorPage = () => {
  React.useEffect(() => {
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
      <InnerPageHero
        eyebrow="Free construction tool"
        title={<>Construction PM Software<br /><span className="inner-hero__accent">ROI Calculator</span></>}
        lead="Calculate how much your team spends on manual admin tasks — and your projected savings with MASON. Free — no signup required."
      />
      <Calculator />
      <WhatWeCount />
      <RelatedTools />
    </main>
  );
};

export default ROICalculatorPage;
