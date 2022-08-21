import ExperienceSample from "./ExperienceSample";
import { UofTHacksLogo } from "./imports";

const EspDescription = () => {
    return (
       <ExperienceSample
        title="UofTHacks - Frontend Web Developer"
        duration="Jul 2022 - Present"
        skills="Next.js"
        image={UofTHacksLogo}
       >
            UofTHacks is University of Toronto's annual hacathon, 
            and the first student-run hackathon in Canada. 
            As a Frontend Developer, my role is to work on maintaining
            and developing the hackathon's landing page and dashboard.
            Our website is expected to handle more than 500 visitors. 
        </ExperienceSample>
    );
}

export default EspDescription;