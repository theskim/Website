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
                date="Sep 2022 - present"
                iconStyle={{ background: 'rgb(139, 117, 252)', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">University of Toronto Freelancers' Organization </h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
                    <h4 className="vertical-timeline-element-subtitle">React.js, styled-components</h4>
                    <p>
                        The University of Toronto Freelancers' Organization is a group dedicated to providing software development services for other University of Toronto associated groups or individuals. Our team has successfully recreated a website for FSAT (The Filipino Students' Association of Uniersity of Toronto) in a team of 5 freelancer developers. I generated reusable code using React.js and Styled Components, which reduced development time by 40%.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins',  boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Jul 2022 - present"
                iconStyle={{ background: 'rgb(139, 117, 252)', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">UofTHacks - Frontend Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
                    <h4 className="vertical-timeline-element-subtitle">Next.js, stitches.dev, Figma</h4>
                    <p>
                        UofTHacks is the University of Toronto's annual hackathon 
                        and the first student-run hackathon in Canada, where over 500+ students with different experience levels participate in.
                        As a Frontend Web Developer, my task is to work on developing 
                        the hackathon's landing page and dashboard. More details available on the Project page.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins', 	boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Jul 2022 - present"
                iconStyle={{ background: 'rgb(139, 117, 252)', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">Skule Commuter Student Directorship - Webmaster</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: React.js, Redux, Figma</h4>
                    <p>
                        The Commuter Student Directorship is planned to foster a sense of belonging and involvement between 
                        all student commuters in University of Toronto Engineering Community 
                        by creating opportunities, events, and programs to enrich the commuter community. <br/><br/>
                        I developed the organization’s website with React.js, which is 
                        expected to be accessed by over 400 commuter students at the University of Toronto Engineering Community. More details available on the Project page.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins', boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Jun 2022 - Jul 2022"
                iconStyle={{ background: 'rgb(139, 117, 252)', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">University of Toronto Engineering Outreach Office - DEEP Counsellor</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: Python, Mentoring</h4>
                    <p>
                    The Da Vinci Engineering Enrichment Program (DEEP) is a summer camp that provides gifted and highly motivated high school students from Canada and internationally with the opportunity for advanced study in a variety of science, technology, and engineering disciplines.

                    My work started by participating in training to review standard operating procedures, emergency protocols and industry standards.

                    After training, I assisted graduate students or upper-year students in organizing and mentoring up to 20 high school students. This was done by preparing pre-class multiple-choice questions, taking attendance, and supporting students during challenging in-class activities that incorporated concepts such as object-oriented programming, recursion, and Python Libraries such as PyGame, NumPy, and Pandas.

                    I also encouraged students to pursue interests in STEM fields and provided information about opportunities for further study and careers in these areas.
                                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#000', border: 'solid #000', fontFamily: 'Poppins', 	boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)'}}
                contentArrowStyle={{ borderRight: '9px solid #000' }}
                date="Sep 2021 - Apr 2022"
                iconStyle={{ background: 'rgb(139, 117, 252)', color: '#000', border: 'solid 0.2rem #000', boxShadow: 'none'}}
                >
                    <h3 className="vertical-timeline-element-title">Engineering Strategies and Practice - Engineering Project Manager</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <h4 className="vertical-timeline-element-subtitle">Skills: Project Management, Gantt Chart, Engineering Design, Presentation</h4>
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
                        in a professional manner. <br/><br/>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline><br/><br/>
            <Divider/>
        </>
    );
};

export default Experiences;