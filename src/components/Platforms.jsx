
import React from "react";

const platforms = [
  {
    number: "01",
    name: "Palo Alto",
    sub: "PRISMA SASE",
    title: "Unified cloud-delivered security.",
    text: "Prisma Access & Prisma SD-WAN deployment, Panorama policy migration, ADEM monitoring, and unified cloud-delivered security.",
    tags: ["Prisma Access", "Prisma SD-WAN", "Panorama", "ADEM"]
  },
  {
    number: "02",
    name: "Zscaler",
    sub: "ZERO TRUST EXCHANGE",
    title: "Secure access without boundaries.",
    text: "ZIA (Internet Access), ZPA (Private Access), and ZDX deployment, App Connector provisioning, and SSL inspection optimization.",
    tags: ["ZIA", "ZPA", "ZDX", "App Connectors"]
  },
  {
    number: "03",
    name: "Cato Networks",
    sub: "SASE CLOUD",
    title: "One global security network.",
    text: "Cato Socket edge SD-WAN rollout, global private backbone integration, CASB/DLP policy configuration, and unified management.",
    tags: ["Cato Socket", "SD-WAN", "CASB", "DLP"]
  }
];

export default function Platform() {
  return (
    <section className="platform-section" id="platforms">
      <div className="platform-heading">
        <div>
          <div className="eyebrow light-eyebrow"><span></span> TECHNOLOGY ECOSYSTEM</div>
          <h2>Built around the platforms<br />powering modern security.</h2>
        </div>
        <p>Specialized implementation and engineering across leading SASE and zero-trust ecosystems.</p>
      </div>

      <div className="platform-track">
        {platforms.map((platform) => (
          <article className="platform-card" key={platform.number}>
            <div className="platform-card-top">
              <span>{platform.number} / PLATFORM</span>
              <span className="platform-arrow">↗</span>
            </div>
            <div className="platform-brand">
              <h3>{platform.name}</h3>
              <span>{platform.sub}</span>
            </div>
            <h4>{platform.title}</h4>
            <p>{platform.text}</p>
            <div className="platform-tags">
              {platform.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
      <div className="platform-footer">
        <span>ENTERPRISE-GRADE IMPLEMENTATION</span>
        <span>DESIGNED FOR YOUR ENVIRONMENT <b>↗</b></span>
      </div>
    </section>
  );
}
