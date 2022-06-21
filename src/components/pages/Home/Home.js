import "./Home.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import ContactMe from "./ContactMe";
import Footer from "./../../Footer/Footer";

function Home(){
  return (
    <div className = "home">
      <AboutMe />
      <div className = "stripe1"/>
      <Education />
      <div className = "stripe2"/>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;