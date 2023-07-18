import MailInfo from "./Sections/MailInfo";
import SocialMedia from "./Sections/SocialMedia";
import { ResumeLogo, LinkedInLogo } from "../../../assets/GeneralLogos";
import { GithubLogo } from "../../../assets/GeneralLogos";
import "./ContactMe.scss";
import Resume from "../../../assets/Resume/resume.pdf"

const ContactMeTitle = () => {
  return (
      <h1 id='contact'>
          &#x1F4F2;&nbsp;&nbsp;CONTACT ME
      </h1>
  )
}

const Wrapper = (props) => {
  return (
      <div className='contact-me'>
          {props.children}
      </div>
  )
}

const ContactMe = () => {
    return (
      <Wrapper>
        <ContactMeTitle/>
        <MailInfo 
            href={"mailto:kimsihy093@gmail.com?subject = Feedback&body = Message"}
            display={"kimsihy093@gmail.com"}
        />
        <SocialMedia 
            src={[GithubLogo, LinkedInLogo, ResumeLogo]} 
            href={["https://github.com/theskim", "https://www.linkedin.com/in/seankim7/", Resume]}
        />
      </Wrapper>
    );
}
  
export default ContactMe;