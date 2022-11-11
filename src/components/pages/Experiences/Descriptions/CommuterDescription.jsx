import Experience from "./Experience";
import { CommuterLogo } from "./imports";

const CommuterDescription = () => {
    return (
       <Experience 
        title="Skule Commuter Student Directorship - Webmaster"
        alt="Commuter Webmaster"
        date="Jul 2022 - Present"
        skills="React.js, Redux, Figma"
        image={CommuterLogo}
        link="https://commuter.skule.ca/"
        project={false}
        >
            The Commuter Student Directorship is planned to foster a sense of belonging and involvement between 
            all student commuters in University of Toronto Engineering Community 
            by creating opportunities, events, and programs to enrich the commuter community. <br/><br/>
            I developed the organization’s website with React.js, which is 
            expected to be accessed by over 400 commuter students at the University of Toronto Engineering Community.
            The website is accessible by the link below.
            Currently I am optimizing the Skule EngSoc Locker Website.
        </Experience>
    );
}

export default CommuterDescription;