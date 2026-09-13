import Shop from "../components/Shop";
import Contact from "../components/Contact";

const ShopPage = () => {
  return (
    <>
      <section className="py-5" style={{ background: "#faf3ef" }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Shop</h1>
          <p className="text-muted mb-0">
            Browse our best-selling products for your pet’s comfort and health.
          </p>
        </div>
      </section>

      <Shop />

      <div className="py-4" />

      <section className="py-5" style={{ background: "#fff5f7" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Need Help Choosing?</h2>
          <p className="text-muted mb-4">
            Message us and our team will guide you.
          </p>
          <a className="btn btn-primary" href="/contact">
            Contact Us
          </a>
        </div>
      </section>

      <div className="py-4" />

      <Contact />
    </>
  );
};

export default ShopPage;
