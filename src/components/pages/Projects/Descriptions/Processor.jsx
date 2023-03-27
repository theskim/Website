import Project from "./Project";
import { ProcessorImage } from '../../../../assets/ProjectImages';

const Processor = () => {
    return (
        <Project
            title="Processor"
            alt="Processor"
            image={ProcessorImage}
            skills="Verilog • ARM Assembly"
            project={true}
        >
       In Progress
        </Project>
    );
}

export default Processor;