import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import FeaturesPage from "../marketing/features-page.jsx";

export default function Platform() {
  useSEO({
    title: "Construction Management Software Features | MASON Platform",
    description:
      "Browser-native BIM with Navisworks-class clash detection, RFI management, daily logs, cost tracking, and AIA G702/G703 pay apps. Built for GC teams. No Autodesk license needed.",
    canonical: "https://masononsite.com/platform",
  });
  return <FeaturesPage />;
}
