import React from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";
import { useSiteContent } from "../cms/SiteContentContext.jsx";
import {
  IconArrowRight,
  IconBIM,
  IconConcierge,
  IconProjects,
  IconSchedule,
  IconDocuments,
  IconIssues,
} from "./icons.jsx";

// --- Default content (rendered immediately; CMS overrides when loaded) ---------
const DEFAULT_PRICING = {
  annualSavingPct: 20,
  tiers: [
    {
      id: 'core', name: 'Core',
      tagline: 'Everything you need to run a job. For teams on up to 3 active projects.',
      monthly: 219, annual: 175,
      projectsLabel: '10 users · 3 active projects',
      highlight: false, cta: 'Book a call',
      features: [
        'Daily logs, photos, and field reports',
        'RFIs with ball-in-court tracking',
        'Change orders -- digital sign-off before work starts',
        'Gantt schedule + critical path',
        'Budget vs. actual cost tracking',
        'AIA G702/G703 pay applications',
        'Android app -- works offline on site',
        'Mason AI -- 60 queries per project per month',
        'Email support',
      ]
    },
    {
      id: 'pro', name: 'Pro',
      tagline: 'Core PM plus BIM, Navisworks-class clash detection, AR, and Monte Carlo scheduling.',
      monthly: 399, annual: 319,
      projectsLabel: '25 users · 10 active projects',
      highlight: true, cta: 'Book a call',
      features: [
        'Everything in Core',
        'BIM viewer -- browser-based IFC, no Autodesk license needed',
        'Clash detection -- BVH narrow-phase engine (same algorithm class as Navisworks)',
        'AR walkthrough -- Android WebXR + iOS AR Quick Look',
        'Monte Carlo scheduling -- P50 / P80 / P90 risk bands, 1,000-iteration simulation',
        'Mason AI -- unlimited queries',
        'Priority email support -- 24-hr response',
      ]
    },
    {
      id: 'founding-partner', name: 'Founding Partner',
      tagline: 'Pro access at $129/month, locked for life. First 10 firms -- in exchange for direct feedback.',
      monthly: 129, annual: 129,
      projectsLabel: '25 users · 10 projects · price locked',
      highlight: false, cta: 'Book a call',
      features: [
        'Everything in Pro',
        'Price locked at $129/mo for life (stays as long as you stay subscribed)',
        'Direct line to the founding team',
        'Your input shapes what gets built next',
      ]
    },
  ],
  faq: [
    { q: 'What counts toward the user limit?', a: 'Anyone with a MASON login on your account -- staff, subs, client reps. Core covers 10 users. Pro covers 25. Most site teams with a handful of subs fit comfortably in Pro.' },
    { q: 'What counts as an active project?', a: 'Any project you're working in right now. Archive it when the job closes and it stops counting. Archived projects keep all their data -- they just don't take up a slot.' },
    { q: 'What happens if we hit a limit?', a: 'We'll flag it and give you a window to upgrade before anything stops working. We're not going to lock you out mid-job.' },
    { q: 'Is there a free trial?', a: 'We're running a hands-on pilot program right now -- not a self-serve trial. Book a call and we'll set your team up on a real job for 14 days. You get the full product, we handle setup, and at day 14 you decide whether to stay on.' },
    { q: 'What is the Founding Partner offer?', a: 'Ten firms get Pro access at $129/month, locked permanently as long as they stay subscribed. That's BIM viewer, Navisworks-class clash detection, AR walkthrough, Monte Carlo scheduling, 25 users, 10 projects -- at $129 instead of $399. The trade: we want direct feedback on what to build next.' },
    { q: 'Do you offer annual billing?', a: 'Yes. Annual billing on Core and Pro saves 20%. Founding Partner pricing is already locked at $129 -- no additional annual discount applies.' },
  ],
};

// --- Trial Banner --------------------------------------------------------------
const TrialBanner = ({ appUrl, trialDays }) => (
  <div className="trial-banner">
    <span className="trial-banner__badge">14-day pilot</span>
    <span className="trial-banner__text">
      We set your team up on a real job. Full product, no self-serve onboarding. Book a call to get started.
    </span>
    <a href="contact" className="trial-banner__cta">
      Book a call <IconArrowRight size={14} stroke={2} />
    </a>
  </div>
);

// --- Pricing Hero --------------------------------------------------------------
const PricingHero = () => (
  <InnerPageHero
    showGridBg={false}
    eyebrow="Pricing"
    title={
      <>
        Flat pricing. No surprises.<br />
        <span className="inner-hero__accent">No seat fees.</span>
      </>
    }
    lead={
      <>
        Core is $219/month for 10 users and 3 jobs. Pro is $399/month for 25 users and 10 jobs.
        That's the whole bill -- no add-ons, no module gates, no "call us for the price."
        Founding Partner locks in at $129/month for life, first 10 firms only.
      </>
    }
  />
);

// --- Billing Toggle -----------------------------------------------------------
const BillingToggle = ({ billing, onChange, savingPct }) => (
  <div className="billing-toggle gsap-fade-up">
    <button className={"billing-toggle__btn" + (billing === 'monthly' ? ' is-active' : '')} onClick={() => onChange('monthly')}>Monthly</button>
    <button className={"billing-toggle__btn" + (billing === 'annual' ? ' is-active' : '')} onClick={() => onChange('annual')}>
      Annual <span className="billing-toggle__badge">Save {savingPct || 20}%</span>
    </button>
  </div>
);

// --- Editable text helper (used in inline edit mode) -------------------------
const EditableText = ({ value, onChange, as: Tag = 'span', className, style, multiline }) => {
  const editMode = typeof useEditMode === 'function' ? useEditMode() : false;
  if (!editMode) return <Tag className={className} style={style}>{value}</Tag>;
  if (multiline) {
    return (
      <textarea
        className={className}
        style={{ ...style, background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, resize: 'vertical', fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit', padding: '2px 4px', width: '100%', boxSizing: 'border-box' }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
  return (
    <Tag
      className={className}
      style={{ ...style, outline: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, cursor: 'text', minWidth: 20 }}
      contentEditable
      suppressContentEditableWarning
      onBlur={e => onChange(e.currentTarget.textContent)}
    >
      {value}
    </Tag>
  );
};

// --- Pricing Grid -------------------------------------------------------------
const PricingGrid = ({ billing, tiers, appUrl, onUpdate, editMode }) => (
  <section className="section">
    <div className="container">
      <div className="pricing-grid">
        {tiers.map((plan, ti) => {
          const price = billing === 'annual' ? plan.annual : plan.monthly;

          function updateField(field, value) {
            if (!onUpdate) return;
            onUpdate(ti, field, value);
          }

          function updateFeature(fi, value) {
            if (!onUpdate) return;
            const features = [...(plan.features || [])];
            features[fi] = value;
            updateField('features', features);
          }

          function addFeature() {
            if (!onUpdate) return;
            updateField('features', [...(plan.features || []), 'New feature']);
          }

          function removeFeature(fi) {
            if (!onUpdate) return;
            updateField('features', plan.features.filter((_, i) => i !== fi));
          }

          return (
            <div key={plan.id || ti} className={"pricing-card gsap-scale-in" + (plan.highlight ? ' pricing-card--featured' : '')}>
              {plan.highlight && <div className="pricing-card__badge">Most popular</div>}

              <div className="pricing-card__header">
                {editMode ? (
                  <input value={plan.name} onChange={e => updateField('name', e.target.value)}
                    style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', fontFamily: 'inherit', width: '100%', padding: '2px 6px' }} />
                ) : (
                  <h3 className="pricing-card__name">{plan.name}</h3>
                )}
                {editMode ? (
                  <input value={plan.tagline} onChange={e => updateField('tagline', e.target.value)}
                    style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', width: '100%', padding: '2px 6px', marginTop: 4 }} />
                ) : (
                  <p className="pricing-card__tagline">{plan.tagline}</p>
                )}
              </div>

              <div className="pricing-card__price">
                {editMode ? (
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: '0.7em', color: 'rgba(244,239,230,.5)' }}>$</span>
                    <input
                      type="number"
                      value={billing === 'annual' ? plan.annual : plan.monthly}
                      onChange={e => updateField(billing === 'annual' ? 'annual' : 'monthly', Number(e.target.value))}
                      style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: '1.8em', fontWeight: 800, width: 80, fontFamily: 'inherit', padding: '0 4px' }}
                    />
                  </span>
                ) : (
                  <span className="pricing-card__amount">${price}</span>
                )}
                <span className="pricing-card__period">/ month</span>
              </div>

              {billing === 'annual' && (
                <p className="pricing-card__annual-note">Billed annually . Save {tiers.__savingPct || 20}%</p>
              )}

              {editMode ? (
                <input value={plan.projectsLabel} onChange={e => updateField('projectsLabel', e.target.value)}
                  style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', width: '100%', padding: '2px 6px', marginBottom: 8 }} />
              ) : (
                <p className="pricing-card__projects">{plan.projectsLabel}</p>
              )}

              <a href="/contact" className={"btn btn-lg" + (plan.highlight ? ' btn-primary' : ' btn-ghost')}>
                {plan.cta || 'Start free trial'} <IconArrowRight size={16} stroke={2} />
              </a>

              <ul className="pricing-card__features">
                {(plan.features || []).map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <span className="pricing-feature-check" style={{ flexShrink: 0 }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    {editMode ? (
                      <span style={{ display: 'flex', flex: 1, gap: 4, alignItems: 'center' }}>
                        <input value={f} onChange={e => updateFeature(fi, e.target.value)}
                          style={{ flex: 1, background: 'rgba(232,148,46,.05)', border: '1px dashed rgba(232,148,46,.3)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', padding: '1px 4px' }} />
                        <button onClick={() => removeFeature(fi)} style={{ background: 'none', border: 'none', color: '#e26d5c', cursor: 'pointer', fontSize: 14, flexShrink: 0 }}>?</button>
                      </span>
                    ) : f}
                  </li>
                ))}
                {editMode && (
                  <li>
                    <button onClick={addFeature}
                      style={{ background: 'none', border: '1px dashed rgba(232,148,46,.3)', borderRadius: 4, color: 'rgba(232,148,46,.7)', cursor: 'pointer', fontSize: 12, padding: '3px 10px', width: '100%', marginTop: 4 }}>
                      + Add feature
                    </button>
                  </li>
                )}
              </ul>

              {/* Edit mode: featured toggle */}
              {editMode && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,.08)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(244,239,230,.6)', cursor: 'pointer' }}>
                    <input type="checkbox" checked={!!plan.highlight} onChange={e => updateField('highlight', e.target.checked)} />
                    Mark as featured (Most popular)
                  </label>
                </div>
              )}
            </div>
          );
        })}

        {/* Add tier button in edit mode */}
        {editMode && onUpdate && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed rgba(232,148,46,.2)', borderRadius: 16, minHeight: 200 }}>
            <button onClick={() => onUpdate('__add')} style={{ background: 'none', border: 'none', color: 'rgba(232,148,46,.6)', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}>
              + Add Tier
            </button>
          </div>
        )}
      </div>

      {/* Enterprise block */}
      <EnterpriseBlock appUrl={appUrl} onUpdate={onUpdate} editMode={editMode} />
    </div>
  </section>
);

const EnterpriseBlock = ({ appUrl, onUpdate, editMode }) => {
  const { content, update } = useSiteContent();
  const ent = content.pricing?.enterprise || {};
  return (
    <div className="pricing-enterprise gsap-fade-up">
      <div className="pricing-enterprise__inner">
        <div className="pricing-enterprise__copy">
          {editMode ? (
            <input value={ent.heading || ''} onChange={e => update('pricing.enterprise.heading', e.target.value)}
              style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', fontFamily: 'inherit', width: '100%', marginBottom: 8, padding: '4px 8px' }} />
          ) : <h3>{ent.heading || 'Enterprise -- custom contract'}</h3>}
          {editMode ? (
            <textarea value={ent.body || ''} onChange={e => update('pricing.enterprise.body', e.target.value)} rows={3}
              style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', width: '100%', resize: 'vertical', padding: '4px 8px' }} />
          ) : <p>{ent.body || ''}</p>}
        </div>
        <a href="/contact" className="btn btn-ghost">{ent.cta || 'Contact sales'} <IconArrowRight size={16} stroke={2} /></a>
      </div>
    </div>
  );
};

// --- What's Included ----------------------------------------------------------
const PricingIncludes = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">What you get</span>
        <h2 className="h2">What's in Core. What Pro adds.</h2>
        <p className="section__sub">
          Core runs daily logs, RFIs, change orders, pay apps, schedule, and cost tracking.
          Pro adds the BIM viewer, Navisworks-class clash detection, AR walkthrough, and Monte Carlo scheduling.
          Both plans include Mason AI. No feature is locked behind an add-on.
        </p>
      </div>
      <div className="feature-grid">
        {[
          { icon: <IconBIM size={24} />, title: 'BIM viewer (Pro)', body: 'Browser-based IFC viewer with no Autodesk license needed. Upload your IFC file, federate models, detect clashes -- on any device, in any browser.' },
          { icon: <IconConcierge size={24} />, title: 'Clash detection (Pro)', body: 'BVH narrow-phase engine -- same algorithm class as Navisworks. Runs in the browser. Catches coordination conflicts before the crew is on site.' },
          { icon: <IconProjects size={24} />, title: 'Mason AI (all plans)', body: 'Core gets 60 queries per project per month. Pro gets unlimited. Same model on both -- drafts RFIs, summarizes issues, flags schedule risks. On every screen.' },
          { icon: <IconSchedule size={24} />, title: 'AIA pay applications (all plans)', body: 'G702/G703 pay apps built into the billing module. Change orders flow into the pay app automatically. No separate tool, no manual spreadsheet.' },
          { icon: <IconDocuments size={24} />, title: 'Monte Carlo scheduling (Pro)', body: 'P50/P80/P90 risk bands, 1,000-iteration Latin Hypercube simulation. Shows which tasks have the most schedule risk before the delay happens.' },
          { icon: <IconIssues size={24} />, title: 'Field app (all plans)', body: 'Android app built for offline use. Daily logs, photos, RFIs, and punch items logged on site -- syncs when you get back to signal.' },
        ].map((item, i) => (
          <div key={i} className="feature-card gsap-scale-in">
            <div className="feature-card__icon">{item.icon}</div>
            <h3 className="feature-card__title">{item.title}</h3>
            <p className="feature-card__body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Philosophy ---------------------------------------------------------------
const PricingPhilosophy = () => (
  <section className="section">
    <div className="container">
      <div className="split-sect gsap-slide-left">
        <div className="split-copy">
          <span className="eyebrow">Our pricing philosophy</span>
          <h2 className="h2">How does the price compare?</h2>
          <p className="split-copy__body">The enterprise stack for what Pro does -- Procore + Autodesk Construction Cloud + Navisworks + Bluebeam -- runs $27,500 to $44,000 a year. That's $2,300 to $3,700 a month before you count implementation and training.</p>
          <p className="split-copy__body">MASON Pro is $399/month. $4,788 a year. Same BVH clash detection algorithm as Navisworks, same IFC-native BIM viewer, same Monte Carlo simulation. Built for teams that can't justify a six-figure software bill.</p>
          <p className="split-copy__body">Core at $219 handles the PM fundamentals: RFIs, change orders, daily logs, pay applications, Gantt schedule, cost tracking. If you're running 1-3 jobs with a small crew, that's the right starting point.</p>
        </div>
        <div className="split-visual">
          <div className="pricing-philosophy-card">
            <div className="pp-card__row">
              <span className="pp-card__label">Enterprise stack (what Pro replaces)</span>
              <span className="pp-card__calc">Procore + ACC + Navisworks + Bluebeam = <strong className="red">$2,300–$3,700/mo</strong></span>
            </div>
            <div className="pp-card__divider" />
            <div className="pp-card__row">
              <span className="pp-card__label">MASON Pro</span>
              <span className="pp-card__calc">$399/mo · $4,788/yr · BIM + clash + AR + Monte Carlo = <strong className="accent">$399/mo</strong></span>
            </div>
            <div className="pp-card__note">Same BVH clash detection algorithm as Navisworks. Browser-based IFC viewer. Monte Carlo P50/P80/P90. No Autodesk license, no Bluebeam subscription, no per-seat fees.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Comparison Table ---------------------------------------------------------
const PricingCompareTable = ({ tiers }) => {
  const tierNames = (tiers || []).map(t => t.name);
  const [t0, t1, t2] = tierNames;

  const sections = [
    { heading: 'Core PM modules', rows: [
      { feature: 'Daily logs + photos (offline)', vals: [true, true, true] },
      { feature: 'RFI tracking with ball-in-court', vals: [true, true, true] },
      { feature: 'Change orders -- digital sign-off', vals: [true, true, true] },
      { feature: 'Gantt schedule + critical path', vals: [true, true, true] },
      { feature: 'Budget vs. actual cost tracking', vals: [true, true, true] },
      { feature: 'AIA G702/G703 pay applications', vals: [true, true, true] },
      { feature: 'Android app (works offline)', vals: [true, true, true] },
    ]},
    { heading: 'BIM, AR & advanced scheduling', rows: [
      { feature: 'BIM viewer -- browser-based IFC', vals: [false, true, true] },
      { feature: 'Clash detection (BVH engine / Navisworks-class)', vals: [false, true, true] },
      { feature: 'AR walkthrough (WebXR + iOS AR Quick Look)', vals: [false, true, true] },
      { feature: 'Monte Carlo scheduling P50/P80/P90', vals: [false, true, true] },
    ]},
    { heading: 'Mason AI', rows: [
      { feature: 'Mason AI access', vals: [true, true, true] },
      { feature: 'Queries per project/month', vals: ['60', 'Unlimited', 'Unlimited'] },
      { feature: 'RFI + issue drafting', vals: [true, true, true] },
      { feature: 'Schedule delay analysis', vals: [true, true, true] },
    ]},
    { heading: 'Team & projects', rows: [
      { feature: 'Users', vals: ['10', '25', '25'] },
      { feature: 'Active projects', vals: ['3', '10', '10'] },
      { feature: 'Price locked for life', vals: [false, false, true] },
    ]},
    { heading: 'Support', rows: [
      { feature: 'Support channel', vals: ['Email', 'Priority email', 'Direct line to founding team'] },
      { feature: 'Response time', vals: ['48 hours', '24 hours', 'Same day'] },
    ]},
  ];

  const renderCell = v => {
    if (v === true)  return <span className="compare-yes"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
    if (v === false) return <span className="compare-no">{"--"}</span>;
    return <span>{v}</span>;
  };

  return (
    <section className="section bg-subtle">
      <div className="container">
        <div className="section__header gsap-fade-up">
          <span className="eyebrow">Full comparison</span>
          <h2 className="h2">Core vs. Pro vs. Founding Partner.</h2>
        </div>
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Feature</th>
                {(tiers || []).map((t, i) => (
                  <th key={i} className={t.highlight ? 'compare-mason' : ''}>
                    {t.name}<br /><small>${t.monthly}/mo</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map(sec => (
                <React.Fragment key={sec.heading}>
                  <tr className="compare-section-heading"><td colSpan={1 + (tiers || []).length}>{sec.heading}</td></tr>
                  {sec.rows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.feature}</td>
                      {row.vals.map((v, vi) => (
                        <td key={vi} className={(tiers || [])[vi]?.highlight ? 'compare-mason' : ''}>{renderCell(v)}</td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// --- Trial Explainer ----------------------------------------------------------
const TrialExplainer = ({ appUrl, trialDays }) => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">Free trial</span>
        <h2 className="h2">14 days. Real job. We set it up.</h2>
        <p className="section__sub">No self-serve trial. We get on a call, pick your messiest active job, and set MASON up for your team. You use it for 14 days. At day 14, you decide.</p>
      </div>
      <div className="steps gsap-fade-up">
        {[
          { n: '01', heading: 'Book a call', body: 'A 30-minute call with Moeed, the founder. Pick one active job to run MASON on. No commitment, no sales pitch -- just a working session.' },
          { n: '02', heading: 'We set it up', body: 'We configure your account, import your project data, and get your foreman trained. Most teams are logging on site by day two.' },
          { n: '03', heading: 'Use the real product', body: `Daily logs, RFIs, change orders, pay apps -- everything running on your actual job. If you're on Pro, the BIM viewer and clash detection are live too.` },
          { n: '04', heading: 'Decide at day 14', body: `If the crew is using it, stay on. If not, we part ways. Your data exports as IFC + CSV. Nothing is locked in.` },
        ].map(s => (
          <div key={s.n} className="step">
            <div className="step__number">{s.n}</div>
            <div className="step__content">
              <h3 className="step__heading">{s.heading}</h3>
              <p className="step__body">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Pricing FAQ (CMS driven) -------------------------------------------------
const PricingFAQ = ({ faqItems }) => {
  const [open, setOpen] = React.useState(null);
  const items = faqItems || [];
  return (
    <section className="section">
      <div className="container">
        <div className="section__header gsap-fade-up">
          <span className="eyebrow">Pricing FAQ</span>
          <h2 className="h2">Questions about billing and plans.</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={"faq-item gsap-fade-up" + (open === i ? ' is-open' : '')}>
              <button className="faq-item__btn" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-item__chevron">{open === i ? '?' : '+'}</span>
              </button>
              {open === i && <div className="faq-item__body"><p>{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Pricing CTA --------------------------------------------------------------
const PricingCTA = ({ appUrl }) => (
  <section className="cta-band">
    <div className="container cta-band__inner">
      <h2 className="cta-band__heading">Ready to run MASON on a real job?</h2>
      <p className="cta-band__sub">Book a call. We'll pick one active project, set it up with you, and run a 14-day pilot. If the crew isn't using it by day 14, we shut it off.</p>
      <div className="cta-band__actions">
        <a href="/contact" className="btn btn-primary btn-lg">
          Book a pilot call <IconArrowRight size={18} stroke={2} />
        </a>
        <a href="/contact" className="btn btn-ghost btn-lg">Ask a question first</a>
      </div>
    </div>
  </section>
);

const EditModeBar = ({ editMode }) => {
  if (!editMode) return null;
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(232,148,46,.12)', borderBottom: '1px solid rgba(232,148,46,.3)',
      padding: '8px 24px', display: 'flex', alignItems: 'center', gap: 12,
      backdropFilter: 'blur(8px)'
    }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: '#e8942e' }}>
        Pricing Editor active &mdash; click any price, name, or feature to edit inline
      </span>
      <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(232,148,46,.6)' }}>
        Use the panel on the right to add / remove tiers and features
      </span>
    </div>
  );
};

// --- Root Pricing Page --------------------------------------------------------
const PricingPage = () => {
  // CMS hook -- works when cms.jsx loads before this component
  const cmsResult = useSiteContent();

  // Polling fallback -- cms.jsx may load AFTER this component mounts
  const [asyncContent, setAsyncContent] = React.useState(window.__masonContent || null);
  React.useEffect(() => {
    if (window.__masonContent) { setAsyncContent(window.__masonContent); return; }
    const t = setInterval(() => {
      if (window.__masonContent) { setAsyncContent(window.__masonContent); clearInterval(t); }
    }, 150);
    return () => clearInterval(t);
  }, []);

  const content  = (cmsResult && cmsResult.content) || asyncContent || {};
  const update   = (cmsResult && cmsResult.update)  || function() {};
  const editMode = typeof useEditMode === 'function' ? useEditMode() : false;
  const [billing, setBilling] = React.useState('monthly');

  const appUrl    = (content.site && content.site.appUrl)    || 'https://app.masononsite.com';
  const trialDays = (content.site && content.site.trialDays) || 30;
  const pricing   = content.pricing || {};
  // Always fall back to hard-coded defaults so the page renders before cms.jsx is ready
  const tiers     = (pricing.tiers && pricing.tiers.length)   ? pricing.tiers   : DEFAULT_PRICING.tiers;
  const faqItems  = (pricing.faq   && pricing.faq.length)     ? pricing.faq     : DEFAULT_PRICING.faq;

  // Handler for inline tier updates (edit mode only)
  function onTierUpdate(tierIdxOrAction, field, value) {
    if (tierIdxOrAction === '__add') {
      update('pricing.tiers', [...tiers, {
        id: 'tier-' + Date.now(), name: 'New Tier', tagline: 'Plan description',
        monthly: 0, annual: 0, projectsLabel: 'X active projects',
        highlight: false, cta: 'Start free trial', features: ['Feature 1', 'Feature 2']
      }]);
      return;
    }
    const next = tiers.map(function(t, i) { return i === tierIdxOrAction ? Object.assign({}, t, { [field]: value }) : t; });
    update('pricing.tiers', next);
  }

  React.useEffect(function() {
    // Safety net: if GSAP never loads, CSS .gsap-ready fallback makes elements visible
    if (typeof gsap === 'undefined') {
      document.body.classList.add('gsap-ready');
      return;
    }
    // Defer GSAP init so React has fully painted and content useEffect has settled
    var timer = setTimeout(function() {
      gsap.registerPlugin(ScrollTrigger);
      var stOpts = { start: 'top bottom', toggleActions: 'play none none none' };
      // Fade + slide up
      document.querySelectorAll('.gsap-fade-up').forEach(function(el) {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: Object.assign({ trigger: el }, stOpts)
        });
      });
      // Scale in -- pricing cards + feature cards
      document.querySelectorAll('.gsap-scale-in').forEach(function(el) {
        gsap.fromTo(el, { opacity: 0, scale: 0.92 }, {
          opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out',
          scrollTrigger: Object.assign({ trigger: el }, stOpts)
        });
      });
      // Force ScrollTrigger to recalculate positions after React render
      ScrollTrigger.refresh();
    }, 150);
    return function() {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(function(t) { t.kill(); });
    };
  }, []);

  return (
    <div className="site">
      <EditModeBar editMode={editMode} />
      <TrialBanner appUrl={appUrl} trialDays={trialDays} />
      <PricingHero />
      <div className="container" style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <BillingToggle billing={billing} onChange={setBilling} savingPct={pricing.annualSavingPct || DEFAULT_PRICING.annualSavingPct} />
      </div>
      <PricingGrid billing={billing} tiers={tiers} appUrl={appUrl} onUpdate={editMode ? onTierUpdate : null} editMode={editMode} />
      <PricingPhilosophy />
      <PricingIncludes />
      <PricingCompareTable tiers={tiers} />
      <TrialExplainer appUrl={appUrl} trialDays={trialDays} />
      <PricingFAQ faqItems={faqItems} />
      <PricingCTA appUrl={appUrl} />
    </div>
  );
}

export default PricingPage;
