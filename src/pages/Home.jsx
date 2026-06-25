import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import { HomeMain } from "./home/HomeSections.jsx";
import "./home/home-inline.css";

export default function Home() {
  useSEO({
    title: "Construction Project Management Software | MASON",
    description:
      "MASON is construction management software for GC and specialty sub teams under 50 people. BIM, RFIs, daily logs, change orders, and BIM clash detection — one platform, flat pricing, no seat fees.",
    canonical: "https://masononsite.com/",
  });
  return (
    <main className="mason-home">
      <HomeMain />
    </main>
  );
}
