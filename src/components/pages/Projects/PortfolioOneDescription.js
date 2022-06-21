import "./Style.css";
import { Github } from "../../../assets";

function PortfolioOneDes () {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>Personal Portfolio Website v1.0</p>
            </div>
            <div className = "project-tools">
                <h4>&#128197;&nbsp;Mar 2022&nbsp;&nbsp;</h4>
                <p><b>Skills:&nbsp;</b> HTML, CSS</p>
            </div>
            <div className = "project-tools">
            </div>
            <div className = "project-description">
                <p>A personal website designed to share myself, skills, and experiences. 
                    This project introduced me to scripting languages and provided me a brief
                    idea of how websites work. There was no dynamic part of the website as it was
                    only made with HTML and CSS. The contents in the website remain in
                    Spring 2022.<br/><br/>
                </p>
            </div>
            <div className = "project-links">
                <b>&#128279;&nbsp;Link:&nbsp;&nbsp;</b>
                <a href = "https://skim1601.github.io/">
                    https://skim1601.github.io/
                </a><br/><br/>
                <img src={Github} alt='main'/>
                <b>&nbsp;&nbsp;GitHub:&nbsp;&nbsp;</b>
                <a href = "https://github.com/skim1601/sean-kim-website">
                    github.com/skim1601/sean-kim-website
                </a>
            </div>
        </div>
    );
}

export default PortfolioOneDes;