import "./Style.css";
import Project from "./ProjectSample";
import { PortfolioOneFirst, PortfolioOneSecond, PortfolioOneThird, PortfolioOneFourth } from '../../../assets';

const images = [
  PortfolioOneFirst, 
  PortfolioOneSecond, 
  PortfolioOneThird, 
  PortfolioOneFourth
];

const PortfolioOneDes = () => { 
    const portfolio1 = {
        title: "Personal Portfolio Website v1.0",
        date: "Mar 2022",
        skills: "HTML5, CSS3",
        img: images,
        description: "A personal website designed to share myself, skills, and experiences. " +
                    "This project introduced me to scripting languages and provided me a brief "  +
                    "idea of how websites work. There was no dynamic part of the website as it was " + 
                    "only made with HTML and CSS. The contents in the website remain in " +
                    "Spring 2022.",
        link: {
            availability: true,
            url: "https://skim1601.github.io/",
        }, 
        github: {
            availability: true,
            url: "https://github.com/skim1601/skim1601.github.io",
        }, 
    }

    return (
        <Project project={portfolio1}/>
    );
}

export default PortfolioOneDes;