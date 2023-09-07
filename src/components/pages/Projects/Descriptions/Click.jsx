import Project from "../Project";
import { ClickImage } from '../../../../assets/ProjectImages';

const Click = () => {
    return (
        <Project
            title="Click."
            alt="Click."
            skills="HTML5 • CSS3 • PHP • MySQL"
            image={ClickImage}
            github="https://github.com/skim1601/Click"
            project={true}
        >
     Click is an intuitive full-stack web game that simply requires you to click. The goal is to venture as far from the solar system as possible while tracking your progress on the leaderboard. Note that as your journey progresses, the distance between celestial bodies will increase.<br/><br/>
       
       Click incorporates sign-up, log-in, and live-scoring leaderboard features, employing HTTP requests and MySQL to monitor and document player progression. <br/><br/>
        </Project>
    );
}

export default Click;