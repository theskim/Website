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
            UofTHacks is the first student-run hackathon in Canada. 
            As a Frontend Developer, my task is to work on maintaining
            and developing the User Interface of the landing page and dashboard.
            We are currently in the beginning phase. 
            Our website is expected to handle high traffic (300 - 500 monthly visitors). 
            By the end, I plan to familiarize myself with
            TypeScript, SASS, Next.js, and Backend Frameworks (Node.js and Express.js). 
        </ExperienceSample>
    );
}

export default EspDescription;