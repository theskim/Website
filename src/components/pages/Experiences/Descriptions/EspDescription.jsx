import Experience from "./Experience";
import { ESPLogo } from "./imports";

const EspDescription = () => {
    return (
       <Experience 
        title="Engineering Strategies and Practice - Engineering Project Manager"
        date="Sep 2021 - Apr 2022"
        skills="Project Management, Gantt Chart, Engineering Design, Presentation"
        image={ESPLogo}
        >
            Engineering Strategies and Practice is a design course, 
            offered in first year engineering at the University of Toronto.
            The course focuses on developing skills in engineering communication, 
            problem solving, engineering project management, client relationships, and team dynamics. <br/><br/>

            As a Project Manager, I was responsible for improving my team's workflow.
            This was done by implementing Gantt charts and setting internal deadlines, 
            allowing the team to complete tasks 1-3 days in advance of actual deadlines<br/><br/>

            The first project was about developing an efficient unloading system for a delivery
            robot. The team had to come up with a detailed Conceptual Design Specifications document,
            which addressed the Service Enviornment, Stakeholders, Objectives, Functions, Constraints, and Alternative Designs.
            After thoroughly exploring the design space, the team selected a hydraulic design
            as the final conceptual design.
            <br/><br/>
            
            The second project was about developing a design for efficient grime removal on the client's window.
            As a team, we conducted various physical experiments at the Walberg Chemical Engineering lab 
            to test the hydrophilicity and transparency of the glass when the Titanium Dioxide solution is applied. 
            Ultimately, the team presented a 10-minute long final design to the client and the Engineering Manager
            in a professional manner. <br/><br/>

            To conclude, my experience in project management provided me with a solid understanding of 
            working with different people. For instance, having a weekly meeting with 
            the Engineering Manager and a monthly meeting with the client. <br/><br/>
        </Experience>
    );
}

export default EspDescription;