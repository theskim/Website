import "./Home.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import ContactMe from "./ContactMe";
import Footer from "../../Footer/Footer";

const Home = () => {
  return(
    <div className = "home">
      <AboutMe/>
      <Education/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default Home;