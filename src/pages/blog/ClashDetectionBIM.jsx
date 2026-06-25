import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import BlogClashDetectionBIM from "../../marketing/blog-clash-detection-bim.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is clash detection in BIM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clash detection in BIM (Building Information Modeling) is the process of identifying conflicts between different building systems — structural, mechanical, electrical, plumbing — before construction begins. BIM software overlays 3D models from multiple disciplines and flags locations where components physically conflict (hard clashes), come too close to meet code or clearance requirements (soft clashes), or create workflow conflicts between trades (workflow clashes)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between hard clash and soft clash in BIM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A hard clash occurs when two building components physically occupy the same space — a duct running through a structural beam, for example. A soft clash occurs when components don't intersect but violate required clearance distances — a pipe too close to electrical conduit to allow maintenance access. Hard clashes must be resolved. Soft clashes require judgment based on code requirements and maintenance needs."
        }
      },
      {
        "@type": "Question",
        "name": "Does clash detection require expensive software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional clash detection tools like Autodesk Navisworks cost $3,000–$10,000 per year per seat and require dedicated hardware. Browser-native BIM platforms now offer clash detection without software installation at a fraction of the cost, making the workflow accessible to smaller GCs who can't justify enterprise software licensing."
        }
      },
      {
        "@type": "Question",
        "name": "How much does clash detection save on a construction project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industry research estimates that rework caused by field clashes accounts for 5–15% of total project costs. Clash detection typically catches 60–80% of these conflicts before construction begins. On a $10 million project, resolving coordination conflicts in the model rather than in the field saves an estimated $500,000–$1,500,000 in rework, delay, and additional overhead."
        }
      }
    ]
  }
];

export default function ClashDetectionBIM() {
  useSEO({
    title: "What Is Clash Detection in BIM? Hard Clashes, Soft Clashes, and Why It Matters | MASON",
    description:
      "What clash detection in BIM actually means, the three types of clashes (hard, soft, workflow), what Navisworks costs, and how browser-native BIM makes coordination accessible to smaller GCs.",
    canonical: "https://masononsite.com/blog/what-is-clash-detection-bim",
    schema: SCHEMA,
  });
  return <BlogClashDetectionBIM />;
}
