
import React from "react";
import { Link, useLocation } from "react-router-dom";

const services = [
  {
    id: "ai-security",
    number: "02",
    label: "AI SECURITY",
    title: "AI Security & Governance",
    intro: "Adopt generative AI and machine learning safely without exposing sensitive corporate data or creating new attack surfaces.",
    items: [
      ["AI Usage Visibility & Shadow AI Discovery", "Identify unauthorized AI tools across your network and enforce granular data loss prevention (DLP) policies."],
      ["LLM & AI Workload Protection", "Secure enterprise AI models against prompt injection, data poisoning, model inversion, and unauthorized API access."],
      ["AI Governance & Compliance", "Establish acceptable use frameworks aligned with ISO 42001, NIST AI RMF, and enterprise data privacy mandates."]
    ]
  },
  {
    id: "soc",
    number: "03",
    label: "SECURITY OPERATIONS",
    title: "Security Operations Center (SOC) Setup & Modernization",
    intro: "Build an intelligent, high-velocity SOC capable of detecting, investigating, and neutralizing threats before they impact operations.",
    items: [
      ["Turnkey SOC Architecture", "End-to-end design and deployment of SIEM, SOAR, EDR/XDR, and threat intelligence platforms."],
      ["AI-Driven Automation & Playbooks", "Reduce alert fatigue and Mean Time to Respond (MTTR) with automated triage, enrichment, and containment workflows."],
      ["Use-Case Engineering & Tuning", "Custom detection rules mapped to the MITRE ATT&CK framework, tailored specifically to your cloud and on-premise telemetry."]
    ]
  },
  {
    id: "network",
    number: "04",
    label: "NETWORK ENGINEERING",
    title: "Network Configuration & Architecture Engineering",
    intro: "Eliminate bottlenecks, single points of failure, and configuration drift with clean, scalable, and resilient network engineering.",
    items: [
      ["Core & Cloud Networking", "Enterprise routing/switching (BGP, OSPF), SD-WAN overlays, and multi-cloud connectivity (AWS, Azure, GCP)."],
      ["Next-Gen Firewall (NGFW) & Micro-Segmentation", "Granular policy design, rule-base cleanup, and east-west traffic isolation."],
      ["High Availability & Disaster Recovery", "Automated failover validation, load balancing, and zero-downtime migration execution."]
    ]
  },
  {
    id: "assessments",
    number: "05",
    label: "SECURITY ASSESSMENTS",
    title: "Comprehensive Network & Cybersecurity Audits",
    intro: "Gain complete visibility into hidden vulnerabilities, compliance gaps, and architectural inefficiencies before attackers—or auditors—find them.",
    items: [
      ["Configuration & Firewall Rule Audits", "Deep-dive reviews of routers, switches, firewalls, and SASE tenants to eliminate overly permissive rules and shadow IT."],
      ["Zero-Trust & Cloud Security Posture Assessments", "Evaluate identity controls, SaaS configurations, and hybrid-cloud exposure."],
      ["Compliance & Risk Readiness", "Gap analysis and remediation roadmaps for ISO 27001, SOC 2, HIPAA, PCI-DSS, and GDPR."]
    ]
  }
];

function ServiceDetails({ service, activeService }) {
  return (
    <article
      className={`service-detail ${
        activeService === service.id ? "service-detail-active" : ""
      }`}
      id={service.id}
    >
      <div className="service-detail-head">
        <div>
          <span className="service-label">
            {service.number} / {service.label}
          </span>
          <h3>{service.title}</h3>
        </div>
        <span className="service-big-number">{service.number}</span>
      </div>

      <p className="service-intro">{service.intro}</p>

      <div className="service-items">
        {service.items.map(([title, text], index) => (
          <div className="service-item" key={title}>
            <span className="service-item-number">0{index + 1}</span>
            <div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
            <span className="service-item-arrow">↗</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Services() {
  const location = useLocation();
  const activeService = location.hash.replace("#", "");

  return (
    <section className="services-section section-pad" id="services">
      <div className="services-heading">
        <div>
          <div className="eyebrow">
            <span></span> WHAT WE ENGINEER
          </div>
          <h2>
            Complete capabilities.<br />
            One connected strategy.
          </h2>
        </div>

        <p>
          From network architecture to advanced threat defense, every
          engagement is engineered around performance, resilience and security.
        </p>
      </div>

      <article
        className={`service-feature ${
          activeService === "sase" ? "service-feature-active" : ""
        }`}
        id="sase"
      >
        <div className="feature-topline">
          <span>01 / SASE & ZERO-TRUST</span>
          <span>NETWORK TRANSFORMATION ↗</span>
        </div>

        <div className="feature-content">
          <div>
            <h3>SASE & Zero-Trust Network Implementation</h3>

            <p>
              Accelerate your transition from legacy MPLS and hardware-heavy
              VPNs to cloud-native Secure Access Service Edge (SASE)
              architectures. We handle end-to-end design, migration, policy
              tuning, and cutover management.
            </p>

            <Link to="/platforms" className="text-link">
              Explore our platform expertise <span>↗</span>
            </Link>
          </div>
        </div>
      </article>

      <div className="service-detail-list">
        {services.map(service => (
          <ServiceDetails
            key={service.number}
            service={service}
            activeService={activeService}
          />
        ))}
      </div>
    </section>
  );
}
