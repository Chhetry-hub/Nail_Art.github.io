import React, { useEffect } from "react";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";

const Gallery = () => {
  const galleryImages = [gallery2, gallery3, gallery4];

  // Fade-in animation for sections
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
    <div className="page gallery-page">
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
    </div>
  );
};

export default Gallery;
