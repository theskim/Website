import AboutMe from "./AboutMe";
import Education from "./Education";
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../BackgroundAll/BackgroundAll";

const Home = () => {
  return (
    <BackgroundAll>
      <AboutMe/>
      <div className="divider"/>
      <Education/>
      <div className="divider"/>
      <ContactMe/>
    </BackgroundAll>
  );
}

export default Home;