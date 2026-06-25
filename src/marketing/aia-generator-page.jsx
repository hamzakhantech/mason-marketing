import React, { useState, useMemo, useCallback } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

/* ─── Helpers ────────────────────────────────────────────────────────────────── */
const fmt = (n) =>
  n == null || isNaN(n) || n === ""
    ? "$0.00"
    : "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = (v) => parseFloat(String(v).replace(/,/g, "")) || 0;

/* ─── Default G703 line items ────────────────────────────────────────────────── */
const DEFAULT_ITEMS = [
  { id: 1, description: "General Conditions", scheduledValue: "", prevCompleted: "", thisCompleted: "", materialStored: "", retainageRate: "10" },
  { id: 2, description: "Site Work", scheduledValue: "", prevCompleted: "", thisCompleted: "", materialStored: "", retainageRate: "10" },
  { id: 3, description: "Concrete", scheduledValue: "", prevCompleted: "", thisCompleted: "", materialStored: "", retainageRate: "10" },
  { id: 4, description: "Masonry", scheduledValue: "", prevCompleted: "", thisCompleted: "", materialStored: "", retainageRate: "10" },
  { id: 5, description: "Steel / Structural", scheduledValue: "", prevCompleted: "", thisCompleted: "", materialStored: "", retainageRate: "10" },
];

/* ─── G703 component ─────────────────────────────────────────────────────────── */
const G703 = ({ items, setItems }) => {
  const updateItem = useCallback((id, field, value) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [field]: value } : it)));
  }, [setItems]);

  const addRow = () => setItems((prev) => [...prev, { id: Date.now(), description: "", scheduledValue: "", prevCompleted: "", thisCompleted: "", materialStored: "", retainageRate: "10" }]);
  const removeRow = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const inputStyle = {
    width: "100%", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 4,
    padding: "6px 8px", color: "var(--text)", fontSize: 12, fontFamily: "var(--font-mono)", outline: "none", boxSizing: "border-box",
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 2 }}>AIA G703</p>
          <p style={{ fontSize: 14, fontWeight: 700 }}>Schedule of Values / Continuation Sheet</p>
        </div>
        <button onClick={addRow} className="btn btn-ghost" style={{ fontSize: 12, padding: "6px 14px" }}>+ Add row</button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--line)" }}>
              {["Item", "Description of Work", "Scheduled Value", "Prev Completed ($)", "This Period ($)", "Materials Stored ($)", "Retainage %", "Total Completed", "% Complete", "Balance to Finish", ""].map((h, i) => (
                <th key={i} style={{ padding: "8px 6px", textAlign: i > 1 ? "right" : "left", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const sv = num(item.scheduledValue);
              const prev = num(item.prevCompleted);
              const curr = num(item.thisCompleted);
              const stored = num(item.materialStored);
              const rate = num(item.retainageRate) / 100;
              const totalCompleted = prev + curr + stored;
              const pctComplete = sv > 0 ? (totalCompleted / sv) * 100 : 0;
              const balanceToFinish = sv - totalCompleted;
              return (
                <tr key={item.id} style={{ borderBottom: "1px solid var(--line)", background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,.02)" }}>
                  <td style={{ padding: "6px 6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{String(idx + 1).padStart(2, "0")}</td>
                  <td style={{ padding: "6px 6px", minWidth: 160 }}><input style={inputStyle} value={item.description} onChange={(e) => updateItem(item.id, "description", e.target.value)} placeholder="Description" /></td>
                  <td style={{ padding: "6px 6px" }}><input style={{ ...inputStyle, textAlign: "right" }} value={item.scheduledValue} onChange={(e) => updateItem(item.id, "scheduledValue", e.target.value)} placeholder="0" /></td>
                  <td style={{ padding: "6px 6px" }}><input style={{ ...inputStyle, textAlign: "right" }} value={item.prevCompleted} onChange={(e) => updateItem(item.id, "prevCompleted", e.target.value)} placeholder="0" /></td>
                  <td style={{ padding: "6px 6px" }}><input style={{ ...inputStyle, textAlign: "right" }} value={item.thisCompleted} onChange={(e) => updateItem(item.id, "thisCompleted", e.target.value)} placeholder="0" /></td>
                  <td style={{ padding: "6px 6px" }}><input style={{ ...inputStyle, textAlign: "right" }} value={item.materialStored} onChange={(e) => updateItem(item.id, "materialStored", e.target.value)} placeholder="0" /></td>
                  <td style={{ padding: "6px 6px", width: 70 }}><input style={{ ...inputStyle, textAlign: "right" }} value={item.retainageRate} onChange={(e) => updateItem(item.id, "retainageRate", e.target.value)} placeholder="10" /></td>
                  <td style={{ padding: "6px 12px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text)" }}>{fmt(totalCompleted)}</td>
                  <td style={{ padding: "6px 12px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 12, color: pctComplete >= 100 ? "#4ade80" : "var(--text)" }}>{pctComplete.toFixed(1)}%</td>
                  <td style={{ padding: "6px 12px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{fmt(balanceToFinish)}</td>
                  <td style={{ padding: "6px 4px" }}><button onClick={() => removeRow(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-faint)", fontSize: 14, padding: "2px 4px" }} title="Remove row">×</button></td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr style={{ borderTop: "2px solid var(--line)" }}>
              <td colSpan={2} style={{ padding: "10px 6px", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)" }}>TOTALS</td>
              {[
                items.reduce((a, it) => a + num(it.scheduledValue), 0),
                items.reduce((a, it) => a + num(it.prevCompleted), 0),
                items.reduce((a, it) => a + num(it.thisCompleted), 0),
                items.reduce((a, it) => a + num(it.materialStored), 0),
              ].map((t, i) => <td key={i} style={{ padding: "10px 6px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{fmt(t)}</td>)}
              <td />
              <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>{fmt(items.reduce((a, it) => a + num(it.prevCompleted) + num(it.thisCompleted) + num(it.materialStored), 0))}</td>
              <td colSpan={3} />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

/* ─── G702 summary ───────────────────────────────────────────────────────────── */
const G702 = ({ items, appInfo, setAppInfo }) => {
  const totals = useMemo(() => {
    const originalContract = num(appInfo.originalContract);
    const changeOrders = num(appInfo.changeOrders);
    const revisedContract = originalContract + changeOrders;
    const totalEarned = items.reduce((a, it) => a + num(it.prevCompleted) + num(it.thisCompleted) + num(it.materialStored), 0);
    const totalRetainage = items.reduce((a, it) => {
      const earned = num(it.prevCompleted) + num(it.thisCompleted) + num(it.materialStored);
      return a + earned * (num(it.retainageRate) / 100);
    }, 0);
    const prevPayments = num(appInfo.prevPayments);
    const netDue = totalEarned - totalRetainage - prevPayments;
    const balanceToFinish = revisedContract - totalEarned;
    return { originalContract, changeOrders, revisedContract, totalEarned, totalRetainage, prevPayments, netDue, balanceToFinish };
  }, [items, appInfo]);

  const inputStyle = { background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 4, padding: "8px 10px", color: "var(--text)", fontSize: 13, fontFamily: "var(--font-mono)", outline: "none", width: "100%", boxSizing: "border-box" };
  const Row = ({ label, value, accent, lg }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: "1px solid var(--line)", gap: 12 }}>
      <span style={{ fontSize: 13, color: accent ? "var(--text)" : "var(--text-muted)" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: lg ? 20 : 14, fontWeight: 700, color: accent ? "var(--accent)" : "var(--text-muted)" }}>{fmt(value)}</span>
    </div>
  );

  const handleCopy = () => {
    const lines = [
      "AIA G702 — Application for Payment",
      "========================================",
      `Application #: ${appInfo.appNumber || "—"}`,
      `Application Date: ${appInfo.appDate || "—"}`,
      `Period To: ${appInfo.periodTo || "—"}`,
      `Project: ${appInfo.projectName || "—"}`,
      "",
      `Original Contract Sum: ${fmt(totals.originalContract)}`,
      `Change Orders to Date: ${fmt(totals.changeOrders)}`,
      `Revised Contract Sum: ${fmt(totals.revisedContract)}`,
      `Total Completed & Stored to Date: ${fmt(totals.totalEarned)}`,
      `Retainage: ${fmt(totals.totalRetainage)}`,
      `Total Earned Less Retainage: ${fmt(totals.totalEarned - totals.totalRetainage)}`,
      `Less Previous Certificates: ${fmt(totals.prevPayments)}`,
      `Current Payment Due: ${fmt(totals.netDue)}`,
      `Balance to Finish, Including Retainage: ${fmt(totals.balanceToFinish + totals.totalRetainage)}`,
    ].join("\n");
    navigator.clipboard.writeText(lines).catch(() => {});
    alert("G702 summary copied to clipboard.");
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 2 }}>AIA G702</p>
          <p style={{ fontSize: 14, fontWeight: 700 }}>Application and Certificate for Payment</p>
        </div>
        <button onClick={handleCopy} className="btn btn-primary" style={{ fontSize: 12, padding: "8px 16px" }}>Copy to clipboard</button>
      </div>

      {/* Project info */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Application No.", key: "appNumber", placeholder: "e.g. 007" },
          { label: "Application Date", key: "appDate", placeholder: "e.g. 2026-07-01" },
          { label: "Period To", key: "periodTo", placeholder: "e.g. 2026-06-30" },
          { label: "Project Name", key: "projectName", placeholder: "e.g. Metro Office Tower" },
          { label: "Owner Name", key: "ownerName", placeholder: "" },
          { label: "Contractor Name", key: "contractorName", placeholder: "" },
        ].map((f) => (
          <div key={f.key}>
            <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", display: "block", marginBottom: 4 }}>{f.label}</label>
            <input style={inputStyle} value={appInfo[f.key] || ""} onChange={(e) => setAppInfo((v) => ({ ...v, [f.key]: e.target.value }))} placeholder={f.placeholder} />
          </div>
        ))}
      </div>

      {/* Contract figures */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Original Contract Sum ($)", key: "originalContract" },
          { label: "Change Orders to Date ($)", key: "changeOrders" },
          { label: "Less Previous Payments ($)", key: "prevPayments" },
        ].map((f) => (
          <div key={f.key}>
            <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", display: "block", marginBottom: 4 }}>{f.label}</label>
            <input style={inputStyle} type="text" inputMode="numeric" value={appInfo[f.key] || ""} onChange={(e) => setAppInfo((v) => ({ ...v, [f.key]: e.target.value }))} placeholder="0" />
          </div>
        ))}
      </div>

      {/* Calculated rows */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 8, padding: "0 20px" }}>
        <Row label="Original Contract Sum" value={totals.originalContract} />
        <Row label="Net Change by Change Orders" value={totals.changeOrders} />
        <Row label="Revised Contract Sum" value={totals.revisedContract} />
        <Row label="Total Completed & Stored to Date (G703)" value={totals.totalEarned} />
        <Row label="Retainage (from G703)" value={totals.totalRetainage} />
        <Row label="Total Earned Less Retainage" value={totals.totalEarned - totals.totalRetainage} />
        <Row label="Less Previous Certificates for Payment" value={totals.prevPayments} />
        <Row label="Current Payment Due" value={totals.netDue} accent lg />
        <Row label="Balance to Finish, Including Retainage" value={totals.balanceToFinish + totals.totalRetainage} />
      </div>
    </div>
  );
};

/* ─── Tabs ───────────────────────────────────────────────────────────────────── */
const Generator = () => {
  const [tab, setTab] = useState("g703");
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [appInfo, setAppInfo] = useState({ originalContract: "", changeOrders: "0", prevPayments: "0" });

  return (
    <section className="section bg-subtle">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 8, padding: 4, width: "fit-content" }}>
          {[{ id: "g703", label: "G703 — Schedule of Values" }, { id: "g702", label: "G702 — Application for Payment" }].map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "8px 20px", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: ".04em", transition: "all .15s",
                background: tab === t.id ? "var(--accent)" : "transparent", color: tab === t.id ? "#07070a" : "var(--text-muted)" }}>
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 32 }}>
          {tab === "g703"
            ? <G703 items={items} setItems={setItems} />
            : <G702 items={items} appInfo={appInfo} setAppInfo={setAppInfo} />}
        </div>

        <div style={{ marginTop: 20, padding: "18px 24px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: 4 }}>MASON generates G702/G703 pay apps automatically from your project data.</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Enter your Schedule of Values once. MASON calculates every application, tracks retainage, and exports AIA-format billing.</p>
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
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>How to fill out AIA G702 and G703</h2>
      <div className="gsap-fade-up">
        <p>The AIA G702/G703 is the industry standard billing form for commercial construction. The <strong>G703 (Continuation Sheet)</strong> is where you itemize work by line item — your Schedule of Values. The <strong>G702 (Application for Payment)</strong> is the cover sheet that rolls up all the G703 totals into a single payment request.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Step 1: Set up your G703 Schedule of Values</h3>
        <p>Before your first pay application, you establish a Schedule of Values (SOV) — a breakdown of your contract into line items, each with a scheduled dollar value. The SOV should add up to your total contract sum. Line items should reflect major CSI divisions or meaningful cost categories. Once the owner approves your SOV, it becomes the baseline for every future pay application.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Step 2: Fill in the G703 each pay period</h3>
        <p>For each pay application, enter the work completed in the current period ("This Period") for each line item. The G703 carries forward the previous period's completed amount, adds the current period, and calculates the total percentage complete per line. Materials stored on-site but not yet installed go in the "Materials Presently Stored" column.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Step 3: Complete the G702 cover sheet</h3>
        <p>The G702 pulls the totals from your G703 and summarizes the payment request. You enter: original contract sum, net change orders to date, and previous payments received. The form calculates your revised contract sum, total earned to date, retainage withheld, and the net amount due for the current application.</p>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 10px" }}>Common mistakes to avoid</h3>
        <p><strong>Over-billing line items early.</strong> Front-loading the Schedule of Values inflates early payments but creates problems at closeout — the SOV won't match actual cost distribution, and owners will push back. <strong>Forgetting stored materials.</strong> Properly documented materials on-site (with backup invoices) can significantly increase your early payment amounts. <strong>Mismatching the retainage rate</strong> with the contract terms — always confirm whether your contract has a rate reduction at 50% completion.</p>
      </div>
    </div>
  </section>
);

/* ─── Related ────────────────────────────────────────────────────────────────── */
const RelatedTools = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ maxWidth: 720 }}>
      <h3 className="gsap-fade-up" style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Related free tools</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "Retainage Calculator", href: "/tools/retainage-calculator", desc: "Calculate retainage balance" },
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
const AIAGeneratorPage = () => {
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
        title={<>AIA G702 / G703<br /><span className="inner-hero__accent">Pay Application Generator</span></>}
        lead="Build your Schedule of Values on the G703, generate the G702 Application for Payment automatically, and copy it to clipboard. Free — no signup required."
      />
      <Generator />
      <Explainer />
      <RelatedTools />
    </main>
  );
};

export default AIAGeneratorPage;
