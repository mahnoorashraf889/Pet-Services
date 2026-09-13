import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

/*
  EmailJS configuration — replace with your actual values.
  Sign up free at: https://www.emailjs.com
*/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_CONTACT_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const INITIAL = {
  name: "",
  petName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Your name is required.";
  if (!data.petName.trim()) errors.petName = "Pet name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9+\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.service) errors.service = "Please select a topic.";
  if (!data.message.trim()) {
    errors.message = "Please write your message.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
};

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
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
        message: "Message sent! Our team will get back to you shortly. 🐾",
        type: "success",
      });
      setFormData(INITIAL);
      setErrors({});
    } catch {
      setToast({
        message: "Failed to send message. Please email us at info@pawfect.com",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `form-control ${errors[field] ? "is-invalid" : formData[field] ? "is-valid" : ""}`;

  return (
    <>
      <Toast toast={toast} onClose={() => setToast(null)} />

      <section id="contact" className="py-5" style={{ background: "#f7eaea" }}>
        <div className="container">
          <div className="row g-4">
            {/* LEFT — Contact Info */}
            <div className="col-12 col-lg-5">
              <p className="text-uppercase fw-semibold mb-1" style={{ color: "#8b5e5e", letterSpacing: "1px", fontSize: "13px" }}>
                Reach Out
              </p>
              <h2 className="fw-bold mb-3">Get In Touch</h2>
              <p className="text-muted mb-4">
                Have a question about our pet services, appointments, or products?
                Send us a message and our team will reply quickly.
              </p>

              {[
                { icon: "📍", label: "Address", value: "Sialkot, Pakistan" },
                { icon: "📞", label: "Phone", value: "+92 300 0000000" },
                { icon: "✉️", label: "Email", value: "info@pawfect.com" },
                { icon: "🕘", label: "Working Hours", value: "Mon–Sat: 9:00 AM – 8:00 PM" },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="p-3 rounded shadow-sm mb-3 d-flex align-items-start gap-3"
                  style={{ background: "#fff", borderLeft: "4px solid #8b5e5e" }}
                >
                  <span style={{ fontSize: "22px" }}>{icon}</span>
                  <div>
                    <div className="fw-semibold small mb-0">{label}</div>
                    <div className="text-muted small">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — Form */}
            <div className="col-12 col-lg-7">
              <div className="card shadow border-0" style={{ borderRadius: "18px" }}>
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Send a Message</h4>

                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          name="name"
                          className={inputClass("name")}
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>

                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          name="petName"
                          className={inputClass("petName")}
                          placeholder="Pet Name"
                          value={formData.petName}
                          onChange={handleChange}
                          required
                        />
                        {errors.petName && <div className="invalid-feedback">{errors.petName}</div>}
                      </div>

                      <div className="col-12 col-md-6">
                        <input
                          type="email"
                          name="email"
                          className={inputClass("email")}
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      <div className="col-12 col-md-6">
                        <input
                          type="tel"
                          name="phone"
                          className={inputClass("phone")}
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>

                      <div className="col-12">
                        <select
                          name="service"
                          className={`form-select ${errors.service ? "is-invalid" : formData.service ? "is-valid" : ""}`}
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">What can we help you with?</option>
                          <option value="Dog Care">Dog Care</option>
                          <option value="Cat Care">Cat Care</option>
                          <option value="Pet Grooming">Pet Grooming</option>
                          <option value="Veterinary">Veterinary</option>
                          <option value="Pet Training">Pet Training</option>
                          <option value="Pet Products">Pet Products / Shop</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                        {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                      </div>

                      <div className="col-12">
                        <textarea
                          name="message"
                          className={`form-control ${errors.message ? "is-invalid" : formData.message ? "is-valid" : ""}`}
                          placeholder="Write your message…"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          required
                        />
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                      </div>

                      <div className="col-12">
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
                            "Send Message →"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="col-12 mt-5">
              <div className="p-4 rounded" style={{ background: "#faf3ef" }}>
                <h3 className="text-center mb-4">Our Location</h3>
                <div className="rounded shadow-sm overflow-hidden" style={{ borderRadius: "18px" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=sialkot&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    title="Pawfect Location — Sialkot, Pakistan"
                    style={{ border: 0, width: "100%", height: "350px" }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
