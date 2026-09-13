import About from "../components/About";
import AboutDetails from "../components/AboutDetails";
import { aboutData } from "../data/aboutData";
import TeamMembers from "../components/TeamMembers";

const AboutPage = () => {
  return (
    <section className="py-5" style={{ background: "#faf3ef" }}>
      <div className="container">
        <h1 className="fw-bold mb-4 text-center">About Pawfect</h1>
        <p className="text-muted text-center mb-5">
          Learn more about our mission, values, and the team that makes Pawfect special.
        </p>
      </div>

      <About {...aboutData} />

      <div className="py-4" />

      <AboutDetails />

      <div className="py-4" />

      <TeamMembers />
    </section>
  );
};

export default AboutPage;
