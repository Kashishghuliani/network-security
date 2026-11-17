
import React from "react";

const strengths = [
  {
    number: "01",
    icon: "◈",
    title: "Vendor-Certified Expertise",
    text: "Proven deployment frameworks across industry-leading SASE and SSE platforms, including Palo Alto Prisma, Zscaler, and Cato Networks."
  },
  {
    number: "02",
    icon: "⌘",
    title: "Zero-Trust by Design",
    text: "Every configuration, firewall policy, and cloud tunnel is engineered around least-privilege access."
  },
  {
    number: "03",
    icon: "✳",
    title: "AI-Ready Defense",
    text: "Protect proprietary LLMs, data pipelines, and workforce AI usage while leveraging AI-driven threat detection in your SOC."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-section section-pad" id="why-us">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span></span> WHY WORK WITH US</div>
          <h2>Engineering confidence<br />into every connection.</h2>
        </div>
        <p className="section-side-text">
          Modern enterprises operate in a borderless, hybrid-cloud world where
          legacy perimeters are obsolete and AI-driven threats evolve by the second.
          We bridge the gap between high-performance network engineering and
          zero-trust cybersecurity—designing, auditing, and securing infrastructures
          built for speed, compliance, and resilience.
        </p>
      </div>

      <div className="strength-list">
        {strengths.map((item) => (
          <article className="strength-card" key={item.number}>
            <span className="strength-number">{item.number}</span>
            <span className="strength-icon">{item.icon}</span>
            <div className="strength-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <span className="strength-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
