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
            <h4 style={{color: "rgb(91, 58, 255)"}}><Icon icon="material-symbols:location-on" color="rgb(91, 58, 255)"  />&nbsp;Toronto, ON, Canada</h4>
            <h5><Icon icon="ic:round-access-time-filled" />&nbsp;<Clock/></h5>
            <p> Hello, my name is Sean Kim and I am going into my third year of Computer Engineering at the University of Toronto
                interested in Distributed Systems, Computer Networking, and Full-stack Development. <br/><br/>
                My favorite aspect of coding is the process of writing consistent, readable code styles, refactoring code, and witnessing the impact of the changes I make in the real world. 
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