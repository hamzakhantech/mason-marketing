import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import AlternativesFieldwirePage from "../marketing/alternatives-fieldwire-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best Fieldwire alternative for full construction project management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON is the best Fieldwire alternative for teams that need a full PM stack beyond field operations. It includes browser-native BIM with clash detection, AIA pay apps, RFI management, Gantt scheduling, and daily logs — at $219–$399/month flat with no per-seat fees."
        }
      },
      {
        "@type": "Question",
        "name": "Which Fieldwire alternative includes BIM and clash detection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON is the only Fieldwire alternative under $500/month that includes browser-native BIM with Navisworks-class clash detection. Procore also offers BIM but requires a separate Autodesk license and costs $10,000–$80,000/year."
        }
      },
      {
        "@type": "Question",
        "name": "How does Fieldwire pricing compare to alternatives?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fieldwire charges $54–$89 per user per month. For a 20-person team this is $1,080–$1,780/month. MASON Pro costs $399/month flat for 25 users, includes BIM, RFIs, AIA pay apps, and full scheduling — significantly more capability at a lower cost for growing teams."
        }
      }
    ]
  }
];

export default function AlternativesFieldwire() {
  useSEO({
    title: "Best Fieldwire Alternatives for Full Construction PM (2026) | MASON",
    description:
      "Need more than Fieldwire's field ops? Compare MASON, Procore, and Buildertrend for BIM, AIA pay apps, RFIs, and full project management. Honest 2026 review.",
    canonical: "https://masononsite.com/alternatives/fieldwire",
    schema: SCHEMA,
  });
  return <AlternativesFieldwirePage />;
}
