import "./Education.css";
import { UofTLogo } from "../../../../assets/GeneralLogos";
import DegreeTable from "./DegreeTable";

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
      <img src={UofTLogo} alt='main'/><br/>
      <p>
        University of Toronto - St. George<br/>
        Bachelor of Applied Science in Computer Engineering
      </p>
      <h2>
        2021 - 2026 (PEY CO-OP)
      </h2>
      <a className="my-button" href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/" style={
        {padding:"min(1rem, 3vw)", textDecoration:"none", marginTop:"6vh", marginBottom:"8vh"}
      }>
        Learn More
      </a>
      <DegreeTable/>
    </>
  )
}

const EducationBox = (props) => {
  return (
    <div className = 'school-information'>
      {props.children}
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