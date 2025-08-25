import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919731742098"; // Updated WhatsApp number
  const message = "Hello! I want to book a nail art service.";
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      Book via WhatsApp
    </a>
  );
};

export default WhatsAppButton;
