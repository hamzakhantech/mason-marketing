// MASON — Admin CMS  (served only at /admin/user-dashboard/adminpanel)
// Protected by /api/admin/* JWT session. Never loaded on public pages.

const { useState, useEffect, useCallback } = React;

// ─── Helpers ─────────────────────────────────────────────────────────────────

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
  return d;
}

async function apiJson(path, options = {}) {
  const { headers: optHeaders, ...rest } = options;
  const headers = { ...(optHeaders || {}) };
  if (rest.body != null && headers['Content-Type'] == null) {
    headers['Content-Type'] = 'application/json';
  }
  const res = await fetch(path, { credentials: 'include', ...rest, headers });
  const data = await res.json().catch(() => ({}));
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

// ─── Small UI atoms ───────────────────────────────────────────────────────────

function Field({ label, value, onChange, rows, type, placeholder }) {
  return (
    <div className="adm-field">
      <label>{label}</label>
      {rows ? (
        <textarea
          value={value ?? ''}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          rows={rows}
        />
      ) : (
        <input
          type={type || 'text'}
          value={value ?? ''}
          placeholder={placeholder}
          onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
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
        onClick={() => onChange(!value)}
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
        <input type="text" value={value ?? ''} placeholder="https://…" onChange={e => onChange(e.target.value)} style={{ flex: 1 }} />
        <label className="adm-btn adm-btn--ghost adm-uploadbtn" title="Upload image">
          ↑ Upload
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => onUpload && onUpload(e.target.files[0])} />
        </label>
      </div>
      {value ? <img src={value} alt="" className="adm-imagefield__preview" /> : null}
    </div>
  );
}

function SectionDivider() {
  return <div className="adm-divider" />;
}

// ─── Login ────────────────────────────────────────────────────────────────────

function LoginScreen({ onAuthed }) {
  const [password, setPassword] = useState('');
  const [err, setErr]           = useState('');
  const [busy, setBusy]         = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr(''); setBusy(true);
    try {
      await apiJson('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
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
          <img src="/assets/mason_horizontal_dark.png" alt="MASON" onError={e => { e.target.style.display = 'none'; }} />
          <span className="adm-login__logofallback">MASON</span>
        </div>
        <h1>Admin CMS</h1>
        <p>Manage site content for masononsite.com.</p>
        <form onSubmit={submit}>
          <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="Enter admin password" />
          <button className="adm-btn adm-btn--primary" type="submit" disabled={busy} style={{ width: '100%', marginTop: 8 }}>
            {busy ? 'Signing in…' : 'Sign in'}
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

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ onLogout }) {
  const [tab,      setTab]      = useState('overview');
  const [content,  setContent]  = useState(null);
  const [loadErr,  setLoadErr]  = useState('');
  const [saveMsg,  setSaveMsg]  = useState('');
  const [saveMsgOk, setSaveMsgOk] = useState(true);
  const [busy,     setBusy]     = useState(false);
  const [tierIdx,  setTierIdx]  = useState(0);
  const [rawText,  setRawText]  = useState('');
  const [rawErr,   setRawErr]   = useState('');

  const patch = useCallback((path, value) => {
    setContent(prev => {
      const next = deepClone(prev);
      setNested(next, path, value);
      return next;
    });
  }, []);

  const reload = useCallback(async () => {
    setLoadErr('');
    try {
      const data = ensureShape(await apiJson('/api/cms/public-content'));
      setContent(data);
      setRawText(JSON.stringify(data, null, 2));
    } catch (e) {
      setLoadErr(e.message || String(e));
    }
  }, []);

  useEffect(() => { reload(); }, [reload]);

  useEffect(() => {
    if (tab === 'json' && content) setRawText(JSON.stringify(content, null, 2));
  }, [tab]);

  function showMsg(msg, ok = true) {
    setSaveMsg(msg); setSaveMsgOk(ok);
    setTimeout(() => setSaveMsg(''), 6000);
  }

  async function save() {
    setBusy(true);
    try {
      const res = await apiJson('/api/cms/save', { method: 'POST', body: JSON.stringify(content) });
      if (res.persisted) {
        showMsg('✓ Saved to Blob.' + (res.url ? ' URL: ' + res.url : ''));
      } else {
        showMsg('No Blob token — use Export JSON and commit content.json to git.', false);
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
    reader.onload = async () => {
      const dataUrl = String(reader.result);
      const i = dataUrl.indexOf('base64,');
      const base64 = i >= 0 ? dataUrl.slice(i + 7) : '';
      try {
        const up = await apiJson('/api/cms/upload', {
          method: 'POST',
          body: JSON.stringify({ filename: file.name, base64, contentType: file.type || 'application/octet-stream' }),
        });
        patch(field, up.url);
        showMsg('✓ Uploaded — URL applied to ' + field.split('.').pop());
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

  // ── Loading / error states ─────────────────────────────────────────────────

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
          <p className="adm-muted">Loading site content…</p>
        </div>
      </div>
    );
  }

  // ── Tab definitions ────────────────────────────────────────────────────────

  const tabs = [
    ['overview',     '🏠 Overview'],
    ['home',         '✏️ Homepage'],
    ['pricing',      '💳 Pricing'],
    ['branding',     '🎨 Brand & Media'],
    ['seo',          '🔍 SEO'],
    ['analytics',    '📊 Analytics'],
    ['payments',     '💰 Payments'],
    ['integrations', '🔌 Integrations'],
    ['json',         '{ } Raw JSON'],
  ];

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="adm-shell">
      {/* Sidebar */}
      <aside className="adm-sidebar">
        <div className="adm-sidebar__brand">
          <span className="adm-sidebar__brandname">MASON</span>
          <span className="adm-sidebar__brandtag">CMS</span>
        </div>
        {tabs.map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={'adm-nav-btn' + (tab === id ? ' is-active' : '')}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <a
          href="https://masononsite.com"
          target="_blank"
          rel="noreferrer"
          className="adm-nav-btn"
          style={{ textDecoration: 'none', marginTop: 8, fontSize: 11, opacity: 0.6 }}
        >
          ↗ View live site
        </a>
      </aside>

      {/* Main */}
      <div className="adm-main">
        <header className="adm-topbar">
          <span className="adm-topbar__title">MASON site editor</span>
          {saveMsg
            ? <span className={'adm-topbar__hint' + (saveMsgOk ? ' is-ok' : ' is-err')}>{saveMsg}</span>
            : <span className="adm-topbar__hint" />
          }
          <button type="button" className="adm-btn adm-btn--ghost" onClick={() => exportBlob(content)}>
            Export JSON
          </button>
          <button type="button" className="adm-btn adm-btn--primary" disabled={busy} onClick={save}>
            {busy ? 'Saving…' : 'Save site'}
          </button>
          <button type="button" className="adm-btn adm-btn--danger" onClick={logout}>
            Log out
          </button>
        </header>

        <div className="adm-scroll">

          {/* ── Overview ──────────────────────────────────────────────── */}
          {tab === 'overview' && (
            <>
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
                    ['BLOB_READ_WRITE_TOKEN', 'Optional — enables live Save (Vercel Blob)'],
                    ['CONTENT_BLOB_URL',      'Optional — set after first Blob save'],
                  ].map(([k, v]) => (
                    <div className="adm-checklist__row" key={k}>
                      <span className="adm-code">{k}</span>
                      <span className="adm-muted">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="adm-card">
                <h3>How saving works</h3>
                <p className="adm-muted">
                  <strong style={{ color: 'var(--adm-text)' }}>With Blob token:</strong> Click "Save site" → content saved to Vercel Blob. Copy the returned URL and set it as <span className="adm-code">CONTENT_BLOB_URL</span>. The live site reads from Blob on every request.
                </p>
                <p className="adm-muted" style={{ marginTop: 8 }}>
                  <strong style={{ color: 'var(--adm-text)' }}>Without Blob token:</strong> Click "Export JSON" → download content.json → commit to git → redeploy.
                </p>
              </div>
            </>
          )}

          {/* ── Homepage ──────────────────────────────────────────────── */}
          {tab === 'home' && (
            <>
              <div className="adm-card">
                <h3>Site settings</h3>
                <div className="adm-grid2">
                  <Field label="App URL" value={content.site.appUrl} onChange={v => patch('site.appUrl', v)} placeholder="https://app.masononsite.com" />
                  <Field label="Support email" value={content.site.supportEmail} onChange={v => patch('site.supportEmail', v)} placeholder="hello@masononsite.com" />
                  <Field label="Trial days" type="number" value={content.site.trialDays} onChange={v => patch('site.trialDays', v)} />
                  <Field label="Company name" value={content.site.name} onChange={v => patch('site.name', v)} />
                </div>
              </div>

              <div className="adm-card">
                <h3>Hero section</h3>
                <div className="adm-grid2">
                  <Field label="Eyebrow badge" value={content.hero.eyebrow} onChange={v => patch('hero.eyebrow', v)} placeholder="e.g. Now in public beta" />
                  <Field label="Headline accent word" value={content.hero.headlineAccent} onChange={v => patch('hero.headlineAccent', v)} placeholder="e.g. Smarter" />
                </div>
                <Field label="Headline" value={content.hero.headline} onChange={v => patch('hero.headline', v)} rows={2} />
                <Field label="Subheadline" value={content.hero.subheadline} onChange={v => patch('hero.subheadline', v)} rows={3} />
                <div className="adm-grid2">
                  <Field label="Primary CTA" value={content.hero.ctaPrimary} onChange={v => patch('hero.ctaPrimary', v)} placeholder="Start free trial" />
                  <Field label="Secondary CTA" value={content.hero.ctaSecondary} onChange={v => patch('hero.ctaSecondary', v)} placeholder="See how it works" />
                  <Field label="Badge text 1" value={content.hero.meta1} onChange={v => patch('hero.meta1', v)} />
                  <Field label="Badge text 2" value={content.hero.meta2} onChange={v => patch('hero.meta2', v)} />
                </div>
              </div>

              <div className="adm-card">
                <h3>Section visibility</h3>
                <p className="adm-muted" style={{ marginBottom: 12 }}>Toggle homepage sections on/off.</p>
                {Object.entries(content.sections || {}).map(([k, v]) => (
                  <ToggleRow key={k} label={k} value={v !== false} onChange={on => patch('sections.' + k, on)} />
                ))}
              </div>

              <div className="adm-card">
                <h3>Stats bar</h3>
                {(content.stats || []).map((s, i) => (
                  <div key={i} className="adm-repeatable">
                    <div className="adm-repeatable__header">
                      <strong>Stat {i + 1}</strong>
                      <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={() => {
                        const next = deepClone(content.stats);
                        next.splice(i, 1);
                        patch('stats', next);
                      }}>Remove</button>
                    </div>
                    <div className="adm-grid2">
                      <Field label="Value" value={s.n} onChange={v => patch('stats.' + i + '.n', v)} placeholder="e.g. 10,000+" />
                      <Field label="Note" value={s.note} onChange={v => patch('stats.' + i + '.note', v)} placeholder="e.g. projects" />
                    </div>
                    <Field label="Label" value={s.label} onChange={v => patch('stats.' + i + '.label', v)} rows={2} />
                  </div>
                ))}
                <button type="button" className="adm-btn" onClick={() => {
                  const next = deepClone(content.stats || []);
                  next.push({ n: '', note: '', label: '' });
                  patch('stats', next);
                }}>+ Add stat</button>
              </div>

              <div className="adm-card">
                <h3>Testimonials</h3>
                {(content.testimonials || []).map((t, i) => (
                  <div key={i} className="adm-repeatable">
                    <div className="adm-repeatable__header">
                      <strong>{t.name || 'Testimonial ' + (i + 1)}</strong>
                      <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={() => {
                        const next = deepClone(content.testimonials);
                        next.splice(i, 1);
                        patch('testimonials', next);
                      }}>Remove</button>
                    </div>
                    <Field label="Quote" value={t.quote} onChange={v => patch('testimonials.' + i + '.quote', v)} rows={3} />
                    <div className="adm-grid2">
                      <Field label="Name" value={t.name} onChange={v => patch('testimonials.' + i + '.name', v)} />
                      <Field label="Role / company" value={t.role} onChange={v => patch('testimonials.' + i + '.role', v)} />
                    </div>
                    <Field label="Avatar URL (optional)" value={t.avatar} onChange={v => patch('testimonials.' + i + '.avatar', v)} placeholder="https://…" />
                  </div>
                ))}
                <button type="button" className="adm-btn" onClick={() => {
                  const next = deepClone(content.testimonials || []);
                  next.push({ quote: '', name: '', role: '', avatar: '' });
                  patch('testimonials', next);
                }}>+ Add testimonial</button>
              </div>
            </>
          )}

          {/* ── Pricing ───────────────────────────────────────────────── */}
          {tab === 'pricing' && (
            <>
              <div className="adm-card">
                <h3>Pricing tiers</h3>
                {content.pricing.tiers.length > 0 ? (
                  <div className="adm-field">
                    <label>Edit tier</label>
                    <select
                      value={tierIdx}
                      onChange={e => setTierIdx(Number(e.target.value))}
                    >
                      {content.pricing.tiers.map((t, i) => (
                        <option key={t.id || i} value={i}>{t.name || 'Tier ' + (i + 1)}</option>
                      ))}
                    </select>
                  </div>
                ) : null}

                {(() => {
                  const t = content.pricing.tiers[tierIdx];
                  if (!t) return (
                    <p className="adm-muted">No tiers yet. Add one below.</p>
                  );
                  const idx = tierIdx;
                  return (
                    <>
                      <div className="adm-repeatable__header" style={{ marginBottom: 14 }}>
                        <strong>{t.name || 'Tier ' + (idx + 1)}</strong>
                        <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={() => {
                          const next = deepClone(content.pricing.tiers);
                          next.splice(idx, 1);
                          patch('pricing.tiers', next);
                          setTierIdx(Math.max(0, idx - 1));
                        }}>Remove tier</button>
                      </div>
                      <div className="adm-grid2">
                        <Field label="ID (slug)" value={t.id} onChange={v => patch('pricing.tiers.' + idx + '.id', v)} placeholder="starter" />
                        <Field label="Display name" value={t.name} onChange={v => patch('pricing.tiers.' + idx + '.name', v)} placeholder="Starter" />
                      </div>
                      <Field label="Tagline" value={t.tagline} onChange={v => patch('pricing.tiers.' + idx + '.tagline', v)} />
                      <div className="adm-grid2">
                        <Field label="Monthly price ($)" type="number" value={t.monthly} onChange={v => patch('pricing.tiers.' + idx + '.monthly', v)} />
                        <Field label="Annual price ($/mo)" type="number" value={t.annual} onChange={v => patch('pricing.tiers.' + idx + '.annual', v)} />
                      </div>
                      <div className="adm-grid2">
                        <Field label="Projects label" value={t.projectsLabel} onChange={v => patch('pricing.tiers.' + idx + '.projectsLabel', v)} placeholder="Up to 3 projects" />
                        <Field label="CTA button text" value={t.cta} onChange={v => patch('pricing.tiers.' + idx + '.cta', v)} placeholder="Start free trial" />
                      </div>
                      <Field
                        label="Features (one per line)"
                        value={(t.features || []).join('\n')}
                        onChange={v => patch('pricing.tiers.' + idx + '.features', v.split('\n').map(x => x.trim()).filter(Boolean))}
                        rows={12}
                        placeholder={"Feature 1\nFeature 2\nFeature 3"}
                      />
                      <ToggleRow
                        label="Featured / highlighted tier"
                        sublabel="Shows as 'Most Popular'. Only one tier should be highlighted."
                        value={!!t.highlight}
                        onChange={v => {
                          const next = deepClone(content.pricing.tiers);
                          next.forEach((x, j) => { x.highlight = j === idx ? v : false; });
                          patch('pricing.tiers', next);
                        }}
                      />
                    </>
                  );
                })()}

                <SectionDivider />
                <button type="button" className="adm-btn" onClick={() => {
                  const next = deepClone(content.pricing.tiers);
                  const newIdx = next.length;
                  next.push({ id: 'tier-' + newIdx, name: 'New tier', tagline: '', monthly: 0, annual: 0, features: [], cta: 'Get started', highlight: false });
                  patch('pricing.tiers', next);
                  setTierIdx(newIdx);
                }}>+ Add tier</button>
              </div>

              <div className="adm-card">
                <h3>Enterprise block</h3>
                <Field label="Heading" value={content.pricing.enterprise?.heading} onChange={v => patch('pricing.enterprise.heading', v)} />
                <Field label="Body text" value={content.pricing.enterprise?.body} onChange={v => patch('pricing.enterprise.body', v)} rows={3} />
                <Field label="CTA text" value={content.pricing.enterprise?.cta} onChange={v => patch('pricing.enterprise.cta', v)} />
              </div>

              <div className="adm-card">
                <h3>Pricing FAQ</h3>
                {(content.pricing.faq || []).map((item, i) => (
                  <div key={i} className="adm-repeatable">
                    <div className="adm-repeatable__header">
                      <strong>FAQ {i + 1}</strong>
                      <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={() => {
                        const next = deepClone(content.pricing.faq);
                        next.splice(i, 1);
                        patch('pricing.faq', next);
                      }}>Remove</button>
                    </div>
                    <Field label="Question" value={item.q} onChange={v => patch('pricing.faq.' + i + '.q', v)} />
                    <Field label="Answer" value={item.a} onChange={v => patch('pricing.faq.' + i + '.a', v)} rows={3} />
                  </div>
                ))}
                <button type="button" className="adm-btn" onClick={() => {
                  const next = deepClone(content.pricing.faq || []);
                  next.push({ q: '', a: '' });
                  patch('pricing.faq', next);
                }}>+ Add FAQ item</button>
              </div>
            </>
          )}

          {/* ── Brand & media ─────────────────────────────────────────── */}
          {tab === 'branding' && (
            <div className="adm-card">
              <h3>Logos & favicon</h3>
              <p className="adm-muted" style={{ marginBottom: 16 }}>
                Paste a URL or upload an image. Uploads go to Vercel Blob (requires <span className="adm-code">BLOB_READ_WRITE_TOKEN</span>).
              </p>
              <ImageField
                label="Horizontal logo — dark background"
                value={content.branding.logoHorizontalDark}
                onChange={v => patch('branding.logoHorizontalDark', v)}
                onUpload={f => uploadImage('branding.logoHorizontalDark', f)}
              />
              <ImageField
                label="Horizontal logo — light background"
                value={content.branding.logoHorizontalLight}
                onChange={v => patch('branding.logoHorizontalLight', v)}
                onUpload={f => uploadImage('branding.logoHorizontalLight', f)}
              />
              <ImageField
                label="Favicon"
                value={content.branding.favicon}
                onChange={v => patch('branding.favicon', v)}
                onUpload={f => uploadImage('branding.favicon', f)}
              />
              <ImageField
                label="Default OG / social share image"
                value={content.branding.ogDefaultImage}
                onChange={v => patch('branding.ogDefaultImage', v)}
                onUpload={f => uploadImage('branding.ogDefaultImage', f)}
              />
            </div>
          )}

          {/* ── SEO ───────────────────────────────────────────────────── */}
          {tab === 'seo' && (
            <>
              <div className="adm-card">
                <h3>Global SEO defaults</h3>
                <Field label="Site URL (canonical base)" value={content.seo.siteUrl} onChange={v => patch('seo.siteUrl', v.replace(/\/$/, ''))} placeholder="https://masononsite.com" />
                <div className="adm-grid2">
                  <Field label="Default page title" value={content.seo.global.defaultTitle} onChange={v => patch('seo.global.defau