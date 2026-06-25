import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import PricingPage from "../marketing/pricing-page.jsx";

const PRICING_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does MASON cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON has three tiers: Core at $219/month (up to 10 users, 3 active projects), Pro at $399/month (up to 25 users, 10 active projects), and Founding Partner at $129/month locked for life (first 10 firms only, same features as Pro). Annual billing saves 20%. Enterprise pricing is available for larger teams."
        }
      },
      {
        "@type": "Question",
        "name": "Does MASON charge per user or per seat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. MASON pricing is flat per tier, not per seat. Core is $219/month for up to 10 users. Pro is $399/month for up to 25 users. You pay the same whether you have 1 or 25 users on your plan."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial for MASON?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON offers a 14-day pilot — not a free trial. MASON's team sets up the platform on one of your real projects. You run it with your team and real data for 14 days. Book your pilot at masononsite.com/contact."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the Founding Partner plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Founding Partner plan costs $129/month, price locked for life. It includes the same features as Pro: up to 25 users, 10 active projects, Navisworks-class clash detection, Monte Carlo scheduling, Full AI Concierge, and priority support. It is limited to the first 10 firms only."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between MASON Core and Pro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Core ($219/month) supports up to 10 users and 3 active projects with the full module stack including BIM viewer and AIA pay apps. Pro ($399/month) adds Navisworks-class clash detection, Monte Carlo schedule simulation (P50/P80/P90), Full AI Concierge, and priority support — and scales to 25 users and 10 active projects."
        }
      },
      {
        "@type": "Question",
        "name": "How does MASON pricing compare to Procore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Procore charges based on annual construction volume — typically $10,000 to $80,000 per year. MASON Pro costs $4,788 per year (or $399/month) with flat pricing and no seat fees. For a typical 5–50 person GC team, MASON is 6 to 17 times cheaper than Procore."
        }
      }
    ]
  }
];

export default function Pricing() {
  useSEO({
    title: "Construction Software Pricing — Flat, No Seat Fees | MASON",
    description:
      "Core $219/mo · Pro $399/mo · Founding Partner $129/mo locked for life. Flat pricing with no seat fees, no add-ons. Built for GC teams, not enterprise.",
    canonical: "https://masononsite.com/pricing",
    schema: PRICING_SCHEMA,
  });
  return <PricingPage />;
}
