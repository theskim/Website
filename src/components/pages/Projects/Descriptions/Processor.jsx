import Project from "../Project";
import { ProcessorImage } from '../../../../assets/ProjectImages';

const Processor = () => {
    return (
        <Project
            title="16-bit Processor"
            alt="Processor"
            image={ProcessorImage}
            link="https://youtu.be/JpTqb0nLZSQc"
            skills="SystemVerilog • Assembly • ModelSim • DESim"
            project={true}
        >
 I worked on developing a processor with a 16-bit architecture and 8 registers, 
 where r6 was designated as the stack pointer, r7 as the link register, 
 and r8 as the program counter. The processor was capable of executing a variety of instructions such as mov, movt, add, sub, ldr, str, and, b (along with all conditional flags), 
 lsl, lsr, asr, ror, and flag checking. <br/><br/>

To debug my SystemVerilog code, I utilized an FSM timing diagram from ModelSim. 
I also made modifications to the ALU to implement the above instructions, such as add, sub, and and. 
I utilized tools such as DESim to test the processor so that it implements a program (word matching game) on board.
The demonstration of this program is available through demo link below.
While I am unable to share the code due to academic integrity, I can provide it upon request. <br/><br/>
        </Project>
    );
}

export default Processor;