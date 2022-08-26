import { locationLogo } from "../../../../assets/GeneralLogos";
import GetDate from "../../API/GetDate";
import "./AboutMe.scss";

const Title = () => {
    return (
        <title>
            &#x1F464;&nbsp;&nbsp;SEAN KIM
        </title>   
    )
}

const Description = () => {
    return (
        <div className = 'about-me-description'>
            <h4><img src={locationLogo} alt=""/>&nbsp;Oakville, ON, Canada</h4>
            <h5><GetDate/></h5>
            <p>
                Welcome!
                I am a second year Computer Engineering Student at the University
                of Toronto with a huge interest in the field of Web Development and Software Engineering. 
                Currently, I am a Frontend Developer at UofTHacks
                to develop the hackathon's website and dashboard which will be visited by hundreds of applicants. 
            </p>
        </div>
    )
}

const AboutMeBox = (props) => {
    return (
        <div className = 'about-me'>
            {props.children}
        </div>
    );
}

const AboutMe = () => {
    return (
        <AboutMeBox>
            <Title/>
            <Description/>
        </AboutMeBox>
    );
}

export default AboutMe;