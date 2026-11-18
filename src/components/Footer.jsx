
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link to="/" className="brand footer-brand">
            <span>
              TOVY<span className="brand-light"> Consulting LLC</span>
            </span>
          </Link>

          <p>
            Engineering resilient networks and intelligent security for the modern enterprise.
          </p>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <Link to="/#why-us">Why Choose Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/platforms">Platforms</Link>
          <Link to="/methodology">Methodology</Link>
        </div>

        <div className="footer-column">
          <h4>CAPABILITIES</h4>
          <Link to="/services">SASE & Zero Trust</Link>
          <Link to="/services">AI Security</Link>
          <Link to="/services">SOC Modernization</Link>
          <Link to="/services">Network Audits</Link>
        </div>

        <div className="footer-column">
          <h4>GET IN TOUCH</h4>
          <Link to="/contact">Architecture Consultation ↗</Link>
          <a href="mailto:info@yourcompany.com">Email Us ↗</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} TOVY Consulting LLC. All rights reserved.
        </span>

        <span>
          NETWORK ENGINEERING <i></i> CYBERSECURITY
        </span>

        <a href="#">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
