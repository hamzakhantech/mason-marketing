import React from "react";
import { Link } from "react-router-dom";
import { ChromeIcon } from "./ChromeIcon.jsx";

const FCOLS = [
  {
    h: "Platform",
    items: [
      ["BIM Viewer", "/platform"],
      ["Schedule", "/platform"],
      ["RFIs", "/platform"],
      ["Issues and Punch", "/platform"],
      ["Daily Logs", "/platform"],
      ["AI Concierge", "/platform"],
      ["Mobile Apps", "/mobile.html"],
      ["Integrations", "/integrations.html"],
    ],
  },
  {
    h: "Solutions",
    items: [
      ["General Contractors", "/enterprise.html"],
      ["Owners and Developers", "/enterprise.html"],
      ["Subcontractors", "/smb.html"],
      ["Healthcare", "/case-studies"],
      ["Infrastructure", "/case-studies"],
    ],
  },
  {
    h: "Company",
    items: [
      ["About", "/about"],
      ["Case Studies", "/case-studies"],
      ["Field Notes Blog", "/blog"],
      ["Security · SOC 2", "/security.html"],
      ["Contact", "/contact"],
      ["Pricing", "/pricing"],
    ],
  },
];

function FooterLink({ href, children }) {
  if (href.startsWith("/") && !href.endsWith(".html")) {
    return <Link to={href}>{children}</Link>;
  }
  return <a href={href}>{children}</a>;
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg"></div>
      <div className="container">
        <div className="footer-top">
          <div className="footer-cta">
            <div className="label-num" style={{ color: "rgba(242,238,229,.5)" }}>
              SECTION · 08 — CONTACT
            </div>
            <h2 className="display" style={{ marginTop: 8 }}>
              Pour the
              <br />
              foundation
              <br />
              <em className="serif-it">today.</em>
            </h2>
            <p style={{ color: "rgba(242,238,229,.7)", maxWidth: "34ch", marginTop: 14 }}>
              14-day pilot on your live project. We bring the model. No credit card, no procurement call.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              <Link className="btn primary mason-border-sweep" to="/contact">
                Book a demo <ChromeIcon name="arrow" size={12} />
              </Link>
            </div>
          </div>
          {FCOLS.map((col) => (
            <div className="footer-col" key={col.h}>
              <h5>{col.h}</h5>
              <ul>
                {col.items.map(([label, href]) => (
                  <li key={label}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-mid">
          <div className="ml">
            <ChromeIcon name="sparkle" size={14} />
            <input type="email" placeholder="your@email.com — get the monthly Field Notes dispatch" />
            <button type="button">Subscribe</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span className="label-num" style={{ color: "rgba(242,238,229,.5)" }}>
              FOLLOW
            </span>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">
                In
              </a>
              <a href="#" aria-label="X">
                X
              </a>
              <a href="#" aria-label="YouTube">
                Yt
              </a>
              <a href="#" aria-label="GitHub">
                Gh
              </a>
            </div>
          </div>
        </div>
        <div className="footer-mark" aria-hidden="true">
          MAS<span className="o-dot"></span>N
        </div>
        <div className="footer-base">
          <div>© 2026 MASON LABS, INC. · MADE IN OAKLAND, CA</div>
          <div className="links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="/security.html">Security</a>
            <Link to="/contact">Contact</Link>
          </div>
          <div>V 4.2 · 2026-05-12</div>
        </div>
      </div>
    </footer>
  );
}
