import Experience from "./Experience";
import { UofTHacksLogo } from "./imports";

const EspDescription = () => {
    return (
       <Experience
        title="UofTHacks - Frontend Web Developer"
        alt="UofTHacks Frontend"
        date="Jul 2022 - Present"
        skills="Next.js"
        image={UofTHacksLogo}
        link="https://linktr.ee/uofthacks"
       >
            UofTHacks is known to be the University of Toronto's annual hackathon 
            and the first student-run hackathon in Canada. 
            As a Frontend Developer, my task is to work on developing 
            the hackathon's landing page and dashboard. This required me to follow
            Figma prototypes and actively communicate with the team.
            Our website is expected to handle more than 300 monthly visitors. 
        </Experience>
    );
}

export default EspDescription;