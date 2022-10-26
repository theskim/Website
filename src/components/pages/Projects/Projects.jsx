import ProjectsTitle from "./ProjectsTitle";
import ContactMe from "../ContactMe/ContactMe";
import CommuterStudent from "./Descriptions/CommuterStudent";
import Click from "./Descriptions/Click";
import Portfolio from "./Descriptions/Portfolio";
import Reversi from "./Descriptions/Reversi";
import Background from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";
import "./Projects.scss";

const Projects = () => {
    return (
        <Background>
            <ProjectsTitle/>
            <Divider/>
            <CommuterStudent/>
            <Divider/>
            <Click/>
            <Divider/>
            <Portfolio/>
            <Divider/>
            <Reversi/>
            <Divider/>
            <ContactMe/>
        </Background>
    );
}

export default Projects;