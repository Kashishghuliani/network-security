
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a href="#" className="brand footer-brand">
            {/* <span className="brand-mark">N</span> */}
            <span>TOVY<span className="brand-light"> Consulting LLC</span></span>
          </a>
          <p>Engineering resilient networks and intelligent security for the modern enterprise.</p>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <a href="#why-us">Why Choose Us</a>
          <a href="#services">Our Services</a>
          <a href="#platforms">Platforms</a>
          <a href="#methodology">Methodology</a>
        </div>

        <div className="footer-column">
          <h4>CAPABILITIES</h4>
          <a href="#services">SASE & Zero Trust</a>
          <a href="#services">AI Security</a>
          <a href="#services">SOC Modernization</a>
          <a href="#services">Network Audits</a>
        </div>

        <div className="footer-column">
          <h4>GET IN TOUCH</h4>
          <a href="#contact">Architecture Consultation ↗</a>
          <a href="mailto:info@yourcompany.com">Email Us ↗</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TOVY Consulting LLC. All rights reserved.</span>
        <span>NETWORK ENGINEERING <i></i> CYBERSECURITY</span>
        <a href="#">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
