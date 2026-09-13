import { Link } from "react-router-dom";

const AboutDetails = () => {
  return (
    <section className="py-5" style={{ background: "#fff5f7" }}>
      <div className="container">
        <h1 className="text-center fw-bold mb-4">More About Pawfect</h1>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">Our Mission</h5>
                <p className="text-muted">
                  We provide loving, safe, and professional care for pets of all sizes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">Our Vision</h5>
                <p className="text-muted">
                  To become the most trusted pet care service in our community.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">Our Values</h5>
                <p className="text-muted">
                  Care, safety, hygiene, and happiness for every pet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/contact" className="btn btn-primary px-4">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
