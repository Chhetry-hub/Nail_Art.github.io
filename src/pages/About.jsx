import React, { useEffect } from "react";

function About() {
  // Fade-in animation for sections (consistent with Home.jsx)
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="page about-page">
      <section className="section about">
        <h1>About Us</h1>
        <p>
          With over 5 years of experience in nail artistry, we bring creativity,
          precision, and passion to every design.
        </p>

        <h2>Our Story</h2>
        <p>
          Founded in 2020 in Bangalore, <b>Nail Art Gallery</b> brings premium
          home nail services to your doorstep. Specializing in gel nail
          extensions, acrylic nails, and creative nail art, we provide stylish
          and flawless nails without the hassle of visiting a salon. Trusted by
          over 1000 clients, we combine high-quality products, hygiene, and
          artistic designs to deliver a full salon experience at home.
        </p>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Design Options</p>
          </div>
        </div>

        {/* Additional sections that could be unique to About page */}
        <div className="about-extra">
          <h2>Our Mission</h2>
          <p>
            To revolutionize nail care by bringing professional, hygienic, and
            creative nail services directly to our clients' homes, making beauty
            accessible and convenient without compromising on quality.
          </p>

          <h2>Why Choose Us?</h2>
          <ul className="benefits-list">
            <li>✨ Professional nail artists with 5+ years experience</li>
            <li>🏠 Convenient home service across Bangalore</li>
            <li>🧴 Premium quality, hygienic products</li>
            <li>🎨 50+ trendy and classic design options</li>
            <li>📱 Easy WhatsApp booking system</li>
            <li>💯 100% customer satisfaction guarantee</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
