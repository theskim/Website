import uoftImage from './../../../assets/uoft-logo.png';
import "./Education.css";

function Education (){
  return (
    <div className = 'school-information'>
      <div className='text' >
        <p>
          University of Toronto 
          <img src={uoftImage} alt='main' />
          Bachelor of Applied Science in Computer Engineering (~ 2021)
        </p>
      </div>
    </div>
  );
}

export default Education;