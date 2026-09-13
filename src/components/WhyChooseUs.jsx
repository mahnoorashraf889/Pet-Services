import chooseImg from "../assets/images/pets.jpeg"; 
// Replace with your actual image file name

const WhyChooseUs = () => {
  return (
    <section id="why" className="py-5" style={{ background: "#e9dede" }}>
      <div className="container text-center">

        <h6 className="text-uppercase mb-2" style={{ color: "#8b5e5e", letterSpacing: "1px" }}>
          Why Choose Us
        </h6>

        <h2 className="fw-bold mb-5">
          Your Pets Will Be Extremely Happy With Us
        </h2>

        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-12 col-lg-4 text-lg-start mb-4 mb-lg-0">
            <div className="mb-4">
              <h4 className="fw-bold">Experienced Professionals</h4>
              <p className="text-muted">
                Our team of skilled and certified experts ensures your pets
                receive the highest standard of care at all times.
              </p>
            </div>

            <div>
              <h4 className="fw-bold">Loving Environment</h4>
              <p className="text-muted">
                We provide a warm and nurturing space where pets feel safe,
                happy, and loved every day.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="col-12 col-lg-4 text-center mb-4 mb-lg-0">
            <img
              src={chooseImg}
              alt="Happy Pets"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "280px" }}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-lg-4 text-lg-start">
            <div className="mb-4">
              <h4 className="fw-bold">Comprehensive Services</h4>
              <p className="text-muted">
                From grooming and boarding to health checkups, we offer a
                complete range of services to care for your pets.
              </p>
            </div>

            <div>
              <h4 className="fw-bold">Customer Satisfaction</h4>
              <p className="text-muted">
                Your happiness is our priority, and we go above and beyond to
                meet every pet owner’s expectations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
