import GetDate from "../../../API/GetDate";
import "./AboutMe.scss";
import { Icon } from '@iconify/react';

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
            <h4 style={{color: "rgb(91, 58, 255)"}}><Icon icon="material-symbols:location-on" color="rgb(91, 58, 255)"  />&nbsp;Toronto, ON, Canada</h4>
            <h5><Icon icon="ic:round-access-time-filled"  />&nbsp;<GetDate/></h5>
            <p>
                Welcome, my name is Sean Kim and I am a second year Computer Engineering student at the University of Toronto.

           
            </p>
        </div>
    )
}

const AboutMeBox = (props) => {
    return (
        <div className='about-me'>
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