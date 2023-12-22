import Clock from "../../../API/Clock";
import "./Hero.scss";
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
        <div className='about-me-description'>
            <h4 style={{color: "rgb(91, 58, 255)"}}><Icon icon="material-symbols:location-on" color="rgb(91, 58, 255)"  />&nbsp;University of Toronto, Canada</h4>
            <h5><Icon icon="ic:round-access-time-filled" />&nbsp;<Clock/></h5>
            <p> Undergraduate Computer Engineering Student at the University of Toronto. <br/><br/>
                Experienced Computer Networks and Distributed Systems through research internship at iQua Research Group in Summer 2023.
                Lead various student teams in academic, hackathon, and professional environments to develop a variety of software and applications
                across different levels. Learned various fields including web development, software development, machine learning, computer networks, and hardware 
                through coursework and projects.
            </p>
        </div>
    )
}

const Wrapper = (props) => {
    return (
        <div className='about-me'>
            {props.children}
        </div>
    );
}

const Hero = () => {
    return (
        <Wrapper>
            <Title/>
            <Description/>
        </Wrapper>
    );
}

export default Hero;