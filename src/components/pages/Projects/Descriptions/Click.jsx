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
        Have you felt that modern games are too complicated? 
        Click is a simple full-stack webgame that only expects you to click.
        Your goal is to reach far and far away from Solar System and record yourself on the leaderboard.
        Note that as you move far away, the distance between planets or exoplanets will increase.
        Click utilizes sign-up, log-in, and live scoring leaderboard systems using HTTP requests and MYSQL.<br/><br/>
        Created by: Sean Kim
        </Project>
    );
}

export default NewPortfolio;