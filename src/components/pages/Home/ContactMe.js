import "./ContactMe.css";
import githubLogo from './../../../assets/github.png';
import linkedinLogo from './../../../assets/linkedin.png';
import resumeLogo from './../../../assets/resume.png';

function ContactMe (){
    return (
      <div className = 'contact-me'>
        <p className = 'title'>
            &#x1F4F2;&nbsp;&nbsp;CONTACT ME
        </p>
        <p className = 'text'>
            Phone Number:&nbsp;&nbsp;
            <a href="tel:+1 647-887-1601">
                647-887-1601
            </a>
        </p>
        <div className = 'logos'>
            <a href="https://github.com/skim1601" class="button">
                <img src={githubLogo} width="150" height="150" alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/sean-kim-752685212/" class="button">
                <img src={linkedinLogo} width="150" height="150" alt=""/>
            </a>
            <a href="https://drive.google.com/file/d/1m5JcJFL_ofws0u5jlNKEvaAkJsbd-ptC/view?usp=sharing" class="button">
                <img src={resumeLogo} width="150" height="150" alt=""/>
            </a>
        </div>
      </div>
    );
  }
  
  export default ContactMe;