import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import pawLogo from "../assets/images/pawfect.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  // Navbar background changes on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `nav-link fw-medium ${isActive ? "active" : ""}`;

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top transition-navbar ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
      data-bs-theme="light"
      style={{
        transition: "background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease",
        background: scrolled ? "#fff" : "#fff",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.10)" : "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={pawLogo} alt="Pawfect Logo" style={{ height: "42px" }} />
          <span className="fw-bold" style={{ color: "#3e2a1f", fontSize: "20px" }}>
            Pawfect
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1 align-items-lg-center">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/shop", label: "Shop" },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label, end }) => (
              <li key={label} className="nav-item">
                <NavLink className={navLinkClass} to={to} end={end}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
            {/* Cart Icon with badge */}
            <Link
              to="/cart"
              className="position-relative"
              aria-label={`Cart (${cartCount} items)`}
              style={{ textDecoration: "none" }}
            >
              <span style={{ fontSize: "22px" }}>🛒</span>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{
                    background: "#8b5e5e",
                    fontSize: "10px",
                    padding: "3px 6px",
                    minWidth: "18px",
                  }}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* CTA Button */}
            <Link
              to="/appointment"
              className="btn fw-semibold"
              style={{
                background: "#8b5e5e",
                color: "#fff",
                borderRadius: "8px",
                padding: "8px 20px",
                fontSize: "14px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(139,94,94,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book Now 🐾
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
