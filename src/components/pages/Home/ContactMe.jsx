import "./ContactMe.css";
import { Github, LinkedIn, Resume } from "../../../assets";

const Title = () => {
    return(
        <title>
            &#x1F4F2;&nbsp;&nbsp;CONTACT ME
        </title>
    )
}

const ContactInfo = () => {
    return(
        <p className = 'contact-info'>
            Phone:&nbsp;&nbsp;
            <a href="tel:+1 647-887-1601">
                647-887-1601<br/>
            </a>
            Email:&nbsp;&nbsp;
            <a href = "mailto:kimsihy093@gmail.com?subject = Feedback&body = Message">
                kimsihy093@gmail.com
            </a>
        </p>
    )
}

const Logos = () => {
    return(
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
                <a href="https://docs.google.com/document/d/1LYTIGA1HsmgeMmJBwkPYlB651evgiylYII6ETh6Bb4I/edit?usp=sharing" class="button">
                    <img src={Resume} alt=""/>
                </a>      
            </div>
        </div>
    )
}
const ContactMeBox = (props) => {
    return (
        <div className = 'contact-me'>
            {props.children}
        </div>
    )
}

const ContactMe = () => {
    return (
      <ContactMeBox>
        <Title/>
        <ContactInfo/>
        <Logos/>
      </ContactMeBox>
    );
  }
  
  export default ContactMe;