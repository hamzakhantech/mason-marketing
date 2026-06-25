import React, { useState, useMemo } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

/* ─── Helpers ────────────────────────────────────────────────────────────────── */
const fmt = (n) =>
  n == null || isNaN(n)
    ? "—"
    : "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtPct = (n) => (isNaN(n) ? "—" : Number(n).toFixed(1) + "%");

/* ─── Calculator ────────────────────────────────────────────────────────────── */
const Calculator = () => {
  const [vals, setVals] = useState({
    contractValue: "",
    pctComplete: "",
    retainageRate: "10",
    previouslyReleased: "0",
  });

  const set = (k) => (e) => setVals((v) => ({ ...v, [k]: e.target.value }));

  const calc = useMemo(() => {
    const cv = parseFloat(vals.contractValue.replace(/,/g, "")) || 0;
    const pct = parseFloat(vals.pctComplete) || 0;
    const rate = parseFloat(vals.retainageRate) || 0;
    const released = parseFloat(vals.previouslyReleased.replace(/,/g, "")) || 0;
    if (!cv || !pct || !rate) return null;

    const earnedToDate = cv * (pct / 100);
    const retainageWithheld = earnedToDate * (rate / 100);
    const retainageReleased = Math.min(released, retainageWithheld);
    const currentBalance = retainageWithheld - retainageReleased;
    const projectedTotalRetainage = cv * (rate / 100);
    const netPaymentDue = earnedToDate - retainageWithheld;

    return { earnedToDate, retainageWithheld, retainageReleased, currentBalance, projectedTotalRetainage, netPaymentDue };
  }, [vals]);

  const inputStyle = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--line)",
    borderRadius: 6,
    padding: "10px 14px",
    color: "var(--text)",
    fontSize: 15,
    fontFamily: "var(--font-mono)",
    outline: "none",
    boxSizing: "border-box",
  };
  const labelStyle = { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", display: "block", marginBottom: 6 };

  return (
    <section className="section bg-subtle">
      <div className="container" style={{ maxWidth: 860 }}>
        <div className="gsap-fade-up about-story-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

          {/* Inputs */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 32 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>Inputs</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle}>Contract value ($)</label>
                <input style={inputStyle} type="text" inputMode="numeric" placeholder="e.g. 2,500,000" value={vals.contractValue} onChange={set("contractValue")} />
              </div>
              <div>
                <label style={labelStyle}>% Work completed to date</label>
                <div style={{ position: "relative" }}>
                  <input style={{ ...inputStyle, paddingRight: 36 }} type="number" min="0" max="100" step="0.1" placeholder="e.g. 45" value={vals.pctComplete} onChange={set("pctComplete")} />
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>%</span>
                </div>
                {vals.pctComplete && (parseFloat(vals.pctComplete) < 0 || parseFloat(vals.pctComplete) > 100) && (
                  <p style={{ fontSize: 11, color: "#f87171", marginTop: 4 }}>Must be between 0 and 100</p>
                )}
              </div>
              <div>
                <label style={labelStyle}>Retainage rate (%)</label>
                <div style={{ display: "flex", gap: 8 }}>
                  {["5", "10", "15"].map((r) => (
                    <button key={r} onClick={() => setVals((v) => ({ ...v, retainageRate: r }))}
                      style={{ flex: 1, padding: "8px 0", border: "1px solid var(--line)", borderRadius: 6, cursor: "pointer",
                        background: vals.retainageRate === r ? "var(--accent)" : "var(--surface)",
                        color: vals.retainageRate === r ? "#07070a" : "var(--text-muted)",
                        fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, transition: "all .15s" }}>
                      {r}%
                    </button>
                  ))}
                  <input style={{ ...inputStyle, flex: 1 }} type="number" min="0" max="25" step="0.5" placeholder="other" value={["5","10","15"].includes(vals.retainageRate) ? "" : vals.retainageRate}
                    onChange={(e) => setVals((v) => ({ ...v, retainageRate: e.target.value }))} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Retainage previously released ($)</label>
                <input style={inputStyle} type="text" inputMode="numeric" placeholder="0" value={vals.previouslyReleased} onChange={set("previouslyReleased")} />
                <p style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 4 }}>Amount owner has released so far (0 if none)</p>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 32 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>Results</p>
            {!calc ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 260, gap: 10, color: "var(--text-faint)" }}>
                <span style={{ fontSize: 32 }}>⟷</span>
                <p style={{ fontSize: 13, textAlign: "center" }}>Enter your contract value, % complete, and retainage rate to calculate</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { label: "Earned to date", value: fmt(calc.earnedToDate), muted: true },
                  { label: "Retainage withheld", value: fmt(calc.retainageWithheld), highlight: false },
                  { label: "Retainage released", value: fmt(calc.retainageReleased), muted: true },
                  { label: "Current retainage balance", value: fmt(calc.currentBalance), highlight: true, big: true },
                  { label: "Projected total retainage at 100%", value: fmt(calc.projectedTotalRetainage), muted: true },
                  { label: "Net payment due this application", value: fmt(calc.netPaymentDue), highlight: false },
                ].map((row, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: i < 5 ? "1px solid var(--line)" : "none", gap: 12 }}>
                    <span style={{ fontSize: 13, color: row.highlight ? "var(--text)" : "var(--text-muted)", lineHeight: 1.4 }}>{row.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: row.big ? 20 : 15, fontWeight: 700, color: row.highlight ? "var(--accent)" : "var(--text-muted)", whiteSpace: "nowrap" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 28, padding: "20px 24px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: 4 }}>MASON tracks retainage automatically inside every pay application.</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Schedule of Values, G702, G703 — generated from your project data. No manual entry.</p>
          </div>
          <a href="/contact" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Book your 14-day pilot</a>
        </div>
      </div>
    </section>
  );
};

/* ─── Explainer ─────────────────────────────────────────────────────────────── */
const Explainer = () => (
  <section className="section">
    <div className="container prose-section" style={{ maxWidth: 720 }}>
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>What is construction retainage?</h2>
      <div className="gsap-fade-up">
        <p>Construction retainage (also called retention) is a percentage of each progress payment that the project owner withholds from the general contractor — and that the GC in turn withholds from subcontractors — until the project reaches substantial completion or a defined milestone. The withheld amount acts as a performance bond: it gives the owner financial leverage to ensure punch list items get resolved and the project closes out properly.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Typical retainage rates</h3>
        <p>Most construction contracts in the United States set retainage at <strong>10%</strong> through the first 50% of completion, then reduce it to <strong>5%</strong> for the back half of the project. Some public contracts and state statutes mandate specific rates — for example, California Public Contract Code §7107 caps retainage at 5% on public works projects.</p>
        <p>Private commercial contracts are generally negotiable. On large projects with creditworthy owners, GCs often push to reduce retainage to 5% from the start, or to secure early release of retainage on substantially completed work packages.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>How retainage is calculated</h3>
        <p>Retainage is calculated on the <em>earned amount</em> in each pay period, not the total contract value. If a $2,000,000 contract is 40% complete, the earned amount is $800,000. At 10% retainage, $80,000 is withheld — leaving $720,000 as the net payment due. That $80,000 accumulates in an owner-held reserve until release conditions are met.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>When is retainage released?</h3>
        <p>Retainage is typically released in two stages: a partial release at substantial completion (usually 50% of the held amount) and final release after all punch list work is complete, all lien waivers are received, and final closeout documentation is submitted. Some contracts allow earlier release for completed and accepted work scopes — negotiating these milestone releases is one of the most impactful cash flow moves a GC can make on a large project.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Retainage and AIA pay applications</h3>
        <p>The AIA G702/G703 pay application forms track retainage systematically. Column G on the G703 Schedule of Values shows retainage withheld per line item, and the G702 cover sheet summarizes total retainage held to date, retainage released in the current period, and the resulting net payment due. Getting this math right on every pay app — and ensuring it reconciles with the owner's records — is critical to avoiding payment disputes and delays.</p>
      </div>
    </div>
  </section>
);

/* ─── Related tools ──────────────────────────────────────────────────────────── */
const RelatedTools = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ maxWidth: 720 }}>
      <h3 className="gsap-fade-up" style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Related free tools</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "AIA G702/G703 Generator", href: "/tools/aia-g702-generator", desc: "Build your pay app" },
          { label: "Change Order Calculator", href: "/tools/change-order-calculator", desc: "Price your change orders" },
          { label: "All construction tools", href: "/tools", desc: "See all free tools" },
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

/* ─── Page ──────────────────────────────────────────────────────────────────── */
const RetainageCalculatorPage = () => {
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
      <InnerPageHero
        eyebrow="Free construction tool"
        title={<>Construction Retainage<br /><span className="inner-hero__accent">Calculator</span></>}
        lead="Calculate retainage withheld, released, and currently outstanding on any construction contract. Free — no signup required."
      />
      <Calculator />
      <Explainer />
      <RelatedTools />
    </main>
  );
};

export default RetainageCalculatorPage;
