import AboutMe from "./AboutMe";
import Education from "./Education";
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";

const Home = () => {
  return (
    <BackgroundAll>
      <AboutMe/>
      <Divider/>
      <Education/>
      <Divider/>
      <ContactMe/>
    </BackgroundAll>
  );
}

export default Home;