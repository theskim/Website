import "./Projects.css";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../../Footer/Footer";
import PortfolioTwoDes from "./PortfolioTwoDes";
import PortfolioOneDes from "./PortfolioOneDes";
import ReversiDes from "./ReversiDes";
import LeagueSimDes from "./LeagueSimulatorDescription";
  
const Title = () => {
    return (
        <>
            <div className = "title-box">
                <p className = "title">&#128221;&nbsp;&nbsp;PROJECTS</p>
            </div>
            <div className = "text-box">
                <p className = "description">
                    This section lists different Software Projects I have
                    created before. Started off from simple ones to complex ones, the main purpose is to
                    observe my progress.
                </p>
            </div>
        </>
    )
}

const ProjectsBox = (props) => {
    return (
        <div className = "projects">
            {props.children}
        </div> 
    );
}

const Projects = () => {
    return (
        <>
            <ProjectsBox>
                <Title/>
                <PortfolioTwoDes/>
                <PortfolioOneDes/>
                <ReversiDes/>
                <LeagueSimDes/>
                <ContactMe/>
            </ProjectsBox>
            <Footer/>
        </>
    );
}

export default Projects;