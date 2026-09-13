import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const STATS = [
  { number: 500, suffix: "+", label: "Happy Pets Served", icon: "🐾" },
  { number: 10, suffix: "+", label: "Years of Experience", icon: "🏆" },
  { number: 50, suffix: "+", label: "Expert Staff Members", icon: "👩‍⚕️" },
  { number: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
];

const useCountUp = (target, isVisible) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [target, isVisible]);

  return count;
};

const StatCard = ({ stat, isVisible }) => {
  const count = useCountUp(stat.number, isVisible);
  return (
    <div className="col-6 col-md-3">
      <div
        className="text-center p-4"
        style={{
          background: "rgba(255,255,255,0.07)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div style={{ fontSize: "36px", marginBottom: "8px" }}>{stat.icon}</div>
        <div
          className="fw-bold"
          style={{ fontSize: "clamp(32px, 6vw, 52px)", color: "#c98a8a", lineHeight: 1 }}
        >
          {count}{stat.suffix}
        </div>
        <div className="mt-2 small" style={{ color: "#c9b8b0" }}>{stat.label}</div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="stats"
      className="py-5"
      style={{ background: "#3e2a1f" }}
    >
      <div className="container">
        <ScrollAnimation>
          <div className="text-center mb-5">
            <p
              className="text-uppercase fw-semibold small mb-2"
              style={{ color: "#c98a8a", letterSpacing: "2px" }}
            >
              Our Numbers
            </p>
            <h2 className="fw-bold" style={{ color: "#fff" }}>
              Trusted by Hundreds of Pet Owners
            </h2>
          </div>
        </ScrollAnimation>

        <div className="row g-4">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
