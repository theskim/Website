import "../Style.css";
import { Github } from "../../../../assets";

function TictactoeDes() {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>TicTacToe 1v1</p>
            </div>
            <div className = "project-tools">
                    <h4>&#128197;&nbsp;&nbsp;Jan 2022&nbsp;&nbsp;</h4>
                    <p><b>Skills:&nbsp;</b>Java</p>
                </div>
            <div className = "project-tools">
                <img alt = "" />
            </div>
            <div className = "project-description">
                <p>A simple TicTacToe game to get familiar with
                    the syntax of Java. It is a simple algorithm; 
                    two players play each other until one side 
                    places three distinctive characters (O or X) in a 
                    row, column, or diagonal.<br/><br/>
                </p>
                <div className = "project-links">
                    <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>
                    <span className = "gray">Unavailable</span><br/><br/>
                    <img src={Github} alt='main'/>
                    <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
                    <a href = "https://github.com/skim1601/TicTacToeJava">
                        github.com/skim1601/TicTacToeJava
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TictactoeDes;