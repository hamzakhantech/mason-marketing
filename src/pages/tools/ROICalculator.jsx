import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import ROICalculatorPage from "../../marketing/roi-calculator-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate ROI on construction management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ROI on construction PM software = (Annual labor cost saved on manual tasks - Annual software cost) / Annual software cost × 100. The key input is how many hours per week your team spends on manual admin work: reporting, RFI tracking, pay application prep, change order paperwork, and schedule maintenance. Multiply those hours by fully-loaded hourly cost to get your current labor cost, then compare to the software price."
        }
      },
      {
        "@type": "Question",
        "name": "How much time do construction PMs spend on admin work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industry surveys consistently find that construction project managers spend 30–50% of their time on administrative tasks rather than managing actual construction. For a typical PM working 50 hours per week, that's 15–25 hours per week on reporting, documentation, billing prep, and coordination work that software should automate."
        }
      },
      {
        "@type": "Question",
        "name": "What is the payback period for construction management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most small construction firms (5–25 person teams), the payback period for construction PM software is 1–3 months. The labor cost savings from eliminating manual admin work typically outweigh the software subscription cost within the first billing cycle. MASON Core starts at $219/month for 10 users — for a team spending 6 hours/week each on manual tasks at $65/hr, payback is under 6 weeks."
        }
      }
    ]
  }
];

export default function ROICalculator() {
  useSEO({
    title: "Construction PM Software ROI Calculator (2026) | MASON",
    description:
      "Calculate your ROI on construction management software. Enter team size, hours on manual tasks, and hourly rate — see annual savings and payback period instantly.",
    canonical: "https://masononsite.com/tools/roi-calculator",
    schema: SCHEMA,
  });
  return <ROICalculatorPage />;
}
