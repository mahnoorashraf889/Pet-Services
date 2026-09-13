const AboutDetails = () => {
  return (
    <section id="about-details" className="py-5" style={{ background: "#fff5f7" }}>
      <div className="container">
        <h2 className="text-center mb-4">More About Us</h2>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  We provide loving, safe, and professional care for pets of all sizes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">
                  To become the most trusted pet care service in our community.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Our Values</h5>
                <p className="card-text">
                  Care, safety, hygiene, and happiness for every pet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a className="btn btn-primary" href="#contact">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
