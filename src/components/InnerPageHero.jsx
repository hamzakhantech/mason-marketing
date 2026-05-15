import React from "react";

/**
 * Shared hero for all inner marketing routes.
 * Same structure, spacing, typography, and gsap-fade-up hooks everywhere.
 */
export function InnerPageHero({
  eyebrow,
  title,
  lead,
  actions = null,
  meta = null,
  showGridBg = true,
  className = "",
}) {
  const rootClass = ["inner-hero", className].filter(Boolean).join(" ");
  const hasMidContent = (lead != null && lead !== "") || actions;
  const metaDelay = hasMidContent ? "320ms" : "160ms";

  return (
    <section className={rootClass}>
      {showGridBg ? <div className="grid-bg" aria-hidden="true" /> : null}
      <div className="inner-hero__glow" aria-hidden="true" />
      <div className="container inner-hero__wrap">
        <div className="inner-hero__inner">
          {eyebrow != null && eyebrow !== "" ? (
            <span className="inner-hero__eyebrow gsap-fade-up" style={{ animationDelay: "0ms" }}>
              {eyebrow}
            </span>
          ) : null}
          <h1 className="inner-hero__title gsap-fade-up" style={{ animationDelay: "80ms" }}>
            {title}
          </h1>
          {lead != null && lead !== "" ? (
            <div className="inner-hero__lead gsap-fade-up" style={{ animationDelay: "160ms" }}>
              {lead}
            </div>
          ) : null}
          {actions ? (
            <div className="inner-hero__actions gsap-fade-up" style={{ animationDelay: "240ms" }}>
              {actions}
            </div>
          ) : null}
          {meta ? (
            <div className="inner-hero__meta gsap-fade-up" style={{ animationDelay: metaDelay }}>
              {meta}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
