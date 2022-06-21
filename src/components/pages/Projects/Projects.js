import "./Projects.css";
import Footer from "./../../Footer/Footer";
import PortfolioTwoDes from "./PortfolioTwoDescription/PortfolioTwoDes";
import PortfolioOneDes from "./PortfolioOneDescription/PortfolioOneDes";
import HsodeDes from "./HsodeDescription/HsodeDescription";
import ReversiDes from "./ReversiDescription/ReversiDes";
import LeagueSimDes from "./LeagueSimulatorDescription/LeagueSimulatorDescription";

function Projects(){
    return (
        <>
            <div className = "projects">
                <div className = "title-box">
                    <p className = "title">&#128221;&nbsp;&nbsp;PROJECTS</p>
                </div>
                <div className = "text-box">
                    <p className = "description">
                        This section lists different Software Projects I have
                        created before, mostly including the ones that
                        I obtained/got familiar with some skills.
                    </p>
                </div>
                <div className = "stripe1"/>
                <div className = "projects1">
                    <div className = "project-box">
                        <PortfolioTwoDes/>
                        <PortfolioOneDes/>
                    </div>
                </div>
                <div className = "stripe2"/>
                <div className = "projects2">
                    <ReversiDes/>
                    <HsodeDes/>
                </div>
                <div className = "stripe3"/>
                <div className = "projects3">
                    <LeagueSimDes/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Projects;