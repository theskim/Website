import Project from "./Project";
import { CommuterStudentImage } from '../../../../assets/ProjectImages';

const CommuterStudent = () => {
    return (
        <Project
            title="Skule Commuter Students 22-23 Website"
            alt="Commuter Students"
            skills="React.js, Redux"
            image={CommuterStudentImage}
            link="https://commuter.skule.ca/"
            github="https://github.com/skim1601/CommuterStudent"
            setup= {[
                "git clone https://github.com/skim1601/CommuterStudent.git", 
                "npm install",
                "npm start"
            ]}
            project={true}
        >
      Welcome to the official website for the Skule Commuter Student Directorship within the University of Toronto Engineering Society. I had the opportunity to work with another webmaster in a team of two, which allowed me to further my knowledge of Git workflow and various Git commands. <br/><br/>

Like this portfolio website, the Skule Commuter Students website is designed to be responsive on a variety of devices, including mobile phones and wide monitors. We implemented Redux to manage the global state of the side navigation bar. Overall, it was a valuable experience to collaborate with the Director and other team members, considering their suggestions and requests to make improvements to the website. <br/><br/>
        Created by: Sean Kim and Ayaan Pathan
        </Project>
    );
}

export default CommuterStudent;