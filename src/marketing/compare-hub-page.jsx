import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const Hero = () => (
  <InnerPageHero
    eyebrow="Construction software comparison hub"
    title={
      <>
        How MASON Compares<br />
        <span className="inner-hero__accent">to Every Major Competitor</span>
      </>
    }
    lead={
      <>
        Procore. Buildertrend. Fieldwire. Autodesk. We've done the honest work of mapping out
        how MASON stacks up against each one — what we do better, where they win, and which
        tool is actually right for your team size and workflow.
      </>
    }
  />
);

const ComparisonCards = () => {
  const cards = [
    {
      competitor: "Procore",
      href: "/vs-procore",
      tag: "Head-to-head comparison",
      summary: "The most-searched comparison in construction PM. Procore starts at $10K–$80K/year ACV. MASON Pro is $399/month flat. Here's what the full TCO and feature difference actually looks like.",
      highlights: ["7-row TCO table with 3-year totals", "19-row feature comparison", "When Procore is the right choice"],
      badge: "Most viewed",
    },
    {
      competitor: "Procore alternatives",
      href: "/alternatives/procore",
      tag: "Full alternatives guide",
      summary: "Not just MASON vs Procore — an honest review of every real Procore alternative for small contractors: Buildertrend, Fieldwire, JobTread, Raken, and more.",
      highlights: ["Side-by-side quick comparison table", "Each tool reviewed honestly", "Decision guide by use case"],
    },
    {
      competitor: "Buildertrend alternatives",
      href: "/alternatives/buildertrend",
      tag: "Full alternatives guide",
      summary: "Buildertrend is built for residential homebuilders. If you're running commercial GC or specialty sub work, it hits a ceiling fast — no BIM, no AIA pay apps, no RFIs.",
      highlights: ["Why commercial teams outgrow Buildertrend", "MASON, Procore, Fieldwire, JobTread reviewed", "Flat pricing vs per-company comparison"],
    },
    {
      competitor: "Fieldwire alternatives",
      href: "/alternatives/fieldwire",
      tag: "Full alternatives guide",
      summary: "Fieldwire is strong at field task tracking and punch lists. It stops there — no BIM, no scheduling, no AIA billing. If you need more than a field tool, here's what to look at.",
      highlights: ["Fieldwire per-seat pricing compared to flat MASON", "What Fieldwire doesn't cover", "Full-stack alternatives reviewed"],
    },
    {
      competitor: "Autodesk / Navisworks alternatives",
      href: "/alternatives/autodesk",
      tag: "Full alternatives guide",
      summary: "Autodesk Construction Cloud and Navisworks cost $5K–$20K+/year and require desktop installs. If you need BIM coordination and clash detection without the enterprise licensing, MASON is the only browser-native alternative.",
      highlights: ["Browser-native vs desktop BIM", "3-year cost comparison: $14K vs $45K–$75K", "Trimble Connect and BIMcollab also reviewed"],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {cards.map((card, i) => (
            <a key={i} href={card.href} style={{ textDecoration: "none" }}>
              <div className="value-card gsap-fade-up" style={{ cursor: "pointer", transition: "border-color .2s", position: "relative" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,148,46,.4)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = ""}>
                {card.badge && (
                  <span style={{ position: "absolute", top: 20, right: 20, background: "var(--accent)", color: "#07070a", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4 }}>
                    {card.badge}
                  </span>
                )}
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 6 }}>{card.tag}</p>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{card.competitor}</h2>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{card.summary}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                  {card.highlights.map((h, j) => (
                    <span key={j} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 4, padding: "4px 10px", fontSize: 12, color: "var(--text-muted)" }}>{h}</span>
                  ))}
                </div>
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, color: "var(--accent)", fontSize: 13, fontWeight: 600 }}>
                  Read comparison <span style={{ fontSize: 16 }}>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeyDifferentiators = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{ maxWidth: 600, marginBottom: 48 }}>
        <h2 className="h2">Three things no sub-$500/mo competitor has</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12 }}>
          Every platform comparison goes deeper. But these three capabilities define the MASON category.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {[
          {
            num: "01",
            title: "Browser-native BIM with Navisworks-class clash detection",
            body: "No Autodesk license. No desktop install. No plugin. Upload IFC files, federate multi-discipline models, run hard and soft clash detection in the browser. Included in Pro and Founding Partner.",
          },
          {
            num: "02",
            title: "AIA G702/G703 pay applications built in",
            body: "Generate your Schedule of Values, G702 cover sheet, and G703 continuation sheet natively. No external billing software. No manual spreadsheet. Standard commercial billing workflow built into the billing module on every plan.",
          },
          {
            num: "03",
            title: "Monte Carlo schedule simulation",
            body: "P50, P80, and P90 risk bands from 1,000-iteration Latin Hypercube simulation. Know the probability-weighted completion date before the project starts, not after it slips. No other sub-$500/mo platform has this.",
          },
        ].map((item, i) => (
          <div key={i} className="value-card gsap-fade-up">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 32, fontWeight: 700, color: "rgba(232,148,46,.15)", display: "block", marginBottom: 12 }}>{item.num}</span>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PricingRow = () => (
  <section className="section">
    <div className="container" style={{ maxWidth: 700 }}>
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>What MASON costs vs the competition</h2>
      <div className="compare-table-wrap gsap-fade-up">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Annual cost (typical small team)</th>
              <th>BIM included</th>
              <th>AIA pay apps</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Procore", cost: "$10,000–$80,000+/yr", bim: "Extra (Autodesk)", aia: "Add-on" },
              { name: "Buildertrend", cost: "$3,500–$7,200/yr", bim: "No", aia: "No" },
              { name: "Autodesk ACC + Navisworks", cost: "$5,000–$20,000+/yr", bim: "Yes (desktop)", aia: "No" },
              { name: "Fieldwire (10 users)", cost: "$1,680–$4,800/yr", bim: "No", aia: "No" },
              { name: "MASON Core", cost: "$2,628/yr ($219/mo)", bim: "Viewer ✓", aia: "✓" },
              { name: "MASON Pro", cost: "$4,788/yr ($399/mo)", bim: "Full + clash ✓", aia: "✓" },
            ].map((row, i) => (
              <tr key={i} style={row.name.startsWith("MASON") ? { background: "rgba(232,148,46,.06)" } : {}}>
                <td style={{ fontWeight: row.name.startsWith("MASON") ? 700 : 400, color: row.name.startsWith("MASON") ? "var(--accent)" : "var(--text)" }}>{row.name}</td>
                <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{row.cost}</td>
                <td style={{ color: row.bim.includes("✓") ? "var(--text)" : "var(--text-faint)", fontSize: 13 }}>{row.bim}</td>
                <td style={{ color: row.aia.includes("✓") ? "var(--text)" : "var(--text-faint)" }}>{row.aia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
      <div className="gsap-fade-up">
        <h2 className="h2">See the difference on your own projects.</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, margin: "16px 0 32px" }}>
          14-day pilot. Your team, your projects, all 12 modules. We handle the setup — you run it and decide.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn-primary btn-lg">Book your pilot</a>
          <a href="/pricing" className="btn btn-ghost btn-lg">See pricing</a>
        </div>
      </div>
    </div>
  </section>
);

const CompareHubPage = () => {
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
      <ComparisonCards />
      <KeyDifferentiators />
      <PricingRow />
      <CTA />
    </main>
  );
};

export default CompareHubPage;
