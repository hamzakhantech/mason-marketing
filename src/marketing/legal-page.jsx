import React from "react";
// Which page to render is determined by window.location.pathname.

const LAST_UPDATED = "12 May 2026";
const COMPANY = "Certiva LLC";
const EMAIL = "connect@masononsite.com";

// ── Privacy Policy ──────────────────────────────────────────────────────────

const PrivacyContent = () => (
  <div className="prose-section" style={{maxWidth:720,margin:"0 auto"}}>
    <h1 style={{fontSize:36,fontWeight:800,marginBottom:8}}>Privacy Policy</h1>
    <p style={{fontSize:13,color:"var(--text-muted)",marginBottom:48}}>Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Effective date: 1 January 2025</p>

    <p>This Privacy Policy describes how {COMPANY} ("MASON", "we", "us", or "our") collects, uses, and shares information about you when you use the MASON platform at masononsite.com and app.masononsite.com (collectively, the "Service"). By using the Service you agree to the collection and use of information as described in this policy.</p>

    <h2>1. Information we collect</h2>
    <h3>Information you provide directly</h3>
    <p>When you create an account we collect your name, work email address, and optionally your company name and phone number. When you use the Service you create content including project records, RFIs, issues, daily logs, documents, BIM model files, cost records, and messages. This content is stored on your behalf and is yours.</p>
    <h3>Information collected automatically</h3>
    <p>When you access the Service we automatically collect log data including your IP address, browser type and version, pages visited, time spent, and referring URL. We use cookies and similar technologies to maintain your session and remember preferences. We do not use advertising cookies or share your data with advertising networks.</p>
    <h3>Files and uploads</h3>
    <p>Files you upload to MASON — including IFC models, PDF documents, images, and reports — are stored on Cloudflare R2 object storage with server-side encryption. You retain ownership of all uploaded files.</p>

    <h2>2. How we use your information</h2>
    <p>We use the information we collect to:</p>
    <ul>
      <li>Provide, maintain, and improve the MASON platform</li>
      <li>Authenticate your identity and maintain your session</li>
      <li>Process your subscription and manage billing</li>
      <li>Send you transactional emails (account confirmation, password reset, notifications you have configured)</li>
      <li>Respond to your support requests and enquiries</li>
      <li>Monitor the security and integrity of the Service</li>
      <li>Comply with legal obligations</li>
    </ul>
    <p>We do not sell your personal data. We do not use your project data to train AI models. The AI Concierge within MASON sends project context to a third-party AI provider (DeepSeek) to generate responses — see Section 4 for details.</p>

    <h2>3. Legal basis for processing (EU/UK users)</h2>
    <p>If you are located in the European Union or United Kingdom, we process your personal data on the following legal bases: (a) performance of our contract with you when providing the Service; (b) our legitimate interests in maintaining security and improving the Service; (c) your consent where you have provided it; and (d) compliance with legal obligations. You may withdraw consent at any time without affecting the lawfulness of processing already performed.</p>

    <h2>4. Third-party services and AI</h2>
    <p>MASON uses the following third-party services to operate:</p>
    <ul>
      <li><strong>Render</strong> — API hosting (US East). Render's privacy policy applies to data processed by the API server.</li>
      <li><strong>Vercel</strong> — Frontend hosting and edge network. Vercel's privacy policy applies to frontend delivery.</li>
      <li><strong>Cloudflare R2</strong> — File storage. Files are stored encrypted at rest.</li>
      <li><strong>DeepSeek</strong> — AI Concierge responses. When you use the Concierge, relevant project context (RFI text, issue descriptions, document names, schedule data) is sent to DeepSeek's API to generate a response. DeepSeek processes this data according to their privacy policy. We limit the data sent to what is necessary for the specific query.</li>
      <li><strong>Stripe</strong> — Payment processing. We do not store payment card numbers. Stripe processes billing data under their own privacy policy and PCI DSS compliance programme.</li>
    </ul>

    <h2>5. Data sharing</h2>
    <p>We do not sell your personal data. We share your information only in the following circumstances:</p>
    <ul>
      <li>With the third-party services listed in Section 4 to operate the Service</li>
      <li>With other members of your organisation account, consistent with the permissions you and your account administrator have configured</li>
      <li>With subcontractors and external parties you invite to a project, scoped to the access level you grant them</li>
      <li>When required by law, court order, or governmental authority</li>
      <li>In connection with a merger, acquisition, or sale of all or substantially all of our assets, with notice to affected users</li>
    </ul>

    <h2>6. Data retention</h2>
    <p>We retain your account data and project content for as long as your account is active. When you cancel your account, we retain your data for 90 days to allow for reactivation, after which it is permanently deleted from our systems. You may request earlier deletion by contacting {EMAIL}. Backup copies may persist for up to 30 additional days after deletion from primary storage.</p>

    <h2>7. Your rights</h2>
    <p>Depending on your location, you may have the right to: access the personal data we hold about you; correct inaccurate data; request deletion of your data; restrict or object to processing; data portability; and withdraw consent. To exercise any of these rights, contact us at {EMAIL}. We will respond within 30 days. EU/UK users have the right to lodge a complaint with their local supervisory authority.</p>

    <h2>8. Security</h2>
    <p>We implement technical and organisational measures to protect your data including TLS encryption in transit, AES-256 encryption at rest, access controls, and audit logging. No system is perfectly secure. If you discover a potential security issue, report it to connect@masononsite.com.</p>

    <h2>9. Cookies</h2>
    <p>MASON uses cookies for authentication (session tokens), preference storage (theme, UI state), and basic analytics (page view counting without cross-site tracking). We do not use advertising cookies. You may disable cookies in your browser settings, but this will prevent you from signing in to the Service.</p>

    <h2>10. Children</h2>
    <p>The Service is not directed at persons under 18 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us at {EMAIL} and we will delete it promptly.</p>

    <h2>11. Changes to this policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify active account holders by email at least 14 days before material changes take effect. The "Last updated" date at the top of this page reflects the most recent revision.</p>

    <h2>12. Contact</h2>
    <p>Questions about this Privacy Policy or our data practices should be directed to:</p>
    <p><strong>{COMPANY}</strong><br />Email: <a href={"mailto:"+EMAIL} style={{color:"var(--accent)"}}>{EMAIL}</a></p>
    <div style={{marginTop:48,display:"flex",gap:14,flexWrap:"wrap"}}>
      <a href="/terms" className="btn btn-ghost">Read Terms of Service</a>
      <a href="security.html" className="btn btn-ghost">Security documentation</a>
      <a href="/contact" className="btn btn-ghost">Contact us</a>
    </div>
  </div>
);

// ── Terms of Service ─────────────────────────────────────────────────────────

const TermsContent = () => (
  <div className="prose-section" style={{maxWidth:720,margin:"0 auto"}}>
    <h1 style={{fontSize:36,fontWeight:800,marginBottom:8}}>Terms of Service</h1>
    <p style={{fontSize:13,color:"var(--text-muted)",marginBottom:48}}>Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Effective date: 1 January 2025</p>

    <p>These Terms of Service ("Terms") form a legal agreement between you and {COMPANY} ("MASON", "we", "us", "our") governing your use of the MASON construction management platform at masononsite.com and app.masononsite.com (the "Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>

    <h2>1. Eligibility and accounts</h2>
    <p>You must be at least 18 years old and have the legal authority to enter into a binding agreement to use the Service. If you are using the Service on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>

    <h2>2. The Service</h2>
    <p>MASON provides a cloud-based construction project management platform including modules for BIM viewing, RFI and submittal management, issue tracking, document management, daily logs, schedule, cost, and AI-assisted features (the "Concierge"). The Service is provided "as is" subject to these Terms and our reasonable efforts to maintain availability.</p>

    <h2>3. Subscription and payment</h2>
    <p>Access to the Service beyond the free trial requires a paid subscription. Subscription fees are billed per active project per month (or per year at a discounted rate). You authorise us to charge the payment method on file at the start of each billing cycle. Fees are non-refundable except where required by applicable law. We may change pricing with 30 days' notice to active subscribers. Continued use after the notice period constitutes acceptance of the new pricing.</p>

    <h2>4. Free trial</h2>
    <p>We offer a 30-day free trial on the Professional plan for new accounts. No credit card is required to start a trial. At the end of the trial period, you must subscribe to continue accessing the Service. Trial data is retained for 14 days after trial expiry, after which it may be deleted if no subscription is established.</p>

    <h2>5. Your content</h2>
    <p>You retain full ownership of all content you upload or create within the Service, including project files, documents, IFC models, RFIs, issues, and records ("Your Content"). You grant us a limited, non-exclusive licence to store, process, and display Your Content solely for the purpose of providing the Service to you. We do not use Your Content to train AI models. You are responsible for ensuring you have the rights to upload all content and that doing so does not violate applicable law or third-party rights.</p>

    <h2>6. Acceptable use</h2>
    <p>You agree not to: (a) use the Service for any unlawful purpose; (b) upload content that infringes intellectual property rights; (c) attempt to gain unauthorised access to any part of the Service or to other users' accounts; (d) reverse engineer, decompile, or attempt to extract source code from the Service; (e) use automated means to scrape or extract data from the Service; (f) upload malicious code or files; or (g) use the Service in a manner that could damage, disable, or impair the Service or other users' access to it.</p>

    <h2>7. AI features</h2>
    <p>The AI Concierge feature within MASON sends project context to a third-party AI provider to generate responses. AI-generated responses may be inaccurate, incomplete, or inappropriate for your specific situation. You are responsible for verifying the accuracy of any AI-generated content before relying on it for project decisions. We do not warrant that AI responses are accurate, complete, or suitable for any particular purpose.</p>

    <h2>8. Availability and service levels</h2>
    <p>We aim to maintain high availability of the Service but do not guarantee uninterrupted access. Planned maintenance windows will be communicated in advance where reasonably practicable. Scale plan subscribers are entitled to the uptime SLA set out in their contract. All other subscribers agree that downtime does not entitle them to refunds unless caused by gross negligence or wilful misconduct on our part.</p>

    <h2>9. Intellectual property</h2>
    <p>The MASON platform, including its software, design, and documentation, is owned by {COMPANY} and protected by intellectual property laws. Nothing in these Terms grants you any rights in the MASON platform beyond the limited right to use the Service as described herein. The MASON name, wordmark, and logo are trademarks of {COMPANY}.</p>

    <h2>10. Limitation of liability</h2>
    <p>To the maximum extent permitted by applicable law, {COMPANY} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of or inability to use the Service. Our total cumulative liability to you for any claims arising from these Terms or the Service shall not exceed the total fees paid by you to us in the 12 months preceding the event giving rise to the claim.</p>

    <h2>11. Disclaimer of warranties</h2>
    <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be error-free, uninterrupted, or free of harmful components.</p>

    <h2>12. Termination</h2>
    <p>You may cancel your subscription at any time through the account settings or by contacting connect@masononsite.com. Cancellation takes effect at the end of the current billing period. We may suspend or terminate your access if you breach these Terms, with notice where reasonably practicable. Upon termination, your right to use the Service ceases. We will retain your data for 90 days post-termination to allow for reactivation or data export, after which it will be permanently deleted.</p>

    <h2>13. Governing law and disputes</h2>
    <p>These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any dispute arising from these Terms or the Service shall be resolved through binding arbitration under the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction to prevent irreparable harm. You waive any right to participate in a class action lawsuit or class-wide arbitration.</p>

    <h2>14. Changes to these Terms</h2>
    <p>We may update these Terms from time to time. We will notify active account holders by email at least 14 days before material changes take effect. Continued use of the Service after the effective date of changes constitutes acceptance of the revised Terms.</p>

    <h2>15. Contact</h2>
    <p>Questions about these Terms should be directed to:</p>
    <p><strong>{COMPANY}</strong><br />Email: <a href={"mailto:"+EMAIL} style={{color:"var(--accent)"}}>{EMAIL}</a></p>
    <div style={{marginTop:48,display:"flex",gap:14,flexWrap:"wrap"}}>
      <a href="/privacy" className="btn btn-ghost">Read Privacy Policy</a>
      <a href="security.html" className="btn btn-ghost">Security documentation</a>
      <a href="/contact" className="btn btn-ghost">Contact us</a>
    </div>
  </div>
);

// ── Shell ────────────────────────────────────────────────────────────────────

export function LegalArticle({ variant }) {
  const isTerms = variant === "terms";
  return (
    <main>
        <section className="section" style={{paddingTop:96}}>
          <div className="container">
            {isTerms ? <TermsContent /> : <PrivacyContent />}
          </div>
        </section>
    </main>
  );
}
