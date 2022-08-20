import Project from "./ProjectSample";
import { ReversiFirst, ReversiSecond, ReversiThird } from '../../../assets/ProjectImages';

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
            A 3-week long course project to create a 
            "strong" Reversi game algorithm from APS105 (Computer Fundamentals) course
            at the University of Toronto. 
            To simply put, my idea was the following: 
            playing two "worse" algorithms against each other. 
            "Worse algorithm" selects a move based on the number of pieces flipped right away.
            Then we simulate five or six moves and see which move has the highest 
            amount of pieces flipped out of all possible moves. 
            This would allow my algorithm to find the best
            move out of all possible moves.
            As a result, my AI could beat the AIs created by the APS105 teaching team.
            Through this project, I became more familiar with the syntax of C.
            The source code will not be available due to the 
            possibility of assisting potential academic misconduct.
            However, I can always provide a video of my algorithm's gameplay if needed.
        </Project>
    );
}

export default Reversi;