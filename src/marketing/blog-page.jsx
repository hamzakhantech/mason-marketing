import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const BLOG_ICON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>';

/* ── Real published posts ─────────────────────────────────────────── */
const POSTS = [
  {
    tags: ["BIM", "Coordination"],
    img: "/images/blog/clash-detection-bim.svg",
    href: "/blog/what-is-clash-detection-bim",
    title: "What Is Clash Detection in BIM? Hard Clashes, Soft Clashes, and Why It Matters",
    excerpt: "What BIM clash detection actually is, the three types of clashes, what Navisworks costs, and how browser-native BIM makes coordination accessible to smaller GCs.",
    time: "13 min read · June 2026",
  },
  {
    tags: ["AIA G702", "Pay Apps"],
    img: "/images/blog/aia-g702-g703.svg",
    href: "/blog/how-to-fill-out-aia-g702-g703",
    title: "How to Fill Out AIA G702/G703: Complete Pay App Guide",
    excerpt: "SOV setup, every G703 column and G702 line explained, front-loading risks, stored materials billing, and the five most common pay app mistakes.",
    time: "14 min read · June 2026",
  },
  {
    tags: ["Change Orders", "Contracts"],
    img: "/images/blog/change-order.svg",
    href: "/blog/how-to-write-construction-change-order",
    title: "How to Write a Construction Change Order",
    excerpt: "Notice requirements, the pricing formula (direct cost × overhead × profit + bond), what to include, and the documentation habits that protect entitlement when owners push back.",
    time: "13 min read · June 2026",
  },
  {
    tags: ["Closeout", "Punch List"],
    img: "/images/blog/closeout-checklist.svg",
    href: "/blog/construction-project-closeout-checklist",
    title: "Construction Project Closeout Checklist (42 Items Across 8 Phases)",
    excerpt: "Pre-closeout planning through warranty period: every document, inspection, O&M manual, lien waiver, and approval needed to get final payment without the scramble.",
    time: "15 min read · June 2026",
  },
  {
    tags: ["RFIs", "Workflow"],
    img: "/images/blog/rfi-construction.svg",
    href: "/blog/what-is-rfi-construction",
    title: "What Is an RFI in Construction? Complete Guide to Requests for Information",
    excerpt: "What an RFI is, when to use one, how to write one that gets a fast response, how to manage the log, and field practices that reduce RFI volume without hiding information gaps.",
    time: "16 min read · June 2026",
  },
];

/* ── Featured section ─────────────────────────────────────────────── */
const BlogFeatured = () => {
  const [featured, ...sidebar] = POSTS;
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>Featured</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="about-story-grid">

          {/* Big featured card */}
          <a href={featured.href} className="blog-card blog-card--featured gsap-slide-left cursor-card-hover hover-arrow-cursor magnetic-click-card" style={{ textDecoration: "none", display: "block" }}>
            <div className="blog-card__img" style={{ height: 240, borderRadius: "12px 12px 0 0", overflow: "hidden" }}>
              <img src={featured.img} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="blog-card__body">
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                {featured.tags.map((t, i) => <span key={i} className="blog-tag">{t}</span>)}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.4, margin: "0 0 12px", color: "var(--text)" }}>
                {featured.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 16px" }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{featured.time}</span>
                <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600 }}>Read article →</span>
              </div>
            </div>
          </a>

          {/* Sidebar cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="gsap-slide-right">
            {sidebar.map((article, i) => (
              <a key={i} href={article.href} style={{ textDecoration: "none", display: "flex", gap: 16, padding: 16, background: "var(--bg-elev)", border: "1px solid var(--line)", borderRadius: 12, transition: "border-color .2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,148,46,.4)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--line)"}>
                <div style={{ flexShrink: 0, width: 80, height: 64, borderRadius: 8, overflow: "hidden", background: "rgba(232,148,46,.08)" }}>
                  <img src={article.img} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
                    {article.tags.map((t, j) => <span key={j} className="blog-tag">{t}</span>)}
                  </div>
                  <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.4, margin: "0 0 4px", color: "var(--text)" }}>{article.title}</p>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{article.time}</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ── All posts grid ───────────────────────────────────────────────── */
const BlogGrid = () => (
  <section className="section bg-subtle">
    <div className="container">
      <h2 className="h2 gsap-fade-up" style={{ marginBottom: 32 }}>All articles</h2>
      <div className="blog-grid">
        {POSTS.map((post, i) => (
          <a key={i} href={post.href} className="blog-card gsap-fade-up cursor-card-hover hover-arrow-cursor magnetic-click-card" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
            <div style={{ height: 160, borderRadius: "10px 10px 0 0", overflow: "hidden" }}>
              <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="blog-card__body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                {post.tags.map((t, j) => <span key={j} className="blog-tag">{t}</span>)}
              </div>
              <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.45, margin: "0 0 10px", color: "var(--text)", flex: 1 }}>{post.title}</p>
              <p style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 12px" }}>{post.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{post.time}</span>
                <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600 }}>Read →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ── Guides section ───────────────────────────────────────────────── */
const GUIDES = [
  {
    title: "The Complete Guide to RFI Management in Construction",
    desc: "Writing a good RFI, managing a 500-item register, BIM-linked RFIs, and common failure modes. Covers templates, approval chains, and escalation paths.",
    href: "/blog/what-is-rfi-construction",
    pages: "16 min read",
  },
  {
    title: "AIA G702/G703 Pay Application: Step-by-Step Walkthrough",
    desc: "SOV setup, every column in G703, every line in G702, stored materials billing, retainage tracking, and the most common pay app rejection reasons.",
    href: "/blog/how-to-fill-out-aia-g702-g703",
    pages: "14 min read",
  },
  {
    title: "Construction Software Procurement Guide",
    desc: "How to evaluate, compare, and select construction management software. Scorecard template, vendor questions, and how to avoid the most common procurement mistakes.",
    href: "/contact",
    pages: "Guide",
  },
  {
    title: "Mobile Field Management: Setting Up Your Android Team",
    desc: "Device selection, training approaches, offline policies, and getting daily log compliance above 90% on large sites.",
    href: "/platform",
    pages: "Guide",
  },
  {
    title: "Construction Cost Control: The Project Manager's Handbook",
    desc: "Forecast at completion, committed cost tracking, variation management, and giving the client an honest budget picture without triggering panic.",
    href: "/contact",
    pages: "Guide",
  },
  {
    title: "Data Handover at Practical Completion: What to Prepare and When",
    desc: "O&M manuals, as-built drawings, commissioning records, and warranties. How to accumulate handover data throughout the project rather than scrambling at the end.",
    href: "/blog/construction-project-closeout-checklist",
    pages: "15 min read",
  },
];

const BlogGuides = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{ maxWidth: 640 }}>
        <h2 className="h2">Guides and reference material</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 16 }}>
          Longer-form reference material for construction professionals who want to go deeper on specific topics.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20, marginTop: 40 }}>
        {GUIDES.map((guide, i) => (
          <a key={i} href={guide.href} className="value-card gsap-fade-up" style={{ textDecoration: "none", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,148,46,.35)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--line)"}>
            <div style={{ marginBottom: 12 }}>
              <span dangerouslySetInnerHTML={{ __html: BLOG_ICON }} />
            </div>
            <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.4, margin: "0 0 8px", color: "var(--text)" }}>{guide.title}</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 12px" }}>{guide.desc}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{guide.pages}</span>
              <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600 }}>Read →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ── Newsletter ───────────────────────────────────────────────────── */
const BlogNewsletter = () => (
  <section className="section bg-subtle">
    <div className="container" style={{ maxWidth: 560, textAlign: "center" }}>
      <div className="gsap-fade-up">
        <h2 className="h2">New articles in your inbox</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, margin: "20px 0 32px" }}>
          We publish two or three articles per month. No sales emails. No partner content. Just the articles from this page, delivered directly.
        </p>
        <form style={{ display: "flex", gap: 8, maxWidth: 440, margin: "0 auto" }} onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="your@email.com"
            style={{ flex: 1, padding: "12px 16px", background: "var(--bg-elev)", border: "1px solid var(--line)", borderRadius: 8, color: "var(--text)", fontSize: 14, outline: "none" }} />
          <button type="submit" className="btn btn-primary" style={{ flexShrink: 0 }}>Subscribe</button>
        </form>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12 }}>
          Unsubscribe any time. We never share your email.
        </p>
      </div>
    </div>
  </section>
);

/* ── Page ─────────────────────────────────────────────────────────── */
const BlogPage = () => {
  React.useEffect(() => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      ["gsap-fade-up", "gsap-slide-left", "gsap-slide-right"].forEach((cls, i) => {
        const props = [
          { opacity: 0, y: 30 },
          { opacity: 0, x: -40 },
          { opacity: 0, x: 40 },
        ][i];
        gsap.utils.toArray(`.${cls}`).forEach(el => {
          gsap.from(el, { ...props, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top bottom", toggleActions: "play none none none" } });
        });
      });
    }
  }, []);

  return (
    <main>
      <InnerPageHero
        eyebrow="Resources and insights"
        title={<>Construction management<br /><span className="inner-hero__accent">done right.</span></>}
        lead="Practical guides on construction project management, BIM coordination, RFI workflows, change order control, and field operations. Written for project managers and site supervisors — not executives."
      />
      <BlogFeatured />
      <BlogGrid />
      <BlogGuides />
      <BlogNewsletter />
    </main>
  );
};

export default BlogPage;
