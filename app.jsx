// app.jsx -- Root component. Content driven by CMS (useSiteContent).

function App() {
  // useSiteContent is provided by cms.jsx (loaded after this script)
  // On first render __masonContent may still be loading; content will update reactively.
  const { content } = typeof useSiteContent === 'function'
    ? useSiteContent()
    : { content: window.__masonContent || {} };

  const hero   = content.hero   || {};
  const sections = content.sections || {};

  // Build the headline with the accent word highlighted
  const headline = hero.headline || 'One command center for construction control.';
  const accentWord = hero.headlineAccent || 'control';
  const headlineEl = React.useMemo(() => {
    if (!accentWord || !headline.includes(accentWord)) {
      return <>{headline}</>;
    }
    const parts = headline.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="accent">{accentWord}</span>
        {parts[1]}
      </>
    );
  }, [headline, accentWord]);

  // Scroll reveal
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);

  const appUrl = content.site?.appUrl || 'https://app.masononsite.com';

  return (
    <div className="site">
      <Header />

      {/* Hero -- CMS driven */}
      <section className="hero" id="top">
        <div className="grid-bg" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow fade-up">{hero.eyebrow || 'Management . Analytics . Site'}</span>
            <h1 className="display fade-up" style={{ animationDelay: '80ms' }}>
              {headlineEl}
            </h1>
            <p className="lede fade-up" style={{ animationDelay: '160ms' }}>
              {hero.subheadline || 'From BIM and schedule to RFIs, issues, and field logs -- MASON brings the office and the jobsite into a single, permission-aware system, with an AI Concierge that knows your project.'}
            </p>
            <div className="hero__cta fade-up" style={{ animationDelay: '240ms' }}>
              <a href={`${appUrl}/register`} className="btn btn-primary">
                {hero.ctaPrimary || 'Start free trial'} <IconArrowRight size={16} stroke={2} />
              </a>
              <a href="contact.html" className="btn btn-ghost">
                {hero.ctaSecondary || 'Book a demo'}
              </a>
            </div>
            <div className="hero__meta fade-up" style={{ animationDelay: '320ms' }}>
              <div className="hero__meta-item">
                <span className="hero__meta-dot ok" /> {hero.meta1 || 'Live on 47 active projects'}
              </div>
              <div className="hero__meta-sep" />
              <div className="hero__meta-item">{hero.meta2 || 'Desk . Mobile . Android'}</div>
            </div>
          </div>

          <div className="hero__visual fade-up" style={{ animationDelay: '200ms' }}>
            <ProductPreview />
          </div>
        </div>

        <div className="hero__expansion container">
          <span className="mono">M.A.S.O.N</span>
          <span className="hero__expansion-sep" aria-hidden="true">/</span>
          <span className="hero__expansion-text">
            <span>Management</span><span>Analytics</span><span>System</span>
            <span>On-site</span><span>Navigation</span>
          </span>
        </div>
      </section>

      {/* Sections -- toggle visibility from CMS */}
      <Pillars />
      {sections.personas !== false && <Personas />}
      <ModuleGrid />
      {sections.bimProof !== false && <BIMProof />}
      {sections.conciergeSpotlight !== false && <ConciergeSpotlight />}
      {sections.workflow !== false && <Workflow />}
      {sections.surfaces !== false && <Surfaces />}
      {sections.howItWorks !== false && <HowItWorks />}
      {sections.compareOldWay !== false && <CompareOldWay />}
      {sections.socialProof !== false && <SocialProof />}
      {sections.pricingTeaser !== false && <PricingTeaser />}
      {sections.homeFaq !== false && <HomeFAQ />}
      {sections.trustExtended !== false && <TrustExtended />}
      <FinalCTA />
      <Footer />
    </div>
  );
}

// Helper: convert #rrggbb + alpha to rgba()
function hexA(hex, a) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return hex;
  const h = m[1];
  const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

// Defer render until after all Babel external scripts have executed.
requestAnimationFrame(function() {
  var root = document.getElementById('root');
  if (root) ReactDOM.createRoot(root).render(React.createElement(App));
});
