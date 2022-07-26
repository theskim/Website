import "./Style.css";

const ExperienceSample = (props) => {
    return (
        <div className = "experience-box">
            <div className = "experience-title">
                <p>{props.experience.title}</p>
            </div>
            <div className = "experience-skills">
                    <h4>&#128197;&nbsp;{props.experience.duration}&nbsp;&nbsp;</h4>
                    <p>
                        <b>Skills:&nbsp;</b>{props.experience.skills}
                    </p>
                </div>
            <img src={props.experience.image} alt=""/><br/>
            <div className = "experience-description">
                {props.children}
            </div>
        </div>
    );
}

export default ExperienceSample;