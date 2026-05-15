import React from "react";

var BLOG_CARD_SVG='<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(232,148,46,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>';
var BLOG_ICON='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8942e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>';

const BlogHero = () => (
  <section className="page-hero">
    <div className="grid-bg" aria-hidden="true" /><div className="page-hero__glow" aria-hidden="true" />
    <div className="container" style={{position:"relative",zIndex:1}}>
      <div className="page-hero__inner">
        <span className="page-hero__eyebrow gsap-fade-up">Resources and insights</span>
        <h1 className="page-hero__title gsap-fade-up">
          Construction management<br />
          <span style={{color:"var(--accent)"}}>done right.</span>
        </h1>
        <p className="page-hero__sub gsap-fade-up">
          Practical guides, case breakdowns, and honest takes on how the construction
          industry uses technology. No sponsored content. No vendor fluff. Just
          information that helps project teams work better.
        </p>
      </div>
    </div>
  </section>
);

const BlogFeatured = () => (
  <section className="section">
    <div className="container">
      <h2 className="h2 gsap-fade-up" style={{marginBottom:32}}>Featured</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"start"}} className="about-story-grid">
        <a href="/blog" className="blog-card blog-card--featured gsap-slide-left cursor-card-hover hover-arrow-cursor magnetic-click-card" style={{textDecoration:"none",display:"block"}}>
          <div className="blog-card__img" style={{height:220,background:"linear-gradient(135deg,rgba(232,148,46,.15),rgba(232,148,46,.05))",borderRadius:"12px 12px 0 0",display:"flex",alignItems:"center",justifyContent:"center"}}><span dangerouslySetInnerHTML={{__html:BLOG_CARD_SVG}} /></div>
          <div className="blog-card__body">
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <span className="blog-tag">BIM</span>
              <span className="blog-tag">Field work</span>
            </div>
            <h3 style={{fontSize:20,fontWeight:700,lineHeight:1.4,margin:"0 0 12px",color:"var(--text)"}}>
              Why BIM coordination still fails on site even when models are perfect
            </h3>
            <p style={{fontSize:14,color:"var(--text-muted)",lineHeight:1.7,margin:"0 0 16px"}}>
              A federated model with zero clashes still produces site conflicts when the
              people doing the work cannot access the model at the point of installation.
              Here is the information access problem that BIM software companies do not
              talk about enough.
            </p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:12,color:"var(--text-muted)"}}>12 min read . May 2026</span>
              <span style={{fontSize:13,color:"var(--accent)",fontWeight:600}}>{"Read article ->"}</span>
            </div>
          </div>
        </a>

        <div style={{display:"flex",flexDirection:"column",gap:20}} className="gsap-slide-right">
          {[
            {
              emoji:"article",
              tags:["RFIs","Workflow"],
              title:"The RFI is the most important document on a construction project. Here is why it fails so often.",
              excerpt:"Most RFI failures are not about the quality of the question. They are about the speed of the response and whether the answer reaches everyone who needed it.",
              time:"9 min read . May 2026"
            },
            {
              emoji:"article",
              tags:["Mobile","Offline"],
              title:"What actually happens when field teams lose connectivity on a 40-storey building site",
              excerpt:"Most project management apps treat offline mode as a marketing checkbox. Here is what real offline capability looks like and why the difference matters.",
              time:"7 min read . April 2026"
            },
            {
              emoji:"article",
              tags:["Pricing","Software"],
              title:"Per user pricing in construction software is fundamentally broken. Here is a better model.",
              excerpt:"When adding a subcontractor to a platform costs money, project managers find workarounds. Those workarounds cost more than the seat would have.",
              time:"6 min read . April 2026"
            }
          ].map((article,i)=>(
            <a key={i} href="/blog" style={{textDecoration:"none",display:"flex",gap:16,padding:16,background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:12,transition:"border-color .2s"}}
              onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(232,148,46,.4)"}
              onMouseLeave={e=>e.currentTarget.style.borderColor="var(--line)"}>
              <div style={{fontSize:28,flexShrink:0,width:48,height:48,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(232,148,46,.08)",borderRadius:10}}>
                <span dangerouslySetInnerHTML={{__html:BLOG_ICON}}/>
              </div>
              <div>
                <div style={{display:"flex",gap:6,marginBottom:6}}>
                  {article.tags.map((t,j)=><span key={j} className="blog-tag">{t}</span>)}
                </div>
                <p style={{fontWeight:700,fontSize:14,lineHeight:1.4,margin:"0 0 6px",color:"var(--text)"}}>{article.title}</p>
                <p style={{fontSize:12,color:"var(--text-muted)",lineHeight:1.5,margin:"0 0 8px"}}>{article.excerpt}</p>
                <span style={{fontSize:11,color:"var(--text-muted)"}}>{article.time}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const BlogGrid = () => {
  const articles = [
    {
      emoji:"article",
      tags:["AR","Technology"],
      title:"Augmented reality on a construction site: what works, what is hype, and what comes next",
      excerpt:"AR has been promised as a construction game-changer for a decade. This is an honest look at what it actually does well on a real project today, with current hardware in real field conditions.",
      time:"11 min read . April 2026"
    },
    {
      emoji:"article",
      tags:["Cost control","Finance"],
      title:"How construction cost forecasts go wrong and what better data management actually fixes",
      excerpt:"The final account being higher than the original budget is normal in construction. But how much higher, and how late you find out, depends almost entirely on the quality of your cost data management.",
      time:"8 min read . April 2026"
    },
    {
      emoji:"article",
      tags:["AI","Productivity"],
      title:"What construction project managers actually do with AI tools today",
      excerpt:"We asked 40 construction project managers what they used AI for in their daily work. The answers were more specific and more useful than the usual AI-will-change-everything narrative.",
      time:"10 min read . March 2026"
    },
    {
      emoji:"article",
      tags:["Documents","Version control"],
      title:"The hidden cost of the wrong drawing revision reaching the trades",
      excerpt:"A contractor building to revision C when revision D was issued last week is not a technology problem. It is an information distribution problem. Here is how it happens and how to prevent it.",
      time:"7 min read . March 2026"
    },
    {
      emoji:"article",
      tags:["Punch lists","Commissioning"],
      title:"Punch list management at scale: why the last 5% of a project takes 30% of the time",
      excerpt:"Closing out a construction project is harder than it should be. The punch list process reveals every information gap that accumulated throughout the build. Better data management earlier makes commissioning faster.",
      time:"9 min read . March 2026"
    },
    {
      emoji:"article",
      tags:["International","Teams"],
      title:"Running construction projects across multiple countries and time zones",
      excerpt:"International construction programmes have a communication overhead that domestic projects do not. The tools that work for a single-site project start to fail when your project spans three countries and two languages.",
      time:"8 min read . February 2026"
    },
    {
      emoji:"article",
      tags:["IFC","Standards"],
      title:"A practical guide to IFC for project managers who do not have a BIM background",
      excerpt:"IFC is the open standard for sharing building information. Understanding it well enough to have an informed conversation with your design team takes about 30 minutes. Here is that 30 minutes.",
      time:"12 min read . February 2026"
    },
    {
      emoji:"article",
      tags:["Issues","Quality"],
      title:"Issue management on construction projects: the difference between a list and a system",
      excerpt:"Every project manager has a list of issues. Fewer have a system that ensures those issues get resolved before they affect the programme. Here is what makes the difference.",
      time:"7 min read . February 2026"
    },
    {
      emoji:"article",
      tags:["Case study","Residential"],
      title:"How a 45-storey residential tower cut RFI response time from 12 days to 3 days",
      excerpt:"The project had the same number of RFIs as before. What changed was who could see them, when, and what information was attached. A detailed look at the workflow changes and the results.",
      time:"14 min read . January 2026"
    }
  ];

  return (
    <section className="section bg-subtle">
      <div className="container">
        <h2 className="h2 gsap-fade-up" style={{marginBottom:32}}>All articles</h2>
        <div className="blog-grid">
          {articles.map((article,i)=>(
            <a key={i} href="/blog" className="blog-card gsap-fade-up cursor-card-hover hover-arrow-cursor magnetic-click-card" style={{textDecoration:"none",display:"flex",flexDirection:"column"}}>
              <div style={{height:120,background:"linear-gradient(135deg,rgba(232,148,46,.1),rgba(232,148,46,.03))",borderRadius:"10px 10px 0 0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40}}>
                <span dangerouslySetInnerHTML={{__html:BLOG_ICON}}/>
              </div>
              <div className="blog-card__body" style={{flex:1,display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
                  {article.tags.map((t,j)=><span key={j} className="blog-tag">{t}</span>)}
                </div>
                <p style={{fontWeight:700,fontSize:14,lineHeight:1.45,margin:"0 0 10px",color:"var(--text)",flex:1}}>{article.title}</p>
                <p style={{fontSize:12.5,color:"var(--text-muted)",lineHeight:1.6,margin:"0 0 12px"}}>{article.excerpt}</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto"}}>
                  <span style={{fontSize:11,color:"var(--text-muted)"}}>{article.time}</span>
                  <span style={{fontSize:12,color:"var(--accent)",fontWeight:600}}>{"Read ->"}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogGuides = () => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up" style={{maxWidth:640}}>
        <h2 className="h2">Guides and reference material</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,marginTop:16}}>
          Longer-form reference material for construction professionals who want to go deeper
          on specific topics.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20,marginTop:40}}>
        {[
          {
            title:"The Complete Guide to RFI Management in Construction",
            desc:"Everything from writing a good RFI to managing a 500-item register on a fast-track commercial build. Covers templates, approval chains, BIM-linked RFIs, and common failure modes.",
            pages:"28 pages",
            icon:"article"
          },
          {
            title:"BIM for Project Managers: A Non-Technical Introduction",
            desc:"IFC files, federated models, clash detection, and 4D scheduling explained without assuming any BIM software knowledge. Written for the PM who needs to work with a BIM manager, not become one.",
            pages:"22 pages",
            icon:"article"
          },
          {
            title:"Construction Software Procurement Guide",
            desc:"How to evaluate, compare, and select construction management software for your organisation. Includes a scorecard template, a list of questions to ask vendors, and a guide to avoiding common procurement mistakes.",
            pages:"18 pages",
            icon:"article"
          },
          {
            title:"Mobile Field Management: Setting Up Your Android Team",
            desc:"A practical guide to rolling out mobile field management tools to a site team. Covers device selection, training approaches, offline policies, and how to get daily log compliance above 90%.",
            pages:"15 pages",
            icon:"article"
          },
          {
            title:"Construction Cost Control: The Project Manager's Handbook",
            desc:"Forecast at completion, committed cost tracking, variation management, and how to give the client an honest picture of where the budget stands without triggering panic. A pragmatic guide from project practitioners.",
            pages:"24 pages",
            icon:"article"
          },
          {
            title:"Data Handover at Practical Completion: What to Prepare and When",
            desc:"The O&M manuals, as-built drawings, commissioning records, and warranties that a building owner needs at handover. A checklist-based guide to accumulating handover data throughout the project rather than scrambling at the end.",
            pages:"16 pages",
            icon:"article"
          }
        ].map((guide,i)=>(
          <div key={i} className="value-card gsap-fade-up" style={{cursor:"pointer"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(232,148,46,.35)"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="var(--line)"}>
            <div style={{fontSize:28,marginBottom:12}}><span dangerouslySetInnerHTML={{__html:BLOG_ICON}}/></div>
            <p style={{fontWeight:700,fontSize:14,lineHeight:1.4,margin:"0 0 8px",color:"var(--text)"}}>{guide.title}</p>
            <p style={{fontSize:13,color:"var(--text-muted)",lineHeight:1.6,margin:"0 0 12px"}}>{guide.desc}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:11,color:"var(--text-muted)",fontFamily:"var(--font-mono)"}}>{guide.pages}</span>
              <span style={{fontSize:12,color:"var(--accent)",fontWeight:600}}>{"Download ->"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogNewsletter = () => (
  <section className="section bg-subtle">
    <div className="container" style={{maxWidth:560,textAlign:"center"}}>
      <div className="gsap-fade-up">
        <h2 className="h2">New articles in your inbox</h2>
        <p style={{fontSize:16,color:"var(--text-muted)",lineHeight:1.7,margin:"20px 0 32px"}}>
          We publish two or three articles per month. No sales emails. No partner content.
          Just the articles from this page, delivered directly.
        </p>
        <form style={{display:"flex",gap:8,maxWidth:440,margin:"0 auto"}} onSubmit={e=>e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{flex:1,padding:"12px 16px",background:"var(--bg-elev)",border:"1px solid var(--line)",borderRadius:8,color:"var(--text)",fontSize:14,outline:"none"}}
          />
          <button type="submit" className="btn btn-primary" style={{flexShrink:0}}>Subscribe</button>
        </form>
        <p style={{fontSize:12,color:"var(--text-muted)",marginTop:12}}>
          Unsubscribe any time. We never share your email.
        </p>
      </div>
    </div>
  </section>
);

const BlogPage = () => {
  React.useEffect(() => {
    document.body.classList.add('gsap-ready'); // CSS fallback: elements visible even if GSAP fails
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach(el => {
        gsap.from(el, {opacity:0,y:30,duration:0.6,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-left").forEach(el => {
        gsap.from(el, {opacity:0,x:-40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
      gsap.utils.toArray(".gsap-slide-right").forEach(el => {
        gsap.from(el, {opacity:0,x:40,duration:0.7,ease:"power2.out",
          scrollTrigger:{trigger:el,start:"top bottom",toggleActions:"play none none none"}});
      });
    }
  }, []);
  return (
    <main>
        <BlogHero />
        <BlogFeatured />
        <BlogGrid />
        <BlogGuides />
        <BlogNewsletter />
      </main>
  );
};
export default BlogPage;
