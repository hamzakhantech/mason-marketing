import React, { useEffect } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const TOOLS = [
  {
    href: "/tools/retainage-calculator",
    eyebrow: "Calculator",
    title: "Retainage Calculator",
    desc: "Calculate retainage withheld, released, and currently outstanding on any construction contract. Supports 5%, 10%, and custom retainage rates with milestone release tracking.",
    cta: "Calculate retainage",
    meta: "Free — no signup",
  },
  {
    href: "/tools/aia-g702-generator",
    eyebrow: "Generator",
    title: "AIA G702 / G703 Generator",
    desc: "Build your Schedule of Values on the G703 Continuation Sheet, then auto-generate the G702 Application for Payment. Copy to clipboard in seconds.",
    cta: "Generate pay app",
    meta: "Free — no signup",
  },
  {
    href: "/tools/change-order-calculator",
    eyebrow: "Calculator",
    title: "Change Order Calculator",
    desc: "Price your change orders correctly with standard overhead and profit markup. Includes optional bond premium. Generates a complete CO breakdown ready to attach to your contract amendment.",
    cta: "Calculate change order",
    meta: "Free — no signup",
  },
  {
    href: "/tools/roi-calculator",
    eyebrow: "Calculator",
    title: "Construction PM ROI Calculator",
    desc: "Calculate how much your team spends on manual admin tasks — reporting, RFIs, pay apps, change orders — and your projected annual savings with construction PM software.",
    cta: "Calculate my ROI",
    meta: "Free — no signup",
  },
];

const ToolCard = ({ tool }) => (
  <a href={tool.href}
    className="value-card gsap-fade-up"
    style={{ textDecoration: "none", display: "block", padding: 28, transition: "border-color .2s" }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}>
    <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>{tool.eyebrow}</p>
    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "var(--text)" }}>{tool.title}</h3>
    <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 20 }}>{tool.desc}</p>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>{tool.cta} →</span>
      <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>{tool.meta}</span>
    </div>
  </a>
);

const WhyFree = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ maxWidth: 860 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }} className="about-story-grid">
        <div className="gsap-fade-up">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14 }}>Why free?</p>
          <h2 className="h2" style={{ marginBottom: 20 }}>Tools that pay for themselves <span style={{ color: "var(--accent)" }}>on the first job.</span></h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>Every contractor should have access to correct construction math — not locked behind a subscription. These tools are free because we believe the best way to show you what MASON can do is to give you something useful first.</p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12 }}>The calculators and generators here run in your browser — no server, no data collection, no account required. Bookmark them. Send them to your project engineer.</p>
        </div>
        <div className="gsap-fade-up" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { stat: "0", label: "Signups required to use any tool" },
            { stat: "4", label: "Free tools for GCs and subs" },
            { stat: "$0", label: "Cost, always" },
          ].map((item, i) => (
            <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10, padding: "18px 22px", display: "flex", gap: 20, alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 32, fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{item.stat}</span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MasonCTA = () => (
  <section className="section">
    <div className="container" style={{ maxWidth: 680, textAlign: "center" }}>
      <p className="gsap-fade-up" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Want the automation behind the math?</p>
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 20 }}>MASON does this <span className="inner-hero__accent">automatically</span> inside every project.</h2>
      <p className="gsap-fade-up" style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 36 }}>Retainage tracked on every pay application. G702/G703 generated from your Schedule of Values. Change orders linked to your budget and AIA billing. All in one place, for $219/month.</p>
      <div className="gsap-fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/contact" className="btn btn-primary btn-lg">Book your 14-day pilot</a>
        <a href="/pricing" className="btn btn-ghost btn-lg">See pricing</a>
      </div>
    </div>
  </section>
);

const HeroImg = () => (
  <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px 48px"}}>
    <img src="/images/tools-hub.svg" alt="MASON free construction calculators — retainage, AIA G702/G703, change order, ROI" width="1200" height="400"
      style={{width:"100%",height:"auto",borderRadius:12,border:"1px solid var(--line)",display:"block"}} loading="eager"/>
  </div>
);

const ToolsHubPage = () => {
  useEffect(() => {
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
        eyebrow="Free tools"
        title={<>Free Construction<br /><span className="inner-hero__accent">Calculators & Generators</span></>}
        lead="Retainage calculators, AIA pay application generators, change order pricing, and ROI analysis — free for every contractor, no account required."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
            {TOOLS.map((tool) => (
              <ToolCard key={tool.href} tool={tool} />
            ))}
          </div>
        </div>
      </section>
      <WhyFree />
      <MasonCTA />
    </main>
  );
};

export default ToolsHubPage;
