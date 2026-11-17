
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Why Us", "#why-us"],
    ["Services", "#services"],
    ["Platforms", "#platforms"],
    ["Methodology", "#methodology"],
  ];

  return (
    <header className="navbar">
      <a href="#" className="brand">
        {/* <span className="brand-mark">N</span> */}
        <span>TOVY<span className="brand-light"> Consulting LLC</span></span>
      </a>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
          Schedule an Assessment <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
