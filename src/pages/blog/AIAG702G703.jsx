import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import BlogAIAG702G703 from "../../marketing/blog-aia-g702-g703.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AIA G702 and G703?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AIA G702 is the Application and Certificate for Payment — a standardized cover sheet showing total contract value, work completed to date, retainage, and the net amount due for a billing period. AIA G703 is the Continuation Sheet — the detailed Schedule of Values showing each line item's progress and billing. G703 feeds G702: the totals on G703 flow into the summary lines on G702."
        }
      },
      {
        "@type": "Question",
        "name": "How do you fill out AIA G702 G703?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fill out G703 first by entering the Schedule of Values with all contract line items, then for each billing period enter work completed (Column D for prior periods, Column E for current period) and materials stored (Column F). G703 calculates the total earned to date and retainage. These totals flow to G702: Contract Sum (Line 1), Net Change by Change Orders (Line 2), Contract Sum to Date (Line 3), Total Completed and Stored (Line 4), Retainage (Lines 5a/5b), Total Earned Less Retainage (Line 6), Previous Certificates (Line 7), and Current Payment Due (Line 8)."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Schedule of Values in construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Schedule of Values (SOV) is a breakdown of the total contract sum into individual work items with an assigned value for each. It's the foundation of AIA G703 billing — each line item is billed independently at its completion percentage. SOV setup at the start of a project determines how billing and cost tracking work for the entire project."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a digital AIA G702 G703 generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Digital G702/G703 generators allow you to input your Schedule of Values and billing period data and automatically calculate all totals, including retainage and net payment due. Free generators are available for producing draft pay applications; official AIA documents require purchase from the AIA for contract-executed versions."
        }
      }
    ]
  }
];

export default function AIAG702G703() {
  useSEO({
    title: "How to Fill Out AIA G702 G703: Complete Pay App Guide (2026) | MASON",
    description:
      "Step-by-step guide to filling out AIA G702 and G703 — Schedule of Values setup, every column and line explained, common mistakes, and how digital tools streamline the process.",
    canonical: "https://masononsite.com/blog/how-to-fill-out-aia-g702-g703",
    schema: SCHEMA,
  });
  return <BlogAIAG702G703 />;
}
