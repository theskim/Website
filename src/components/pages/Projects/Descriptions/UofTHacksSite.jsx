import Project from "./Project";
import { UofTHacksSiteImage } from '../../../../assets/ProjectImages';

const UofTHacksSite = () => {
    return (
        <Project
            title="UofTHacks X Site"
            alt="UofTHacks X"
            skills="Next.js, Stitches"
            image={UofTHacksSiteImage}
            link="https://uofthacks.com/"
            github="https://github.com/UofTHacks-Official/site-x"
            setup= {[
                "git clone https://github.com/UofTHacks-Official/site-x.git", 
                "npm install",
                "npm run dev"
            ]}
            project={true}
        >
        This is the official website for UofTHacks X, University of Toronto's annual hackathon, where over 500+ students with different experience levels participate in. I was responsible for generating different components such as Sponsors and Q&A page. We developed the website and dashboard for the hackathon using Next.js and Stitches (CSS Library) based on Figma prototype from the design team.  Through this project, I learned a lot about refactoring code using CSSin-JS libraries and atomic design model.
        </Project>
    );
}

export default UofTHacksSite;