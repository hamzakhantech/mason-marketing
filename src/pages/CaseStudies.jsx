import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import CaseStudiesPage from "../marketing/case-studies-page.jsx";

export default function CaseStudies() {
  useSEO({
    title: "Construction Software Case Studies | Real Results | MASON",
    description:
      "62% faster RFI response time. 3.4x more issues captured per project. Real numbers from GC and specialty sub teams that replaced spreadsheets and email with MASON.",
    canonical: "https://masononsite.com/case-studies",
  });
  return <CaseStudiesPage />;
}
