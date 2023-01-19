import Project from "./Project";
import { PortfolioImage } from '../../../../assets/ProjectImages';

const NewPortfolio = () => {
    return (
        <Project
            title="Personal Portfolio Website"
            alt="Portfolio Website"
            skills="React.js • Redux • SCSS"
            image={PortfolioImage}
            link="https://skim1601.com"
            github="https://github.com/skim1601/SeanKim-Website"
            setup= {[
                "git clone https://github.com/skim1601/sean-kim-website.git", 
                "npm install",
                "npm start"
            ]}
        >
           This is a personal website that I developed using React for portfolio purposes. It is designed to be responsive on a variety of devices, including mobile phones and wide monitors. I also implemented Redux to manage the global state of the side navigation bar. Although Redux is often used for managing large amounts of application state that are needed in multiple locations, I wanted to learn the basics and implementation of this technology through this project. <br/><br/>

You are currently viewing this website. I plan to continue improving it as my career progresses.<br/><br/>
            Created by: Sean Kim
        </Project>
    );
}

export default NewPortfolio;