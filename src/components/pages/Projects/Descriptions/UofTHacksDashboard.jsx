import Project from "./Project";
import { UofTHacksDashboardImage } from '../../../../assets/ProjectImages';

const UofTHacksDashboard = () => {
    return (
        <Project
            title="UofTHacks X Dashboard"
            alt="UofTHacks X"
            skills="Next.js, stitches.dev"
            image={UofTHacksDashboardImage}
            link="https://uofthacks.com/"
            project={true}
        >
       This is the official dashboard for UofTHacks X, the annual hackathon hosted by the University of Toronto. 
       Over 500+ students with a range of experience levels participated in the event. 
       I was responsible for creating the sign-in page for applicants and authentication.
        In order to complete this task, I had to work closely with the backend team to ensure that the data from my page was properly validated.<br/><br/>
        Created by: UofTHacks Web Development Team
        </Project>
    );
}

export default UofTHacksDashboard;