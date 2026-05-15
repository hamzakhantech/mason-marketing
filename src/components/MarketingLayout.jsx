import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function MarketingLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isHome = pathname === "/" || pathname === "";
    document.body.setAttribute("data-motion-home", isHome ? "true" : "false");
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
