// app.jsx -- Root component. Content driven by CMS (useSiteContent).

function splitHeadlineLines(headline) {
  const trimmed = (headline || '').trim();
  const byNl = trimmed.split(/\n/).map((l) => l.trim()).filter(Boolean);
  if (byNl.length > 1) return byNl;
  const m = /^(.+?)\s(for\s.+)$/i.exec(trimmed);
  if (m) return [m[1], m[2]];
  return [trimmed];
}

function App() {
  const { content } = typeof useSiteContent === 'function'
    ? useSiteContent()
    : { content: window.__masonContent || {} };

  const hero = content.hero || {};
  const sections = content.sections || {};

  const headline = hero.headline || 'One command center for construction control.';
  const accentWord = hero.headlineAccent || 'control';

  const headlineEl = React.useMemo(() => {
    const lines = splitHeadlineLines(headline);
    return lines.map((line, idx) => {
      let inner;
      if (accentWord && line.includes(accentWord)) {
        const parts = line.split(accentWord);
        inner = (
          <>
            {parts[0]}
            <span className="accent">{accentWord}</span>
            {parts[1]}
          </>
        );
      } else {
        inner = line;
      }
      return (
        <span className="hero-line" key={idx}>
          <span className="hero-line-inner">{inner}</span>
        </span>
      );
    });
  }, [headline, accentWord]);

  const heroVisRef = React.useRef(null);

  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = heroVisRef.current;
    if (reduce || !el) return undefined;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const shift = Math.min(y * 0.06, 36);
      el.style.transform = `translate3d(0,${shift.toFixed(2)}px,0)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal');
    if (reduce) {
      els.forEach((e) => e.classList.add('in'));
      return undefined;
    }

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      const pillarsWrap = document.querySelector('.pillars');
      if (pillarsWrap && pillarsWrap.querySelectorAll('.pillar.reveal').length) {
        window.gsap.fromTo(
          pillarsWrap.querySelectorAll('.pillar.reveal'),
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.78,
            stagger: 0.11,
            ease: 'power3.out',
            scrollTrigger: { trigger: pillarsWrap, start: 'top 84%', once: true },
          }
        );
      }
      els.forEach((el) => {
        if (el.closest('.pillars')) return;
        window.gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          }
        );
      });
      return () => {
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const appUrl = content.site?.appUrl || 'https://app.masononsite.com';

  return (
    <div className="site">
      <Header />

      <section className="hero" id="top">
        <div className="grid-bg" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow fade-up">{hero.eyebrow || 'Management . Analytics . Site'}</span>
            <h1 className="display">{headlineEl}</h1>
            <p className="lede fade-up" style={{ animationDelay: '220ms' }}>
              {hero.subheadline || 'From BIM and schedule to RFIs, issues, and field logs -- MASON brings the office and the jobsite into a single, permission-aware system, with an AI Concierge that knows your project.'}
            </p>
            <div className="hero__cta fade-up" style={{ animationDelay: '300ms' }}>
              <a href={`${appUrl}/register`} className="btn btn-primary">
                {hero.ctaPrimary || 'Start free trial'} <IconArrowRight size={16} stroke={2} />
              </a>
              <a href="contact.html" className="btn btn-ghost">
                {hero.ctaSecondary || 'Book a demo'}
              </a>
            </div>
            <div className="hero__meta fade-up" style={{ animationDelay: '380ms' }}>
              <div className="hero__meta-item">
                <span className="hero__meta-dot ok" /> {hero.meta1 || 'Live on 47 active projects'}
              </div>
              <div className="hero__meta-sep" />
              <div className="hero__meta-item">{hero.meta2 || 'Desk . Mobile . Android'}</div>
            </div>
          </div>

          <div className="hero__visual fade-up hero__visual-parallax" style={{ animationDelay: '200ms' }}>
            <div className="hero__visual-scale" ref={heroVisRef}>
              <ProductPreview />
            </div>
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

function hexA(hex, a) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return hex;
  const h = m[1];
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

(function mountApp() {
  const POLL_MS = 200;
  const MAX_WAIT = 12000;
  const required = ['Header', 'Footer', 'Pillars', 'ModuleGrid', 'FinalCTA', 'ConciergeSpotlight'];
  const start = Date.now();
  const timer = setInterval(() => {
    const allReady = required.every((g) => typeof window[g] === 'function');
    const timedOut = Date.now() - start > MAX_WAIT;
    if (allReady || timedOut) {
      clearInterval(timer);
      const root = document.getElementById('root');
      if (root && root.childElementCount === 0) {
        ReactDOM.createRoot(root).render(React.createElement(App));
      }
    }
  }, POLL_MS);
})();
