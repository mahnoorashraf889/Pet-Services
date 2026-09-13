import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";

const PLANS = [
  {
    name: "Basic Care",
    price: "1,500",
    period: "/ session",
    tagline: "Perfect for first-time visits",
    color: "#8b9eb7",
    features: [
      "Basic bath & dry",
      "Nail trimming",
      "Ear cleaning",
      "Brush out",
      "Bow or bandana",
    ],
    missing: ["De-shedding treatment", "Teeth brushing", "Premium shampoo"],
    popular: false,
  },
  {
    name: "Standard Care",
    price: "3,000",
    period: "/ session",
    tagline: "Our most popular package",
    color: "#8b5e5e",
    features: [
      "Full bath with premium shampoo",
      "Haircut & styling",
      "Nail trimming & filing",
      "Ear cleaning",
      "Teeth brushing",
      "De-shedding treatment",
      "Bow or bandana",
    ],
    missing: ["Priority scheduling", "Post-care report"],
    popular: true,
  },
  {
    name: "Premium VIP",
    price: "5,500",
    period: "/ session",
    tagline: "The full 5-star experience",
    color: "#b8860b",
    features: [
      "Everything in Standard",
      "Premium spa shampoo & conditioner",
      "Blueberry facial",
      "Pawdicure (paw balm)",
      "Priority scheduling",
      "Post-care health report",
      "Photo package",
    ],
    missing: [],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-5" style={{ background: "#fff" }}>
      <div className="container">
        <ScrollAnimation>
          <div className="text-center mb-5">
            <p
              className="text-uppercase fw-semibold small mb-2"
              style={{ color: "#8b5e5e", letterSpacing: "2px" }}
            >
              Transparent Pricing
            </p>
            <h2 className="fw-bold">Simple, Clear Grooming Packages</h2>
            <p className="text-muted mt-2" style={{ maxWidth: "500px", margin: "0 auto" }}>
              No hidden fees. Pick the package that works best for your pet.
              Prices may vary by breed and coat type.
            </p>
          </div>
        </ScrollAnimation>

        <div className="row g-4 justify-content-center align-items-stretch">
          {PLANS.map((plan, i) => (
            <ScrollAnimation key={plan.name} delay={i * 120} className="col-12 col-md-6 col-lg-4">
              <div
                className="h-100 p-4 rounded-4 position-relative"
                style={{
                  border: plan.popular ? `2px solid ${plan.color}` : "1px solid #ece5e5",
                  background: plan.popular ? "#fdf0f5" : "#fafafa",
                  boxShadow: plan.popular ? "0 12px 40px rgba(139,94,94,0.15)" : "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                {plan.popular && (
                  <div
                    className="position-absolute top-0 start-50 translate-middle"
                    style={{
                      background: plan.color,
                      color: "#fff",
                      borderRadius: "20px",
                      padding: "4px 16px",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ⭐ Most Popular
                  </div>
                )}

                <div className="text-center mb-4 pt-3">
                  <div
                    className="fw-bold mb-1"
                    style={{ color: plan.color, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}
                  >
                    {plan.name}
                  </div>
                  <div className="fw-bold" style={{ fontSize: "38px", color: "#3e2a1f", lineHeight: 1 }}>
                    Rs. {plan.price}
                  </div>
                  <div className="text-muted small">{plan.period}</div>
                  <div className="text-muted small mt-1">{plan.tagline}</div>
                </div>

                <ul className="list-unstyled mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="mb-2 small d-flex align-items-center gap-2">
                      <span style={{ color: "#2e7d32", flexShrink: 0 }}>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="mb-2 small d-flex align-items-center gap-2" style={{ opacity: 0.4 }}>
                      <span style={{ flexShrink: 0 }}>✕</span>
                      <span style={{ textDecoration: "line-through" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/appointment"
                  className="btn w-100 fw-semibold"
                  style={{
                    background: plan.popular ? plan.color : "transparent",
                    color: plan.popular ? "#fff" : plan.color,
                    border: `2px solid ${plan.color}`,
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  Book This Package
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
