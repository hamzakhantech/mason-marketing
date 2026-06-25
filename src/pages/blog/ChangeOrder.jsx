import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import BlogChangeOrder from "../../marketing/blog-change-order.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a construction change order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A construction change order is a written amendment to a construction contract that modifies the scope of work, the contract sum, or the project schedule — or some combination of all three. Change orders are signed by the contractor, owner, and architect (on AIA contracts) and become part of the contract once executed."
        }
      },
      {
        "@type": "Question",
        "name": "How do you price a construction change order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard formula is: Direct Cost × (1 + Overhead%) × (1 + Profit%) + Bond Premium = Total Change Order Value. Direct cost includes burdened labor rates (not just wage — include payroll taxes, workers comp, and fringes), actual material costs, equipment at published rental rates, and subcontractor costs. Overhead is typically 10–15% and profit is typically 5–10%, applied on top of direct cost plus overhead."
        }
      },
      {
        "@type": "Question",
        "name": "What is the notice requirement for change orders under AIA A201?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AIA A201 Section 15.1.3 requires the contractor to provide written notice within 21 days of first recognizing a condition that may entitle them to additional compensation or time. Many subcontracts require shorter notice — 7–14 days. Missing the notice deadline is one of the most common causes of legitimate change order claims being denied."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a change order and a construction change directive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A change order (CO) is a mutual agreement — all parties agree on scope, price, and schedule impact before signing. A construction change directive (CCD) is a unilateral owner instruction to proceed with changed work when agreement on price hasn't been reached. Under AIA A201, the contractor must perform work directed by a CCD but retains the right to dispute the compensation amount."
        }
      }
    ]
  }
];

export default function ChangeOrder() {
  useSEO({
    title: "How to Write a Construction Change Order: Notice, Pricing, and Documentation | MASON",
    description:
      "Notice requirements, the pricing formula (direct cost × overhead × profit + bond), what to include in the document, and the field documentation habits that protect change order entitlement.",
    canonical: "https://masononsite.com/blog/how-to-write-construction-change-order",
    schema: SCHEMA,
  });
  return <BlogChangeOrder />;
}
