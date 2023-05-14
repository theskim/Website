import { UofTLogo } from "../../../../assets/GeneralLogos";
import DegreeTable from "./DegreeTable";
import "./Education.scss";
import { Icon } from '@iconify/react';

const Title = () => {
  return ( 
    <h1>
      &#x1F393;&nbsp;&nbsp;EDUCATION
    </h1>
  )
}

const Description = () => {
  return (
    <>
      <img src={UofTLogo} loading='lazy' alt=''/><br/>
      <p>
        University of Toronto<br/>
        Bachelor of Applied Science in Computer Engineering
      </p>
      <h2>
        2021 - Present (PEY CO-OP)
      </h2>
      <p>
        <b><Icon icon="mdi:award" width='1.3rem'/>&nbsp;Dean's List</b> in All Semesters<br/>
        <b><Icon icon="tabler:award" width='1.3rem'/>&nbsp;NSERC</b> Undergraduate Student Research Award<br/>
        <Icon icon="mdi:certificate" width='1.3rem'/>&nbsp;Minor in <b>Artificial Intelligence Engineering</b>
      </p>
      <a className="my-button" href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/" style={
        {padding:"min(1rem, 3vw)", textDecoration:"none", marginTop:"6vh", marginBottom:"8vh"}
      }>
        Learn More
      </a>
      <DegreeTable/>
    </>
  )
}

const EducationBox = ({ children }) => {
  return (
    <div className = 'school-information'>
      {children}
    </div>
  );
}

const Education = () => {
  return (
    <EducationBox>
      <Title/>
      <Description/>
    </EducationBox>
  );
}

export default Education;