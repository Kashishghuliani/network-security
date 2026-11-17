
import React from "react";

const steps = [
  ["01", "Discover & Assess", "Full-stack discovery of your existing network topology, traffic flows, security controls, and compliance requirements."],
  ["02", "Architect & Blueprint", "Custom low-level and high-level designs (HLD/LLD) tailored to your performance, budget, and Zero-Trust goals."],
  ["03", "Deploy & Integrate", "Phased, zero-disruption implementation of SASE platforms, SOC tooling, and hardened network configurations."],
  ["04", "Validate & Harden", "Rigorous failover testing, penetration validation, and policy fine-tuning to ensure peak performance."],
  ["05", "Enable & Handover", "Complete documentation, runbooks, and hands-on knowledge transfer for your internal IT and security teams."]
];

export default function Methodology() {
  return (
    <section className="methodology-section section-pad" id="methodology">
      <div className="methodology-heading">
        <div>
          <div className="eyebrow light-eyebrow"><span></span> HOW WE DELIVER</div>
          <h2>From strategy to secure<br />implementation.</h2>
        </div>
        <p>A structured engineering approach that brings clarity, control and confidence to every stage of your transformation.</p>
      </div>

      <div className="methodology-track">
        {steps.map(([number, title, description], index) => (
          <article className="method-step" key={number}>
            <div className="method-step-top">
              <span>{number}</span>
              <span className="method-step-dot"></span>
            </div>
            <div className="method-step-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            {index !== steps.length - 1 && <span className="method-connector">→</span>}
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
