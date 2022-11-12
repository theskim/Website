import Project from "./Project";
import { PortfolioImage } from '../../../../assets/ProjectImages';

const NewPortfolio = () => {
    return (
        <Project
            title="Personal Portfolio Website"
            alt="Portfolio Website"
            skills="React.js, Redux, SCSS"
            image={PortfolioImage}
            link="https://skim1601.com"
            github="https://github.com/skim1601/SeanKim-Website"
            setup= {[
                "git clone https://github.com/skim1601/sean-kim-website.git", 
                "npm install",
                "npm start"
            ]}
            project={true}
        >
            A personal website for portfolio usage developed with React. 
            The website is responsive on almost every dimension including mobile and 
            wide monitors. I also implemented Redux to control the state of the side navigation
            bar. Although Redux is usually used for large amounts of application states 
            that are needed in many places, I wanted to learn its basics and implementations through this project. <br/><br/>
            And yes, you are currently on the website. 
            I am planning to continuously improve this website as my career progresses.<br/><br/>
            Created by: Sean Kim
        </Project>
    );
}

export default NewPortfolio;