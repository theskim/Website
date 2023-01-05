import Project from "./Project";
import { TracTCImage } from '../../../../assets/ProjectImages';

const TrackTC = () => {
    return (
        <Project
            title="TrackTC"
            alt="TrackTC"
            skills="React.js, styled-components, Django, Django REST"
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
       Commuter students may not always be aware of potential delays or cancellations on the TTC due to various reasons. For some individuals, it can be difficult to regularly check media and the internet for updates, which can result in missing important closure information. Our team has personally experienced being late to exams or other important events due to unexpected commute interruptions. <br/><br/>

To help address this issue, we have developed a service that provides real-time and planned TTC delays, accessed through the TTC API. Simply enter your email and select your preferred buses and trains, and we will send you updates on their delay status every 12 hours.<br/><br/>

I primarily focused on the frontend of this project, including creating a Figma prototype and enhancing the website's responsive design. I also worked on implementing GET and POST requests using the Django-React stack and the Django REST Framework. Overall, it was a valuable learning experience and we are pleased to present this service at NewHacks 2022.<br/><br/>
        Created by: Amirreza Aazam, Avid Eslami, Sean Kim, and Michael Zhou 
        </Project>
    );
}

export default TrackTC;