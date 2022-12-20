import Experience from "./Experience";
import { UofTHacksLogo } from "./imports";

const EspDescription = () => {
    return (
       <Experience
        title="UofTHacks - Frontend Web Developer"
        alt="UofTHacks Frontend"
        date="Jul 2022 - Present"
        skills="Next.js, stitches.dev, Figma"
        image={UofTHacksLogo}
        link="https://uofthacks.com/"
        project={false}
       >
            UofTHacks is the University of Toronto's annual hackathon 
            and the first student-run hackathon in Canada, where over 500+ students with different experience levels participate in.
            As a Frontend Web Developer, my task is to work on developing 
            the hackathon's landing page and dashboard. More details available on the Project page.
        </Experience>
    );
}

export default EspDescription;