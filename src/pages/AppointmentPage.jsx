import Appointment from "../components/Appointment";
import Services from "../components/Services";

const AppointmentPage = () => {
  return (
    <>
      <section className="py-5" style={{ background: "#faf3ef" }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Book an Appointment</h1>
          <p className="text-muted mb-0">
            Choose a service and request an appointment. We’ll confirm by call/message.
          </p>
        </div>
      </section>

      <Appointment />

      <div className="py-4" />

      <Services />
    </>
  );
};

export default AppointmentPage;
