
import React from "react";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-decoration cta-decoration-one"></div>
      <div className="cta-decoration cta-decoration-two"></div>

      <div className="cta-content">
        <div className="eyebrow light-eyebrow"><span></span> LET'S BUILD WHAT'S NEXT</div>
        <h2>Ready to Modernize Your Network and Security Posture?</h2>
        <p>
          Whether you are migrating to Prisma, Zscaler, or Cato, building a
          next-gen SOC, or preparing for an upcoming compliance audit,
          our engineers are ready to help.
        </p>
        <a href="mailto:info@yourcompany.com?subject=Architecture%20Consultation" className="button button-white">
          Book a Free Architecture Consultation <span>↗</span>
        </a>
      </div>

      <div className="cta-side-mark">SECURE<br />BY DESIGN<span>.</span></div>
    </section>
  );
}
