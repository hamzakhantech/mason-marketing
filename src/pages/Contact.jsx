import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import ContactPage from "../marketing/contact-page.jsx";

export default function Contact() {
  useSEO({
    title: "Book a MASON Demo | Contact Us",
    description:
      "Book a 30-minute demo, ask about migrating from Procore or Buildertrend, or get a specific question answered. We respond same day.",
    canonical: "https://masononsite.com/contact",
  });
  return <ContactPage />;
}
