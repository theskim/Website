import ContactMeBox from "./Sections/ContactMeBox";
import ContactMeTitle from "./Sections/ContactMeTitle";
import MailInfo from "./Sections/MailInfo";
import SocialMedia from "./Sections/SocialMedia";
import { ResumeLogo, LinkedInLogo } from "../../../assets/GeneralLogos";
import { GithubLogo } from "../../../assets/ToolLogos";
import "./ContactMe.scss";

const ContactMe = () => {
    return (
      <ContactMeBox>
        <ContactMeTitle/>
        <MailInfo 
            href={"mailto:kimsihy093@gmail.com?subject = Feedback&body = Message"}
            display={"kimsihy093@gmail.com"}
        />
        <SocialMedia 
            src={[GithubLogo, LinkedInLogo, ResumeLogo]} 
            href={["https://github.com/skim1601", "https://www.linkedin.com/in/skim1601/", "https://docs.google.com/document/d/10CALRWLR5nVSGOBpfnZh3_F1aLwK4bNRlKlNvgoBtwk/export?format=pdf"]}
        />
      </ContactMeBox>
    );
}
  
export default ContactMe;