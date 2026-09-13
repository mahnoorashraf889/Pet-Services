import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AboutDetails = lazy(() => import("./pages/AboutDetails"));
const WhyChooseUsPage = lazy(() => import("./pages/WhyChooseUsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AppointmentPage = lazy(() => import("./pages/AppointmentPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const TeamMembersPage = lazy(() => import("./pages/TeamMembersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Minimal loading fallback
const PageLoader = () => (
  <div
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "60vh" }}
  >
    <div className="text-center">
      <div
        className="spinner-border"
        style={{ color: "#8b5e5e", width: "48px", height: "48px" }}
        role="status"
      />
      <p className="mt-3 text-muted small">Loading…</p>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-details" element={<AboutDetails />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/team" element={<TeamMembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
