import Project from "./Project";
import { MapperImage } from '../../../../assets/ProjectImages';

const Mapper = () => {
    return (
        <Project
            title="Mapper"
            alt="Mapper"
            skills="C++, GTK, EZGL, OpenStreetMap API"
            image={MapperImage}
        >
            In progress
        </Project>
    );
}

export default Mapper;