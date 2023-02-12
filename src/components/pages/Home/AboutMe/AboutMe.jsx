import { locationLogo } from "../../../../assets/GeneralLogos";
import GetDate from "../../../API/GetDate";
import "./AboutMe.scss";

const Title = () => {
    return (
        <h1 id='home'>
            &#x1F464;&nbsp;&nbsp;SEAN KIM
        </h1>   
    )
}

const Description = () => {
    return (
        <div className = 'about-me-description'>
            <h4><img src={locationLogo} alt=""/>&nbsp;Toronto, ON, Canada</h4>
            <h5><GetDate/></h5>
            <p>
                Welcome, my name is Sean Kim and I am a second year Computer Engineering student at the University of Toronto. I am passionate about using my technical skills to develop innovative solutions and improve user experiences. 

                I am always looking for new opportunities to learn and grow as a software engineer, and I am excited to connect with professionals in the industry.
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