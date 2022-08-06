import "./Projects.css";
import ContactMe from "../ContactMe/ContactMe";
import PortfolioTwoDes from "./PortfolioTwoDes";
import PortfolioOneDes from "./PortfolioOneDes";
import ReversiDes from "./ReversiDes";
import LeagueSimDes from "./LeagueSimulatorDescription";
import BackgroundAll from "../BackgroundAll/BackgroundAll";
  
const Title = () => {
    return (
        <>
            <div className = "projects__title">
                <p>&#128221;&nbsp;&nbsp;PROJECTS</p>
            </div>
            <div className = "projects__text-box">
                <p>
                    This section lists different Software Projects I have
                    created before. Started off from simple ones to complex ones, the main purpose is to
                    observe my progress.
                </p>
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <BackgroundAll>
            <Title/>
            <PortfolioTwoDes/>
            <PortfolioOneDes/>
            <ReversiDes/>
            <LeagueSimDes/>
            <ContactMe/>
        </BackgroundAll>
    );
}

export default Projects;