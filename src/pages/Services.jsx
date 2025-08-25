import React, { useEffect } from "react";

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

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  const bookService = (serviceName, price) => {
    const message = `Hi! I would like to book "${serviceName}" service for ${price}. Please provide available slots.`;
    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="services-page">
      <h1 className="services-header"> Our Services</h1>
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
    </div>
  );
};

export default Services;
