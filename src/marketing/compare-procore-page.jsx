import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
const CPHero = () => (
  <InnerPageHero
    eyebrow="Procore alternative"
    title={
      <>
        MASON vs Procore.<br />
        <span className="inner-hero__accent">Built for different customers.</span>
      </>
    }
    lead={
      <>
        Procore is the right tool for ENR 400 firms running $1B+ in annual volume. If you're a
        5–50 person GC or specialty sub, you're paying Procore pricing built for someone 10× your
        size. MASON is flat $219–$399/month, no seat fees, browser-native BIM included — built
        specifically for the team Procore prices out.
      </>
    }
  />
);

/* ─── Pain block ────────────────────────────────────────────────────────────── */
const CPPainPoints = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 48 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
          Why GCs leave Procore
        </p>
        <h2 className="h2">Procore is expensive by design — not by accident.</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 16 }}>
          Procore prices based on your annual construction volume, not your team size. The more
          your business grows, the more you pay — even if you're using the same features. For a
          20-person GC doing $8M in annual revenue, that often means $15,000–$40,000/year before
          optional modules.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {[
          {
            icon: "💸",
            title: "Volume-based billing you can't predict",
            body: "Procore's ACV model ties your software cost to your revenue. Win a big project — your bill goes up. There's no flat rate. Budgeting is guesswork.",
          },
          {
            icon: "👤",
            title: "Per-seat fees that grow with your team",
            body: "Add a superintendent, add a cost. Add a sub to a project for read-only access — another seat. Teams end up rationing logins to control costs.",
          },
          {
            icon: "🖥️",
            title: "BIM still requires an Autodesk license",
            body: "Procore's BIM functionality requires an Autodesk account and Navisworks for clash detection. You're paying two enterprise vendors to do what MASON does in one browser tab.",
          },
        ].map((item, i) => (
          <div key={i} className="value-card gsap-fade-up">
            <p style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</p>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Pricing comparison ────────────────────────────────────────────────────── */
const CPPriceBlock = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 48 }}>
        <h2 className="h2">The real cost of Procore for a 20-person GC</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 16 }}>
          Procore doesn't publish pricing. Based on publicly available analyst reports,
          G2 user data, and feedback from teams who've switched, here's what a typical
          20-person GC actually pays.
        </p>
      </div>

      {/* TCO table */}
      <div className="compare-table-wrap gsap-fade-up" style={{ marginBottom: 48 }}>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Cost item</th>
              <th className="compare-mason">MASON Pro</th>
              <th>Procore (typical)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "Monthly subscription", mason: "$399/month flat", procore: "$1,250–$3,500/month" },
              { item: "Annual cost", mason: "$4,788/year", procore: "$15,000–$42,000/year" },
              { item: "Per-seat fees", mason: "None — 25 users included", procore: "Yes — additional per user" },
              { item: "BIM / clash detection", mason: "Included (browser-native)", procore: "Requires Autodesk license ($3K–$10K/yr)" },
              { item: "Module add-ons", mason: "None — all 12 modules included", procore: "Many modules sold separately" },
              { item: "Implementation / onboarding", mason: "Included on Pro plan", procore: "Typically $5,000–$20,000 paid separately" },
              { item: "3-year total cost (est.)", mason: "~$14,400", procore: "$60,000–$180,000+" },
            ].map((row, i) => (
              <tr key={i}>
                <td>{row.item}</td>
                <td className="compare-mason" style={{ color: "var(--text)", fontWeight: 600 }}>{row.mason}</td>
                <td style={{ color: "var(--text-muted)" }}>{row.procore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: 13, color: "var(--text-faint)", maxWidth: 640 }}>
        Procore pricing is based on publicly available analyst reports and user-submitted data on G2, Capterra, and Reddit. Actual Procore pricing varies by contract, construction volume, and modules. We encourage you to get a Procore quote and compare directly.
      </p>
    </div>
  </section>
);

/* ─── Feature table ─────────────────────────────────────────────────────────── */
const CPTable = () => {
  const rows = [
    { feature: "Pricing model", mason: "Flat per team — Core $219/mo, Pro $399/mo", procore: "ACV-based on construction volume — custom contract" },
    { feature: "Per-seat / per-user fees", mason: "None", procore: "Yes — charged per user per year" },
    { feature: "All modules included", mason: "Yes — all 12 modules on every plan", procore: "No — many modules sold as add-ons" },
    { feature: "Browser-native BIM viewer", mason: "✓ IFC 2x3 and IFC4, no plugin required", procore: "Requires Autodesk integration and account" },
    { feature: "Navisworks-class clash detection", mason: "✓ Included on Pro / Founding Partner", procore: "Requires separate Navisworks license" },
    { feature: "Federated model viewing", mason: "✓ Multi-discipline in one browser tab", procore: "Via Autodesk — not browser-native" },
    { feature: "AIA G702/G703 pay apps", mason: "✓ Built into every plan", procore: "Available — module pricing varies" },
    { feature: "Monte Carlo scheduling (P50/P80/P90)", mason: "✓ Pro and Founding Partner", procore: "Not available" },
    { feature: "AI assistant", mason: "Full AI Concierge — project-aware, all plans", procore: "Procore Copilot — limited availability" },
    { feature: "RFI management", mason: "✓ Full register, AI-assisted drafting", procore: "✓ Full register, no AI drafting" },
    { feature: "Change order tracking", mason: "✓ Included", procore: "✓ Included" },
    { feature: "Construction daily logs", mason: "✓ Mobile, full offline mode", procore: "✓ Mobile, limited offline" },
    { feature: "Document management", mason: "✓ Included", procore: "✓ Included" },
    { feature: "Subcontractor coordination", mason: "✓ Included", procore: "✓ Included" },
    { feature: "Free pilot / trial", mason: "14-day pilot on your real project — we set it up", procore: "Demo only — no self-serve trial" },
    { feature: "Onboarding", mason: "Included on Pro plan", procore: "Paid implementation typically required ($5K–$20K)" },
    { feature: "Support", mason: "Email all plans, priority on Pro", procore: "Phone and email on most plans" },
    { feature: "iOS app", mason: "In development", procore: "✓ Available" },
    { feature: "SAML SSO", mason: "Pro plan", procore: "Enterprise plan" },
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>Feature by feature</h2>
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="compare-mason">MASON</th>
                <th>Procore</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td className="compare-mason" style={{ color: "var(--text)" }}>{row.mason}</td>
                  <td style={{ color: "var(--text-muted)" }}>{row.procore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

/* ─── What MASON has that Procore doesn't ──────────────────────────────────── */
const CPDifferentiators = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{ maxWidth: 640, marginBottom: 48 }}>
        <h2 className="h2">Three things MASON has that Procore doesn't — at any price tier</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {[
          {
            num: "01",
            title: "Browser-native BIM with Navisworks-class clash detection",
            body: "No Autodesk license. No desktop install. No plugin. Upload an IFC file and your whole team is coordinating in a browser tab. Hard clash, soft clash, and clearance clash detection — the same capability Navisworks charges $3,000–$10,000/year for.",
          },
          {
            num: "02",
            title: "AIA G702/G703 pay applications built into every plan",
            body: "Schedule of Values, G702 Application for Payment, G703 Continuation Sheet, and G701 Change Orders are native modules — not add-ons. Your billing coordinator generates and tracks pay apps inside the same platform as your project data.",
          },
          {
            num: "03",
            title: "Monte Carlo schedule simulation (P50 / P80 / P90)",
            body: "1,000-iteration Latin Hypercube sampling gives your PM realistic probability bands for on-time completion. No other construction PM platform under $500/month offers this. Procore's scheduling module doesn't have it either.",
          },
        ].map((item, i) => (
          <div key={i} className="value-card gsap-fade-up" style={{ borderColor: "rgba(232,148,46,.35)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>{item.num}</p>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── When to choose ────────────────────────────────────────────────────────── */
const CPWhenToChoose = () => (
  <section className="section bg-subtle">
    <div className="container">
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 40 }}>Choose honestly</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="about-story-grid">
        <div className="value-card gsap-slide-left" style={{ borderColor: "rgba(232,148,46,.35)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Choose MASON when</p>
          {[
            "Your team is 5–50 people and Procore pricing doesn't make sense at your scale",
            "You need browser-native BIM and clash detection without an Autodesk subscription",
            "You want flat, predictable pricing that doesn't scale with your construction volume",
            "You need AIA G702/G703 pay apps built into your PM platform",
            "You want Monte Carlo schedule risk analysis that's actually accessible to small teams",
            "You want to run a real pilot on a live project before committing",
            "You need a full 12-module PM stack, not field-only or daily logs only",
            "Your team crosses multiple companies, subs, and consultants who need access",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
              <span style={{ color: "#4ade80", fontWeight: 700, flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
        <div className="value-card gsap-slide-right">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Procore may be better when</p>
          {[
            "You're an ENR 400 firm where Procore's ACV model is already built into overhead",
            "You need an iOS native app right now (MASON's is in development)",
            "Your workflows depend heavily on the full Autodesk BIM 360 / ACC ecosystem",
            "You need SOC 2 Type II certification on your PM vendor today",
            "Your ERP has a deep pre-built Procore integration that would be expensive to replace",
            "You need Procore's most advanced earned value analysis (EVM) module",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
              <span style={{ color: "var(--text-muted)", fontWeight: 700, flexShrink: 0 }}>{"→"}</span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Migration ─────────────────────────────────────────────────────────────── */
const CPMigration = () => (
  <section className="section">
    <div className="container" style={{ maxWidth: 740 }}>
      <div className="prose-section gsap-fade-up">
        <h2>Switching from Procore to MASON</h2>
        <p>
          We've helped teams migrate from Procore to MASON and we're honest about what it involves.
          It's not a one-click import — but it's not as complicated as it sounds either.
        </p>
        <h3>What transfers cleanly</h3>
        <p>
          RFIs, submittals, issues, and document registers transfer with full history via our
          Procore API migration tool. You don't export CSVs manually — MASON connects to the
          Procore API and pulls your data directly, preserving record IDs, response chains, and
          document version history.
        </p>
        <h3>What requires some work</h3>
        <p>
          Drawing annotations don't transfer — Procore and MASON use different annotation formats.
          The documents themselves transfer but markups made on drawings in Procore need to be
          recreated. Most teams find that document history matters more than annotation history
          and move forward with clean documents in MASON.
        </p>
        <p>
          Custom Procore workflow builder configurations don't have a direct import path. MASON has
          standard RFI, submittal, and approval workflows. If you built something highly custom in
          Procore, we'll need to work through the equivalent setup in MASON together.
        </p>
        <h3>How long does it take?</h3>
        <p>
          For a single project with a typical dataset, the migration itself takes a few hours.
          The bigger time investment is team onboarding. Migration support is included in the
          Pro plan onboarding — MASON handles the migration for you rather than walking you
          through doing it yourself.
        </p>
      </div>
    </div>
  </section>
);

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
const CPCTA = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ textAlign: "center", maxWidth: 580 }}>
      <div className="gsap-fade-up">
        <h2 className="h2">Run MASON on a real project for 14 days.</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, margin: "20px 0 12px" }}>
          All 12 modules. Your team, your project data. We handle the setup.
        </p>
        <p style={{ fontSize: 14, color: "var(--text-faint)", marginBottom: 36 }}>
          MASON Pro starts at $399/month — flat, no seat fees. If you're migrating from Procore,
          book a call and we'll walk through the migration together.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn-primary btn-lg">Book your 14-day pilot</a>
          <a href="/pricing" className="btn btn-ghost btn-lg">See full pricing</a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Page assembly ─────────────────────────────────────────────────────────── */
const CPComparePage = () => {
  React.useEffect(() => {
    document.body.classList.add("gsap-ready");
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
        gsap.from(el, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top bottom", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".gsap-slide-left").forEach((el) => {
        gsap.from(el, { opacity: 0, x: -40, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top bottom", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".gsap-slide-right").forEach((el) => {
        gsap.from(el, { opacity: 0, x: 40, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top bottom", toggleActions: "play none none none" } });
      });
    }
  }, []);

  return (
    <main>
      <CPHero />
      <CPPainPoints />
      <CPPriceBlock />
      <CPDifferentiators />
      <CPTable />
      <CPWhenToChoose />
      <CPMigration />
      <CPCTA />
    </main>
  );
};

export default CPComparePage;
