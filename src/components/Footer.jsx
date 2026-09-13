import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const socialLinks = [
    { href: "https://facebook.com", icon: "f", label: "Facebook", bg: "#1877f2" },
    { href: "https://instagram.com", icon: "in", label: "Instagram", bg: "#e1306c" },
    { href: "https://twitter.com", icon: "𝕏", label: "X / Twitter", bg: "#000" },
    { href: "https://wa.me/923000000000", icon: "w", label: "WhatsApp", bg: "#25d366" },
  ];

  return (
    <footer style={{ background: "#3e2a1f", color: "#fff", padding: "60px 0 0" }}>
      <div className="container">
        <div className="row gy-5">

          {/* Brand */}
          <div className="col-12 col-md-4">
            <h4 className="fw-bold mb-3" style={{ color: "#c98a8a", fontSize: "22px" }}>
              🐾 Pawfect
            </h4>
            <p className="small" style={{ color: "#c9b8b0", lineHeight: "1.8" }}>
              Professional pet care with love and expertise. Grooming, daycare, training,
              veterinary care and premium products — all in one place, right in Sialkot.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-2 mt-3">
              {socialLinks.map(({ href, icon, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: "700",
                    textDecoration: "none",
                    flexShrink: 0,
                    transition: "transform 0.2s, opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3" style={{ color: "#c98a8a" }}>Quick Links</h6>
            <ul className="list-unstyled">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/shop", label: "Shop" },
                { to: "/team", label: "Our Team" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={label} className="mb-2">
                  <Link
                    to={to}
                    className="text-decoration-none small"
                    style={{ color: "#c9b8b0", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c98a8a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#c9b8b0")}
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3" style={{ color: "#c98a8a" }}>Contact Info</h6>
            <p className="small mb-2" style={{ color: "#c9b8b0" }}>📞 +92 300 0000000</p>
            <p className="small mb-2" style={{ color: "#c9b8b0" }}>✉️ info@pawfect.com</p>
            <p className="small mb-3" style={{ color: "#c9b8b0" }}>📍 Sialkot, Pakistan</p>
            <h6 className="fw-bold mb-2" style={{ color: "#c98a8a" }}>Working Hours</h6>
            <p className="small mb-1" style={{ color: "#c9b8b0" }}>Mon – Sat: 9:00 AM – 8:00 PM</p>
            <p className="small" style={{ color: "#c9b8b0" }}>Sunday: Closed</p>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-3" style={{ color: "#c98a8a" }}>Stay Updated</h6>
            <p className="small mb-3" style={{ color: "#c9b8b0" }}>
              Subscribe for pet care tips, offers, and news from Pawfect.
            </p>
            {subscribed ? (
              <div
                className="p-3 rounded small"
                style={{ background: "rgba(201,138,138,0.2)", color: "#c98a8a", border: "1px solid #c98a8a" }}
              >
                🎉 Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletter}>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                      borderRadius: "8px 0 0 8px",
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-sm"
                    style={{
                      background: "#8b5e5e",
                      color: "#fff",
                      borderRadius: "0 8px 8px 0",
                      border: "none",
                    }}
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <hr style={{ borderColor: "rgba(255,255,255,0.1)", marginTop: "40px" }} />
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 small"
          style={{ color: "#9e8880" }}
        >
          <span>© 2026 Pawfect. All Rights Reserved.</span>
          <span className="mt-2 mt-md-0">
            Made with ❤️ for pets everywhere 🐕🐈
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
