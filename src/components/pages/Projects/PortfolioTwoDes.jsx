import "./Style.css";
import Project from "./ProjectSample";
import { PortfolioTwoFirst, PortfolioTwoSecond, PortfolioTwoThird, PortfolioTwoFourth, PortfolioTwoFive } from '../../../assets';

const images = [
  PortfolioTwoFirst, 
  PortfolioTwoSecond, 
  PortfolioTwoThird, 
  PortfolioTwoFourth,
  PortfolioTwoFive
];

const PortfolioTwoDes = () => {
    const portfolio2 = {
        title: "Portfolio Website - New",
        date: "Jul 2022",
        skills: "React.js, HTML5, CSS3, JavaScript (ES6+)",
        img: images,
        link: "https://skim1601.com",
        github: "https://github.com/skim1601/sean-kim-website"
    }

    return (
        <Project project={portfolio2}>
            A personal website for portfolio usage developed with React. 
            This project enhanced my understanding of frontend development. 
            It also introduced me to the idea of responsive design. 
            As you can see, this website works on most dimensions including mobile and 
            wide monitors.
            And yes, you are currently on the website that I am talking about. 
            I am planning to continuously improve this website as my career progresses.
        </Project>
    );
}

export default PortfolioTwoDes;