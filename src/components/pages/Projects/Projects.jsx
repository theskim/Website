import ProjectsTitle from "./ProjectsTitle";
import CommuterStudent from "./Descriptions/CommuterStudent";
import Click from "./Descriptions/Click";
import UofTHacksSite from "./Descriptions/UofTHacksSite";
import TrackTC from "./Descriptions/TrackTC";
import FutbolTabol from "./Descriptions/FutbolTabol";
import UofTHacksDashboard from "./Descriptions/UofTHacksDashboard";
import Aazami from "./Descriptions/Aazami";
import Divider from "../../../assets/Divider/Divider";
import "./Projects.scss";

const Projects = () => {
    return (
        <>
            <ProjectsTitle/>
            <Divider/>
            <Aazami/>
            <Divider/>
            <UofTHacksDashboard/>
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
        </>
    );
}

export default Projects;