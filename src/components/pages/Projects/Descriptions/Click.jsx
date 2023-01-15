import Project from "./Project";
import { ClickImage } from '../../../../assets/ProjectImages';

const NewPortfolio = () => {
    return (
        <Project
            title="Click."
            alt="Click."
            skills="PHP, MySQL, HTML5, CSS3"
            image={ClickImage}
            github="https://github.com/skim1601/Click"
            project={true}
        >
       Do you feel that modern games have become too complicated? Click is a straightforward full-stack webgame that only requires you to click. Your objective is to travel as far away from the solar system as possible and record your progress on the leaderboard. Keep in mind that as you journey further, the distance between planets and exoplanets will increase. <br/><br/>
       
       Click includes sign-up, log-in, and live scoring leaderboard systems that utilize HTTP requests and MySQL for tracking and recording player progress. <br/><br/>
        Created by: Sean Kim
        </Project>
    );
}

export default NewPortfolio;