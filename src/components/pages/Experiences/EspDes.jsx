import "./Style.css";
import ExperienceSample from "./ExperienceSample";

const HsodeDes = () => {
    const hsode = {
        title: "Engineering Strategies &#38; Practice Project Manager",
        duration: "Sep 2021 - Apr 2022",
        skills: "Project Management, Gantt Chart, Engineering Design, Presentation",
    }

    return (
       <ExperienceSample experience={hsode}>
            As a Project Manager, was responsible for accelerating and
            improving the team's workflow through using Gantt charts and setting
            internal deadlines, allowing the team to complete tasks 1 to 3 days advance 
            before the actual deadline. <br/><br/>

            First project was mainly on developing an efficient unloading design for a delievery
            robot. The team's final conceptual design was a hydraulic design. <br/><br/>

            Second project was on developing a design for an efficient grime removal on the client's window.
            The team's final design was Titanium Dioxide coating, and this required experiments at the
            Chemical Engineering lab to test the hydrophilicity and transparency of the glass when the 
            solution is applied. The team presented the final design to the client and the Engineering Manager
            in a professional manner. <br/><br/>

            To conclude, my experience in project management provided me a solid understanding in 
            working with different people. For instance, having weekly meeting with 
            the Engineering Manager and monthly meeting with the client. <br/><br/>
        </ExperienceSample>
    );
}

export default HsodeDes;