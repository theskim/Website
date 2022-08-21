import Project from "./ProjectSample";
import { PortfolioTwoFirst, PortfolioTwoSecond, PortfolioTwoThird, PortfolioTwoFourth, PortfolioTwoFive } from '../../../../assets/ProjectImages';

const NewPortfolio = () => {
    return (
        <Project
            title="Portfolio Website - New"
            date="Jul 2022"
            skills="React.js, Redux, HTML5, CSS3, JavaScript"
            images={[
                PortfolioTwoFirst, 
                PortfolioTwoSecond, 
                PortfolioTwoThird, 
                PortfolioTwoFourth,
                PortfolioTwoFive
            ]}
            link="https://skim1601.com"
            github="https://github.com/skim1601/sean-kim-website"
        >
            A personal website for portfolio usage developed with React. 
            This project enhanced my understanding of frontend development. 
            The website is responsive on almost every dimension including mobile and 
            wide monitors. I also implemented Redux to control the state of the side navigation
            bar. Although Redux is usually used for large amounts of application states 
            that are needed in many places, I wanted to understand its basics and implementations. <br/><br/>
            And yes, you are currently on the website. 
            I am planning to continuously improve this website as my career progresses.
        </Project>
    );
}

export default NewPortfolio;