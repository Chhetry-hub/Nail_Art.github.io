import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Fade-in animation for sections (consistent with other components)
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const cards = document.querySelectorAll(
      ".contact-card, .service-hours-card"
    );

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
    cards.forEach((card) => observer.observe(card));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WhatsApp contact functions
  const contactViaWhatsApp = (type) => {
    let message = "";

    if (type === "booking") {
      message = `Hi! I'd like to book a nail service appointment. Please let me know available slots.`;
    } else if (type === "inquiry") {
      message = `Hi! I have some questions about your nail services. Could you please help me?`;
    } else if (type === "form") {
      message = `Hi! I'm ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interest: ${formData.service}\n\nMessage: ${formData.message}`;
    }

    const whatsappURL = `https://wa.me/919731742098?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    contactViaWhatsApp("form");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    alert(
      "Your message has been sent via WhatsApp! We'll get back to you soon."
    );
  };

  const services = [
    "Nail Extension with Embellished Gel Nail Art",
    "Nail Extension with Cat Eye Gel Polish",
    "Toe Nail Extension with Gel Polish & Nail Art",
    "Nail Extensions with Gel Polish",
    "Nail Extension with Gel Polish Nail Art",
    "Bridal Nails - Gel Extension with Custom Art",
  ];

  return (
    <div className="page contact-page">
      <section className="section contact-hero">
        <h1>📞 Contact Us</h1>
        <p className="contact-intro">
          Ready for beautiful nails? Reach out for bookings, queries, or
          collaborations. We're here to help make your nail dreams come true!
        </p>
      </section>

      {/* Quick Action Buttons */}
      <section className="section quick-actions">
        <div className="action-buttons">
          <button
            className="action-btn booking-btn"
            onClick={() => contactViaWhatsApp("booking")}
          >
            <FaWhatsapp /> Quick Booking
          </button>
          <button
            className="action-btn inquiry-btn"
            onClick={() => contactViaWhatsApp("inquiry")}
          >
            <FaPhoneAlt /> Ask Questions
          </button>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section contact-info">
        <div className="contact-grid">
          <div className="contact-card">
            <FaWhatsapp className="icon whatsapp-icon" />
            <h3>WhatsApp Booking</h3>
            <a
              href="https://wa.me/919731742098"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 97317 42098
            </a>
            <small>Fastest response - Available 9AM-9PM</small>
          </div>

          <div className="contact-card">
            <FaEnvelope className="icon email-icon" />
            <h3>Email Us</h3>
            <a href="mailto:nailartgallery065@gmail.com">
              nailartgallery065@gmail.com
            </a>
            <small>For detailed inquiries</small>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="icon phone-icon" />
            <h3>Call Us</h3>
            <a href="tel:+919731742098">+91 97317 42098</a>
            <small>Mon-Sun: 9:00 AM - 9:00 PM</small>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="section service-hours">
        <h2>
          <FaClock /> Service Hours
        </h2>
        <div className="hours-grid">
          <div className="service-hours-card">
            <h4>Weekdays</h4>
            <p>Monday - Friday</p>
            <span className="time">9:00 AM - 8:00 PM</span>
          </div>
          <div className="service-hours-card">
            <h4>Weekends</h4>
            <p>Saturday - Sunday</p>
            <span className="time">9:00 AM - 9:00 PM</span>
          </div>
          <div className="service-hours-card highlight">
            <h4>Availability</h4>
            <p>
              <FaCheckCircle /> Currently Available
            </p>
            <span className="time">Book Now!</span>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="section message-form">
        <h2>Send Us a Message</h2>
        <p>Fill out the form below and we'll contact you via WhatsApp!</p>

        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Service *</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your Message (preferred date, time, location, special requests) *"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>

          <button type="submit" className="btn-send">
            <FaWhatsapp /> Send via WhatsApp
          </button>
        </form>
      </section>

      {/* Location & Address */}
      <section className="section location-info">
        <div className="location-content">
          <div className="address-info">
            <h2>
              <FaMapMarkerAlt /> Our Location
            </h2>
            <div className="address-card">
              <h3>Nail Art Gallery</h3>
              <p>
                C' Cross, 1st Main Rd, 7th Block, Koramangala,
                <br />
                Bengaluru, Karnataka 560095
              </p>
              <div className="location-features">
                <span className="feature">🏠 Home Service Available</span>
                <span className="feature">🚗 All Areas in Bangalore</span>
                <span className="feature">📍 Easy to Locate</span>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="map-container">
            <iframe
              title="Nail Art Gallery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.387732158812!2d77.6116!3d12.9344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15df71edc0cf%3A0x123456789!2sC%20Cross%2C%20Koramangala%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1709456123456!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media & Follow */}
      <section className="section follow-us">
        <h2>Follow Our Journey</h2>
        <p>Stay updated with our latest nail art creations and offers!</p>

        <div className="social-links">
          <a
            href="https://www.instagram.com/____the_nailart_gallery/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <FaInstagram className="social-icon" />
            <span>@____the_nailart_gallery</span>
          </a>

          <a
            href="https://wa.me/919731742098"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link whatsapp"
          >
            <FaWhatsapp className="social-icon" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="follow-benefits">
          <div className="benefit-item">
            <span className="benefit-icon">📸</span>
            <span>Latest nail art photos</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎉</span>
            <span>Special offers & discounts</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💡</span>
            <span>Nail care tips & trends</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
