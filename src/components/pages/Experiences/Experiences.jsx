import React from 'react';
import ExperiencesTitle from './ExperiencesTitle';
import Divider from '../../../assets/Divider/Divider';
import './Experiences.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';

const Experiences = () => {
  return (
    <>
      <ExperiencesTitle />
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
            <Icon icon="material-symbols:work" width="1.5rem" /> University of Toronto - iQua Group • Research Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>In Progress</p>
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
          date="Sep 2022 - Jan 2023"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> UofTHacks • Web Developer & Organizer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
          <p>
            UofTHacks is the University of Toronto's annual hackathon and the first student-run hackathon in Canada.
            Over 500+ students with a range of experience levels participate in the event. As a Frontend Web Developer,
            my role is to contribute to the development of the hackathon's landing page and dashboard using React.js,
            Next.js, and stitches.dev. You can find more information about this project in the Projects section.
            I also helped the team during the hackathon as part of UofTHacks X Organizers.
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
          date="Jun 2022 - July 2022"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> University of Toronto Engineering Outreach Office • DEEP Counsellor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            The Da Vinci Engineering Enrichment Program (DEEP) is a summer camp that offers gifted and highly motivated high school students from Canada and around the world the opportunity to study advanced topics in science, technology, and engineering.
            <br /><br />
            As part of my work with DEEP, I participated in training to review standard operating procedures, emergency protocols, and industry standards. After completing training, I assisted graduate students or upper-year students in mentoring groups of up to 20 high school students. This included preparing pre-class multiple-choice questions, taking attendance, and supporting students during challenging in-class activities that covered topics such as object-oriented programming, recursion, and Python libraries such as PyGame, NumPy, and Pandas.
            <br /><br />
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br /><br />
      <Divider />
    </>
  );
};

export default Experiences;