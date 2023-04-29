import Project from "./Project";
import { MapperImage } from '../../../../assets/ProjectImages';

const Mapper = () => {
    return (
        <Project
            title="OTFMap"
            alt="OTFMap"
            skills="C++, GTK, Glade, EZGL, OpenStreetMap API"
            image={MapperImage}
        >
            In progress
        </Project>
    );
}

export default Mapper;