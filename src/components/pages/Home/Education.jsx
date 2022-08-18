import "./Education.css";
import { UofT } from "../../../assets";

const Title = () => {
  return ( 
    <title>
      &#x1F393;&nbsp;&nbsp;EDUCATION
    </title>
  )
}

const Description = () => {
  return (
    <>
      <img src={UofT} alt='main'/><br/>
      <p>
        University of Toronto - St. George<br/>
        Bachelor of Applied Science in Computer Engineering
      </p>
      <h2>
        2021 - 2026 (PEY CO-OP)
      </h2>
      <select onchange="if(this.value) location.href=(this.value);">
        <option value="" selected disabled hidden>Courses</option>
        <optgroup label="Software">
          <option value="8">APS105: Computer Fundamentals</option>
        </optgroup>
        <optgroup label="Electrical">
          <option value="11">ECE110: Electrical Fundamentals</option>
        </optgroup>
        <optgroup label="Engineering Design">
          <option value="https://engineering.calendar.utoronto.ca/course/aps100h1">APS111: Engineering Strategies & Practice I</option>
          <option value="7">APS112: Engineering Strategies & Practice II</option>
        </optgroup>
        <optgroup label="Mathematics">
          <option value="6">MAT186: Calculus I</option>
          <option value="9">MAT187: Calculus II</option>
          <option value="5">MAT188: Linear Algebra</option>
        </optgroup>
        <optgroup label="Physics">
          <option value="3">CIV100: Mechanics</option>
          <option value="10">MIE100: Dynamics</option>
        </optgroup>
        <optgroup label="Chemistry / Material Science">
          <option value="4">APS110: Engineering Chemistry & Materials Science</option>
        </optgroup>
        <optgroup label="Seminar">
          <option value="https://engineering.calendar.utoronto.ca/course/aps100h1">APS100: Orientation to Engineering</option>
          <option value="12">ECE191: Intro to Electrical & Computer Engineering</option>
        </optgroup>
      </select>
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