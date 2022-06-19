import "./Education.css";
import { UofT } from "../../../assets";

function Education (){
  return (
    <div className = 'school-information'>
      <title>
        &#x1F393;&nbsp;&nbsp;EDUCATION
      </title>
      <img src={UofT} alt='main'/><br/>
      <p className = 'description-text'>
        University of Toronto - St. George<br/>
        Bachelor of Applied Science in Computer Engineering
      </p>
      <h2 className = 'year-text'>
        2021 - 2026 (PEY CO-OP)
      </h2>
    </div>
  );
}

export default Education;