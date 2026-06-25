import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import CPComparePage from "../marketing/compare-procore-page.jsx";

export default function VsProcore() {
  useSEO({
    title: "MASON vs Procore — Construction Software Comparison 2026",
    description:
      "Procore costs $10K–$80K/year based on construction volume. MASON starts at $219/month, flat, no seat fees. Compare BIM, RFI management, scheduling, and AI features.",
    canonical: "https://masononsite.com/vs-procore",
  });
  return <CPComparePage />;
}
