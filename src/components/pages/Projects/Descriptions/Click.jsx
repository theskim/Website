import Project from "./Project";
import { ClickFirst, ClickSecond, ClickThird, ClickFourth } from '../../../../assets/ProjectImages';

const NewPortfolio = () => {
    return (
        <Project
            title="Click."
            alt="Click."
            date="Aug 2022"
            skills="PHP, MySQL, HTML5, CSS3"
            images={[
                ClickFirst, 
                ClickSecond, 
                ClickThird, 
                ClickFourth
            ]}
            link="https://click-universe.herokuapp.com/"
            github="https://github.com/skim1601/Click"
            project={true}
        >
        Have you felt that modern games are too complicated? 
        Click is a simple full-stack webgame that only expects you to click.
        Your goal is to reach far and far away from Solar System and record yourself on the leaderboard.
        Note that as you move far away, the distance between planets or exoplanets will increase.
        Click utilizes sign-up, log-in, and live scoring leaderboard systems using HTTP requests and MYSQL.
        </Project>
    );
}

export default NewPortfolio;