import saraImg from "../assets/images/person1.jpeg";
import natashaImg from "../assets/images/person2.jpeg";
import hassanImg from "../assets/images/person3.jpeg";

const teamData = [
  {
    id: 1,
    name: "Sara",
    role: "Veterinarian",
    img: saraImg,
  },
  {
    id: 2,
    name: "Natasha",
    role: "Pet Groomer",
    img: natashaImg,
  },
  {
    id: 3,
    name: "Hassan",
    role: "Pet Nutritionist",
    img: hassanImg,
  },
];

const TeamMembers = () => {
  return (
    <section className="py-5 team-section">
      <div className="container text-center">
        <p className="text-muted mb-2">Team Members</p>
        <h2 className="fw-bold mb-5">
          Meet Our Experienced Pet Care Team
        </h2>

        <div className="row justify-content-center g-4">
          {teamData.map((member) => (
            <div key={member.id} className="col-12 col-md-4">
              <div className="team-card">
                <div className="team-img mx-auto">
                  <img src={member.img} alt={member.name} />
                </div>
                <h5 className="mt-3 fw-semibold">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
