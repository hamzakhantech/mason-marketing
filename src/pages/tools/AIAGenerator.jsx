import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import AIAGeneratorPage from "../../marketing/aia-generator-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AIA G702 form?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AIA G702 is the Application and Certificate for Payment — the cover sheet that summarizes a contractor's monthly pay request on commercial construction projects. It shows the original contract sum, change orders, total earned to date, retainage withheld, previous payments, and the net amount due for the current period."
        }
      },
      {
        "@type": "Question",
        "name": "What is an AIA G703 form?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AIA G703 is the Continuation Sheet — the detailed Schedule of Values that breaks the contract down by line item. For each line item it tracks the scheduled value, work completed in previous periods, work completed this period, materials presently stored, and retainage withheld. The G703 totals feed into the G702 cover sheet."
        }
      },
      {
        "@type": "Question",
        "name": "How do you fill out an AIA G702/G703 pay application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, establish your Schedule of Values (G703) — break your contract into line items that add up to the total contract sum. Then each month, enter the work completed in the current period for each line item. The G703 calculates percentage complete and balance to finish per line. The G702 cover sheet then rolls up the totals: earned to date minus retainage minus previous payments equals your current payment due."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this AIA G702/G703 generator for real projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — this free generator calculates all the correct figures based on your inputs. Use the G703 tab to enter your Schedule of Values and monthly completions, then switch to the G702 tab to see the complete pay application summary. Use the 'Copy to clipboard' button to export your G702 data. For full integration with your project data, MASON automatically generates AIA pay applications from your project schedule."
        }
      }
    ]
  }
];

export default function AIAGenerator() {
  useSEO({
    title: "Free AIA G702/G703 Generator — Construction Pay Application (2026) | MASON",
    description:
      "Build your AIA G703 Schedule of Values and auto-generate the G702 Application for Payment. Free interactive tool — enter line items, get your pay app in seconds.",
    canonical: "https://masononsite.com/tools/aia-g702-generator",
    schema: SCHEMA,
  });
  return <AIAGeneratorPage />;
}
