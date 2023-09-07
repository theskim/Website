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
          date="May 2023 - Present"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> University of Toronto - iQua Group • 
            Undegraduate Researcher Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
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
          date="Sep 2022 - Present"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> UofTHacks • Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br /><br />
      <Divider />
    </>
  );
};

export default Experiences;