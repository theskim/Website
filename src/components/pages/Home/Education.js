import uoftImage from './../../../assets/uoft-logo.png';
import "./Education.css";

function Education (){
  return (
    <div className = 'school-information'>
      <p className = 'title'>
        &#x1F393;&nbsp;&nbsp;EDUCATION
      </p>
      <img src={uoftImage} alt='main' /> <br/>
      <p className = 'text'>
        University of Toronto - St. George <br/>
        Bachelor of Applied Science in Computer Engineering 
      </p>
      <p className = 'number'>
        2021 - 2026 (PEY CO-OP)
      </p>
    </div>
  );
}

export default Education;