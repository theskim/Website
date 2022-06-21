import "./Projects.css";
import Footer from "./../../Footer/Footer";
import { Github } from "../../../assets";

function Projects(){
    return (
        <>
            <div>
                <div className = "title-box">
                    <p className = "title">&#128221;&nbsp;&nbsp;PROJECTS</p>
                </div>
                <div className = "stripe1"/>
                <div className = "projects1">
                    <div className = "project-box">
                        <div className = "project-title">
                            <p>Personal Portfolio Website v2.0</p>
                        </div>
                        <div className = "project-tools">
                                <h4>&#128197;&nbsp;&nbsp;Mar 2022&nbsp;&nbsp;</h4>
                                <p><b>Skills:&nbsp;</b> HTML, CSS, JavaScript, React.js</p>
                            </div>
                        <div className = "project-tools">
                            <img alt = "" />
                        </div>
                        <div className = "project-description">
                            <p>A personal website designed to share myself, skills, and experiences. 
                                This project enhanced my understanding in frontend development as well as
                                JavaScript frameworks. And yes, you are currently on this website.<br/><br/>
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
                                <a href = "https://github.com/skim1601/sean-kim-website">
                                    skim1601.com
                                </a><br/><br/>
                                <img src={Github} alt='main'/>
                                <b>&nbsp;&nbsp;GitHub:&nbsp;&nbsp;</b>
                                <a href = "https://skim1601.github.io/">
                                    https://skim1601.github.io/
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "stripe2"/>
                <div className = "projects2">
                    <div className = "project-box">
                        <div className = "project-title">
                            <p>Reversi AI</p>
                        </div>
                        <div className = "project-tools">
                                <h4>&#128197;&nbsp;Mar 2022&nbsp;&nbsp;</h4>
                                <p><b>Skills:&nbsp;</b> C</p>
                            </div>
                        <div className = "project-tools">
                            <img alt = "" />
                        </div>
                        <div className = "project-description">
                            <p>A 3-week long course project to create a "strong" Reversi game algorithm.
                               Through this project, I became more familiar with the syntax of C and
                               deterministic algorithms. The source code will not be available due to the 
                               possibility of assisting potential academic misconduct.
                            <br/><br/>
                            </p>
                            <div className = "project-links">
                                <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>
                                <span className = "gray">Unavailable</span><br/><br/>
                                <img src={Github} alt='main'/>
                                <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
                                <span className = "gray">Unavailable</span><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "projects2">
                    <div className = "project-box">
                        <div className = "project-title">
                            <p>Homogenous Second ODE Solver</p>
                        </div>
                        <div className = "project-tools">
                                <h4>&#128197;&nbsp;Feb 2022&nbsp;&nbsp;</h4>
                                <p><b>Skills:&nbsp;</b> C</p>
                            </div>
                        <div className = "project-tools">
                            <img alt = "" />
                        </div>
                        <div className = "project-description">
                            <p>A small project started off from a small thought; applying my understanding in Calculus
                                in C programming. Developed an algorithm within 5 hours that solves a Homogenous Second Order
                                Differential Equation. The idea of it is quite simple; I used characteristic equations and
                                evaluated the characterstic root (two, one, or no root). Then I applied the appropriate formula
                                to calculate each case seperately.
                            <br/><br/>
                            </p>
                            <div className = "project-links">
                                <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>
                                <span className = "gray">Unavailable</span><br/><br/>
                                <img src={Github} alt='main'/>
                                <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
                                <a href = "https://github.com/skim1601/HomogenousLinearSODE">
                                    github.com/skim1601/HomogenousLinearSODE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Projects;