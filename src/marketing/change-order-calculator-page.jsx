import React, { useState, useMemo } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const fmt = (n) =>
  n == null || isNaN(n) ? "$0.00" : "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = (v) => parseFloat(String(v).replace(/,/g, "")) || 0;

const Calculator = () => {
  const [vals, setVals] = useState({
    originalContract: "",
    description: "",
    directCost: "",
    overhead: "15",
    profit: "10",
    bondRate: "",
  });

  const set = (k) => (e) => setVals((v) => ({ ...v, [k]: e.target.value }));

  const calc = useMemo(() => {
    const direct = num(vals.directCost);
    const overhead = num(vals.overhead) / 100;
    const profit = num(vals.profit) / 100;
    const bondRate = num(vals.bondRate) / 100;
    const original = num(vals.originalContract);
    if (!direct) return null;

    const overheadDollars = direct * overhead;
    const subtotal = direct + overheadDollars;
    const profitDollars = subtotal * profit;
    const subtotal2 = subtotal + profitDollars;
    const bondDollars = bondRate > 0 ? subtotal2 * bondRate : 0;
    const totalCO = subtotal2 + bondDollars;
    const revisedContract = original + totalCO;

    return { direct, overheadDollars, profitDollars, bondDollars, totalCO, revisedContract };
  }, [vals]);

  const inputStyle = {
    width: "100%", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 6,
    padding: "10px 14px", color: "var(--text)", fontSize: 15, fontFamily: "var(--font-mono)", outline: "none", boxSizing: "border-box",
  };
  const labelStyle = { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", display: "block", marginBottom: 6 };

  return (
    <section className="section bg-subtle">
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="about-story-grid">
          {/* Inputs */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 32 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>Inputs</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle}>Original contract value ($)</label>
                <input style={inputStyle} type="text" inputMode="numeric" placeholder="Optional — for revised total" value={vals.originalContract} onChange={set("originalContract")} />
              </div>
              <div>
                <label style={labelStyle}>Change order description</label>
                <input style={inputStyle} type="text" placeholder="e.g. Electrical scope addition — panel upgrade" value={vals.description} onChange={set("description")} />
              </div>
              <div>
                <label style={labelStyle}>Direct cost ($)</label>
                <input style={inputStyle} type="text" inputMode="numeric" placeholder="Labor + materials + equipment" value={vals.directCost} onChange={set("directCost")} />
              </div>
              <div>
                <label style={labelStyle}>Overhead markup (%)</label>
                <div style={{ display: "flex", gap: 8 }}>
                  {["10", "15", "20"].map((r) => (
                    <button key={r} onClick={() => setVals((v) => ({ ...v, overhead: r }))}
                      style={{ flex: 1, padding: "8px 0", border: "1px solid var(--line)", borderRadius: 6, cursor: "pointer",
                        background: vals.overhead === r ? "var(--accent)" : "var(--surface)",
                        color: vals.overhead === r ? "#07070a" : "var(--text-muted)",
                        fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, transition: "all .15s" }}>
                      {r}%
                    </button>
                  ))}
                  <input style={{ ...inputStyle, flex: 1 }} type="number" min="0" max="50" placeholder="other" value={["10","15","20"].includes(vals.overhead) ? "" : vals.overhead}
                    onChange={(e) => setVals((v) => ({ ...v, overhead: e.target.value }))} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Profit markup (%)</label>
                <div style={{ display: "flex", gap: 8 }}>
                  {["5", "10", "15"].map((r) => (
                    <button key={r} onClick={() => setVals((v) => ({ ...v, profit: r }))}
                      style={{ flex: 1, padding: "8px 0", border: "1px solid var(--line)", borderRadius: 6, cursor: "pointer",
                        background: vals.profit === r ? "var(--accent)" : "var(--surface)",
                        color: vals.profit === r ? "#07070a" : "var(--text-muted)",
                        fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, transition: "all .15s" }}>
                      {r}%
                    </button>
                  ))}
                  <input style={{ ...inputStyle, flex: 1 }} type="number" min="0" max="30" placeholder="other" value={["5","10","15"].includes(vals.profit) ? "" : vals.profit}
                    onChange={(e) => setVals((v) => ({ ...v, profit: e.target.value }))} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Performance bond rate (%) <span style={{ fontWeight: 400, color: "var(--text-faint)" }}>— optional</span></label>
                <div style={{ position: "relative" }}>
                  <input style={{ ...inputStyle, paddingRight: 36 }} type="number" min="0" max="5" step="0.05" placeholder="e.g. 0.5 — leave blank if no bond" value={vals.bondRate} onChange={set("bondRate")} />
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 32 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>Change Order Breakdown</p>
            {!calc ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 320, gap: 10, color: "var(--text-faint)" }}>
                <span style={{ fontSize: 32 }}>+∑</span>
                <p style={{ fontSize: 13, textAlign: "center" }}>Enter your direct cost, overhead, and profit margin to calculate</p>
              </div>
            ) : (
              <div>
                {vals.description && (
                  <div style={{ background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.2)", borderRadius: 6, padding: "10px 14px", marginBottom: 20, fontSize: 13, color: "var(--text-muted)" }}>
                    {vals.description}
                  </div>
                )}
                {[
                  { label: "Direct cost (labor + materials)", value: fmt(calc.direct), muted: true },
                  { label: `Overhead (${vals.overhead}%)`, value: fmt(calc.overheadDollars), muted: true },
                  { label: `Profit (${vals.profit}% on cost + overhead)`, value: fmt(calc.profitDollars), muted: true },
                  ...(num(vals.bondRate) > 0 ? [{ label: `Bond (${vals.bondRate}%)`, value: fmt(calc.bondDollars), muted: true }] : []),
                  { label: "Total Change Order Value", value: fmt(calc.totalCO), highlight: true, big: true },
                  ...(num(vals.originalContract) > 0 ? [{ label: "Revised Contract Sum", value: fmt(calc.revisedContract), highlight: false }] : []),
                ].map((row, i, arr) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}>
                    <span style={{ fontSize: 13, color: row.highlight ? "var(--text)" : "var(--text-muted)" }}>{row.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: row.big ? 22 : 14, fontWeight: 700, color: row.highlight ? "var(--accent)" : "var(--text-muted)", whiteSpace: "nowrap" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 28, padding: "20px 24px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: 4 }}>MASON tracks every change order from RFI through owner approval and AIA billing.</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>No more change orders falling through the cracks or getting billed a month late.</p>
          </div>
          <a href="/contact" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Book your 14-day pilot</a>
        </div>
      </div>
    </section>
  );
};

const Explainer = () => (
  <section className="section">
    <div className="container" style={{ maxWidth: 720 }}>
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>How to write a construction change order</h2>
      <div className="gsap-fade-up">
        <p>A construction change order (CO) is a written amendment to the original contract that documents a change in scope, cost, or schedule. Change orders are one of the most financially significant documents on any project — unbilled or underdocumented change orders are among the most common causes of GC cash flow problems and end-of-project disputes.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Standard change order pricing formula</h3>
        <p>Most subcontracts and prime contracts specify the markup allowed on change order work. The standard formula is: <strong>Direct Cost × (1 + overhead%) × (1 + profit%)</strong>. Overhead covers field supervision, insurance, project management, and home office costs not captured in direct labor. Profit is applied on top of direct cost plus overhead — not just on direct cost alone.</p>
        <p>Example: $50,000 direct cost × 1.15 overhead = $57,500 × 1.10 profit = $63,250 total CO value. If a performance bond is required, bond premium is applied to this total — typically 0.5–1% on commercial projects.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>What to include in a change order</h3>
        <p>A complete change order package should include: (1) a written scope description with enough detail to distinguish it from the base contract; (2) backup pricing — vendor quotes, time-and-materials logs, or labor breakdowns; (3) any schedule impact in calendar days; (4) a reference to the contract clause or RFI that triggered the change; and (5) spaces for contractor, owner, and architect signatures with dates.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Time is critical</h3>
        <p>Most contracts contain notice requirements for change orders — typically 7–14 days from when the contractor first encounters the changed condition. Missing this window can forfeit your right to additional compensation even if the work is clearly out of scope. A common GC mistake is performing the work first and billing for it later, then discovering the contract's notice period has passed. Establish a change order workflow that triggers immediately when scope deviates — ideally before the work starts.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Oral approvals aren't enough</h3>
        <p>Verbal or email approvals from field personnel ("the owner's rep told us to do it") are routinely disputed at project closeout. A signed change order — or at minimum a written change order directive (CCD) under AIA A201 — is the only secure basis for billing extra work. Get it in writing before you start.</p>
      </div>
    </div>
  </section>
);

const RelatedTools = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ maxWidth: 720 }}>
      <h3 className="gsap-fade-up" style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Related free tools</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "AIA G702/G703 Generator", href: "/tools/aia-g702-generator", desc: "Build your pay app" },
          { label: "Retainage Calculator", href: "/tools/retainage-calculator", desc: "Calculate retainage balance" },
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

const ChangeOrderCalculatorPage = () => {
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
        title={<>Construction Change Order<br /><span className="inner-hero__accent">Calculator</span></>}
        lead="Price your change orders correctly — overhead, profit, and bond included. Free — no signup required."
      />
      <Calculator />
      <Explainer />
      <RelatedTools />
    </main>
  );
};

export default ChangeOrderCalculatorPage;
