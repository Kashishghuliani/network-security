
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="eyebrow light-eyebrow">
          <span className="status-dot"></span>
          ENTERPRISE NETWORK & SECURITY ENGINEERING
        </div>

        <h1>
          Future-Proof Your Network.
          <span> Fortify Your Enterprise.</span>
        </h1>

        <p className="hero-description">
          End-to-end network architecture, comprehensive security audits,
          24/7 SOC deployment, and seamless SASE & AI Security implementations
          across Palo Alto Prisma, Zscaler, and Cato Networks.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="button button-primary">
            Schedule a Security & Network Assessment <span>↗</span>
          </Link>

          <Link to="/services" className="button button-outline">
            Explore Our Solutions <span>↓</span>
          </Link>
        </div>

        <div className="hero-proof">
          <span>NETWORK ARCHITECTURE</span>
          <i></i>
          <span>ZERO-TRUST SECURITY</span>
          <i></i>
          <span>AI-READY DEFENSE</span>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>ENGINEERED FOR RESILIENCE</span>
        <span>01 — 05</span>
      </div>
    </section>
  );
}
