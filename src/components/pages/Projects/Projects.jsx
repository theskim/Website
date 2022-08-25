import ProjectsTitle from "./ProjectsTitle";
import ContactMe from "../ContactMe/ContactMe";
import Portfolio from "./Descriptions/Portfolio";
import Reversi from "./Descriptions/Reversi";
import LeagueSimulator from "./Descriptions/LeagueSimulator";
import Background from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";
import "./Projects.css";

const Projects = () => {
    return (
        <Background>
            <ProjectsTitle/>
            <Divider/>
            <Portfolio/>
            <Divider/>
            <Reversi/>
            <Divider/>
            <LeagueSimulator/>
            <Divider/>
            <ContactMe/>
        </Background>
    );
}

export default Projects;