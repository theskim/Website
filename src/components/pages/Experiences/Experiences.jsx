import React from 'react';
import Divider from '../../../assets/Divider/Divider';
import './Experiences.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';

const Title = () => {
  return (
      <div id='experiences' className='experiences__title-box'>
          <h1>&#128188;&nbsp;&nbsp;EXPERIENCES</h1>
      </div>
  );
};

const Experiences = () => {
  return (
    <>
      <Title />
        <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#fff',
            color: '#000',
            border: '1px solid #000',
            fontFamily: 'Poppins',
            boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)',
          }}
          contentArrowStyle={{ borderRight: '9px solid #000' }}
          date="May 2024 -"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> Mozilla Corp. • 
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            - Firefox Necko Networking Team &#129418;&#127760;
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#fff',
            color: '#000',
            border: '1px solid #000',
            fontFamily: 'Poppins',
            boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)',
          }}
          contentArrowStyle={{ borderRight: '9px solid #000' }}
          date="May 2023 - Sep 2023"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> iQua Research Group - University of Toronto • 
            Distributed ML System Research Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            - Developed a Max-min fairness routing algorithm for bandwidth optimization and analytics dashboard for tracking bandwidth allocation.<br/>
            - Extended the functionality of over 10 distinct Rust tests to evaluate TCP connection behavior and metric transmission via network packets.<br/>
            - Implemented a WebSocket server with Node.js, integrated with a Rust-based dataplane.<br />
            - <b>Tech Stack:</b> Python, Rust, JavaScript, Node.js, SciPy, PostgreSQL and Docker
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#fff',
            color: '#000',
            border: '1px solid #000',
            fontFamily: 'Poppins',
            boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)',
          }}
          contentArrowStyle={{ borderRight: '9px solid #000' }}
          date="Sep 2022 - Jan 2024"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> UofTHacks • Full-stack Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
          <p>
                      - Developed the main website and dashboard for UofTHacks X and the dashboard and applicant portal for UofTHacks 11, benefiting over 600+ hackathon participants with seamless access.<br />
                      - <b>Tech Stack:</b> React.js, Next.js, Node.js, Express.js, and MariaDB
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#fff',
            color: '#000',
            border: '1px solid #000',
            fontFamily: 'Poppins',
            boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)',
          }}
          contentArrowStyle={{ borderRight: '9px solid #000' }}
          date="Jul 2022 - Apr 2023"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> UofT Engineering Commuter Student Directorship • Webmaster
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
          <p>
                - Lead the development of main website for UofT Engineering Commuter Student Directorship, a commuter community for over 400 students. <br/>
                - <b>Tech Stack:</b> React.js, CSS, and Figma
          </p>
        </VerticalTimelineElement>      
      </VerticalTimeline>
      <br /><br />
      <Divider />
    </>
  );
};

export default Experiences;