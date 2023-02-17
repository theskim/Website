import ExperiencesTitle from './ExperiencesTitle';
import Divider from '../../../assets/Divider/Divider';
import './Experiences.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => {
    return (
        <>
            <ExperiencesTitle/>     
            <VerticalTimeline lineColor='#000'>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins',  boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Sep 2022 - Present"
                iconStyle={{ background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">University of Toronto Freelancers' Organization • Freelance Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: React.js • styled-components</h4>
                    <p>
                    The University of Toronto Freelancers' Organization is a group of software developers who offer their services to University of Toronto-affiliated groups and individuals. Our team of four freelance developers successfully created a new website for FSAT (The Filipino Students' Association of University of Toronto). I contributed to the project by creating reusable code using React.js and Styled Components, which reduced development time by 40%. This allowed us to efficiently deliver a high-quality product to our client.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins',  boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Sep 2022 - Present"
                iconStyle={{ background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">UofTHacks • Frontend Web Developer & Organizer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: React.js • Next.js • stitches.dev • Figma</h4>
                    <p>
                    UofTHacks is the University of Toronto's annual hackathon and the first student-run hackathon in Canada. Over 500+ students with a range of experience levels participate in the event. As a Frontend Web Developer, my role is to contribute to the development of the hackathon's landing page and dashboard using React.js, Next.js, and stitches.dev. 
                    You can find more information about this project in the Projects section. I also helped the team during the hackathon as part of UofTHacks X Organizers.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins',  boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Sep 2022 - Present"
                iconStyle={{ background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">Skule Commuter Student Directorship • Webmaster Executive</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: React.js • Redux • Figma</h4>
                    <p>
                    The Commuter Student Directorship is a student-led organization that aims to build a sense of community and engagement among commuter students in the University of Toronto Engineering program. We do this by organizing events, programs, and opportunities that enrich the experience of commuting students. <br/><br/>

I developed the organization's website using React.js, which is expected to be accessed by over 400 commuter students at the University of Toronto Engineering Community. You can find more information about this project in the Projects section.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins',  boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Sep 2022 - Present"
                iconStyle={{ background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">University of Toronto Engineering Outreach Office • DEEP Counsellor</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: Python • Mentoring</h4>
                    <p>
                    The Da Vinci Engineering Enrichment Program (DEEP) is a summer camp that offers gifted and highly motivated high school students from Canada and around the world the opportunity to study advanced topics in science, technology, and engineering. <br/><br/>

As part of my work with DEEP, I participated in training to review standard operating procedures, emergency protocols, and industry standards. After completing training, I assisted graduate students or upper-year students in mentoring groups of up to 20 high school students. This included preparing pre-class multiple-choice questions, taking attendance, and supporting students during challenging in-class activities that covered topics such as object-oriented programming, recursion, and Python libraries such as PyGame, NumPy, and Pandas.<br/><br/>

In addition to providing academic support, I also encouraged students to pursue interests in STEM fields and provided information about opportunities for further study and careers in these areas.
                                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins',  boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Sep 2022 - Present"
                iconStyle={{ background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">Engineering Strategies and Practice • Engineering Project Manager</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: Project Management • Gantt Chart • Engineering Design • Presentation</h4>
                    <p>
                    Engineering Strategies and Practice is a design course, 
                        offered in first year engineering at the University of Toronto.
                        The course focuses on developing skills in engineering communication, 
                        problem solving, engineering project management, client relationships, and team dynamics. <br/><br/>

                        The first project was about developing an efficient unloading system for a delivery
                        robot. After thoroughly exploring the design space, the team selected a hydraulic design
                        as the final conceptual design.
                        <br/><br/>
                        
                        The second project was about developing a design for efficient grime removal on the client's window.
                        As a team, we conducted various physical experiments at the Walberg Chemical Engineering lab 
                        to test the hydrophilicity and transparency of the glass when the Titanium Dioxide solution is applied. 
                        Ultimately, the team presented a 10-minute long final design to the client and the Engineering Manager
                        in a professional manner. 
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline><br/><br/>
            <Divider/>
        </>
    );
};

export default Experiences;