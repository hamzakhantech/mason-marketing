import React from "react";
import { useSEO } from "../hooks/useSEO.js";
import BlogPage from "../marketing/blog-page.jsx";

export default function Blog() {
  useSEO({
    title: "Construction Management Blog | MASON Resources",
    description:
      "Practical guides on BIM, RFI management, change orders, and construction project scheduling. Written for GC and specialty sub project teams, not executives.",
    canonical: "https://masononsite.com/blog",
  });
  return <BlogPage />;
}
