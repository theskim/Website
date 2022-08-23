import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import ContactMe from "../ContactMe/ContactMe";
import Background from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";

const Home = () => {
  return (
    <Background>
      <AboutMe/>
      <Divider/>
      <Education/>
      <Divider/>
      <ContactMe/>
    </Background>
  );
}

export default Home;