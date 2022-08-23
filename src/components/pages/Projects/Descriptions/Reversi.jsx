import Project from "./ProjectSample";
import { ReversiFirst, ReversiSecond, ReversiThird } from '../../../../assets/ProjectImages';

const Reversi = () => {
    return (
        <Project 
            title="Reversi AI Algorithm"
            date="Mar 2022"
            skills="C"
            images={[
                ReversiFirst, 
                ReversiSecond, 
                ReversiThird 
            ]}
        >
            The Reversi Project is a 3-week long project to create a 
            "strong" Reversi game algorithm, offered by APS105 (Computer Fundamentals) course
            at the University of Toronto. To receive full marks, 
            my final implementation of this project had to be "smart" enough to 
            defeat the AIs created by the course instructors. <br/><br/>
            I initially played two "worse" algorithms I created against each other. 
            "Worse algorithm" selects a move based on the number of pieces flipped right away.
            Then I simulated five or six moves to see which move has the highest 
            amount of pieces flipped out of all possible moves. In addition to the number of pieces flipped,
            I also found the best move based on placing pieces on corners and edges. <br/><br/>
            As a result, my AI was able to beat the AIs created by the teaching team. 
            Through this project, I became more familiar with the syntax of C.
            The source code will not be available due to the 
            possibility of assisting potential academic misconduct.
        </Project>
    );
}

export default Reversi;