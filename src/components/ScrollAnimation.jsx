import { useEffect, useRef, useState } from "react";

/**
 * ScrollAnimation — wraps children and fades them in when they enter the viewport.
 *
 * Props:
 *   delay    — CSS transition delay in ms (default: 0)
 *   direction — "up" | "left" | "right" (default: "up")
 *   className — extra classes to add to the wrapper div
 */
const ScrollAnimation = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translate = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : translate[direction],
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
