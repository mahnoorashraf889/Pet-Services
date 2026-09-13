import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import services from "../data/servicesData";
import appointmentImg from "../assets/images/appointments.png";
import Toast from "./Toast";

/*
  EmailJS configuration — replace these with your actual EmailJS values.
  Sign up free at: https://www.emailjs.com
  ---------------------------------------------------------------
  EMAILJS_SERVICE_ID  : found in EmailJS dashboard → Email Services
  EMAILJS_TEMPLATE_ID : found in EmailJS dashboard → Email Templates
  EMAILJS_PUBLIC_KEY  : found in EmailJS dashboard → Account → Public Key
*/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_APPOINTMENT_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const INITIAL = {
  ownerName: "",
  petName: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

const validate = (data) => {
  const errors = {};
  if (!data.ownerName.trim()) errors.ownerName = "Your name is required.";
  if (!data.petName.trim()) errors.petName = "Pet name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9+\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.service) errors.service = "Please select a service.";
  if (!data.date) errors.date = "Please select a preferred date.";
  if (!data.time) errors.time = "Please select a preferred time.";
  return errors;
};

// Get today's date in YYYY-MM-DD format for min date restriction
const todayStr = () => new Date().toISOString().split("T")[0];

const Appointment = () => {
  const formRef = useRef(null);
  const [data, setData] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setToast({
        message: "🐾 Appointment request sent! We'll contact you shortly.",
        type: "success",
      });
      setData(INITIAL);
      setErrors({});
    } catch {
      setToast({
        message: "Failed to send. Please call us directly at +92 300 0000000.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const Field = ({ label, name, type = "text", placeholder, children }) => (
    <div className="mb-3">
      {children ?? (
        <input
          ref={name === "ownerName" ? undefined : undefined}
          type={type}
          className={`form-control ${errors[name] ? "is-invalid" : data[name] ? "is-valid" : ""}`}
          name={name}
          placeholder={placeholder}
          value={data[name]}
          onChange={handleChange}
          min={type === "date" ? todayStr() : undefined}
          required
        />
      )}
      {errors[name] && (
        <div className="invalid-feedback d-block" style={{ fontSize: "12px" }}>
          {errors[name]}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Toast toast={toast} onClose={() => setToast(null)} />

      <section id="appointment" className="py-5" style={{ background: "#f7eaea" }}>
        <div className="container">
          {/* Title */}
          <div className="row mb-4">
            <div className="col-12">
              <p className="text-uppercase fw-semibold mb-1" style={{ color: "#8b5e5e", letterSpacing: "1px", fontSize: "13px" }}>
                Book a Visit
              </p>
              <h2 className="fw-bold">Make Your Pet's Appointment</h2>
            </div>
          </div>

          <div className="row g-5 align-items-start">
            {/* LEFT — Hours + Form */}
            <div className="col-12 col-lg-6">
              {/* Working Hours */}
              <div
                className="p-3 rounded shadow-sm mb-4"
                style={{ background: "#fff", borderLeft: "4px solid #8b5e5e" }}
              >
                <h6 className="fw-bold mb-2">🕘 Working Hours</h6>
                <div className="text-muted small">Mon – Sat: 9:00 AM – 8:00 PM</div>
                <div className="text-muted small">Sunday: Closed</div>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <Field name="ownerName" placeholder="Your Full Name">
                      <input
                        type="text"
                        className={`form-control ${errors.ownerName ? "is-invalid" : data.ownerName ? "is-valid" : ""}`}
                        name="ownerName"
                        placeholder="Your Full Name"
                        value={data.ownerName}
                        onChange={handleChange}
                        required
                      />
                      {errors.ownerName && <div className="invalid-feedback">{errors.ownerName}</div>}
                    </Field>
                  </div>
                  <div className="col-12 col-md-6">
                    <Field name="petName" placeholder="Pet Name">
                      <input
                        type="text"
                        className={`form-control ${errors.petName ? "is-invalid" : data.petName ? "is-valid" : ""}`}
                        name="petName"
                        placeholder="Pet Name"
                        value={data.petName}
                        onChange={handleChange}
                        required
                      />
                      {errors.petName && <div className="invalid-feedback">{errors.petName}</div>}
                    </Field>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : data.email ? "is-valid" : ""}`}
                        name="email"
                        placeholder="Email Address"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <input
                        type="tel"
                        className={`form-control ${errors.phone ? "is-invalid" : data.phone ? "is-valid" : ""}`}
                        name="phone"
                        placeholder="Phone Number"
                        value={data.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <select
                    className={`form-select ${errors.service ? "is-invalid" : data.service ? "is-valid" : ""}`}
                    name="service"
                    value={data.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Service</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Veterinary Checkup">Veterinary Checkup</option>
                    <option value="Pet Boarding">Pet Boarding</option>
                  </select>
                  {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label small text-muted mb-1">Preferred Date</label>
                      <input
                        type="date"
                        className={`form-control ${errors.date ? "is-invalid" : data.date ? "is-valid" : ""}`}
                        name="date"
                        value={data.date}
                        onChange={handleChange}
                        min={todayStr()}
                        required
                      />
                      {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label small text-muted mb-1">Preferred Time</label>
                      <select
                        className={`form-select ${errors.time ? "is-invalid" : data.time ? "is-valid" : ""}`}
                        name="time"
                        value={data.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Time</option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>01:00 PM</option>
                        <option>02:00 PM</option>
                        <option>03:00 PM</option>
                        <option>04:00 PM</option>
                        <option>05:00 PM</option>
                        <option>06:00 PM</option>
                        <option>07:00 PM</option>
                      </select>
                      {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    placeholder="Additional notes (optional)"
                    value={data.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 py-2 fw-semibold"
                  disabled={loading}
                  style={{
                    background: loading ? "#a88080" : "#8b5e5e",
                    color: "#fff",
                    borderRadius: "10px",
                    transition: "background 0.2s",
                  }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    "🐾 Book Appointment"
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT — Image */}
            <div className="col-12 col-lg-6 d-flex align-items-start">
              <img
                src={appointmentImg}
                alt="Book a pet appointment at Pawfect"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
