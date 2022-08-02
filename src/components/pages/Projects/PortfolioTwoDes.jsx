import "./Style.css";
import Project from "./ProjectSample";
import { PortfolioTwoFirst, PortfolioTwoSecond, PortfolioTwoThird, PortfolioTwoFourth } from '../../../assets';

const images = [
  PortfolioTwoFirst, 
  PortfolioTwoSecond, 
  PortfolioTwoThird, 
  PortfolioTwoFourth
];

const PortfolioTwoDes = () => {
    const portfolio2 = {
        title: "skim1601.com",
        date: "Jun 2022",
        skills: "HTML5, CSS3, JavaScript, React.js",
        img: images,
        link: {
            availability: true,
            url: "https://skim1601.com",
        }, 
        github: {
            availability: true,
            url: "https://github.com/skim1601/sean-kim-website",
        }, 
    }

    return (
        <Project project={portfolio2}>
            A personal website for portfolio usage developed with React. 
            This project enhanced my understanding in frontend development as well as 
            JavaScript frameworks. It also introduced me to the idea of responsive design. 
            And yes, you are currently on the website that I am talking about.
        </Project>
    );
}

export default PortfolioTwoDes;