import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import ToolsHubPage from "../../marketing/tools-hub-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are these construction tools really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — all tools on this page are completely free. No account required, no credit card, no email signup. The retainage calculator, AIA G702/G703 generator, change order calculator, and ROI calculator all run directly in your browser."
        }
      },
      {
        "@type": "Question",
        "name": "What free construction calculator tools does MASON offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON offers four free construction tools: (1) Retainage Calculator — calculates withheld, released, and outstanding retainage on any contract; (2) AIA G702/G703 Generator — builds your Schedule of Values and auto-generates the Application for Payment; (3) Change Order Calculator — prices COs with overhead, profit, and bond markups; (4) ROI Calculator — calculates your team's manual admin labor cost and projected savings with PM software."
        }
      },
      {
        "@type": "Question",
        "name": "How is MASON different from these free tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These free tools help you calculate one thing at a time. MASON automates all of this inside your live projects — retainage is tracked on every pay application automatically, G702/G703 forms are generated from your Schedule of Values, and change orders flow directly into AIA billing. Starting at $219/month for up to 10 users."
        }
      }
    ]
  }
];

export default function Tools() {
  useSEO({
    title: "Free Construction Calculators & Tools (2026) | MASON",
    description:
      "Free construction calculators and generators: retainage calculator, AIA G702/G703 pay application generator, change order calculator, and ROI calculator. No signup required.",
    canonical: "https://masononsite.com/tools",
    schema: SCHEMA,
  });
  return <ToolsHubPage />;
}
