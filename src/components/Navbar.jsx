
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const location = useLocation();

  const dropdowns = {
    Services: {
      heading: "OUR SERVICES",
      subtitle: "Enterprise security & network solutions",
      path: "/services",
      items: [
        ["SASE & Zero Trust", "sase"],
        ["AI Security", "ai-security"],
        ["SOC Modernization", "soc"],
        ["Network Engineering", "network"],
        ["Security Assessments", "assessments"]
      ]
    },
    Platforms: {
      heading: "TECHNOLOGY ECOSYSTEM",
      subtitle: "Leading security platforms",
      path: "/platforms",
      items: [
        ["Palo Alto Prisma", "palo-alto"],
        ["Zscaler", "zscaler"],
        ["Cato Networks", "cato-networks"]
      ]
    },
    Methodology: {
      heading: "OUR APPROACH",
      subtitle: "From strategy to implementation",
      path: "/methodology",
      items: [
        ["Discover & Assess", "discover"],
        ["Architect & Blueprint", "architect"],
        ["Deploy & Integrate", "deploy"],
        ["Validate & Harden", "validate"],
        ["Enable & Handover", "enable"]
      ]
    }
  };

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen("");

    if (location.hash) {
      const sectionId = location.hash.substring(1);

      const scrollToSection = () => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      };

      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToSection);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => prev === name ? "" : name);
  };

  return (
    <header className="navbar">
      <Link
        to="/"
        className="brand"
        onClick={() => {
          setMenuOpen(false);
          setDropdownOpen("");
        }}
      >
        <span>
          TOVY<span className="brand-light"> Consulting LLC</span>
        </span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <Link
          to="/#why-us"
          onClick={() => {
            setMenuOpen(false);
            setDropdownOpen("");
          }}
        >
          Why Us
        </Link>

        {Object.entries(dropdowns).map(([name, data]) => (
          <div
            className={`nav-dropdown ${dropdownOpen === name ? "dropdown-active" : ""}`}
            key={name}
            onMouseEnter={() => {
              if (window.innerWidth > 760) {
                setDropdownOpen(name);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 760) {
                setDropdownOpen("");
              }
            }}
          >
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown(name)}
              aria-expanded={dropdownOpen === name}
            >
              {name}
              <span className="dropdown-arrow">⌄</span>
            </button>

            <div className="dropdown-menu">
              <div className="dropdown-heading">
                <span>{data.heading}</span>
                <p>{data.subtitle}</p>
              </div>

              <div className="dropdown-items">
                {data.items.map(([label, sectionId]) => (
                  <Link
                    key={sectionId}
                    to={`${data.path}#${sectionId}`}
                    onClick={() => {
                      setDropdownOpen("");
                      setMenuOpen(false);
                    }}
                  >
                    {label}
                    <span>↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        <Link
          className="nav-contact"
          to="/contact"
          onClick={() => {
            setMenuOpen(false);
            setDropdownOpen("");
          }}
        >
          Schedule an Assessment <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
