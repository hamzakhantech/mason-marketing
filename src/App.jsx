import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MarketingLayout from "./components/MarketingLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

const Platform = lazy(() => import("./pages/Platform.jsx"));
const CaseStudies = lazy(() => import("./pages/CaseStudies.jsx"));
const VsProcore = lazy(() => import("./pages/VsProcore.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const Integrations = lazy(() => import("./pages/Integrations.jsx"));
const Mobile = lazy(() => import("./pages/Mobile.jsx"));
const Enterprise = lazy(() => import("./pages/Enterprise.jsx"));
const Smb = lazy(() => import("./pages/Smb.jsx"));
const Security = lazy(() => import("./pages/Security.jsx"));
const BimAr = lazy(() => import("./pages/BimAr.jsx"));
const RoiCalculator = lazy(() => import("./pages/RoiCalculator.jsx"));
const Changelog = lazy(() => import("./pages/Changelog.jsx"));
const CompareFieldwire = lazy(() => import("./pages/CompareFieldwire.jsx"));
const CompareAsite = lazy(() => import("./pages/CompareAsite.jsx"));

function PageFallback() {
  return (
    <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
      <p className="mono" style={{ color: "var(--text-muted)" }}>
        Loading…
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
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
          <Route path="integrations" element={<Integrations />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="smb" element={<Smb />} />
          <Route path="security" element={<Security />} />
          <Route path="bim-ar" element={<BimAr />} />
          <Route path="roi-calculator" element={<RoiCalculator />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="compare-fieldwire" element={<CompareFieldwire />} />
          <Route path="compare-asite" element={<CompareAsite />} />
          <Route path="compare-procore" element={<VsProcore />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
