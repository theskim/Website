import "../Style.css";
import ImageSlide from "./Imageslide";
import { Github } from "../../../../assets";

function PortfolioTwoDes() {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>Personal Portfolio Website v2.0</p>
            </div>
            <div className = "project-tools">
                    <h4>&#128197;&nbsp;&nbsp;Jun 2022&nbsp;&nbsp;</h4>
                    <p><b>Skills:&nbsp;</b> HTML, CSS, JavaScript, React.js</p>
                </div>
            <div className = "project-image-box">
                <ImageSlide/>
            </div>
            <div className = "project-description">
                <p>A personal website designed to share myself, skills, and experiences. 
                    This project enhanced my understanding in frontend development as well as
                    JavaScript frameworks. And yes, you are currently on this website.
                    It was my first time implementing a responsive website.<br/><br/>
                </p>
                <div className = "project-links">
                    <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>
                    <a href = "https://github.com/skim1601/sean-kim-website">
                        skim1601.com
                    </a><br/><br/>
                    <img src={Github} alt='main'/>
                    <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
                    <a href = "https://github.com/skim1601/sean-kim-website">
                        github.com/skim1601/sean-kim-website
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioTwoDes;