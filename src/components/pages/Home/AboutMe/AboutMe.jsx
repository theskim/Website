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
                Welcome, my name is Sean Kim and I am a second year Computer Engineering student at the University of Toronto. I am passionate about using my technical skills to develop innovative solutions and improve user experiences. My interest towards Artificial Intelligence has increased over last few months. I am currently planning to pursue a minor in it and seriously considering my career in AI. My skills include programming languages such as C, C++, Python, and JavaScript, as well as frameworks like React.js and Next.js.<br/><br/>

I have gained experience in web development through my roles at the University of Toronto Freelancer's Organization, UofTHacks, and Skule Commuter Students Directorship, where I have built and maintained websites and applied best practices such as reusable code and atomic design. In addition to my technical skills, I am a proactive and collaborative team member, having served as a counsellor for the Da Vinci Engineering Enrichment Program, where I mentored high school students in STEM fields. <br/><br/>

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