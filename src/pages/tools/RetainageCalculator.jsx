import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import RetainageCalculatorPage from "../../marketing/retainage-calculator-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is construction retainage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Construction retainage (also called retention) is a percentage of each progress payment that the project owner withholds from the contractor until the project reaches substantial completion. It acts as a performance incentive — typically 5–10% of each payment — and is released when punch list items are complete and closeout documentation is submitted."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate construction retainage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retainage is calculated on the earned amount, not the total contract value. Multiply the contract value by the percentage of work completed to get the earned amount, then multiply that by the retainage rate. For example: $2,000,000 contract × 40% complete = $800,000 earned × 10% retainage = $80,000 withheld."
        }
      },
      {
        "@type": "Question",
        "name": "What is a typical retainage rate in construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most US construction contracts set retainage at 10% through 50% completion, then reduce to 5% for the remaining work. Public works contracts in many states cap retainage at 5%. Private commercial contracts are negotiable — many large GCs push for 5% from the start or milestone-based early release on completed scopes."
        }
      },
      {
        "@type": "Question",
        "name": "When is retainage released in construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retainage is typically released in two stages: a partial release (often 50% of the held amount) at substantial completion, and final release after all punch list work is complete, lien waivers are received, and closeout documents are submitted. Some contracts allow earlier release for completed and accepted work packages."
        }
      }
    ]
  }
];

export default function RetainageCalculator() {
  useSEO({
    title: "Free Construction Retainage Calculator (2026) | MASON",
    description:
      "Calculate retainage withheld, released, and outstanding on any construction contract. Enter contract value, % complete, and retainage rate — instant results, no signup.",
    canonical: "https://masononsite.com/tools/retainage-calculator",
    schema: SCHEMA,
  });
  return <RetainageCalculatorPage />;
}
