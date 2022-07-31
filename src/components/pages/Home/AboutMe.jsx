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
            I am a second year Computer Engineering Student at the University
            of Toronto with a huge interest in the field of Web Development and Software Engineering. 
            In my first year I have taken a fundamental programming course  
            as well as various engineering design courses. Currently, I am a Frontend Developer at UofTHacks
            to develop the hackathon's website which is visited by hundreds of applicants. 
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