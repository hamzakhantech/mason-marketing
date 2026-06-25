import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import CompareHubPage from "../marketing/compare-hub-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does MASON compare to Procore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON costs $219–$399/month flat with no seat fees. Procore typically costs $10,000–$80,000/year for comparable teams with per-seat fees on top. MASON includes browser-native BIM with clash detection and AIA pay apps — features Procore charges add-ons for."
        }
      },
      {
        "@type": "Question",
        "name": "How does MASON compare to Buildertrend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buildertrend is built for residential homebuilders and costs $499–$799/month with no BIM and no AIA pay apps. MASON is designed for commercial GC and specialty sub teams and includes browser-native BIM, clash detection, and AIA G702/G703 pay apps at $219–$399/month."
        }
      },
      {
        "@type": "Question",
        "name": "Which construction PM software has the best BIM for small contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON offers the best BIM for small contractors: browser-native IFC with Navisworks-class clash detection, no Autodesk license required, included in Pro and Founding Partner plans at $399/month and $129/month respectively. No other sub-$500/month platform offers this capability."
        }
      }
    ]
  }
];

export default function Compare() {
  useSEO({
    title: "MASON vs Procore vs Buildertrend vs Fieldwire — Construction PM Compared | MASON",
    description:
      "Honest comparison of MASON against every major construction PM platform: Procore, Buildertrend, Fieldwire, Autodesk. Pricing, BIM, AIA pay apps, and full feature breakdowns.",
    canonical: "https://masononsite.com/compare",
    schema: SCHEMA,
  });
  return <CompareHubPage />;
}
