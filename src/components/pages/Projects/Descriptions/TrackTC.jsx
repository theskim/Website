import Project from "./Project";
import { TracTCImage } from '../../../../assets/ProjectImages';

const TrackTC = () => {
    return (
        <Project
            title="TrackTC"
            alt="TrackTC"
            skills="React.js, Styled Components, Django, Django REST"
            image={TracTCImage}
            link="https://devpost.com/software/tracktc"
            github="https://github.com/skim1601/TrackTC"
            setup= {[
                "git clone https://github.com/skim1601/TrackTC", 
                "python3 -m venv venv", 
                "cd map_projects",
                "pip install djangorestframework",
                "python3 map_project/manage.py runserver",
                "cd frontend",
                "npm run build"
            ]}
            project={true}
        >
        Commuter students wont be able to be aware of possible ttc delays or cancelation due to different reasons. For some people, it is a challenge to regularly check media and internet, and this could potentially lead to them not noticing the closure. At various points in time, members of our team have been late to examinations or other important events due to unknown commute interreferences.<br/><br/>
        Check out the current and planned TTC delays, provided by the TTC API. Enter your email and buses/trains and we will email you their delay status every 12 hours! <br/><br/>
        I mostly worked on the frontend, especially creating the Figma prototype and working on the website's responsive design. Also I worked on implementing GET and POST requests. Overall, it was a great experience to learn how Django-React stack works and how to send requests to Django REST Framework. Submitted at NewHacks 2022.<br/><br/>
        Created by: Amirreza Aazam, Avid Eslami, Sean Kim, and Michael Zhou 
        </Project>
    );
}

export default TrackTC;