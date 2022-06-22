import "../Style.css";
import ImageSlide from "./Imageslide";
import { Github } from "../../../../assets";

function ReversiDes () {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>Reversi AI</p>
            </div>
            <div className = "project-tools">
                    <h4>&#128197;&nbsp;Mar 2022&nbsp;&nbsp;</h4>
                    <p><b>Skills:&nbsp;</b> C</p>
                </div>
            <div className = "project-image-box">
                <ImageSlide/>
            </div>
            <div className = "project-description">
                <p>A 3-week long course project to create a "strong" Reversi game algorithm.
                 To simply put, my idea was the following: playing two
                "worse" algorithms against each other. 
                "Worse algorithm" selects a move based on the number of pieces flipped right away.
                Then we simulate five or six moves, and see which move has the highest
                amount of pieces flipped out of all possible moves.
                Through this project, I became more familiar with the syntax of C and
                deterministic algorithms.
                The source code will not be available due to the 
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
    );
}

export default ReversiDes;