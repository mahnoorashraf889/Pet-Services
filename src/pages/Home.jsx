import HomeSection from "../components/Home";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Shop from "../components/Shop";
import TeamMembers from "../components/TeamMembers";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <HomeSection />

      <div className="py-4" />

      <WhyChooseUs />

      <div className="py-4" />

      <Services />

      <div className="py-4" />

      <Shop />

      <div className="py-4" />

      <TeamMembers />

      <div className="py-4" />

      <Contact />
    </>
  );
};

export default Home;
