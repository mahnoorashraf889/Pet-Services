import services from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="py-5" style={{ background: "#fff0f5" }}>
      <div className="container">
        <h2 className="text-center mb-5">All Pet Care Services</h2>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={service.img}
                  className="card-img-top"
                  alt={service.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#appointment" className="btn btn-primary px-4">
  Book a Service
</a>

        </div>
      </div>
    </section>
  );
};

export default Services;
