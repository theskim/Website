import ProjectsTitle from "./ProjectsTitle";
import ContactMe from "../ContactMe/ContactMe";
import CommuterStudent from "./Descriptions/CommuterStudent";
import Click from "./Descriptions/Click";
import Portfolio from "./Descriptions/Portfolio";
import UofTHacksSite from "./Descriptions/UofTHacksSite";
import TrackTC from "./Descriptions/TrackTC";
import Background from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";
import "./Projects.scss";

const Projects = () => {
    return (
        <Background>
            <ProjectsTitle/>
            <Divider/>
            <UofTHacksSite/>
            <Divider/>
            <TrackTC/>
            <Divider/>
            <CommuterStudent/>
            <Divider/>
            <Click/>
            <Divider/>
            <Portfolio/>
            <Divider/>
            <ContactMe/>
        </Background>
    );
}

export default Projects;