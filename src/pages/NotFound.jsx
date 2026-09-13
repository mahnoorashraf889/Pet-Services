import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "80vh", background: "#faf3ef", padding: "60px 20px" }}
    >
      <div>
        {/* Big paw illustration */}
        <div style={{ fontSize: "100px", lineHeight: 1, marginBottom: "20px" }}>
          🐾
        </div>

        <h1
          className="fw-bold mb-2"
          style={{ fontSize: "clamp(60px, 15vw, 120px)", color: "#e0c4c4", lineHeight: 1 }}
        >
          404
        </h1>

        <h2 className="fw-bold mb-3" style={{ color: "#3e2a1f" }}>
          Uh-oh! This page ran away…
        </h2>

        <p className="text-muted mb-5" style={{ maxWidth: "400px", margin: "0 auto 40px" }}>
          Looks like this page has wandered off somewhere. Don't worry — your pet
          is safe with us. Let's get you back on the right path.
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link
            to="/"
            className="btn px-5 py-2 fw-semibold"
            style={{ background: "#8b5e5e", color: "#fff", borderRadius: "10px" }}
          >
            🏠 Go Home
          </Link>
          <Link
            to="/contact"
            className="btn px-5 py-2 fw-semibold"
            style={{
              border: "2px solid #8b5e5e",
              color: "#8b5e5e",
              borderRadius: "10px",
              background: "transparent",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
