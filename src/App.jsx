import React from "react";
import { Route, Routes } from "react-router-dom";
import { MarketingLayout } from "./components/MarketingLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Platform from "./pages/Platform.jsx";
import Pricing from "./pages/Pricing.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import VsProcore from "./pages/VsProcore.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<MarketingLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="platform" element={<Platform />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="vs-procore" element={<VsProcore />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
    </>
  );
}
