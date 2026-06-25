import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import { HomeMain } from "./home/HomeSections.jsx";
import "./home/home-inline.css";

const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MASON",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "url": "https://masononsite.com",
    "description": "Construction project management software for 5–50 person GC and specialty sub teams. Browser-native BIM with Navisworks-class clash detection, AIA G702/G703 pay apps, Monte Carlo scheduling — flat pricing, no seat fees.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Core",
        "price": "219.00",
        "priceCurrency": "USD",
        "description": "Up to 10 users, 3 active projects. BIM viewer, RFI management, change orders, AIA pay apps, daily logs.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "219.00",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      },
      {
        "@type": "Offer",
        "name": "Pro",
        "price": "399.00",
        "priceCurrency": "USD",
        "description": "Up to 25 users, 10 active projects. Everything in Core plus Navisworks-class clash detection, Monte Carlo scheduling, Full AI Concierge.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "399.00",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      },
      {
        "@type": "Offer",
        "name": "Founding Partner",
        "price": "129.00",
        "priceCurrency": "USD",
        "description": "Price locked for life. First 10 firms only. Same features as Pro — 25 users, 10 active projects.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "129.00",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does MASON charge per user?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. MASON uses flat monthly pricing — $219/month for Core (up to 10 users) and $399/month for Pro (up to 25 users). No per-seat fees. Your price stays the same whether your team has 1 user or the full tier limit."
        }
      },
      {
        "@type": "Question",
        "name": "Does MASON offer a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON offers a 14-day pilot instead of a free trial. MASON's team sets up the platform on one of your real active projects so you can run it with real data. Book your pilot at masononsite.com/contact."
        }
      },
      {
        "@type": "Question",
        "name": "Does MASON work in a browser without downloading software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. MASON is 100% browser-native, including the BIM viewer and clash detection. No plugins, no Autodesk license, and no desktop software installation required."
        }
      },
      {
        "@type": "Question",
        "name": "How does MASON compare to Procore on price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Procore uses ACV-based billing tied to annual construction volume — typically $10,000 to $80,000 per year for a mid-size GC. MASON Pro costs $399/month ($4,788/year) with flat pricing and no seat fees. MASON is 6 to 17 times cheaper than a typical Procore contract."
        }
      },
      {
        "@type": "Question",
        "name": "What construction software has browser-based BIM with no software install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON offers browser-native BIM viewing and Navisworks-class clash detection — no Autodesk license, no desktop install, no plugins. It works in any modern web browser and supports IFC 2x3 and IFC4 formats."
        }
      },
      {
        "@type": "Question",
        "name": "What construction software uses Monte Carlo scheduling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MASON Pro includes Monte Carlo schedule simulation with 1,000-iteration Latin Hypercube sampling, delivering P50, P80, and P90 risk bands. No other construction PM platform under $500/month offers this feature."
        }
      }
    ]
  }
];

export default function Home() {
  useSEO({
    title: "Construction Project Management Software | MASON",
    description:
      "MASON is construction management software for GC and specialty sub teams under 50 people. BIM, RFIs, daily logs, change orders, and BIM clash detection — one platform, flat pricing, no seat fees.",
    canonical: "https://masononsite.com/",
    schema: HOME_SCHEMA,
  });
  return (
    <main className="mason-home">
      <HomeMain />
    </main>
  );
}
