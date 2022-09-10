import Project from "./Project";
import { CommuterStudentFirst, CommuterStudentSecond, CommuterStudentThird } from '../../../../assets/ProjectImages';

const CommuterStudent = () => {
    return (
        <Project
            title="Skule Commuter Students 22-23 Website"
            alt="Commuter Students"
            date="Aug 2022"
            skills="React.js, Redux, HTML5, CSS3, JavaScript (ES6)"
            images={[
                CommuterStudentFirst,
                CommuterStudentSecond,
                CommuterStudentThird
            ]}
            link="https://commuter.skule.ca/"
            github="https://github.com/skim1601/CommuterStudent"
            setup= {[
                "git clone https://github.com/skim1601/CommuterStudent.git", 
                "npm install",
                "npm start"
            ]}
            project={true}
        >
        This is the first project I have worked on as a Webmaster of Skule Commuter Student Directorship.
        By working with another Webmaster in a group of two, I was able to learn more about the use of
        Git workflow and different Git commands. <br/><br/>
        Just like this Portfolio Website, the Skule Commuter Students Website 
        is responsive on almost every dimension including mobile and 
        wide monitors. Redux was implemented to control the state of the side navigation
        bar globally. Overall, it was a great experience to reflect on changes
        based on suggestions and requests from the Director and other team members.
        
        </Project>
    );
}

export default CommuterStudent;