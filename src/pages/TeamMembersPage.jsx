import TeamMembers from "../components/TeamMembers";
import Contact from "../components/Contact";

const TeamMembersPage = () => {
  return (
    <>
      <section className="py-5" style={{ background: "#faf3ef" }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Meet Our Team</h1>
          <p className="text-muted mb-0">
            Our experts are trained to provide safe, gentle, and professional care.
          </p>
        </div>
      </section>

      <TeamMembers />

      <div className="py-4" />

      <Contact />
    </>
  );
};

export default TeamMembersPage;
