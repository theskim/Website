import "./AboutMe.css";

const Title = () => {
    return(
        <title>
            &#x1F464;&nbsp;&nbsp;SEAN KIM
        </title>   
    )
}

const Location = () => {
    return(
        <h1 className = 'location-text'>
            Oakville, ON, Canada<br/>
        </h1>
    )
}

const Description = () => {
    return(
        <p className = 'description-text'>
            Computer Engineering Student with a huge
            interest in the field of Web Development. 
        </p>
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
            <Location/>
            <Description/>
        </AboutMeBox>
    );
}

export default AboutMe;