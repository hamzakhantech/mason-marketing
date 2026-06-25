import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import BlogCloseoutChecklist from "../../marketing/blog-closeout-checklist.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is construction project closeout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Construction project closeout is the final phase of a construction project, covering punch list completion, final inspections, certificate of occupancy, documentation turnover (O&M manuals, as-builts, warranties), financial closeout (lien waivers, final pay application, retainage release), and the handover of the completed project to the owner for occupancy and operation."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for construction closeout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Construction closeout documentation typically includes: as-built drawings (from GC and all subs), operations and maintenance manuals for all systems and equipment, manufacturer warranties, certificate of substantial completion, final lien waivers from all subs and material suppliers, contractor's final affidavit, test and balance reports, commissioning reports, spare parts and attic stock, training documentation, and keys and access credentials."
        }
      },
      {
        "@type": "Question",
        "name": "What causes construction project closeout delays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common causes of construction closeout delays are: missing O&M manuals from subcontractors (especially from equipment manufacturers with long lead times), lien waivers from second-tier material suppliers, punch list disputes where the owner adds new scope, certificate of occupancy delays from building departments or specialty inspectors, and incomplete as-built drawings that require reconstruction from memory."
        }
      },
      {
        "@type": "Question",
        "name": "When should closeout planning begin on a construction project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Closeout planning should begin 60–90 days before the anticipated substantial completion date — not after the last trade leaves the site. Starting early allows time to collect O&M documentation from manufacturers (which can take 4–6 weeks), schedule inspections with building departments, and follow up with subs on outstanding lien waivers and documentation before the final payment depends on them."
        }
      }
    ]
  }
];

export default function CloseoutChecklist() {
  useSEO({
    title: "Construction Project Closeout Checklist: 42 Items Across 8 Phases (2026) | MASON",
    description:
      "Complete construction project closeout checklist — 42 items from pre-closeout planning through warranty period. Covers punch list, inspections, O&M manuals, lien waivers, and final payment.",
    canonical: "https://masononsite.com/blog/construction-project-closeout-checklist",
    schema: SCHEMA,
  });
  return <BlogCloseoutChecklist />;
}
