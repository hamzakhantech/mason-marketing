// auth.jsx -- Shared auth shell: brand bar, visual side, page chrome.

const AuthShell = ({ children, visual }) => (
  <div className="auth-page">
    <div className="auth-form-side">
      <div className="auth-form-side__top">
        <a href="index.html" className="auth-form-side__brand" aria-label="MASON home">
          <img src="assets/mason_horizontal_dark.png" alt="MASON" className="brand__wordmark--dark" />
          <img src="assets/mason_horizontal_light.png" alt="MASON" className="brand__wordmark--light" />
        </a>
        <a href="index.html" className="auth-form-side__back"><- Back to site</a>
      </div>

      {children}

      <div className="auth-form__legal">
        (c) 2026 MASON . <a href="privacy.html">Privacy</a> . <a href="terms.html">Terms</a>
      </div>
    </div>

    <aside className="auth-vis-side">
      <div className="grid-bg" aria-hidden="true" />
      <div className="auth-vis-side__glow" aria-hidden="true" />
      {visual}
    </aside>
  </div>
);

const SignInVisual = () => (
  <div className="auth-vis-card">
    <span className="eyebrow">From the field</span>
    <p className="auth-vis-card__quote">
      We replaced three apps and a WhatsApp group with MASON. The foreman's daily log
      writes itself now -- and the RFI loop went from days to hours.
    </p>
    <div className="auth-vis-card__by">
      <span className="av" />
      <div>
        <b style={{ color: "var(--text)", display: "block" }}>Marta Reis</b>
        <span>Senior PM . Riverside Tower</span>
      </div>
    </div>

    <div className="auth-vis-card__module">
      <div className="auth-vis-card__module-hd">
        <span className="chip accent"><span className="dot" /> Live snapshot</span>
        <span className="mono">PORTFOLIO . 47 ACTIVE</span>
      </div>
      <div className="auth-vis-card__metrics">
        <div className="auth-vis-card__metric"><span>Open RFIs</span><b>23</b></div>
        <div className="auth-vis-card__metric is-accent"><span>Clashes</span><b>4</b></div>
        <div className="auth-vis-card__metric"><span>On-time</span><b>92%</b></div>
      </div>
    </div>
  </div>
);

const RegisterVisual = () => (
  <div className="auth-vis-card">
    <span className="eyebrow">Onboarding</span>
    <p className="auth-vis-card__quote">
      Spin up a project in MASON in minutes -- invite your team, federate the model,
      route RFIs to the right inbox. Concierge handles the rest.
    </p>
    <ul className="checklist" style={{ marginTop: 8 }}>
      <li><IconCheck size={16} stroke={2} /> Unlimited projects on every plan</li>
      <li><IconCheck size={16} stroke={2} /> Role-based access from day one</li>
      <li><IconCheck size={16} stroke={2} /> Native Android app for the field</li>
      <li><IconCheck size={16} stroke={2} /> Concierge AI grounded in your portfolio</li>
    </ul>
  </div>
);

const ForgotVisual = () => (
  <div className="auth-vis-card">
    <span className="eyebrow">Account recovery</span>
    <p className="auth-vis-card__quote">
      We'll send a single-use code to the email on your account. No magic links you
      can lose, no security questions to forget.
    </p>
    <div className="auth-vis-card__by">
      <span className="av" style={{ background: "linear-gradient(135deg,#5fb37a,#3a8454)" }} />
      <div>
        <b style={{ color: "var(--text)", display: "block" }}>Need help?</b>
        <span>connect@masononsite.com . usually under 4h</span>
      </div>
    </div>
  </div>
);

Object.assign(window, { AuthShell, SignInVisual, RegisterVisual, ForgotVisual });
