import Experience from "./Experience";
import { UofTHacksLogo } from "./imports";

const EspDescription = () => {
    return (
       <Experience
        title="UofTHacks - Frontend Web Developer"
        alt="UofTHacks Frontend"
        date="Jul 2022 - Present"
        skills="Next.js, Stitches, Figma"
        image={UofTHacksLogo}
        link="https://linktr.ee/uofthacks"
        project={false}
       >
            UofTHacks is the University of Toronto's annual hackathon 
            and the first student-run hackathon in Canada, where over 500+ students with different experience levels participate in.
            As a Frontend Web Developer, my task is to work on developing 
            the hackathon's landing page and dashboard. More details on Project page.
        </Experience>
    );
}

export default EspDescription;