import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";
import { ResumeLogo, LinkedInLogo, phoneLogo, mailLogo } from "../../../assets/GeneralLogos";
import { GithubLogo } from "../../../assets/ToolLogos";
import "./ContactMe.css";

const Title = () => {
    return (
        <title>
            &#x1F4F2;&nbsp;&nbsp;CONTACT ME
        </title>
    )
}

const ContactMeBox = (props) => {
    return (
        <div className='contact-me'>
            {props.children}
        </div>
    )
}

const ContactMe = () => {
    return (
      <ContactMeBox>
        <Title/>
        <ContactInfo 
            src={[phoneLogo, mailLogo]}
            href={["tel:+1 647-887-1601", "mailto:kimsihy093@gmail.com?subject = Feedback&body = Message"]}
            display={["647-887-1601", "kimsihy093@gmail.com"]}
        />
        <SocialMedia 
            src={[GithubLogo, LinkedInLogo, ResumeLogo]} 
            href={["https://github.com/skim1601", "https://www.linkedin.com/in/skim1601/", "https://docs.google.com/document/d/1LYTIGA1HsmgeMmJBwkPYlB651evgiylYII6ETh6Bb4I/edit?usp=sharing"]}
        />
      </ContactMeBox>
    );
  }
  
  export default ContactMe;