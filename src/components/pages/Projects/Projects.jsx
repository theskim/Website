import "./Projects.css";
import ContactMe from "../ContactMe/ContactMe";
import NewPortfolio from "./NewPortfolio";
import OldPortfolio from "./OldPortfolio";
import Reversi from "./Reversi";
import LeagueSimulator from "./LeagueSimulator";
import BackgroundAll from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";

const Title = () => {
    return (
        <>
            <div className = "projects__title">
                <p>&#128221;&nbsp;&nbsp;PROJECTS</p>
            </div>
            <div className = "projects__text-box">
                <p>
                    This section showcases different Software Projects I have
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
        </BackgroundAll>
    );
}

export default Projects;