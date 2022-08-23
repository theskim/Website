import Project from "./ProjectSample";
import { PortfolioOneFirst, PortfolioOneSecond, PortfolioOneThird } from '../../../../assets/ProjectImages';

const OldPortfolio = () => { 
    return (
        <Project 
            title="Portfolio Website - Old"
            date="Mar 2022"
            skills="HTML5, CSS3"
            images={[
                PortfolioOneFirst, 
                PortfolioOneSecond, 
                PortfolioOneThird
            ]}
            link="https://sean-kim-portfolio.netlify.app/"
            github="https://github.com/skim1601/sean-kim-old-website"
        >
            A personal website initially designed to share myself, skills, and experiences.
            This project introduced me to scripting languages and provided me a brief 
            idea of how websites work. However, there was a huge problem with its
            non-responsive nature.<br/><br/>
            Now I made a new website with React, the contents in this website remain in Spring 2022.
        </Project>
    );
}

export default OldPortfolio;