import Project from "./Project";
import { UofTHacksSiteImage } from '../../../../assets/ProjectImages';

const UofTHacksSite = () => {
    return (
        <Project
            title="UofTHacks X Site"
            alt="UofTHacks X"
            skills="Next.js, stitches.dev"
            image={UofTHacksSiteImage}
            link="https://uofthacks.com/"
            github="https://github.com/UofTHacks-Official/site-x"
            setup= {[
                "git clone https://github.com/UofTHacks-Official/site-x.git", 
                "npm install",
                "npm run dev"
            ]}
        >
        Welcome to the official website for UofTHacks X, the University of Toronto's annual hackathon that brings together over 500+ students with a diverse range of experience levels. My role on this project was to develop various components, including the sponsors page and Q&A page. To optimize rendering time, we used the Next.js and Stitches (CSS library) frameworks. The styling of the website was based on the Figma prototype provided by the design team. Working on this project allowed me to gain valuable experience in refactoring code with CSS-in-JS libraries and utilizing the atomic design model, as well as integrating designs from Figma.<br/><br/>
        Created by: Shernan Javier, Sean Kim, and Daniel Liu
        </Project>
    );
}

export default UofTHacksSite;