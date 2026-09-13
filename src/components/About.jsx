import { Link } from "react-router-dom";

const About = ({ title, subtitle, text, listItems, imageUrl }) => {
  return (
    <section className="about">
      <div className="about-image">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="about-text">
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{text}</p>

        {Array.isArray(listItems) && listItems.length > 0 && (
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* ✅ Route-based navigation */}
        <Link to="/about" className="center-btn">
          More About Us
        </Link>
      </div>
    </section>
  );
};

export default About;
