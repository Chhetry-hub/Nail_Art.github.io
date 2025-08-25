import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll to section
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="navbar">
      <div className="logo">Nail Art Gallery</div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => handleLinkClick(e, "services")}>
            Services
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            onClick={(e) => handleLinkClick(e, "testimonials")}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
