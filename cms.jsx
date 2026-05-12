// cms.jsx — MASON Site Editor
// Activate: press Ctrl+E anywhere, or add ?edit to the URL
// Save Draft: Ctrl+S  |  Export JSON: click "Export"  |  Reset: clears localStorage draft
//
// Architecture:
//   window.__masonContent  = content.json (loaded by the page before this script runs)
//   localStorage key       = 'mason_cms_draft' (overrides for live edits)
//   useSiteContent()       = hook used by page components to read content + get updater
//   CMSPanel               = floating editor — included once per page

// ─── 1. Content Store ────────────────────────────────────────────────────────

const CMS_KEY = 'mason_cms_draft';

function getInitialContent() {
  const base = window.__masonContent || {};
  try {
    const draft = JSON.parse(localStorage.getItem(CMS_KEY) || 'null');
    if (draft) return deepMerge(base, draft);
  } catch(e) {}
  return base;
}

function deepMerge(base, override) {
  if (!override) return base;
  const out = { ...base };
  for (const k of Object.keys(override)) {
    if (Array.isArray(override[k])) {
      out[k] = override[k];
    } else if (override[k] && typeof override[k] === 'object' && !Array.isArray(base[k])) {
      out[k] = deepMerge(base[k] || {}, override[k]);
    } else {
      out[k] = override[k];
    }
  }
  return out;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Global reactive content store
const _listeners = [];
let _content = getInitialContent();

function getContent() { return _content; }

function setContent(updater) {
  _content = updater(_content);
  try { localStorage.setItem(CMS_KEY, JSON.stringify(_content)); } catch(e) {}
  _listeners.forEach(fn => fn(_content));
}

function subscribeContent(fn) {
  _listeners.push(fn);
  return () => { const i = _listeners.indexOf(fn); if (i > -1) _listeners.splice(i, 1); };
}

// Hook for page components
function useSiteContent() {
  const [content, setLocal] = React.useState(_content);
  React.useEffect(() => {
    setLocal(_content);
    return subscribeContent(c => setLocal({ ...c }));
  }, []);

  function update(path, value) {
    setContent(prev => {
      const next = deepClone(prev);
      setNestedValue(next, path, value);
      return next;
    });
  }

  return { content, update };
}

function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const next = keys[i + 1];
    if (cur[k] === undefined || cur[k] === null) {
      cur[k] = /^\d+$/.test(next) ? [] : {};
    }
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}

// Expose globally so pages can use without importing
Object.assign(window, { useSiteContent, getContent, setContent });

// ─── 2. Edit Mode State ───────────────────────────────────────────────────────

const _editListeners = [];
let _editMode = new URLSearchParams(window.location.search).has('edit');

function isEditMode() { return _editMode; }

function toggleEditMode() {
  _editMode = !_editMode;
  _editListeners.forEach(fn => fn(_editMode));
}

function useEditMode() {
  const [mode, setMode] = React.useState(_editMode);
  React.useEffect(() => {
    const unsub = () => { const i = _editListeners.indexOf(setMode); if (i > -1) _editListeners.splice(i, 1); };
    _editListeners.push(setMode);
    return unsub;
  }, []);
  return mode;
}

// Keyboard shortcut: Ctrl+E
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
    e.preventDefault();
    toggleEditMode();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 's' && _editMode) {
    e.preventDefault();
    exportJSON();
  }
});

function exportJSON() {
  const blob = new Blob([JSON.stringify(_content, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'content.json';
  a.click();
  URL.revokeObjectURL(url);
}

function resetToDefaults() {
  if (!confirm('Reset all draft changes and return to the published defaults?')) return;
  localStorage.removeItem(CMS_KEY);
  _content = window.__masonContent || {};
  _listeners.forEach(fn => fn(_content));
}

// ─── 3. CMS Panel UI ─────────────────────────────────────────────────────────

// Small reusable field components
const CField = ({ label, value, onChange, type = 'text', rows }) => (
  <div style={{ marginBottom: 10 }}>
    <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(244,239,230,.45)', marginBottom: 4 }}>{label}</label>
    {rows ? (
      <textarea
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        rows={rows}
        style={fieldStyle}
      />
    ) : (
      <input
        type={type}
        value={value ?? ''}
        onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
        style={fieldStyle}
      />
    )}
  </div>
);

const CToggle = ({ label, value, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
    <span style={{ fontSize: 13, color: 'rgba(244,239,230,.8)' }}>{label}</span>
    <button
      onClick={() => onChange(!value)}
      style={{
        width: 40, height: 22, borderRadius: 11,
        background: value ? '#e8942e' : 'rgba(255,255,255,.1)',
        border: 'none', cursor: 'pointer', position: 'relative', transition: 'background .2s'
      }}
    >
      <span style={{
        position: 'absolute', top: 3, left: value ? 20 : 3,
        width: 16, height: 16, borderRadius: '50%',
        background: '#fff', transition: 'left .2s'
      }} />
    </button>
  </div>
);

const CSection = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,.07)', marginBottom: 0 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', padding: '11px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#f4efe6', fontSize: 12, fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase' }}
      >
        {title}
        <span style={{ fontSize: 16, color: 'rgba(244,239,230,.4)', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .15s' }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '4px 16px 16px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

const fieldStyle = {
  width: '100%', padding: '7px 10px', background: 'rgba(255,255,255,.06)',
  border: '1px solid rgba(255,255,255,.12)', borderRadius: 6, color: '#f4efe6',
  fontSize: 12, fontFamily: 'Inter, sans-serif', outline: 'none', resize: 'vertical',
  boxSizing: 'border-box'
};

const btnStyle = (primary) => ({
  padding: '6px 14px', borderRadius: 6, border: primary ? 'none' : '1px solid rgba(255,255,255,.15)',
  background: primary ? '#e8942e' : 'rgba(255,255,255,.06)',
  color: primary ? '#07070a' : '#f4efe6', fontSize: 12, fontWeight: 600, cursor: 'pointer'
});

// ── Hero Section Editor
const HeroEditor = ({ content, update }) => (
  <CSection title="Hero" defaultOpen>
    <CField label="Eyebrow" value={content.hero?.eyebrow} onChange={v => update('hero.eyebrow', v)} />
    <CField label="Headline" value={content.hero?.headline} onChange={v => update('hero.headline', v)} rows={2} />
    <CField label="Accent word (highlighted in orange)" value={content.hero?.headlineAccent} onChange={v => update('hero.headlineAccent', v)} />
    <CField label="Subheadline" value={content.hero?.subheadline} onChange={v => update('hero.subheadline', v)} rows={3} />
    <CField label="Primary CTA text" value={content.hero?.ctaPrimary} onChange={v => update('hero.ctaPrimary', v)} />
    <CField label="Secondary CTA text" value={content.hero?.ctaSecondary} onChange={v => update('hero.ctaSecondary', v)} />
    <CField label="Meta 1 (badge)" value={content.hero?.meta1} onChange={v => update('hero.meta1', v)} />
    <CField label="Meta 2" value={content.hero?.meta2} onChange={v => update('hero.meta2', v)} />
  </CSection>
);

// ── Stats Editor
const StatsEditor = ({ content, update }) => {
  const stats = content.stats || [];
  function addStat() {
    update('stats', [...stats, { n: 'XX', label: 'New stat', note: '' }]);
  }
  function removeStat(i) {
    update('stats', stats.filter((_, idx) => idx !== i));
  }
  return (
    <CSection title="Stats Bar">
      {stats.map((s, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,239,230,.4)' }}>Stat {i + 1}</span>
            <button onClick={() => removeStat(i)} style={{ background: 'none', border: 'none', color: '#e26d5c', cursor: 'pointer', fontSize: 14 }}>×</button>
          </div>
          <CField label="Number / Value" value={s.n} onChange={v => { const a = [...stats]; a[i] = { ...a[i], n: v }; update('stats', a); }} />
          <CField label="Label" value={s.label} onChange={v => { const a = [...stats]; a[i] = { ...a[i], label: v }; update('stats', a); }} />
          <CField label="Note" value={s.note} onChange={v => { const a = [...stats]; a[i] = { ...a[i], note: v }; update('stats', a); }} />
        </div>
      ))}
      <button onClick={addStat} style={{ ...btnStyle(false), width: '100%', marginTop: 4 }}>+ Add Stat</button>
    </CSection>
  );
};

// ── Testimonials Editor
const TestimonialsEditor = ({ content, update }) => {
  const items = content.testimonials || [];
  function add() {
    update('testimonials', [...items, { quote: 'Enter quote…', name: 'Name', role: 'Role, Company' }]);
  }
  function remove(i) { update('testimonials', items.filter((_, idx) => idx !== i)); }
  return (
    <CSection title="Testimonials">
      {items.map((t, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,239,230,.4)' }}>Quote {i + 1}</span>
            <button onClick={() => remove(i)} style={{ background: 'none', border: 'none', color: '#e26d5c', cursor: 'pointer', fontSize: 14 }}>×</button>
          </div>
          <CField label="Quote" value={t.quote} onChange={v => { const a = [...items]; a[i] = { ...a[i], quote: v }; update('testimonials', a); }} rows={4} />
          <CField label="Name" value={t.name} onChange={v => { const a = [...items]; a[i] = { ...a[i], name: v }; update('testimonials', a); }} />
          <CField label="Role" value={t.role} onChange={v => { const a = [...items]; a[i] = { ...a[i], role: v }; update('testimonials', a); }} />
        </div>
      ))}
      <button onClick={add} style={{ ...btnStyle(false), width: '100%', marginTop: 4 }}>+ Add Testimonial</button>
    </CSection>
  );
};

// ── Pricing Editor (the main feature)
const PricingEditor = ({ content, update }) => {
  const tiers = content.pricing?.tiers || [];
  const [activeTier, setActiveTier] = React.useState(0);
  const tier = tiers[activeTier];

  function updateTier(i, field, value) {
    const next = deepClone(tiers);
    next[i][field] = value;
    update('pricing.tiers', next);
  }

  function updateFeature(tierIdx, featIdx, value) {
    const next = deepClone(tiers);
    next[tierIdx].features[featIdx] = value;
    update('pricing.tiers', next);
  }

  function addFeature(tierIdx) {
    const next = deepClone(tiers);
    next[tierIdx].features.push('New feature');
    update('pricing.tiers', next);
    setActiveTier(tierIdx);
  }

  function removeFeature(tierIdx, featIdx) {
    const next = deepClone(tiers);
    next[tierIdx].features.splice(featIdx, 1);
    update('pricing.tiers', next);
  }

  function addTier() {
    const next = deepClone(tiers);
    next.push({ id: 'new-tier', name: 'New Tier', tagline: 'Tagline', monthly: 0, annual: 0, projectsLabel: 'X active projects', highlight: false, cta: 'Start free trial', features: ['Feature 1'] });
    update('pricing.tiers', next);
    setActiveTier(next.length - 1);
  }

  function removeTier(i) {
    if (tiers.length <= 1) return alert('You need at least one pricing tier.');
    if (!confirm(`Delete the "${tiers[i].name}" tier?`)) return;
    const next = tiers.filter((_, idx) => idx !== i);
    update('pricing.tiers', next);
    setActiveTier(Math.max(0, i - 1));
  }

  function moveTier(i, dir) {
    const next = deepClone(tiers);
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    update('pricing.tiers', next);
    setActiveTier(j);
  }

  function setFeatured(i) {
    const next = deepClone(tiers);
    next.forEach((t, idx) => { t.highlight = idx === i; });
    update('pricing.tiers', next);
  }

  return (
    <CSection title="Pricing Tiers" defaultOpen>
      {/* Tier tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
        {tiers.map((t, i) => (
          <button key={i} onClick={() => setActiveTier(i)} style={{
            padding: '5px 10px', borderRadius: 6, border: '1px solid',
            borderColor: activeTier === i ? '#e8942e' : 'rgba(255,255,255,.12)',
            background: activeTier === i ? 'rgba(232,148,46,.12)' : 'rgba(255,255,255,.04)',
            color: activeTier === i ? '#e8942e' : 'rgba(244,239,230,.7)',
            fontSize: 11, fontWeight: 600, cursor: 'pointer'
          }}>
            {t.highlight ? '★ ' : ''}{t.name}
          </button>
        ))}
        <button onClick={addTier} style={{ padding: '5px 10px', borderRadius: 6, border: '1px dashed rgba(255,255,255,.2)', background: 'none', color: 'rgba(244,239,230,.4)', fontSize: 11, cursor: 'pointer' }}>+ Tier</button>
      </div>

      {tier && (
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '12px' }}>
          {/* Tier controls */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
            <button onClick={() => moveTier(activeTier, -1)} style={btnStyle(false)}>↑</button>
            <button onClick={() => moveTier(activeTier, 1)} style={btnStyle(false)}>↓</button>
            <button onClick={() => setFeatured(activeTier)} style={{ ...btnStyle(false), borderColor: tier.highlight ? '#e8942e' : undefined, color: tier.highlight ? '#e8942e' : undefined }}>
              {tier.highlight ? '★ Featured' : '☆ Set Featured'}
            </button>
            <button onClick={() => removeTier(activeTier)} style={{ ...btnStyle(false), color: '#e26d5c', borderColor: '#e26d5c', marginLeft: 'auto' }}>Delete tier</button>
          </div>

          <CField label="Tier Name" value={tier.name} onChange={v => updateTier(activeTier, 'name', v)} />
          <CField label="Tagline" value={tier.tagline} onChange={v => updateTier(activeTier, 'tagline', v)} />
          <CField label="Projects label" value={tier.projectsLabel} onChange={v => updateTier(activeTier, 'projectsLabel', v)} />
          <CField label="CTA button text" value={tier.cta} onChange={v => updateTier(activeTier, 'cta', v)} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <CField label="Monthly price ($)" value={tier.monthly} onChange={v => updateTier(activeTier, 'monthly', Number(v))} type="number" />
            <CField label="Annual price ($)" value={tier.annual} onChange={v => updateTier(activeTier, 'annual', Number(v))} type="number" />
          </div>

          {/* Features list */}
          <div style={{ marginTop: 4 }}>
            <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(244,239,230,.45)', marginBottom: 8 }}>
              Features ({tier.features?.length || 0})
            </label>
            {(tier.features || []).map((f, fi) => (
              <div key={fi} style={{ display: 'flex', gap: 6, marginBottom: 5, alignItems: 'center' }}>
                <input
                  type="text"
                  value={f}
                  onChange={e => updateFeature(activeTier, fi, e.target.value)}
                  style={{ ...fieldStyle, flex: 1, marginBottom: 0 }}
                />
                <button onClick={() => removeFeature(activeTier, fi)} style={{ background: 'none', border: 'none', color: '#e26d5c', cursor: 'pointer', fontSize: 16, flexShrink: 0 }}>×</button>
              </div>
            ))}
            <button onClick={() => addFeature(activeTier)} style={{ ...btnStyle(false), width: '100%', marginTop: 6 }}>+ Add Feature</button>
          </div>
        </div>
      )}

      {/* Enterprise block */}
      <div style={{ marginTop: 16 }}>
        <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(244,239,230,.45)', marginBottom: 8 }}>Enterprise Block</label>
        <CField label="Heading" value={content.pricing?.enterprise?.heading} onChange={v => update('pricing.enterprise.heading', v)} />
        <CField label="Body" value={content.pricing?.enterprise?.body} onChange={v => update('pricing.enterprise.body', v)} rows={3} />
        <CField label="CTA text" value={content.pricing?.enterprise?.cta} onChange={v => update('pricing.enterprise.cta', v)} />
      </div>
    </CSection>
  );
};

// ── Pricing FAQ Editor
const PricingFAQEditor = ({ content, update }) => {
  const faqs = content.pricing?.faq || [];
  function add() { update('pricing.faq', [...faqs, { q: 'Question?', a: 'Answer.' }]); }
  function remove(i) { update('pricing.faq', faqs.filter((_, idx) => idx !== i)); }
  function edit(i, field, v) { const a = deepClone(faqs); a[i][field] = v; update('pricing.faq', a); }
  return (
    <CSection title="Pricing FAQ">
      {faqs.map((f, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,239,230,.4)' }}>FAQ {i + 1}</span>
            <button onClick={() => remove(i)} style={{ background: 'none', border: 'none', color: '#e26d5c', cursor: 'pointer', fontSize: 14 }}>×</button>
          </div>
          <CField label="Question" value={f.q} onChange={v => edit(i, 'q', v)} />
          <CField label="Answer" value={f.a} onChange={v => edit(i, 'a', v)} rows={3} />
        </div>
      ))}
      <button onClick={add} style={{ ...btnStyle(false), width: '100%', marginTop: 4 }}>+ Add FAQ Item</button>
    </CSection>
  );
};

// ── Sections Visibility Editor
const SectionsEditor = ({ content, update }) => {
  const vis = content.sections || {};
  const SECTION_LABELS = {
    personas: 'Personas (3 audiences)', bimProof: 'BIM Proof section',
    conciergeSpotlight: 'Concierge Spotlight', workflow: 'Workflow / Surfaces',
    surfaces: 'Surfaces (desk/mobile/Android)', howItWorks: 'How It Works (6 steps)',
    compareOldWay: 'Compare Old Way', socialProof: 'Social Proof / Testimonials',
    pricingTeaser: 'Pricing Teaser', homeFaq: 'Homepage FAQ', trustExtended: 'Security & Trust'
  };
  return (
    <CSection title="Section Visibility">
      <p style={{ fontSize: 11, color: 'rgba(244,239,230,.4)', marginBottom: 12, lineHeight: 1.5 }}>Toggle sections on/off on the homepage. Refresh after saving.</p>
      {Object.entries(SECTION_LABELS).map(([key, label]) => (
        <CToggle key={key} label={label} value={vis[key] !== false} onChange={v => update(`sections.${key}`, v)} />
      ))}
    </CSection>
  );
};

// ── Site Settings Editor
const SiteSettingsEditor = ({ content, update }) => (
  <CSection title="Site Settings">
    <CField label="App URL (where Sign In links go)" value={content.site?.appUrl} onChange={v => update('site.appUrl', v)} />
    <CField label="Support email" value={content.site?.supportEmail} onChange={v => update('site.supportEmail', v)} />
    <CField label="Trial days" value={content.site?.trialDays} onChange={v => update('site.trialDays', Number(v))} type="number" />
  </CSection>
);

// ─── 4. CMS Panel Root ────────────────────────────────────────────────────────

const CMSPanel = () => {
  const editMode = useEditMode();
  const { content, update } = useSiteContent();
  const [saved, setSaved] = React.useState(false);

  if (!editMode) return (
    <button
      onClick={toggleEditMode}
      title="Open Site Editor (Ctrl+E)"
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
        width: 44, height: 44, borderRadius: '50%',
        background: 'rgba(14,15,18,.85)', border: '1px solid rgba(232,148,46,.35)',
        color: '#e8942e', fontSize: 18, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)', boxShadow: '0 4px 20px rgba(0,0,0,.4)'
      }}
    >✏</button>
  );

  function handleExport() {
    exportJSON();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div style={{
      position: 'fixed', top: 0, right: 0, bottom: 0, width: 340,
      background: '#0e0f14', borderLeft: '1px solid rgba(255,255,255,.08)',
      zIndex: 9999, display: 'flex', flexDirection: 'column',
      fontFamily: 'Inter, sans-serif', boxShadow: '-8px 0 40px rgba(0,0,0,.5)'
    }}>
      {/* Header */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', gap: 10, background: '#0a0b0f' }}>
        <img src="assets/mason_mark_grid.png" alt="" style={{ width: 22, height: 22 }} />
        <span style={{ fontSize: 13, fontWeight: 700, color: '#f4efe6', letterSpacing: '.03em', flex: 1 }}>MASON Site Editor</span>
        <button onClick={toggleEditMode} style={{ background: 'none', border: 'none', color: 'rgba(244,239,230,.4)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>
      </div>

      {/* Action bar */}
      <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', gap: 8, background: '#0c0d11' }}>
        <button onClick={handleExport} style={{ ...btnStyle(true), flex: 1 }}>
          {saved ? '✓ Saved!' : '↓ Export content.json'}
        </button>
        <button onClick={resetToDefaults} style={{ ...btnStyle(false) }} title="Reset draft to defaults">↺</button>
      </div>

      <div style={{ fontSize: 11, color: 'rgba(244,239,230,.35)', padding: '6px 16px', background: '#0c0d11', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
        Ctrl+S to export • Ctrl+E to close • Changes auto-save as draft
      </div>

      {/* Scrollable sections */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <SiteSettingsEditor content={content} update={update} />
        <HeroEditor content={content} update={update} />
        <StatsEditor content={content} update={update} />
        <TestimonialsEditor content={content} update={update} />
        <PricingEditor content={content} update={update} />
        <PricingFAQEditor content={content} update={update} />
        <SectionsEditor content={content} update={update} />
      </div>

      {/* Footer hint */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(255,255,255,.06)', fontSize: 10, color: 'rgba(244,239,230,.3)', lineHeight: 1.5 }}>
        After exporting, replace content.json in your Vercel project and redeploy to publish changes.
      </div>
    </div>
  );
};

// ─── 5. Boot ──────────────────────────────────────────────────────────────────

// Load content.json then mount the CMS panel
async function bootCMS() {
  try {
    const r = await fetch('content.json?v=' + Date.now());
    if (r.ok) {
      window.__masonContent = await r.json();
      // Re-merge with any saved draft
      _content = getInitialContent();
      _listeners.forEach(fn => fn(_content));
      // Signal readiness for non-hook components that couldn't use useSiteContent
      window.__masonContentReady = true;
    }
  } catch(e) {
    console.warn('[MASON CMS] Could not load content.json, using defaults.');
  }

  // Mount panel into a dedicated root
  const el = document.createElement('div');
  el.id = 'mason-cms-root';
  document.body.appendChild(el);
  ReactDOM.createRoot(el).render(React.createElement(CMSPanel));
}

bootCMS();
