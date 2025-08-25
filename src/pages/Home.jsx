import React, { useEffect } from "react";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";

const Home = () => {
  const galleryImages = [gallery2, gallery3, gallery4];

  // Services data - same as Services.jsx
  const services = [
    {
      title: "Nail Extension with Embellished Gel Nail Art",
      price: "₹2,500",
      time: "90–120 minutes",
      desc: "Stunning nail extensions with intricate gel nail art featuring embellishments, crystals, and detailed designs for special occasions.",
    },
    {
      title: "Nail Extension with Cat Eye Gel Polish",
      price: "₹2,150",
      time: "75–90 minutes",
      desc: "Elegant nail extensions with mesmerizing cat eye gel polish that creates a magnetic, dimensional effect.",
    },
    {
      title: "Toe Nail Extension with Gel Polish & Nail Art",
      price: "₹2,150",
      time: "60–90 minutes",
      desc: "Beautiful toe nail extensions with long-lasting gel polish and custom nail art designs for perfect pedicure.",
    },
  ];

  // Fade-in animation for sections
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const serviceCards = document.querySelectorAll(".service-card");

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

    // Observe sections
    sections.forEach((section) => observer.observe(section));

    // Observe service cards separately for staggered animation
    serviceCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      serviceCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Book service function - same as Services.jsx
  const bookService = (serviceName, price) => {
    const message = `Hi! I would like to book "${serviceName}" service for ${price}. Please provide available slots.`;
    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="section hero">
        <h1>Welcome to Nail Art Gallery</h1>
        <p>
          <strong>Premium Nail Salon at Home in Bangalore</strong>. Experience
          professional nail care and trendy designs delivered to your doorstep.
          Trusted by 1000+ happy clients. Easy booking via WhatsApp. Book today
          for stylish, flawless nails!
        </p>
        <button
          className="view-services-btn"
          onClick={() => scrollToSection("services")}
        >
          View Services
        </button>
      </section>

      {/* About Section - Enhanced with stats */}
      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          With over 5 years of experience in nail artistry, we bring creativity,
          precision, and passion to every design.
        </p>

        <h3>Our Story</h3>
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
      </section>

      {/* Enhanced Services Section with Service Cards */}
      <section id="services" className="section services">
        <h2>Our Premium Services</h2>
        <p className="services-intro">
          Professional nail care and trendy designs delivered to your doorstep
        </p>

        {/* Services Grid with Cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-price">{service.price}</p>
              <p className="service-time">⏱️ {service.time}</p>
              <p className="service-desc">{service.desc}</p>
              <button
                className="book-service-btn"
                onClick={() => bookService(service.title, service.price)}
              >
                📱 Book Now
              </button>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="services-footer">
          <button
            className="view-all-services-btn"
            onClick={() => {
              const message = `Hi! I'd like to know more about your nail services and book an appointment.`;
              const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappURL, "_blank");
            }}
          >
            💎 View All Services & Pricing
          </button>

          <p className="services-note">
            *All services include professional consultation and aftercare tips
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <h2>Our Gallery</h2>
        <div className="gallery">
          {galleryImages.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img} alt={`Nail Art ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <h2>💝 What Our Clients Say</h2>
        <p className="testimonials-intro">
          Trusted by 1000+ happy clients across Bangalore
        </p>

        {/* Featured Reviews Preview */}
        <div className="testimonials-preview">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Had the most wonderful home salon experience! Super professional
              and took time to consult on the perfect design."
            </p>
            <h4 className="client-name">- Linda Nixson</h4>
            <span className="service-tag">Gel Extension with Nail Art</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Great service! Came on time and explained the process perfectly.
              I'm a regular customer now!"
            </p>
            <h4 className="client-name">- Akshaya Salian</h4>
            <span className="service-tag">Regular Customer</span>
          </div>
        </div>

        {/* Client Stats */}
        <div className="client-stats">
          <div className="stat-item">
            <span className="stat-number">4.9★</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">Reviews</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">85%</span>
            <span className="stat-label">Return Clients</span>
          </div>
        </div>

        <div className="testimonial-actions">
          <button
            className="review-btn google-btn"
            onClick={() =>
              window.open(
                "https://www.google.com/search?q=nail+art+gallery&rlz=1C1CHBF_enIN950IN950",
                "_blank"
              )
            }
          >
            📊 View All Reviews
          </button>

          <button
            className="review-btn book-btn"
            onClick={() => {
              const message = `Hi! I saw the amazing reviews and would like to book a nail service. Please share available slots.`;
              const whatsappURL = `https://wa.me/919731742098?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappURL, "_blank");
            }}
          >
            💝 Join Happy Clients
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>📞 Contact Us</h2>
        <p className="contact-intro">
          Ready for beautiful nails? Book your appointment today!
        </p>

        <div className="contact-preview">
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div className="contact-details">
              <h4>WhatsApp Booking</h4>
              <p>+91 97317 42098</p>
              <small>Fastest response</small>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div className="contact-details">
              <h4>Email Us</h4>
              <p>nailartgallery065@gmail.com</p>
              <small>For detailed inquiries</small>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-details">
              <h4>Service Areas</h4>
              <p>All Bangalore</p>
              <small>Home service available</small>
            </div>
          </div>
        </div>

        <div className="contact-actions">
          <button
            className="contact-btn call-btn"
            onClick={() => window.open("tel:+919731742098")}
          >
            📞 Call Now
          </button>
        </div>

        <div className="service-hours-preview">
          <p>
            <strong>Service Hours:</strong> Mon-Fri: 9AM-8PM | Sat-Sun: 9AM-9PM
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
