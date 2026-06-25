import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import ChangeOrderCalculatorPage from "../../marketing/change-order-calculator-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate a construction change order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A construction change order is priced as: Direct Cost × (1 + overhead%) × (1 + profit%) + bond premium (if required). For example, $50,000 direct cost with 15% overhead and 10% profit = $50,000 × 1.15 = $57,500 × 1.10 = $63,250 total CO value. Most contracts specify allowed markup percentages — check your subcontract or prime contract terms."
        }
      },
      {
        "@type": "Question",
        "name": "What is a typical overhead markup on construction change orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical overhead markup on construction change orders ranges from 10–20%. The AIA A201 General Conditions and most standard subcontracts allow 10–15% overhead. Overhead covers field supervision, insurance, project management, and home office costs. Some contracts cap combined overhead and profit at 15% total."
        }
      },
      {
        "@type": "Question",
        "name": "What is a typical profit markup on construction change orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Profit markup on change orders typically ranges from 5–15%, applied on top of direct cost plus overhead. Many standard contracts specify 10% profit. Profit is distinct from overhead — it represents the return to the contractor for risk and business development, while overhead covers actual indirect costs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the notice requirement for a construction change order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most construction contracts require written notice of a changed condition within 7–21 days of encountering it (AIA A201 requires 21 days). Failing to provide timely notice can forfeit your right to additional compensation — even for legitimate out-of-scope work. Always document changed conditions in writing before performing the extra work when possible."
        }
      }
    ]
  }
];

export default function ChangeOrderCalculator() {
  useSEO({
    title: "Free Construction Change Order Calculator (2026) | MASON",
    description:
      "Calculate change order pricing with overhead, profit, and bond markups. Enter direct cost and get your total CO value instantly. Free tool for GCs and subcontractors.",
    canonical: "https://masononsite.com/tools/change-order-calculator",
    schema: SCHEMA,
  });
  return <ChangeOrderCalculatorPage />;
}
