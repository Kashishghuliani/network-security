
import React from "react";
import { useLocation } from "react-router-dom";

const steps = [
  {
    id: "discover",
    number: "01",
    title: "Discover & Assess",
    description: "Full-stack discovery of your existing network topology, traffic flows, security controls, and compliance requirements."
  },
  {
    id: "architect",
    number: "02",
    title: "Architect & Blueprint",
    description: "Custom low-level and high-level designs (HLD/LLD) tailored to your performance, budget, and Zero-Trust goals."
  },
  {
    id: "deploy",
    number: "03",
    title: "Deploy & Integrate",
    description: "Phased, zero-disruption implementation of SASE platforms, SOC tooling, and hardened network configurations."
  },
  {
    id: "validate",
    number: "04",
    title: "Validate & Harden",
    description: "Rigorous failover testing, penetration validation, and policy fine-tuning to ensure peak performance."
  },
  {
    id: "enable",
    number: "05",
    title: "Enable & Handover",
    description: "Complete documentation, runbooks, and hands-on knowledge transfer for your internal IT and security teams."
  }
];

export default function Methodology() {
  const location = useLocation();
  const activeStep = location.hash.replace("#", "");

  return (
    <section className="methodology-section section-pad" id="methodology">
      <div className="methodology-heading">
        <div>
          <div className="eyebrow light-eyebrow">
            <span></span> HOW WE DELIVER
          </div>
          <h2>From strategy to secure<br />implementation.</h2>
        </div>
        <p>
          A structured engineering approach that brings clarity, control and confidence to every stage of your transformation.
        </p>
      </div>

      <div className="methodology-track">
        {steps.map((step, index) => (
          <article
            className={`method-step ${
              activeStep === step.id ? "method-step-active" : ""
            }`}
            id={step.id}
            key={step.number}
          >
            <div className="method-step-top">
              <span>{step.number}</span>
              <span className="method-step-dot"></span>
            </div>

            <div className="method-step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            {index !== steps.length - 1 && (
              <span className="method-connector">→</span>
            )}
          </article>
        ))}
      </div>

      <div className="methodology-bottom">
        <span>DISCOVER. DESIGN. DEPLOY. DEFEND.</span>
        <span>ENGINEERED AT EVERY STEP <b>↗</b></span>
      </div>
    </section>
  );
}
