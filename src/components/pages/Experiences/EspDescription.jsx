import "./Style.css";
import ExperienceSample from "./ExperienceSample";
import { ESP } from "../../../assets";

const EspDescription = () => {
    const Esp = {
        title: "Engineering Strategies and Practice - Engineering Project Manager",
        duration: "Sep 2021 - Apr 2022",
        skills: "Project Management, Gantt Chart, Engineering Design, Presentation",
        image: ESP,
    }

    return (
       <ExperienceSample experience={Esp}>
            As a Project Manager, I was responsible for improving the team's workflow 
            through using Gantt charts and setting
            internal deadlines, allowing the team to complete tasks 1 to 3 days advance 
            before the actual deadline. <br/><br/>

            First project was mainly on developing an efficient unloading design for a delievery
            robot. The team's final conceptual design was a hydraulic design. <br/><br/>

            Second project was on developing a design for an efficient grime removal on the client's window.
            The team's final design was Titanium Dioxide coating, and this required experiments at Walberg
            Chemical Engineering lab. We tested the hydrophilicity and transparency of the glass when the 
            TiO2 solution is applied. The team presented 10-minute long final design to the client and the Engineering Manager
            in a professional manner. <br/><br/>

            To conclude, my experience in project management provided me a solid understanding in 
            working with different people. For instance, having weekly meeting with 
            the Engineering Manager and monthly meeting with the client. <br/><br/>
        </ExperienceSample>
    );
}

export default EspDescription;