import Education from "./Education";
import AboutMe from "./AboutMe";
import "./Home.css";

function Home(){
  return (
    <div className = "home">
      <AboutMe />
      <Education />
    </div>
  );
}

export default Home;