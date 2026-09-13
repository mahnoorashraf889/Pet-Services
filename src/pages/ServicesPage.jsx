import Services from "../components/Services";
import Appointment from "../components/Appointment";

const ServicesPage = () => {
  return (
    <>
      <section className="py-5" style={{ background: "#faf3ef" }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Our Services</h1>
          <p className="text-muted mb-0">
            Explore our grooming, daycare, and training services made for your pet’s comfort.
          </p>
        </div>
      </section>

      <Services />

      <div className="py-4" />

      <Appointment />
    </>
  );
};

export default ServicesPage;
