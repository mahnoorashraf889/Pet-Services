import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const REVIEWS = [
  {
    id: 1,
    name: "Ayesha Rahman",
    pet: "Golden Retriever – Max",
    rating: 5,
    review:
      "Pawfect is amazing! Max always comes back happy and beautifully groomed. The staff is so loving with him. We've been regular clients for 2 years and wouldn't go anywhere else!",
    avatar: "👩",
  },
  {
    id: 2,
    name: "Usman Tariq",
    pet: "Persian Cat – Luna",
    rating: 5,
    review:
      "I was nervous about leaving Luna for her first grooming session, but the team was so patient and gentle. She came back looking like a princess! Highly recommend the cat care service.",
    avatar: "👨",
  },
  {
    id: 3,
    name: "Sara Malik",
    pet: "Labrador – Bruno",
    rating: 5,
    review:
      "The training program completely transformed Bruno's behavior. He used to jump on everyone and wouldn't sit on command. After 4 weeks with Hassan, he's a completely different dog!",
    avatar: "👩‍🦱",
  },
  {
    id: 4,
    name: "Ahmed Chaudhry",
    pet: "Poodle – Coco",
    rating: 5,
    review:
      "The daycare service is a lifesaver. Coco is well looked after all day while I'm at work. I love the WhatsApp updates they send with photos. 10/10 experience every time!",
    avatar: "👨‍🦲",
  },
  {
    id: 5,
    name: "Nadia Hussain",
    pet: "Shih Tzu – Bella",
    rating: 5,
    review:
      "Dr. Sara is incredible. She diagnosed Bella's food allergy within minutes when other vets had missed it for months. The veterinary care here is truly professional.",
    avatar: "👩‍🦰",
  },
];

const Stars = ({ count }) => (
  <div className="mb-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < count ? "#f59e0b" : "#ddd", fontSize: "16px" }}>
        ★
      </span>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? REVIEWS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === REVIEWS.length - 1 ? 0 : a + 1));

  const review = REVIEWS[active];

  return (
    <section id="testimonials" className="py-5" style={{ background: "#fdf0f5" }}>
      <div className="container">
        <ScrollAnimation>
          <div className="text-center mb-5">
            <p
              className="text-uppercase fw-semibold small mb-2"
              style={{ color: "#8b5e5e", letterSpacing: "2px" }}
            >
              Testimonials
            </p>
            <h2 className="fw-bold">What Pet Owners Say About Us</h2>
          </div>
        </ScrollAnimation>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <ScrollAnimation>
              <div
                className="p-5 text-center"
                style={{
                  background: "#fff",
                  borderRadius: "24px",
                  boxShadow: "0 10px 40px rgba(139,94,94,0.12)",
                  minHeight: "280px",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "56px", marginBottom: "8px" }}>{review.avatar}</div>
                <Stars count={review.rating} />
                <p
                  className="text-muted fst-italic mb-4"
                  style={{ lineHeight: "1.8", fontSize: "15px" }}
                >
                  "{review.review}"
                </p>
                <div className="fw-bold" style={{ color: "#3e2a1f" }}>{review.name}</div>
                <div className="small text-muted">{review.pet}</div>
              </div>
            </ScrollAnimation>

            {/* Navigation */}
            <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
              <button
                onClick={prev}
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#8b5e5e",
                  color: "#fff",
                  border: "none",
                  fontSize: "18px",
                }}
                aria-label="Previous review"
              >
                ‹
              </button>

              {/* Dots */}
              <div className="d-flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === active ? "#8b5e5e" : "#ddd",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#8b5e5e",
                  color: "#fff",
                  border: "none",
                  fontSize: "18px",
                }}
                aria-label="Next review"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
