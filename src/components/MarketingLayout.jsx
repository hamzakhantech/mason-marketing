import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";

const MASON_THEME_KEY = "mason-theme";

export function MarketingLayout() {
  const { pathname } = useLocation();
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute("data-theme") !== "light"
  );

  useEffect(() => {
    const isHome = pathname === "/";
    document.body.classList.toggle("mason-home", isHome);
    if (isHome) {
      document.documentElement.setAttribute("data-motion-home", "true");
      document.body.setAttribute("data-motion-home", "true");
    } else {
      document.documentElement.removeAttribute("data-motion-home");
      document.body.removeAttribute("data-motion-home");
    }
    return () => {
      document.body.classList.remove("mason-home");
      document.documentElement.removeAttribute("data-motion-home");
      document.body.removeAttribute("data-motion-home");
    };
  }, [pathname]);

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(MASON_THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [dark]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== MASON_THEME_KEY) return;
      if (e.newValue === "light") setDark(false);
      else if (e.newValue === "dark") setDark(true);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <>
      <Header dark={dark} toggleDark={() => setDark((d) => !d)} />
      <Outlet key={pathname} />
      <Footer />
    </>
  );
}
