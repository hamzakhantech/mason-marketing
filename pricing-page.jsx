// pricing-page.jsx — Full Pricing page, CMS-driven with inline editing

// ─── Default content (rendered immediately; CMS overrides when loaded) ─────────
const DEFAULT_PRICING = {
  annualSavingPct: 20,
  tiers: [
    {
      id: 'starter', name: 'Starter',
      tagline: 'For small teams running 1–3 concurrent projects.',
      monthly: 49, annual: 39,
      projectsLabel: '3 active projects',
      highlight: false, cta: 'Start free trial',
      features: [
        'All 12 modules included',
        'Unlimited team members per project',
        'BIM viewer (IFC 2x3 + IFC4)',
        'AR on Android',
        'Interactive Gantt + CPM schedule',
        'RFI management',
        'Issues register',
        'Daily logs (offline)',
        'Cost control + FAC',
        'AI Concierge (60 queries/project/mo)',
        '100 GB document storage',
        'Email support (48-hr response)',
      ]
    },
    {
      id: 'professional', name: 'Professional',
      tagline: 'For growing firms running multiple active projects.',
      monthly: 149, annual: 119,
      projectsLabel: '15 active projects',
      highlight: true, cta: 'Start free trial',
      features: [
        'Everything in Starter',
        'Unlimited AI Concierge queries',
        'Full REST API access',
        '20 webhook endpoints',
        'Google Drive + OneDrive sync',
        'Xero + QuickBooks export',
        '500 GB document storage',
        'Onboarding call included',
        'Migration assistance',
        'Priority email (12-hr response)',
        '99.9% uptime SLA',
      ]
    },
    {
      id: 'scale', name: 'Scale',
      tagline: 'For large programmes and enterprise accounts.',
      monthly: 349, annual: 279,
      projectsLabel: 'Unlimited active projects',
      highlight: false, cta: 'Start free trial',
      features: [
        'Everything in Professional',
        'SAML 2.0 SSO',
        'Custom branding',
        'Unlimited webhooks',
        'Unlimited document storage',
        'Dedicated Slack / Teams support',
        'Dedicated onboarding consultant',
        '4-hour response SLA',
        'Annual business review',
        'Custom data residency on request',
      ]
    },
  ],
  faq: [
    { q: 'What counts as a project?', a: 'A project is any active construction project in your MASON account. Archived projects do not count toward your limit.' },
    { q: 'Can I add unlimited team members?', a: 'Yes. Every plan includes unlimited team members per project at no extra cost. There are no per-seat fees anywhere in the product.' },
    { q: 'What happens when my trial ends?', a: 'At day 30 you choose a plan. Your data stays exactly where it is — no migration, no downtime, no re-importing anything.' },
    { q: 'Do you offer annual billing?', a: 'Yes. Annual billing saves 20% compared to monthly. You can switch between monthly and annual at any time from your account settings.' },
    { q: 'Can I change plans later?', a: 'Yes. You can upgrade, downgrade, or cancel at any time from your account settings. Upgrades are prorated to the day.' },
    { q: 'Is there a setup fee?', a: 'No. There are no setup fees, onboarding fees, or implementation fees. The monthly price is the only cost.' },
  ],
};

// ─── Trial Banner ──────────────────────────────────────────────────────────────
const TrialBanner = ({ appUrl, trialDays }) => (
  <div className="trial-banner">
    <span className="trial-banner__badge">{trialDays || 30}-day free trial</span>
    <span className="trial-banner__text">
      Every plan starts with {trialDays || 30} days fully unlocked — all features, all modules, unlimited team members. No credit card required.
    </span>
    <a href={`${appUrl}/register`} className="trial-banner__cta">
      Start free <IconArrowRight size={14} stroke={2} />
    </a>
  </div>
);

// ─── Pricing Hero ──────────────────────────────────────────────────────────────
const PricingHero = () => (
  <section className="page-hero">
    <div className="page-hero__glow" aria-hidden="true" />
    <div className="container page-hero__inner">
      <span className="eyebrow gsap-fade-up">Pricing</span>
      <h1 className="display gsap-fade-up">
        Flat pricing. No surprises.<br />
        <span className="accent">No seat fees.</span>
      </h1>
      <p className="lede gsap-fade-up">
        MASON is priced per project — not per user. Add your entire team, every subcontractor,
        every reviewer. The price doesn't change. Every plan includes every module. No feature gates.
        No add-ons required to make the product useful.
      </p>
    </div>
  </section>
);

// ─── Billing Toggle ───────────────────────────────────────────────────────────
const BillingToggle = ({ billing, onChange, savingPct }) => (
  <div className="billing-toggle gsap-fade-up">
    <button className={"billing-toggle__btn" + (billing === 'monthly' ? ' is-active' : '')} onClick={() => onChange('monthly')}>Monthly</button>
    <button className={"billing-toggle__btn" + (billing === 'annual' ? ' is-active' : '')} onClick={() => onChange('annual')}>
      Annual <span className="billing-toggle__badge">Save {savingPct || 20}%</span>
    </button>
  </div>
);

// ─── Editable text helper (used in inline edit mode) ─────────────────────────
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

// ─── Pricing Grid ─────────────────────────────────────────────────────────────
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
                <span className="pricing-card__period">/ project / month</span>
              </div>

              {billing === 'annual' && (
                <p className="pricing-card__annual-note">Billed annually · Save {tiers.__savingPct || 20}%</p>
              )}

              {editMode ? (
                <input value={plan.projectsLabel} onChange={e => updateField('projectsLabel', e.target.value)}
                  style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', width: '100%', padding: '2px 6px', marginBottom: 8 }} />
              ) : (
                <p className="pricing-card__projects">{plan.projectsLabel}</p>
              )}

              <a href={`${appUrl}/register`} className={"btn btn-lg" + (plan.highlight ? ' btn-primary' : ' btn-ghost')}>
                {plan.cta || 'Start free trial'} <IconArrowRight size={16} stroke={2} />
              </a>

              <ul className="pricing-card__features">
                {(plan.features || []).map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <span className="pricing-feature-check" style={{ flexShrink: 0 }}>✓</span>
                    {editMode ? (
                      <span style={{ display: 'flex', flex: 1, gap: 4, alignItems: 'center' }}>
                        <input value={f} onChange={e => updateFeature(fi, e.target.value)}
                          style={{ flex: 1, background: 'rgba(232,148,46,.05)', border: '1px dashed rgba(232,148,46,.3)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', padding: '1px 4px' }} />
                        <button onClick={() => removeFeature(fi)} style={{ background: 'none', border: 'none', color: '#e26d5c', cursor: 'pointer', fontSize: 14, flexShrink: 0 }}>×</button>
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
  const { content, update } = typeof useSiteContent === 'function' ? useSiteContent() : { content: {}, update: () => {} };
  const ent = content.pricing?.enterprise || {};
  return (
    <div className="pricing-enterprise gsap-fade-up">
      <div className="pricing-enterprise__inner">
        <div className="pricing-enterprise__copy">
          {editMode ? (
            <input value={ent.heading || ''} onChange={e => update('pricing.enterprise.heading', e.target.value)}
              style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', fontFamily: 'inherit', width: '100%', marginBottom: 8, padding: '4px 8px' }} />
          ) : <h3>{ent.heading || 'Enterprise — custom contract'}</h3>}
          {editMode ? (
            <textarea value={ent.body || ''} onChange={e => update('pricing.enterprise.body', e.target.value)} rows={3}
              style={{ background: 'rgba(232,148,46,.07)', border: '1px dashed rgba(232,148,46,.4)', borderRadius: 4, color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', width: '100%', resize: 'vertical', padding: '4px 8px' }} />
          ) : <p>{ent.body || ''}</p>}
        </div>
        <a href="contact.html" className="btn btn-ghost">{ent.cta || 'Contact sales'} <IconArrowRight size={16} stroke={2} /></a>
      </div>
    </div>
  );
};

// ─── What's Included ──────────────────────────────────────────────────────────
const PricingIncludes = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">What you get</span>
        <h2 className="h2">Every plan. Every module. No exceptions.</h2>
        <p className="section__sub">
          We made a deliberate decision: no feature gates. The smallest project on the Starter plan
          has access to the BIM viewer, the AI Concierge, and every module. The only differences
          between plans are the number of projects you can run and the support and integration level.
        </p>
      </div>
      <div className="feature-grid">
        {[
          { icon: <IconBIM size={24} />, title: 'BIM viewer — everyone', body: 'A Starter-plan project on a $3M residential development deserves the same BIM capability as a Scale-plan megaproject. Every subscriber gets the full IFC viewer, federation, clash detection, and AR.' },
          { icon: <IconConcierge size={24} />, title: 'AI Concierge — everyone', body: 'Starter plans get 60 AI queries per project per month — enough for daily use on a small project. Professional and Scale are unlimited. The intelligence is the same model on all plans.' },
          { icon: <IconProjects size={24} />, title: 'Unlimited team members', body: 'Add your whole team, all your subcontractors, your client, the design team. No seat fees. On a $20M project with 40 subcontractors, you\'re not paying more because you have 200 users.' },
          { icon: <IconSchedule size={24} />, title: 'Full Gantt + CPM', body: 'The interactive Gantt chart with critical path method analysis is standard on every plan. A schedule is fundamental to managing a construction project — not a premium feature.' },
          { icon: <IconDocuments size={24} />, title: 'Document control', body: 'Version-controlled documents with IFC approval workflow, permission-based access, and full-text search are on every plan. File storage is 100 GB on Starter, 500 GB on Professional, unlimited on Scale.' },
          { icon: <IconIssues size={24} />, title: 'Issues + RFIs + Submittals', body: 'The three core quality and communication modules are fully featured on every plan. No limits on open items, no restrictions on attachments, no paywalling of the audit trail export.' },
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

// ─── Philosophy ───────────────────────────────────────────────────────────────
const PricingPhilosophy = () => (
  <section className="section">
    <div className="container">
      <div className="split-sect gsap-slide-left">
        <div className="split-copy">
          <span className="eyebrow">Our pricing philosophy</span>
          <h2 className="h2">Why per-project, not per-user?</h2>
          <p className="split-copy__body">Construction project management software is typically priced per user — which creates a perverse incentive: the better you collaborate (more stakeholders, more subcontractors, more visibility), the more you pay. We think that's backwards.</p>
          <p className="split-copy__body">A project is a project. It has a scope, a budget, and a team. The overhead of managing it with MASON is fixed, regardless of whether you have 10 team members or 100. So we charge per project — and let you add everyone who needs access.</p>
          <p className="split-copy__body">The result: project managers add subcontractors, consultants, and owner's representatives without worrying about the bill increasing. More visibility. Better outcomes. No gaming the system.</p>
        </div>
        <div className="split-visual">
          <div className="pricing-philosophy-card">
            <div className="pp-card__row">
              <span className="pp-card__label">Procore model</span>
              <span className="pp-card__calc">$399/mo base + $19/user × 50 users = <strong className="red">$1,349/mo</strong> per project</span>
            </div>
            <div className="pp-card__divider" />
            <div className="pp-card__row">
              <span className="pp-card__label">MASON model</span>
              <span className="pp-card__calc">$149/mo per project, unlimited users = <strong className="accent">$149/mo</strong> per project</span>
            </div>
            <div className="pp-card__note">On a 15-project Professional account, MASON costs $2,235/mo. The equivalent Procore stack would be $20,235/mo+.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Comparison Table ─────────────────────────────────────────────────────────
const PricingCompareTable = ({ tiers }) => {
  const tierNames = (tiers || []).map(t => t.name);
  const [t0, t1, t2] = tierNames;

  const sections = [
    { heading: 'Core modules', rows: [
      { feature: 'BIM viewer (IFC 2x3 + IFC4)', vals: [true, true, true] },
      { feature: 'AR on Android', vals: [true, true, true] },
      { feature: 'Interactive Gantt + CPM', vals: [true, true, true] },
      { feature: 'RFI management', vals: [true, true, true] },
      { feature: 'Issues register', vals: [true, true, true] },
      { feature: 'Daily logs (offline)', vals: [true, true, true] },
      { feature: 'Cost control + FAC', vals: [true, true, true] },
      { feature: 'Document control', vals: [true, true, true] },
      { feature: 'Submittals register', vals: [true, true, true] },
      { feature: 'Report generation', vals: [true, true, true] },
      { feature: 'Android native app', vals: [true, true, true] },
    ]},
    { heading: 'AI Concierge', rows: [
      { feature: 'AI Concierge access', vals: [true, true, true] },
      { feature: 'Queries per project/month', vals: ['60', 'Unlimited', 'Unlimited'] },
      { feature: 'Language support', vals: ['8 languages', '8 languages', '8 languages'] },
      { feature: 'RFI / NCR drafting', vals: [true, true, true] },
      { feature: 'Schedule delay analysis', vals: [true, true, true] },
    ]},
    { heading: 'Projects & team', rows: [
      { feature: 'Concurrent projects', vals: ['3', '15', 'Unlimited'] },
      { feature: 'Team members per project', vals: ['Unlimited', 'Unlimited', 'Unlimited'] },
      { feature: 'Document storage', vals: ['100 GB', '500 GB', 'Unlimited'] },
      { feature: 'File size per upload', vals: ['500 MB', '2 GB', '5 GB'] },
    ]},
    { heading: 'Integrations', rows: [
      { feature: 'REST API', vals: ['Read-only', 'Full', 'Full + custom limits'] },
      { feature: 'Webhooks', vals: [false, '20 endpoints', 'Unlimited'] },
      { feature: 'Google Drive / OneDrive', vals: [false, true, true] },
      { feature: 'Xero + QuickBooks export', vals: [false, true, true] },
      { feature: 'SAML 2.0 SSO', vals: [false, false, true] },
      { feature: 'Custom branding', vals: [false, false, true] },
    ]},
    { heading: 'Support', rows: [
      { feature: 'Support channel', vals: ['Email', 'Priority email', 'Dedicated Slack/Teams'] },
      { feature: 'Response time', vals: ['48 hours', '12 hours', '4 hours'] },
      { feature: 'Onboarding call', vals: [false, true, 'Dedicated consultant'] },
      { feature: 'Migration assistance', vals: [false, true, true] },
      { feature: 'Uptime SLA', vals: ['99.5%', '99.9%', '99.9% + DPA'] },
      { feature: 'Annual business review', vals: [false, false, true] },
    ]},
  ];

  const renderCell = v => {
    if (v === true)  return <span className="compare-yes">✓</span>;
    if (v === false) return <span className="compare-no">{"—"}</span>;
    return <span>{v}</span>;
  };

  return (
    <section className="section bg-subtle">
      <div className="container">
        <div className="section__header gsap-fade-up">
          <span className="eyebrow">Full comparison</span>
          <h2 className="h2">Every feature, every plan.</h2>
        </div>
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Feature</th>
                {(tiers || []).map((t, i) => (
                  <th key={i} className={t.highlight ? 'compare-mason' : ''}>
                    {t.name}<br /><small>${t.monthly}/project/mo</small>
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

// ─── Trial Explainer ──────────────────────────────────────────────────────────
const TrialExplainer = ({ appUrl, trialDays }) => (
  <section className="section">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">Free trial</span>
        <h2 className="h2">{trialDays || 30} days. Full access. No card.</h2>
        <p className="section__sub">We don't believe in trial versions. The free trial is the real product — every feature, every module, every integration — for {trialDays || 30} days.</p>
      </div>
      <div className="steps gsap-fade-up">
        {[
          { n: '01', heading: 'Sign up', body: 'Create your organisation account. No credit card. Takes 60 seconds.' },
          { n: '02', heading: 'Import your project', body: 'Upload your IFC, import your schedule CSV, and invite your team. The onboarding wizard walks you through each step. Most teams are up and running in under an hour.' },
          { n: '03', heading: 'Use the real product', body: `All 12 modules. Unlimited team members. AI Concierge without query limits. You're not using a demo environment — you're using the same system paying customers use.` },
          { n: '04', heading: 'Choose a plan', body: `At day ${trialDays || 30}, choose a plan based on how many projects you're running. Your data stays exactly where it is. There's no migration.` },
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

// ─── Pricing FAQ (CMS driven) ─────────────────────────────────────────────────
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
                <span className="faq-item__chevron">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-item__body"><p>{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Pricing CTA ──────────────────────────────────────────────────────────────
const PricingCTA = ({ appUrl }) => (
  <section className="cta-band">
    <div className="container cta-band__inner">
      <h2 className="cta-band__heading">Start with 30 days free.</h2>
      <p className="cta-band__sub">No credit card. No sales call required. Import your IFC, invite your team, and see MASON running on your actual project in under an hour.</p>
      <div className="cta-band__actions">
        <a href={`${appUrl}/register`} className="btn btn-primary btn-lg">
          Create free account <IconArrowRight size={18} stroke={2} />
        </a>
        <a href="contact.html" className="btn btn-ghost btn-lg">Talk to us first</a>
      </div>
    </div>
  </section>
);

// ─── Edit Mode Toolbar (floats above the pricing grid) ────────────────────────
const EditModeBar = ({ editMode, onToggle }) => {
  if (!editMode) return null;
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(232,148,46,.12)', borderBottom: '1px solid rgba(232,148,46,.3)',
      padding: '8px 24px', display: 'flex', alignItems: 'center', gap: 12,
      backdropFilter: 'blur(8px)'
    }}>

// ─── Edit Mode Toolbar (floats above the pricing grid) ────────────────────────
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

// ─── Root Pricing Page ────────────────────────────────────────────────────────
const PricingPage = () => {
  // CMS hook — works when cms.jsx loads before this component
  const hasCmsHook = typeof useSiteContent === 'function';
  const cmsResult  = hasCmsHook ? useSiteContent() : null;

  // Polling fallback — cms.jsx may load AFTER this component mounts
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
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    function animateEls(selector, vars) {
      document.querySelectorAll(selector).forEach(function(el) {
        gsap.fromTo(el, { opacity: 0, y: vars.y || 0 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
      });
    }
    animateEls('.gsap-fade-up', { y: 40 });
    return function() { ScrollTrigger.getAll().forEach(function(t) { t.kill(); }); };
  }, []);

  return (
    <div className="site">
      <Header />
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
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(PricingPage));
