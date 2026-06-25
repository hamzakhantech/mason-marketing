import React from "react";
import { Route, Routes } from "react-router-dom";
import { MarketingLayout } from "./components/MarketingLayout.jsx";
import About from "./pages/About.jsx";
import AlternativesAutodesk from "./pages/AlternativesAutodesk.jsx";
import AlternativesBuildertrend from "./pages/AlternativesBuildertrend.jsx";
import AlternativesFieldwire from "./pages/AlternativesFieldwire.jsx";
import AlternativesProcore from "./pages/AlternativesProcore.jsx";
import Blog from "./pages/Blog.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Compare from "./pages/Compare.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Platform from "./pages/Platform.jsx";
import Pricing from "./pages/Pricing.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import VsProcore from "./pages/VsProcore.jsx";
import RetainageCalculator from "./pages/tools/RetainageCalculator.jsx";
import AIAGenerator from "./pages/tools/AIAGenerator.jsx";
import ChangeOrderCalculator from "./pages/tools/ChangeOrderCalculator.jsx";
import ROICalculator from "./pages/tools/ROICalculator.jsx";
import Tools from "./pages/tools/Tools.jsx";
import ClashDetectionBIM from "./pages/blog/ClashDetectionBIM.jsx";
import AIAG702G703 from "./pages/blog/AIAG702G703.jsx";
import ChangeOrder from "./pages/blog/ChangeOrder.jsx";
import CloseoutChecklist from "./pages/blog/CloseoutChecklist.jsx";
import RFIConstruction from "./pages/blog/RFIConstruction.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="platform" element={<Platform />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="vs-procore" element={<VsProcore />} />
        <Route path="compare" element={<Compare />} />
        <Route path="alternatives/procore" element={<AlternativesProcore />} />
        <Route path="alternatives/buildertrend" element={<AlternativesBuildertrend />} />
        <Route path="alternatives/fieldwire" element={<AlternativesFieldwire />} />
        <Route path="alternatives/autodesk" element={<AlternativesAutodesk />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="tools" element={<Tools />} />
        <Route path="tools/retainage-calculator" element={<RetainageCalculator />} />
        <Route path="tools/aia-g702-generator" element={<AIAGenerator />} />
        <Route path="tools/change-order-calculator" element={<ChangeOrderCalculator />} />
        <Route path="tools/roi-calculator" element={<ROICalculator />} />
        <Route path="blog/what-is-clash-detection-bim" element={<ClashDetectionBIM />} />
        <Route path="blog/how-to-fill-out-aia-g702-g703" element={<AIAG702G703 />} />
        <Route path="blog/how-to-write-construction-change-order" element={<ChangeOrder />} />
        <Route path="blog/construction-project-closeout-checklist" element={<CloseoutChecklist />} />
        <Route path="blog/what-is-rfi-construction" element={<RFIConstruction />} />
      </Route>
    </Routes>
  );
}
