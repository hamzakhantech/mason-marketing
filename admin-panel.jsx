// MASON -- Admin CMS  (served only at /admin/user-dashboard/adminpanel)
// Protected by /api/admin/* JWT session. Never loaded on public pages.

const { useState, useEffect, useCallback } = React;

// --- Helpers -----------------------------------------------------------------

function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

function setNested(obj, path, value) {
  const keys = path.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const next = keys[i + 1];
    if (cur[k] == null) cur[k] = /^\d+$/.test(next) ? [] : {};
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}

function ensureShape(c) {
  const d = deepClone(c || {});
  d.site         = d.site || {};
  d.hero         = d.hero || {};
  d.stats        = Array.isArray(d.stats) ? d.stats : [];
  d.testimonials = Array.isArray(d.testimonials) ? d.testimonials : [];
  d.pricing      = d.pricing || { tiers: [], faq: [], enterprise: {} };
  d.pricing.tiers = Array.isArray(d.pricing.tiers) ? d.pricing.tiers : [];
  d.pricing.faq   = Array.isArray(d.pricing.faq)   ? d.pricing.faq   : [];
  d.pricing.enterprise = d.pricing.enterprise || {};
  d.sections     = d.sections     || {};
  d.branding     = d.branding     || {};
  d.seo          = d.seo          || { global: {}, pages: {}, handlers: {}, siteUrl: 'https://masononsite.com' };
  d.seo.global   = d.seo.global   || {};
  d.seo.pages    = d.seo.pages    || {};
  d.seo.handlers = d.seo.handlers || {};
  d.analytics    = d.analytics    || {};
  d.payments     = d.payments     || {};
  d.integrations = d.integrations || {};
  d.social       = d.social       || {};
  d.livechat     = d.livechat     || {};
  return d;
}

async function apiJson(path, options) {
  options = options || {};
  const optHeaders = options.headers || {};
  const rest = Object.assign({}, options);
  delete rest.headers;
  const headers = Object.assign({}, optHeaders);
  if (rest.body != null && headers['Content-Type'] == null) {
    headers['Content-Type'] = 'application/json';
  }
  const res = await fetch(path, Object.assign({ credentials: 'include' }, rest, { headers: headers }));
  const data = await res.json().catch(function() { return {}; });
  if (!res.ok) {
    const msg = data.error || data.hint || data.message || res.statusText;
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(data));
  }
  return data;
}

function exportBlob(content) {
  const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'content.json'; a.click();
  URL.revokeObjectURL(url);
}

// --- Small UI atoms -----------------------------------------------------------

function Field({ label, value, onChange, rows, type, placeholder }) {
  return (
    <div className="adm-field">
      <label>{label}</label>
      {rows ? (
        <textarea
          value={value != null ? value : ''}
          placeholder={placeholder}
          onChange={function(e) { onChange(e.target.value); }}
          rows={rows}
        />
      ) : (
        <input
          type={type || 'text'}
          value={value != null ? value : ''}
          placeholder={placeholder}
          onChange={function(e) { onChange(type === 'number' ? Number(e.target.value) : e.target.value); }}
        />
      )}
    </div>
  );
}

function ToggleRow({ label, value, onChange, sublabel }) {
  return (
    <div className="adm-toggle">
      <div>
        <span>{label}</span>
        {sublabel ? <div className="adm-toggle__sub">{sublabel}</div> : null}
      </div>
      <button
        type="button"
        className={'adm-switch' + (value ? ' is-on' : '')}
        onClick={function() { onChange(!value); }}
        aria-pressed={value}
      />
    </div>
  );
}

function ImageField({ label, value, onChange, onUpload }) {
  return (
    <div className="adm-field adm-imagefield">
      <label>{label}</label>
      <div className="adm-imagefield__row">
        <input type="text" value={value != null ? value : ''} placeholder="https://..." onChange={function(e) { onChange(e.target.value); }} style={{ flex: 1 }} />
        <label className="adm-btn adm-btn--ghost adm-uploadbtn" title="Upload image">
          Upload
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={function(e) { if (onUpload) onUpload(e.target.files[0]); }} />
        </label>
      </div>
      {value ? <img src={value} alt="" className="adm-imagefield__preview" /> : null}
    </div>
  );
}

function SectionDivider() {
  return <div className="adm-divider" />;
}

// --- Login -------------------------------------------------------------------

function LoginScreen({ onAuthed }) {
  const [password, setPassword] = useState('');
  const [err, setErr]           = useState('');
  const [busy, setBusy]         = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr(''); setBusy(true);
    try {
      await apiJson('/api/admin/login', { method: 'POST', body: JSON.stringify({ password: password }) });
      onAuthed();
    } catch (ex) {
      setErr(ex.message || String(ex));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="adm-login">
      <div className="adm-login__card">
        <div className="adm-login__logo">
          <img src="/assets/mason_horizontal_dark.png" alt="MASON" onError={function(e) { e.target.style.display = 'none'; }} />
          <span className="adm-login__logofallback">MASON</span>
        </div>
        <h1>Admin CMS</h1>
        <p>Manage site content for masononsite.com.</p>
        <form onSubmit={submit}>
          <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="Enter admin password" />
          <button className="adm-btn adm-btn--primary" type="submit" disabled={busy} style={{ width: '100%', marginTop: 8 }}>
            {busy ? 'Signing in...' : 'Sign in'}
          </button>
          {err ? <div className="adm-error">{err}</div> : null}
        </form>
        <p style={{ marginTop: 16, fontSize: 11 }}>
          Requires <span className="adm-code">ADMIN_PASSWORD</span> + <span className="adm-code">JWT_SECRET</span> in Vercel env.
        </p>
      </div>
    </div>
  );
}

// --- Dashboard ---------------------------------------------------------------

function Dashboard({ onLogout }) {
  const [tab,       setTab]       = useState('overview');
  const [content,   setContent]   = useState(null);
  const [loadErr,   setLoadErr]   = useState('');
  const [saveMsg,   setSaveMsg]   = useState('');
  const [saveMsgOk, setSaveMsgOk] = useState(true);
  const [busy,      setBusy]      = useState(false);
  const [tierIdx,   setTierIdx]   = useState(0);
  const [rawText,   setRawText]   = useState('');
  const [rawErr,    setRawErr]    = useState('');

  const patch = useCallback(function(path, value) {
    setContent(function(prev) {
      const next = deepClone(prev);
      setNested(next, path, value);
      return next;
    });
  }, []);

  const reload = useCallback(async function() {
    setLoadErr('');
    try {
      const data = ensureShape(await apiJson('/api/cms/public-content'));
      setContent(data);
      setRawText(JSON.stringify(data, null, 2));
    } catch (e) {
      setLoadErr(e.message || String(e));
    }
  }, []);

  useEffect(function() { reload(); }, [reload]);

  useEffect(function() {
    if (tab === 'json' && content) setRawText(JSON.stringify(content, null, 2));
  }, [tab]);

  function showMsg(msg, ok) {
    if (ok === undefined) ok = true;
    setSaveMsg(msg); setSaveMsgOk(ok);
    setTimeout(function() { setSaveMsg(''); }, 6000);
  }

  async function save() {
    setBusy(true);
    try {
      const res = await apiJson('/api/cms/save', { method: 'POST', body: JSON.stringify(content) });
      if (res.persisted) {
        showMsg('Saved to Blob.' + (res.url ? ' URL: ' + res.url : ''));
      } else {
        showMsg('No Blob token -- use Export JSON and commit content.json to git.', false);
      }
    } catch (e) {
      showMsg('Error: ' + (e.message || String(e)), false);
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    try { await apiJson('/api/admin/logout', { method: 'POST', body: JSON.stringify({}) }); } catch (_) {}
    onLogout();
  }

  async function uploadImage(field, file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async function() {
      const dataUrl = String(reader.result);
      const i = dataUrl.indexOf('base64,');
      const base64 = i >= 0 ? dataUrl.slice(i + 7) : '';
      try {
        const up = await apiJson('/api/cms/upload', {
          method: 'POST',
          body: JSON.stringify({ filename: file.name, base64: base64, contentType: file.type || 'application/octet-stream' }),
        });
        patch(field, up.url);
        showMsg('Uploaded -- URL applied to ' + field.split('.').pop());
      } catch (e) {
        showMsg('Upload failed: ' + (e.message || String(e)), false);
      }
    };
    reader.readAsDataURL(file);
  }

  function applyRaw() {
    setRawErr('');
    try {
      const parsed = ensureShape(JSON.parse(rawText));
      setContent(parsed);
      showMsg('JSON applied. Click Save site to persist.', true);
    } catch (e) {
      setRawErr(e.message || String(e));
    }
  }

  // -- Loading / error states -------------------------------------------------

  if (loadErr && !content) {
    return (
      <div className="adm-login">
        <div className="adm-login__card">
          <h1>Cannot load content</h1>
          <p className="adm-error">{loadErr}</p>
          <p className="adm-muted" style={{ marginTop: 8 }}>
            Open this panel on the deployed Vercel site, or run <span className="adm-code">vercel dev</span> locally.
          </p>
          <div className="adm-row-actions">
            <button type="button" className="adm-btn adm-btn--primary" onClick={reload}>Retry</button>
            <button type="button" className="adm-btn adm-btn--ghost" onClick={logout}>Log out</button>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="adm-login">
        <div className="adm-login__card">
          <p className="adm-muted">Loading site content...</p>
        </div>
      </div>
    );
  }

  // -- Tab definitions --------------------------------------------------------

  const tabs = [
    ['overview',     'Overview'],
    ['home',         'Homepage'],
    ['pricing',      'Pricing'],
    ['branding',     'Brand & Media'],
    ['social',       'Social & Contact'],
    ['livechat',     'Live Chat'],
    ['seo',          'SEO'],
    ['analytics',    'Analytics'],
    ['payments',     'Payments'],
    ['integrations', 'Integrations'],
    ['json',         'Raw JSON'],
  ];

  // -- Render -----------------------------------------------------------------

  return (
    <div className="adm-shell">
      <aside className="adm-sidebar">
        <div className="adm-sidebar__brand">
          <span className="adm-sidebar__brandname">MASON</span>
          <span className="adm-sidebar__brandtag">CMS</span>
        </div>
        {tabs.map(function(item) {
          const id = item[0]; const label = item[1];
          return (
            <button
              key={id}
              type="button"
              className={'adm-nav-btn' + (tab === id ? ' is-active' : '')}
              onClick={function() { setTab(id); }}
            >
              {label}
            </button>
          );
        })}
        <div style={{ flex: 1 }} />
        <a
          href="https://masononsite.com"
          target="_blank"
          rel="noreferrer"
          className="adm-nav-btn"
          style={{ textDecoration: 'none', marginTop: 8, fontSize: 11, opacity: 0.6 }}
        >
          View live site
        </a>
      </aside>

      <div className="adm-main">
        <header className="adm-topbar">
          <span className="adm-topbar__title">MASON site editor</span>
          {saveMsg
            ? <span className={'adm-topbar__hint' + (saveMsgOk ? ' is-ok' : ' is-err')}>{saveMsg}</span>
            : <span className="adm-topbar__hint" />
          }
          <button type="button" className="adm-btn adm-btn--ghost" onClick={function() { exportBlob(content); }}>
            Export JSON
          </button>
          <button type="button" className="adm-btn adm-btn--primary" disabled={busy} onClick={save}>
            {busy ? 'Saving...' : 'Save site'}
          </button>
          <button type="button" className="adm-btn adm-btn--danger" onClick={logout}>
            Log out
          </button>
        </header>

        <div className="adm-scroll">

          {tab === 'overview' && (
            <React.Fragment>
              <div className="adm-card">
                <h3>Site</h3>
                <div className="adm-overview-row">
                  <span className="adm-pill">Live</span>
                  <a href="https://masononsite.com" target="_blank" rel="noreferrer" style={{ color: 'var(--adm-accent)' }}>masononsite.com</a>
                </div>
                <div className="adm-overview-row" style={{ marginTop: 10 }}>
                  <span className="adm-pill">SEO pages</span>
                  <span>{Object.keys(content.seo.pages || {}).length} entries configured</span>
                </div>
                <div className="adm-overview-row" style={{ marginTop: 10 }}>
                  <span className="adm-pill">Pricing tiers</span>
                  <span>{content.pricing.tiers.length} tiers defined</span>
                </div>
                <div className="adm-overview-row" style={{ marginTop: 10 }}>
                  <span className="adm-pill">Testimonials</span>
                  <span>{content.testimonials.length} testimonials</span>
                </div>
              </div>
              <div className="adm-card">
                <h3>Vercel setup checklist</h3>
                <p className="adm-muted" style={{ marginBottom: 12 }}>
                  These env vars must be set in your Vercel project for the admin to work fully.
                </p>
                <div className="adm-checklist">
                  {[
                    ['ADMIN_PASSWORD', 'Admin login password'],
                    ['JWT_SECRET',     '16+ char secret for session cookies'],
                    ['BLOB_READ_WRITE_TOKEN', 'Optional -- enables live Save (Vercel Blob)'],
                    ['CONTENT_BLOB_URL',      'Optional -- set after first Blob save'],
                  ].map(function(item) {
                    const k = item[0]; const v = item[1];
                    return (
                      <div className="adm-checklist__row" key={k}>
                        <span className="adm-code">{k}</span>
                        <span className="adm-muted">{v}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="adm-card">
                <h3>How saving works</h3>
                <p className="adm-muted">
                  <strong style={{ color: 'var(--adm-text)' }}>With Blob token:</strong> Click "Save site" to save to Vercel Blob. Copy the returned URL and set it as <span className="adm-code">CONTENT_BLOB_URL</span>. The live site reads from Blob on every request.
                </p>
                <p className="adm-muted" style={{ marginTop: 8 }}>
                  <strong style={{ color: 'var(--adm-text)' }}>Without Blob token:</strong> Click "Export JSON" to download content.json, then commit to git and redeploy.
                </p>
              </div>
            </React.Fragment>
          )}

          {tab === 'home' && (
            <React.Fragment>
              <div className="adm-card">
                <h3>Site settings</h3>
                <div className="adm-grid2">
                  <Field label="App URL" value={content.site.appUrl} onChange={function(v) { patch('site.appUrl', v); }} placeholder="https://app.masononsite.com" />
                  <Field label="Support email" value={content.site.supportEmail} onChange={function(v) { patch('site.supportEmail', v); }} placeholder="hello@masononsite.com" />
                  <Field label="Trial days" type="number" value={content.site.trialDays} onChange={function(v) { patch('site.trialDays', v); }} />
                  <Field label="Company name" value={content.site.name} onChange={function(v) { patch('site.name', v); }} />
                </div>
              </div>

              <div className="adm-card">
                <h3>Hero section</h3>
                <div className="adm-grid2">
                  <Field label="Eyebrow badge" value={content.hero.eyebrow} onChange={function(v) { patch('hero.eyebrow', v); }} placeholder="e.g. Now in public beta" />
                  <Field label="Headline accent word" value={content.hero.headlineAccent} onChange={function(v) { patch('hero.headlineAccent', v); }} placeholder="e.g. Smarter" />
                </div>
                <Field label="Headline" value={content.hero.headline} onChange={function(v) { patch('hero.headline', v); }} rows={2} />
                <Field label="Subheadline" value={content.hero.subheadline} onChange={function(v) { patch('hero.subheadline', v); }} rows={3} />
                <div className="adm-grid2">
                  <Field label="Primary CTA" value={content.hero.ctaPrimary} onChange={function(v) { patch('hero.ctaPrimary', v); }} placeholder="Start free trial" />
                  <Field label="Secondary CTA" value={content.hero.ctaSecondary} onChange={function(v) { patch('hero.ctaSecondary', v); }} placeholder="See how it works" />
                  <Field label="Badge text 1" value={content.hero.meta1} onChange={function(v) { patch('hero.meta1', v); }} />
                  <Field label="Badge text 2" value={content.hero.meta2} onChange={function(v) { patch('hero.meta2', v); }} />
                </div>
              </div>

              <div className="adm-card">
                <h3>Section visibility</h3>
                <p className="adm-muted" style={{ marginBottom: 12 }}>Toggle homepage sections on/off.</p>
                {Object.keys(content.sections || {}).map(function(k) {
                  const v = content.sections[k];
                  return (
                    <ToggleRow key={k} label={k} value={v !== false} onChange={function(on) { patch('sections.' + k, on); }} />
                  );
                })}
              </div>

              <div className="adm-card">
                <h3>Stats bar</h3>
                {(content.stats || []).map(function(s, i) {
                  return (
                    <div key={i} className="adm-repeatable">
                      <div className="adm-repeatable__header">
                        <strong>Stat {i + 1}</strong>
                        <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={function() {
                          const next = deepClone(content.stats);
                          next.splice(i, 1);
                          patch('stats', next);
                        }}>Remove</button>
                      </div>
                      <div className="adm-grid2">
                        <Field label="Value" value={s.n} onChange={function(v) { patch('stats.' + i + '.n', v); }} placeholder="e.g. 10,000+" />
                        <Field label="Note" value={s.note} onChange={function(v) { patch('stats.' + i + '.note', v); }} placeholder="e.g. projects" />
                      </div>
                      <Field label="Label" value={s.label} onChange={function(v) { patch('stats.' + i + '.label', v); }} rows={2} />
                    </div>
                  );
                })}
                <button type="button" className="adm-btn" onClick={function() {
                  const next = deepClone(content.stats || []);
                  next.push({ n: '', note: '', label: '' });
                  patch('stats', next);
                }}>+ Add stat</button>
              </div>

              <div className="adm-card">
                <h3>Testimonials</h3>
                {(content.testimonials || []).map(function(t, i) {
                  return (
                    <div key={i} className="adm-repeatable">
                      <div className="adm-repeatable__header">
                        <strong>{t.name || 'Testimonial ' + (i + 1)}</strong>
                        <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={function() {
                          const next = deepClone(content.testimonials);
                          next.splice(i, 1);
                          patch('testimonials', next);
                        }}>Remove</button>
                      </div>
                      <Field label="Quote" value={t.quote} onChange={function(v) { patch('testimonials.' + i + '.quote', v); }} rows={3} />
                      <div className="adm-grid2">
                        <Field label="Name" value={t.name} onChange={function(v) { patch('testimonials.' + i + '.name', v); }} />
                        <Field label="Role / company" value={t.role} onChange={function(v) { patch('testimonials.' + i + '.role', v); }} />
                      </div>
                      <Field label="Avatar URL (optional)" value={t.avatar} onChange={function(v) { patch('testimonials.' + i + '.avatar', v); }} placeholder="https://..." />
                    </div>
                  );
                })}
                <button type="button" className="adm-btn" onClick={function() {
                  const next = deepClone(content.testimonials || []);
                  next.push({ quote: '', name: '', role: '', avatar: '' });
                  patch('testimonials', next);
                }}>+ Add testimonial</button>
              </div>
            </React.Fragment>
          )}

          {tab === 'pricing' && (
            <React.Fragment>
              <div className="adm-card">
                <h3>Pricing tiers</h3>
                {content.pricing.tiers.length > 0 ? (
                  <div className="adm-field">
                    <label>Edit tier</label>
                    <select
                      value={tierIdx}
                      onChange={function(e) { setTierIdx(Number(e.target.value)); }}
                    >
                      {content.pricing.tiers.map(function(t, i) {
                        return <option key={t.id || i} value={i}>{t.name || 'Tier ' + (i + 1)}</option>;
                      })}
                    </select>
                  </div>
                ) : null}

                {(function() {
                  const t = content.pricing.tiers[tierIdx];
                  if (!t) return (
                    <p className="adm-muted">No tiers yet. Add one below.</p>
                  );
                  const idx = tierIdx;
                  return (
                    <React.Fragment>
                      <div className="adm-repeatable__header" style={{ marginBottom: 14 }}>
                        <strong>{t.name || 'Tier ' + (idx + 1)}</strong>
                        <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={function() {
                          const next = deepClone(content.pricing.tiers);
                          next.splice(idx, 1);
                          patch('pricing.tiers', next);
                          setTierIdx(Math.max(0, idx - 1));
                        }}>Remove tier</button>
                      </div>
                      <div className="adm-grid2">
                        <Field label="ID (slug)" value={t.id} onChange={function(v) { patch('pricing.tiers.' + idx + '.id', v); }} placeholder="starter" />
                        <Field label="Display name" value={t.name} onChange={function(v) { patch('pricing.tiers.' + idx + '.name', v); }} placeholder="Starter" />
                      </div>
                      <Field label="Tagline" value={t.tagline} onChange={function(v) { patch('pricing.tiers.' + idx + '.tagline', v); }} />
                      <div className="adm-grid2">
                        <Field label="Monthly price ($)" type="number" value={t.monthly} onChange={function(v) { patch('pricing.tiers.' + idx + '.monthly', v); }} />
                        <Field label="Annual price ($/mo)" type="number" value={t.annual} onChange={function(v) { patch('pricing.tiers.' + idx + '.annual', v); }} />
                      </div>
                      <div className="adm-grid2">
                        <Field label="Projects label" value={t.projectsLabel} onChange={function(v) { patch('pricing.tiers.' + idx + '.projectsLabel', v); }} placeholder="Up to 3 projects" />
                        <Field label="CTA button text" value={t.cta} onChange={function(v) { patch('pricing.tiers.' + idx + '.cta', v); }} placeholder="Start free trial" />
                      </div>
                      <Field
                        label="Features (one per line)"
                        value={(t.features || []).join('\n')}
                        onChange={function(v) { patch('pricing.tiers.' + idx + '.features', v.split('\n').map(function(x) { return x.trim(); }).filter(Boolean)); }}
                        rows={12}
                        placeholder={"Feature 1\nFeature 2\nFeature 3"}
                      />
                      <ToggleRow
                        label="Featured / highlighted tier"
                        sublabel="Shows as Most Popular. Only one tier should be highlighted."
                        value={!!t.highlight}
                        onChange={function(v) {
                          const next = deepClone(content.pricing.tiers);
                          next.forEach(function(x, j) { x.highlight = j === idx ? v : false; });
                          patch('pricing.tiers', next);
                        }}
                      />
                    </React.Fragment>
                  );
                })()}

                <SectionDivider />
                <button type="button" className="adm-btn" onClick={function() {
                  const next = deepClone(content.pricing.tiers);
                  const newIdx = next.length;
                  next.push({ id: 'tier-' + newIdx, name: 'New tier', tagline: '', monthly: 0, annual: 0, features: [], cta: 'Get started', highlight: false });
                  patch('pricing.tiers', next);
                  setTierIdx(newIdx);
                }}>+ Add tier</button>
              </div>

              <div className="adm-card">
                <h3>Enterprise block</h3>
                <Field label="Heading" value={content.pricing.enterprise && content.pricing.enterprise.heading} onChange={function(v) { patch('pricing.enterprise.heading', v); }} />
                <Field label="Body text" value={content.pricing.enterprise && content.pricing.enterprise.body} onChange={function(v) { patch('pricing.enterprise.body', v); }} rows={3} />
                <Field label="CTA text" value={content.pricing.enterprise && content.pricing.enterprise.cta} onChange={function(v) { patch('pricing.enterprise.cta', v); }} />
              </div>

              <div className="adm-card">
                <h3>Pricing FAQ</h3>
                {(content.pricing.faq || []).map(function(item, i) {
                  return (
                    <div key={i} className="adm-repeatable">
                      <div className="adm-repeatable__header">
                        <strong>FAQ {i + 1}</strong>
                        <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={function() {
                          const next = deepClone(content.pricing.faq);
                          next.splice(i, 1);
                          patch('pricing.faq', next);
                        }}>Remove</button>
                      </div>
                      <Field label="Question" value={item.q} onChange={function(v) { patch('pricing.faq.' + i + '.q', v); }} />
                      <Field label="Answer" value={item.a} onChange={function(v) { patch('pricing.faq.' + i + '.a', v); }} rows={3} />
                    </div>
                  );
                })}
                <button type="button" className="adm-btn" onClick={function() {
                  const next = deepClone(content.pricing.faq || []);
                  next.push({ q: '', a: '' });
                  patch('pricing.faq', next);
                }}>+ Add FAQ item</button>
              </div>
            </React.Fragment>
          )}

          {tab === 'branding' && (
            <div className="adm-card">
              <h3>Logos and favicon</h3>
              <p className="adm-muted" style={{ marginBottom: 16 }}>
                Paste a URL or upload an image. Uploads go to Vercel Blob (requires <span className="adm-code">BLOB_READ_WRITE_TOKEN</span>).
              </p>
              <ImageField
                label="Horizontal logo -- dark background"
                value={content.branding.logoHorizontalDark}
                onChange={function(v) { patch('branding.logoHorizontalDark', v); }}
                onUpload={function(f) { uploadImage('branding.logoHorizontalDark', f); }}
              />
              <ImageField
                label="Horizontal logo -- light background"
                value={content.branding.logoHorizontalLight}
                onChange={function(v) { patch('branding.logoHorizontalLight', v); }}
                onUpload={function(f) { uploadImage('branding.logoHorizontalLight', f); }}
              />
              <ImageField
                label="Favicon"
                value={content.branding.favicon}
                onChange={function(v) { patch('branding.favicon', v); }}
                onUpload={function(f) { uploadImage('branding.favicon', f); }}
              />
              <ImageField
                label="Default OG / social share image"
                value={content.branding.ogDefaultImage}
                onChange={function(v) { patch('branding.ogDefaultImage', v); }}
                onUpload={function(f) { uploadImage('branding.ogDefaultImage', f); }}
              />
            </div>
          )}

          {tab === 'seo' && (
            <React.Fragment>
              <div className="adm-card">
                <h3>Global SEO defaults</h3>
                <Field label="Site URL (canonical base)" value={content.seo.siteUrl} onChange={function(v) { patch('seo.siteUrl', v.replace(/\/$/, '')); }} placeholder="https://masononsite.com" />
                <div className="adm-grid2">
                  <Field label="Default page title" value={content.seo.global.defaultTitle} onChange={function(v) { patch('seo.global.defaultTitle', v); }} />
                  <Field label="Title suffix" value={content.seo.global.titleSuffix} onChange={function(v) { patch('seo.global.titleSuffix', v); }} placeholder="-- MASON" />
                </div>
                <Field label="Default meta description" value={content.seo.global.defaultDescription} onChange={function(v) { patch('seo.global.defaultDescription', v); }} rows={3} />
                <div className="adm-grid2">
                  <Field label="Twitter card type" value={content.seo.global.twitterCard} onChange={function(v) { patch('seo.global.twitterCard', v); }} placeholder="summary_large_image" />
                  <Field label="Theme color" value={content.seo.global.themeColor} onChange={function(v) { patch('seo.global.themeColor', v); }} placeholder="#07070a" />
                </div>
              </div>

              <div className="adm-card">
                <h3>Auto-inject handlers</h3>
                <ToggleRow label="Inject canonical tag" value={content.seo.handlers.injectCanonical !== false} onChange={function(v) { patch('seo.handlers.injectCanonical', v); }} />
                <ToggleRow label="Inject og:url" value={content.seo.handlers.injectOgUrl !== false} onChange={function(v) { patch('seo.handlers.injectOgUrl', v); }} />
                <ToggleRow label="Inject Twitter/X tags" value={content.seo.handlers.injectTwitter !== false} onChange={function(v) { patch('seo.handlers.injectTwitter', v); }} />
                <ToggleRow label="Inject JSON-LD from page data" value={!!content.seo.handlers.injectJsonLd} onChange={function(v) { patch('seo.handlers.injectJsonLd', v); }} />
              </div>

              <div className="adm-card">
                <h3>Per-page SEO</h3>
                <p className="adm-muted" style={{ marginBottom: 12 }}>
                  Key = URL segment: <span className="adm-code">index</span>, <span className="adm-code">pricing</span>, <span className="adm-code">features</span>, <span className="adm-code">about</span>, etc.
                  <span className="adm-code">tracking.js</span> applies these automatically by matching the current URL.
                </p>
                <button
                  type="button"
                  className="adm-btn"
                  style={{ marginBottom: 16 }}
                  onClick={function() {
                    const key = window.prompt('Page key (e.g. features, about, blog)');
                    if (!key) return;
                    const k = key.replace(/[^a-zA-Z0-9_-]/g, '');
                    if (!k) return;
                    const pages = deepClone(content.seo.pages || {});
                    if (!pages[k]) pages[k] = { title: '', description: '', canonicalPath: '/' + k, robots: 'index,follow' };
                    patch('seo.pages', pages);
                  }}
                >
                  + Add page
                </button>
                {Object.keys(content.seo.pages || {}).map(function(pk) {
                  const p = content.seo.pages[pk] || {};
                  return (
                    <div key={pk} className="adm-repeatable">
                      <div className="adm-repeatable__header">
                        <strong>/{pk}</strong>
                        <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={function() {
                          const pages = deepClone(content.seo.pages);
                          delete pages[pk];
                          patch('seo.pages', pages);
                        }}>Remove</button>
                      </div>
                      <Field label="Title" value={p.title} onChange={function(v) { patch('seo.pages.' + pk + '.title', v); }} />
                      <Field label="Meta description" value={p.description} onChange={function(v) { patch('seo.pages.' + pk + '.description', v); }} rows={2} />
                      <div className="adm-grid2">
                        <Field label="OG title (optional override)" value={p.ogTitle} onChange={function(v) { patch('seo.pages.' + pk + '.ogTitle', v); }} />
                        <Field label="OG image URL" value={p.ogImage} onChange={function(v) { patch('seo.pages.' + pk + '.ogImage', v); }} placeholder="https://..." />
                      </div>
                      <div className="adm-grid2">
                        <Field label="Canonical path" value={p.canonicalPath} onChange={function(v) { patch('seo.pages.' + pk + '.canonicalPath', v); }} placeholder={'/' + pk} />
                        <Field label="Robots" value={p.robots} onChange={function(v) { patch('seo.pages.' + pk + '.robots', v); }} placeholder="index,follow" />
                      </div>
                      <Field
                        label="JSON-LD (raw JSON string, optional)"
                        value={typeof p.jsonLd === 'string' ? p.jsonLd : p.jsonLd ? JSON.stringify(p.jsonLd) : ''}
                        onChange={function(v) { patch('seo.pages.' + pk + '.jsonLd', v); }}
                        rows={3}
                      />
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          )}

          {tab === 'analytics' && (
            <div className="adm-card">
              <h3>Analytics and tag managers</h3>
              <p className="adm-muted" style={{ marginBottom: 16 }}>
                All values stored in content.json and loaded by <span className="adm-code">tracking.js</span> on every page. Master off = no trackers load at all.
              </p>
              <ToggleRow label="Master enable" sublabel="Off = zero trackers load on any page" value={content.analytics.masterEnabled !== false} onChange={function(v) { patch('analytics.masterEnabled', v); }} />
              <SectionDivider />
              <div className="adm-grid2">
                <Field label="GTM container ID" value={(content.analytics.gtm && content.analytics.gtm.containerId) || ''} onChange={function(v) { patch('analytics.gtm.containerId', v); }} placeholder="GTM-XXXXXXX" />
                <ToggleRow label="GTM enabled" value={!!(content.analytics.gtm && content.analytics.gtm.enabled)} onChange={function(v) { patch('analytics.gtm.enabled', v); }} />
              </div>
              <div className="adm-grid2">
                <Field label="GA4 measurement ID" value={(content.analytics.ga4 && content.analytics.ga4.measurementId) || ''} onChange={function(v) { patch('analytics.ga4.measurementId', v); }} placeholder="G-XXXXXXXXXX" />
                <ToggleRow label="GA4 enabled" value={!!(content.analytics.ga4 && content.analytics.ga4.enabled)} onChange={function(v) { patch('analytics.ga4.enabled', v); }} />
              </div>
              <div className="adm-grid2">
                <Field label="Plausible domain" value={(content.analytics.plausible && content.analytics.plausible.domain) || ''} onChange={function(v) { patch('analytics.plausible.domain', v); }} placeholder="masononsite.com" />
                <ToggleRow label="Plausible enabled" value={!!(content.analytics.plausible && content.analytics.plausible.enabled)} onChange={function(v) { patch('analytics.plausible.enabled', v); }} />
              </div>
              <div className="adm-grid2">
                <Field label="Meta Pixel ID" value={(content.analytics.metaPixel && content.analytics.metaPixel.pixelId) || ''} onChange={function(v) { patch('analytics.metaPixel.pixelId', v); }} placeholder="123456789" />
                <ToggleRow label="Meta Pixel enabled" value={!!(content.analytics.metaPixel && content.analytics.metaPixel.enabled)} onChange={function(v) { patch('analytics.metaPixel.enabled', v); }} />
              </div>
              <div className="adm-grid2">
                <Field label="LinkedIn partner ID" value={(content.analytics.linkedin && content.analytics.linkedin.partnerId) || ''} onChange={function(v) { patch('analytics.linkedin.partnerId', v); }} />
                <ToggleRow label="LinkedIn enabled" value={!!(content.analytics.linkedin && content.analytics.linkedin.enabled)} onChange={function(v) { patch('analytics.linkedin.enabled', v); }} />
              </div>
              <div className="adm-grid2">
                <Field label="Hotjar site ID" type="number" value={(content.analytics.hotjar && content.analytics.hotjar.siteId) || 0} onChange={function(v) { patch('analytics.hotjar.siteId', v); }} />
                <ToggleRow label="Hotjar enabled" value={!!(content.analytics.hotjar && content.analytics.hotjar.enabled)} onChange={function(v) { patch('analytics.hotjar.enabled', v); }} />
              </div>
              <div className="adm-grid2">
                <Field label="Clarity project ID" value={(content.analytics.clarity && content.analytics.clarity.projectId) || ''} onChange={function(v) { patch('analytics.clarity.projectId', v); }} />
                <ToggleRow label="Clarity enabled" value={!!(content.analytics.clarity && content.analytics.clarity.enabled)} onChange={function(v) { patch('analytics.clarity.enabled', v); }} />
              </div>
              <div className="adm-grid2">
                <Field label="Segment write key" value={(content.analytics.segment && content.analytics.segment.writeKey) || ''} onChange={function(v) { patch('analytics.segment.writeKey', v); }} />
                <ToggleRow label="Segment enabled" value={!!(content.analytics.segment && content.analytics.segment.enabled)} onChange={function(v) { patch('analytics.segment.enabled', v); }} />
              </div>
              <SectionDivider />
              <Field label="Custom inline script (paste raw JS)" value={(content.analytics.custom && content.analytics.custom.script) || ''} onChange={function(v) { patch('analytics.custom.script', v); }} rows={6} placeholder="// Your custom tracking code" />
              <ToggleRow label="Custom script enabled" value={!!(content.analytics.custom && content.analytics.custom.enabled)} onChange={function(v) { patch('analytics.custom.enabled', v); }} />
            </div>
          )}

          {tab === 'payments' && (
            <div className="adm-card">
              <h3>Stripe and billing</h3>
              <p className="adm-muted" style={{ marginBottom: 16 }}>
                Only <strong style={{ color: 'var(--adm-text)' }}>publishable / marketing-safe</strong> values here. Keep secret keys in Vercel env, never in content.json.
              </p>
              <Field label="Stripe publishable key" value={content.payments.stripePublishableKey} onChange={function(v) { patch('payments.stripePublishableKey', v); }} placeholder="pk_live_..." />
              <Field label="Stripe dashboard URL" value={content.payments.stripeDashboardUrl} onChange={function(v) { patch('payments.stripeDashboardUrl', v); }} placeholder="https://dashboard.stripe.com/..." />
              <Field label="Merchant display name" value={content.payments.merchantDisplayName} onChange={function(v) { patch('payments.merchantDisplayName', v); }} />
              <Field label="Billing support email" value={content.payments.billingSupportEmail} onChange={function(v) { patch('payments.billingSupportEmail', v); }} />
              <Field label="Pricing table / payment link ID" value={content.payments.pricingTableId} onChange={function(v) { patch('payments.pricingTableId', v); }} />
              <Field label="Checkout success URL" value={content.payments.checkoutSuccessUrl} onChange={function(v) { patch('payments.checkoutSuccessUrl', v); }} />
              <Field label="Internal notes" value={content.payments.notes} onChange={function(v) { patch('payments.notes', v); }} rows={3} />
            </div>
          )}

          {tab === 'social' && (
            <React.Fragment>
              <div className="adm-card">
                <h3>Social media URLs</h3>
                <p className="adm-muted" style={{ marginBottom: 16 }}>These populate the footer social links and any social share metadata.</p>
                <div className="adm-grid2">
                  <Field label="LinkedIn URL" value={content.social.linkedin} onChange={function(v) { patch('social.linkedin', v); }} placeholder="https://linkedin.com/company/masononsite" />
                  <Field label="X / Twitter URL" value={content.social.twitter} onChange={function(v) { patch('social.twitter', v); }} placeholder="https://x.com/masononsite" />
                  <Field label="YouTube URL" value={content.social.youtube} onChange={function(v) { patch('social.youtube', v); }} placeholder="https://youtube.com/@masononsite" />
                  <Field label="GitHub URL" value={content.social.github} onChange={function(v) { patch('social.github', v); }} placeholder="https://github.com/masononsite" />
                  <Field label="Instagram URL" value={content.social.instagram} onChange={function(v) { patch('social.instagram', v); }} placeholder="https://instagram.com/masononsite" />
                  <Field label="Facebook URL" value={content.social.facebook} onChange={function(v) { patch('social.facebook', v); }} placeholder="https://facebook.com/masononsite" />
                </div>
              </div>
              <div className="adm-card">
                <h3>Contact &amp; support</h3>
                <div className="adm-grid2">
                  <Field label="General contact email" value={content.site.supportEmail} onChange={function(v) { patch('site.supportEmail', v); }} placeholder="connect@masononsite.com" />
                  <Field label="Sales email" value={content.social.salesEmail} onChange={function(v) { patch('social.salesEmail', v); }} placeholder="connect@masononsite.com" />
                  <Field label="Press / media email" value={content.social.pressEmail} onChange={function(v) { patch('social.pressEmail', v); }} placeholder="connect@masononsite.com" />
                  <Field label="Phone number (public)" value={content.social.phone} onChange={function(v) { patch('social.phone', v); }} placeholder="+1 (555) 000-0000" />
                  <Field label="Company address line 1" value={content.social.address1} onChange={function(v) { patch('social.address1', v); }} placeholder="123 Main St, Suite 400" />
                  <Field label="Company address line 2" value={content.social.address2} onChange={function(v) { patch('social.address2', v); }} placeholder="San Francisco, CA 94103" />
                </div>
              </div>
              <div className="adm-card">
                <h3>Open Graph / share defaults</h3>
                <div className="adm-grid2">
                  <Field label="Twitter / X handle (@)" value={content.social.twitterHandle} onChange={function(v) { patch('social.twitterHandle', v); }} placeholder="@masononsite" />
                  <Field label="Facebook App ID" value={content.social.facebookAppId} onChange={function(v) { patch('social.facebookAppId', v); }} placeholder="1234567890" />
                </div>
              </div>
            </React.Fragment>
          )}

          {tab === 'livechat' && (
            <React.Fragment>
              <div className="adm-card">
                <h3>Live chat widget</h3>
                <p className="adm-muted" style={{ marginBottom: 16 }}>
                  Paste the widget snippet or ID for your chat provider. Only one provider should be active at a time.
                </p>
                <div className="adm-grid2">
                  <Field label="Provider" value={content.livechat.provider} onChange={function(v) { patch('livechat.provider', v); }} placeholder="crisp / intercom / tawk / tidio / hubspot" />
                  <Field label="Widget ID / App ID" value={content.livechat.widgetId} onChange={function(v) { patch('livechat.widgetId', v); }} placeholder="e.g. Crisp website ID or Intercom App ID" />
                </div>
                <Field label="Full embed snippet (optional — paste the full <script> tag)" value={content.livechat.snippet} onChange={function(v) { patch('livechat.snippet', v); }} rows={6} />
                <div className="adm-grid2" style={{ marginTop: 12 }}>
                  <Field label="Intercom App ID" value={content.livechat.intercomAppId} onChange={function(v) { patch('livechat.intercomAppId', v); }} placeholder="abc12345" />
                  <Field label="Crisp Website ID" value={content.livechat.crispWebsiteId} onChange={function(v) { patch('livechat.crispWebsiteId', v); }} placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
                  <Field label="Tawk.to Property ID" value={content.livechat.tawkPropertyId} onChange={function(v) { patch('livechat.tawkPropertyId', v); }} placeholder="5f1234.../1/..." />
                  <Field label="Tidio Public Key" value={content.livechat.tidioKey} onChange={function(v) { patch('livechat.tidioKey', v); }} placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                </div>
              </div>
              <div className="adm-card">
                <h3>How it works</h3>
                <p className="adm-muted">
                  After saving, the live chat widget ID/snippet is stored in content.json. To activate it on the site, the page templates need to read <span className="adm-code">content.livechat</span> and inject the appropriate script tag in the <span className="adm-code">&lt;head&gt;</span> or before <span className="adm-code">&lt;/body&gt;</span>. Alternatively paste the full snippet into the "Full embed snippet" field and the site will inject it directly.
                </p>
              </div>
            </React.Fragment>
          )}

          {tab === 'integrations' && (
            <div className="adm-card">
              <h3>Integrations and webhooks</h3>
              <div className="adm-grid2">
                <Field label="API docs URL" value={content.integrations.apiDocsUrl} onChange={function(v) { patch('integrations.apiDocsUrl', v); }} placeholder="https://docs.masononsite.com" />
                <Field label="Zapier webhook URL" value={content.integrations.zapierWebhookUrl} onChange={function(v) { patch('integrations.zapierWebhookUrl', v); }} placeholder="https://hooks.zapier.com/..." />
                <Field label="CRM webhook URL (HubSpot/Salesforce)" value={content.integrations.crmWebhookUrl} onChange={function(v) { patch('integrations.crmWebhookUrl', v); }} />
                <Field label="Contact form submission webhook" value={content.integrations.webhookEndpointUrl} onChange={function(v) { patch('integrations.webhookEndpointUrl', v); }} placeholder="POST payload on every contact form submit" />
                <Field label="Resend API key (for contact form)" value={content.integrations.resendApiKey} onChange={function(v) { patch('integrations.resendApiKey', v); }} placeholder="re_xxxxxxxxxxxx (also set in Vercel env)" />
                <Field label="Slack incoming webhook URL" value={content.integrations.slackWebhookUrl} onChange={function(v) { patch('integrations.slackWebhookUrl', v); }} placeholder="https://hooks.slack.com/..." />
              </div>
              <Field label="GTM Container ID" value={content.integrations.gtmId} onChange={function(v) { patch('integrations.gtmId', v); }} placeholder="GTM-XXXXXXX" />
              <Field label="Extra notes / JSON" value={content.integrations.extra} onChange={function(v) { patch('integrations.extra', v); }} rows={4} />
            </div>
          )}

          {tab === 'json' && (
            <div className="adm-card">
              <h3>Full site JSON</h3>
              <p className="adm-muted" style={{ marginBottom: 12 }}>
                Edit any field directly. Click "Apply to editor" to push changes into the form tabs, then "Save site" to persist.
              </p>
              <textarea
                className="adm-rawtextarea"
                value={rawText}
                onChange={function(e) { setRawText(e.target.value); }}
                spellCheck={false}
              />
              {rawErr ? <div className="adm-error">{rawErr}</div> : null}
              <div className="adm-row-actions">
                <button type="button" className="adm-btn adm-btn--primary" onClick={applyRaw}>
                  Apply to editor
                </button>
                <button type="button" className="adm-btn" onClick={function() { setRawText(JSON.stringify(content, null, 2)); setRawErr(''); }}>
                  Reset from memory
                </button>
                <button type="button" className="adm-btn adm-btn--ghost" onClick={function() { exportBlob(content); }}>
                  Export JSON file
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// --- App root ----------------------------------------------------------------

function App() {
  const [authed, setAuthed] = useState(null);

  useEffect(function() {
    apiJson('/api/admin/me')
      .then(function() { setAuthed(true); })
      .catch(function() { setAuthed(false); });
  }, []);

  if (authed === null) {
    return (
      <div className="adm-login">
        <div className="adm-login__card">
          <p className="adm-muted">Checking session...</p>
        </div>
      </div>
    );
  }

  if (!authed) return React.createElement(LoginScreen, { onAuthed: function() { setAuthed(true); } });
  return React.createElement(Dashboard, { onLogout: function() { setAuthed(false); } });
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
