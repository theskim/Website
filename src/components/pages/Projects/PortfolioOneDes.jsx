import "./Style.css";
import Project from "./ProjectSample";
import { PortfolioOneFirst, PortfolioOneSecond, PortfolioOneThird } from '../../../assets';

const images = [
  PortfolioOneFirst, 
  PortfolioOneSecond, 
  PortfolioOneThird
];

const PortfolioOneDes = () => { 
    const portfolio1 = {
        title: "Portfolio Website - Old",
        date: "Mar 2022",
        skills: "HTML5, CSS3",
        img: images,
        link: "https://sean-kim-portfolio.netlify.app/",
        github: "https://github.com/skim1601/sean-kim-old-website"
    }

    return (
        <Project project={portfolio1}>
            A personal website initially designed to share myself, skills, and experiences.
            This project introduced me to scripting languages and provided me a brief 
            idea of how websites work. However, there was a huge problem with its
            non-responsive nature. Now I made a new website with React,
            thus the contents in this website remain in Spring 2022.
            I know that this website is not the best in terms of User Interface or responsive design, yet it has a special 
            meaning for me. 
        </Project>
    );
}

export default PortfolioOneDes;