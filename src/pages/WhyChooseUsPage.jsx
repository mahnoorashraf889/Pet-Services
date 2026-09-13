import WhyChooseUs from "../components/WhyChooseUs";

const WhyChooseUsPage = () => {
  return (
    <>
      <section className="py-5" style={{ background: "#faf3ef" }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Why Choose Pawfect?</h1>
          <p className="text-muted">
            We focus on love, safety, hygiene, and expert care—so your pet feels at home.
          </p>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
};

export default WhyChooseUsPage;
