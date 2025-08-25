import React, { useEffect, useState } from "react";
import {
  FaGoogle,
  FaStar,
  FaQuoteLeft,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const REVIEWS = [
  {
    name: "Linda Nixson",
    text: "Had the most wonderful home salon experience with Elizabeth! She came fully prepared, was super professional, and took the time to consult with me on the nail shape, shade, and design I wanted.",
    service: "Gel Extension with Nail Art",
    rating: 5,
    date: "2 weeks ago",
    location: "Koramangala",
  },
  {
    name: "Saloni Pandey",
    text: "It was a great service by Eli. She came on time and peacefully finished her work. As it was my first time applying extensions, she explained the process.",
    service: "First Time Extensions",
    rating: 5,
    date: "3 weeks ago",
    location: "BTM Layout",
  },
  {
    name: "Akshaya Salian Lurshay",
    text: "I'm impressed with the service. I'm a regular customer now. Price as well is reasonable. She comes on time as well.",
    service: "Regular Customer",
    rating: 5,
    date: "1 month ago",
    location: "Indiranagar",
  },
  {
    name: "Priya Sharma",
    text: "Amazing bridal nail art! Elizabeth understood exactly what I wanted for my wedding. The design was intricate and lasted perfectly through all the ceremonies.",
    service: "Bridal Package",
    rating: 5,
    date: "1 month ago",
    location: "Whitefield",
  },
  {
    name: "Rakesh Kumar",
    text: "Booked for my wife's birthday surprise. The home service was so convenient and the nail art was stunning. She was over the moon!",
    service: "Surprise Booking",
    rating: 5,
    date: "2 months ago",
    location: "Electronic City",
  },
  {
    name: "Ananya Reddy",
    text: "Cat eye gel polish looks absolutely gorgeous! The quality is top-notch and it's been 3 weeks - still looks brand new. Highly recommend!",
    service: "Cat Eye Gel Polish",
    rating: 5,
    date: "3 months ago",
    location: "Marathahalli",
  },
];

const STATS = {
  totalReviews: 150,
  avgRating: 4.9,
  happyClients: "1000+",
  repeatCustomers: "85%",
};

const Stars = ({ rating = 5 }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? "star-filled" : "star-empty"} />
    ))}
  </div>
);

export default function Testimonials() {
  const [currentReview, setCurrentReview] = useState(0);

  // Fade-in animation for sections
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const cards = document.querySelectorAll(".review-card, .stat-card");

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

  // Auto-rotate featured review
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const leaveReview = () => {
    const message = `Hi! I'd like to leave a review for your amazing nail service. Could you please guide me on how to do this?`;
    const whatsappURL = `https://wa.me/919731742098?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="page testimonials-page">
      {/* Hero Section */}
      <section className="section testimonials-hero">
        <h1>💝 What Our Clients Say</h1>
        <p className="testimonials-intro">
          Don't just take our word for it - hear from our amazing clients who
          trust us with their nail care and beauty needs!
        </p>

        {/* Review Stats */}
        <div className="review-stats">
          <div className="stat-card">
            <div className="stat-number">{STATS.totalReviews}+</div>
            <div className="stat-label">Reviews</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{STATS.avgRating}</div>
            <div className="stat-label">★ Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{STATS.happyClients}</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{STATS.repeatCustomers}</div>
            <div className="stat-label">Return Rate</div>
          </div>
        </div>
      </section>

      {/* Featured Review Carousel */}
      <section className="section featured-reviews">
        <h2>Featured Client Stories</h2>
        <div className="featured-review-container">
          <div className="featured-review">
            <FaQuoteLeft className="quote-icon" />
            <p className="featured-text">"{REVIEWS[currentReview].text}"</p>
            <div className="featured-author">
              <Stars rating={REVIEWS[currentReview].rating} />
              <h4>{REVIEWS[currentReview].name}</h4>
              <span className="service-tag">
                {REVIEWS[currentReview].service}
              </span>
              <span className="location-tag">
                📍 {REVIEWS[currentReview].location}
              </span>
            </div>
          </div>

          <div className="review-dots">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`dot ${currentReview === index ? "active" : ""}`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="section reviews-grid-section">
        <h2>All Client Reviews</h2>
        <div className="reviews-container">
          {REVIEWS.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <Stars rating={review.rating} />
                <span className="review-date">{review.date}</span>
              </div>

              <p className="review-text">"{review.text}"</p>

              <div className="review-footer">
                <div className="reviewer-info">
                  <h4 className="review-name">{review.name}</h4>
                  <span className="service-info">{review.service}</span>
                </div>
                <span className="location-info">📍 {review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Love Section */}
      <section className="section client-love">
        <div className="love-content">
          <div className="love-text">
            <h2>
              <FaHeart className="heart-icon" /> Why Clients Choose Us
            </h2>
            <ul className="love-reasons">
              <li>✨ Professional & hygienic home service</li>
              <li>🎨 Creative & personalized nail designs</li>
              <li>⏰ Punctual & reliable appointments</li>
              <li>💎 Premium quality products & tools</li>
              <li>💰 Affordable & transparent pricing</li>
              <li>📱 Easy WhatsApp booking system</li>
            </ul>
          </div>

          <div className="trust-badges">
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">Top Rated</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🛡️</span>
              <span className="badge-text">Trusted Service</span>
            </div>
            <div className="badge">
              <span className="badge-icon">💯</span>
              <span className="badge-text">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Actions */}
      <section className="section review-actions">
        <div className="action-cards">
          <div className="action-card google-reviews">
            <FaGoogle className="action-icon" />
            <h3>View All Google Reviews</h3>
            <p>Read more reviews from our satisfied clients</p>
            <a
              className="action-btn google-btn"
              href="https://www.google.com/search?q=nail+art+gallery&rlz=1C1CHBF_enIN950IN950"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle /> View on Google
            </a>
          </div>

          <div className="action-card instagram-reviews">
            <FaInstagram className="action-icon" />
            <h3>Follow Our Instagram</h3>
            <p>See our latest work and client transformations</p>
            <a
              className="action-btn instagram-btn"
              href="https://www.instagram.com/____the_nailart_gallery/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Follow Us
            </a>
          </div>

          <div className="action-card leave-review">
            <FaHeart className="action-icon" />
            <h3>Share Your Experience</h3>
            <p>Had a great experience? We'd love to hear from you!</p>
            <button className="action-btn review-btn" onClick={leaveReview}>
              💝 Leave a Review
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section testimonials-cta">
        <div className="cta-content">
          <h2>Ready to Join Our Happy Clients?</h2>
          <p>
            Experience the same amazing service that our clients rave about!
          </p>
          <button
            className="cta-btn"
            onClick={() => {
              const message = `Hi! I saw the amazing reviews and would like to book a nail service appointment. Please let me know available slots.`;
              const whatsappURL = `https://wa.me/919731742098?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappURL, "_blank");
            }}
          >
            📱 Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
