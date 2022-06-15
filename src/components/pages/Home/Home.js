import AboutMe from "./AboutMe";
import Education from "./Education";
import ContactMe from "./ContactMe";
import "./Home.css";

function Home(){
  return (
    <div className = "home">
      <AboutMe />
      <div className = "stripe1"/>
      <Education />
      <div className = "stripe2"/>
      <ContactMe />
    </div>
  );
}

export default Home;