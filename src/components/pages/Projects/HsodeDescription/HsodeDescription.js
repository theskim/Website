import "../Style.css";
import ImageSlide from "./Imageslide";
import { Github } from "../../../../assets";

function HsodeDes () {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>Linear Second ODE Solver</p>
            </div>
            <div className = "project-tools">
                    <h4>&#128197;&nbsp;Feb 2022&nbsp;&nbsp;</h4>
                    <p><b>Skills:&nbsp;</b> C</p>
                </div>
            <div className = "project-image-box">
                <ImageSlide/>
            </div>
            <div className = "project-description">
                <p>A small project started off from a small thought; integrating my Calculus knowledge
                    in C programming. Developed an algorithm within 5 hours that solves a Homogenous Linear Second Order
                    Differential Equation. The idea of it is quite simple; I used characteristic equations and
                    evaluated the characterstic root (two, one, or no root). Then I applied the appropriate formula
                    to calculate each case seperately.
                <br/><br/>
                </p>
                <div className = "project-links">
                    <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>
                    <span className = "gray">Unavailable</span><br/><br/>
                    <img src={Github} alt='main'/><b>&nbsp;GitHub:&nbsp;&nbsp;</b>
                    <a href = "https://github.com/skim1601/HomogenousLinearSODE">
                        github.com/skim1601/HLSODE
                    </a>    
                </div>
            </div>
        </div>
    );
}

export default HsodeDes;