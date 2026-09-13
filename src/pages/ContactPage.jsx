import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <section className="py-5" style={{ background: "#faf3ef" }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Contact Us</h1>
          <p className="text-muted mb-0">
            Have a question? Send us a message and we’ll reply quickly.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
