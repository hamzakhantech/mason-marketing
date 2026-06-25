import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import PricingPage from "../marketing/pricing-page.jsx";

export default function Pricing() {
  useSEO({
    title: "Construction Software Pricing — Flat, No Seat Fees | MASON",
    description:
      "Core $219/mo · Pro $399/mo · Founding Partner $129/mo locked for life. Flat per-project pricing with no seat fees, no add-ons. Built for GC teams, not enterprise.",
    canonical: "https://masononsite.com/pricing",
  });
  return <PricingPage />;
}
