import "./Home.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../../Footer/Footer";

const HomeBox = (props) => {
  return (
    <div className = "home">
      {props.children}
    </div>
  );
}

const Home = () => {
  return (
    <HomeBox>
      <AboutMe/>
      <Education/>
      <ContactMe/>
      <Footer/>
    </HomeBox>
  );
}

export default Home;