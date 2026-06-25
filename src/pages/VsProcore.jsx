import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import CPComparePage from "../marketing/compare-procore-page.jsx";

const VS_PROCORE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is MASON a good Procore alternative for small contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. MASON is built specifically for 5–50 person GC and specialty sub teams that Procore prices out. MASON starts at $219/month flat with no seat fees, includes browser-native BIM and clash detection, and all 12 modules are included — no add-ons. Procore typically costs $15,000–$80,000/year for a comparable team."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Procore so expensive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Procore uses ACV (Annual Contract Value) pricing tied to your annual construction volume — not your team size. The more revenue your business generates, the more Procore charges. Many modules are sold as add-ons. For a 20-person GC, total cost including modules and implementation typically runs $20,000–$60,000/year."
        }
      },
      {
        "@type": "Question",
        "name": "Does MASON have flat pricing unlike Procore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. MASON charges a flat monthly fee regardless of your construction volume. Core is $219/month for up to 10 users. Pro is $399/month for up to 25 users. No per-seat fees, no volume-based billing, no add-on modules."
        }
      },
      {
        "@type": "Question",
        "name": "Can MASON replace Navisworks clash detection without an Autodesk license?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. MASON Pro includes browser-native Navisworks-class clash detection — no Autodesk license, no Navisworks desktop install, no plugin required. It works in any modern browser and supports IFC 2x3 and IFC4 formats."
        }
      }
    ]
  }
];

export default function VsProcore() {
  useSEO({
    title: "Procore Alternative for Small Contractors — Flat Pricing, Browser BIM | MASON",
    description:
      "Procore costs $10K–$80K/year on volume-based billing. MASON is $219–$399/month flat — no seat fees, browser-native BIM, clash detection, and AIA pay apps included. Built for 5–50 person GC teams.",
    canonical: "https://masononsite.com/vs-procore",
    schema: VS_PROCORE_SCHEMA,
  });
  return <CPComparePage />;
}
