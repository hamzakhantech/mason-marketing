import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import AlternativesProcorePage from "../marketing/alternatives-procore-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best Procore alternative for small contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON is the best Procore alternative for 5–50 person GC and specialty sub teams. It costs $219–$399/month flat with no seat fees, includes browser-native BIM with Navisworks-class clash detection, AIA G702/G703 pay applications, and all 12 modules with no add-ons. Procore typically costs $15,000–$80,000/year for comparable teams."
        }
      },
      {
        "@type": "Question",
        "name": "What Procore alternatives have flat pricing with no seat fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON offers flat pricing at $219/month (Core, 10 users) and $399/month (Pro, 25 users) with no per-seat fees. Buildertrend and JobTread also use flat per-company pricing, though neither includes BIM or AIA pay apps. Fieldwire and Raken both charge per seat."
        }
      },
      {
        "@type": "Question",
        "name": "Which Procore alternative includes BIM and clash detection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON is the only Procore alternative under $500/month that includes browser-native BIM with Navisworks-class clash detection. Buildertrend, Fieldwire, JobTread, and Raken have no BIM capability."
        }
      },
      {
        "@type": "Question",
        "name": "What do small general contractors use instead of Procore in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026, small GC teams (5–50 people) commonly use MASON, Buildertrend, Fieldwire, JobTread, or Raken as Procore alternatives. MASON is the only option with browser-native BIM, AIA pay apps, and Monte Carlo scheduling at flat pricing under $400/month."
        }
      }
    ]
  }
];

export default function AlternativesProcore() {
  useSEO({
    title: "Best Procore Alternatives for Small Contractors (2026) | MASON",
    description:
      "Honest comparison of Procore alternatives for 5–50 person GC teams. MASON, Buildertrend, Fieldwire, JobTread, Raken — flat pricing, browser BIM, AIA pay apps reviewed.",
    canonical: "https://masononsite.com/alternatives/procore",
    schema: SCHEMA,
  });
  return <AlternativesProcorePage />;
}
