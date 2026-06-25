import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import AlternativesAutodeskPage from "../marketing/alternatives-autodesk-page.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best Autodesk Construction Cloud alternative for small contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON is the best Autodesk ACC alternative for small and mid-size GC teams. It offers browser-native BIM with Navisworks-class clash detection at $219–$399/month flat — no Autodesk license required, no desktop installation, no per-seat fees. Autodesk ACC typically costs $5,000–$20,000+/year for comparable teams."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a Navisworks alternative that runs in the browser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. MASON offers Navisworks-class hard and soft clash detection that runs fully in the browser — no desktop install, no plugin, no Autodesk subscription. It supports IFC 2x3 and IFC4 files from Revit, ArchiCAD, Tekla, and other BIM authoring tools."
        }
      },
      {
        "@type": "Question",
        "name": "What can I use instead of Autodesk BIM 360 for BIM coordination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON, Trimble Connect, and BIMcollab are the main Autodesk BIM 360 alternatives. MASON is the only option that combines browser-native BIM coordination with a full construction PM stack (RFIs, AIA pay apps, daily logs, scheduling) at flat pricing for small teams."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Autodesk Construction Cloud cost compared to MASON?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Autodesk ACC plus Navisworks for a 10-person team typically costs $45,000–$75,000 over three years. MASON Pro for 25 users costs $14,364 over three years ($399/month × 36 months) and includes BIM, clash detection, RFIs, AIA pay apps, and full construction PM — no additional Autodesk license needed."
        }
      }
    ]
  }
];

export default function AlternativesAutodesk() {
  useSEO({
    title: "Best Autodesk Construction Cloud Alternatives (2026) — Browser BIM | MASON",
    description:
      "Navisworks-class BIM without the Autodesk license. Compare MASON, Trimble Connect, and BIMcollab for browser-native clash detection and full construction PM.",
    canonical: "https://masononsite.com/alternatives/autodesk",
    schema: SCHEMA,
  });
  return <AlternativesAutodeskPage />;
}
