import { Link } from "react-router-dom";
import heroImage from "../assets/images/meowlife.jpeg";

const HeroSection = () => {
  return (
    <section className="py-5" style={{ background: "#ffe9e0" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <p className="text-uppercase fw-semibold mb-2" style={{ color: "#8b5e5e" }}>
              Welcome To Pawfect
            </p>
            <h1 className="fw-bold display-5">
              The Best Care For <br /> Your Best Friend
            </h1>

            <p className="text-muted mt-3">
              Grooming, daycare, training and loving care — all in one place.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link to="/services" className="btn btn-primary px-4">
                Our Services
              </Link>
              <Link
                to="/contact"
                className="btn px-4"
                style={{ border: "1px solid #8b5e5e", color: "#8b5e5e" }}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "420px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
