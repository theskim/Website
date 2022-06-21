import "./ContactMe.css";
import { Github, LinkedIn, Resume } from "../../../assets";

function ContactMe (){
    return (
      <div className = 'contact-me'>
        <title>
            &#x1F4F2;&nbsp;&nbsp;CONTACT ME
        </title>
        <p className = 'contact-info'>
           Phone:&nbsp;&nbsp;
            <a href="tel:+1 647-887-1601">
                647-887-1601<br/>
            </a>
            Email:&nbsp;&nbsp;
            <a href = "mailto:top030216@gmail.com?subject = Feedback&body = Message">
                top030216@gmail.com
            </a>
        </p>
        <div className = 'logos'>
            <div className = 'logo'>
                <a href="https://github.com/skim1601" class="button">
                    <img src={Github} alt=""/>
                </a> 
            </div>
            <div className = 'logo'>
                <a href="https://www.linkedin.com/in/sean-kim-752685212/" class="button">
                    <img src={LinkedIn} alt=""/>
                </a>     
            </div>
            <div className = 'logo'>
                <a href="https://drive.google.com/file/d/1m5JcJFL_ofws0u5jlNKEvaAkJsbd-ptC/view?usp=sharing" class="button">
                    <img src={Resume} alt=""/>
                </a>      
            </div>
        </div>
      </div>
    );
  }
  
  export default ContactMe;