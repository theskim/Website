import ProjectsTitle from "./ProjectsTitle";
import ContactMe from "../ContactMe/ContactMe";
import NewPortfolio from "./Descriptions/NewPortfolio";
import OldPortfolio from "./Descriptions/OldPortfolio";
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
            <NewPortfolio/>
            <Divider/>
            <OldPortfolio/>
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