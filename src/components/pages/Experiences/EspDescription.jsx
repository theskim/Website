import ExperienceSample from "./ExperienceSample";
import { ESPLogo } from "./imports";

const EspDescription = () => {
    return (
       <ExperienceSample 
        title="Engineering Strategies and Practice - Engineering Project Manager"
        duration="Sep 2021 - Apr 2022"
        skills="Project Management, Gantt Chart, Engineering Design, Presentation"
        image={ESPLogo}
        >
            As a Project Manager, I was responsible for improving the team's workflow 
            through actively integrating the use of Gantt charts and setting
            internal deadlines, allowing the team to complete tasks 1 to 3 days in advance 
            before the actual deadline.  <br/><br/>

            The first project was mainly on developing an efficient unloading design for a delivery
            robot. The team's final conceptual design was a hydraulic design.<br/><br/>
            
            The second project was on developing a design for an efficient grime removal on the client's window.
            The team's final design was Titanium Dioxide coating, and this required various experiments at Walberg
            Chemical Engineering lab. We tested the hydrophilicity and transparency of the glass when the 
            TiO2 solution is applied. The team presented a 10-minute long final design to the client and the Engineering Manager
            in a professional manner. <br/><br/>

            To conclude, my experience in project management provided me with a solid understanding of 
            working with different people. For instance, having a weekly meeting with 
            the Engineering Manager and a monthly meeting with the client.  <br/><br/>
        </ExperienceSample>
    );
}

export default EspDescription;