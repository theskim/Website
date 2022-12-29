import ProjectsTitle from "./ProjectsTitle";
import CommuterStudent from "./Descriptions/CommuterStudent";
import Click from "./Descriptions/Click";
import Portfolio from "./Descriptions/Portfolio";
import UofTHacksSite from "./Descriptions/UofTHacksSite";
import TrackTC from "./Descriptions/TrackTC";
import FutbolTabol from "./Descriptions/FutbolTabol";
import Divider from "../../../assets/Divider/Divider";
import "./Projects.scss";

const Projects = () => {
    return (
        <>
            <ProjectsTitle/>
            <Divider/>
            <FutbolTabol/>
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
        </>
    );
}

export default Projects;