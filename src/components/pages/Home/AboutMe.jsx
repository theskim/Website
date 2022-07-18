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
            interest in the field of Frontend, 
            Backend, and Artificial Intelligence. 
        </p>
    )
}

const AboutMe = () => {
    return (
        <div className = 'about-me'>
            <Title/>
            <Location/>
            <Description/>
        </div>
    );
}

export default AboutMe;