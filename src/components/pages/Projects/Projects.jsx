import "./Projects.css";
import Footer from "../../Footer/Footer";
import PortfolioTwoDes from "./PortfolioTwoDes";
import PortfolioOneDes from "./PortfolioOneDes";
import HsodeDes from "./HsodeDes";
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
                    created before. Mostly, I want to list everything and
                    observe my progress throughout my career.
                </p>
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <>
            <div className = "projects">
                <Title/>
                <PortfolioTwoDes/>
                <PortfolioOneDes/>
                <ReversiDes/>
                <HsodeDes/>
                <LeagueSimDes/>
            </div>
            <Footer/>
        </>
    );
}

export default Projects;