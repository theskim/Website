import "./Style.css";
import { Html, Css, Js, Python, C } from "../../../assets";

const Title = () => {
    return(
        <>
            <div className = "languages-bold">
                <ul>
                    &#128187;&nbsp;&nbsp;Languages
                </ul>
            </div>
            <br/>   
        </>
    )
}

const Language = (props) => {
    return(
        <div class="tooltip-wrap">
            <img src={props.location} alt='main'/> <br/>
            <div class="tooltip-content">{props.name}</div> 
        </div>
    )
}

const LanguagesBox = (props) => {
    return (
        <div className = "languages">
            {props.children}
        </div>
    );
}

const Languages = () => {
    return (
        <LanguagesBox>
            <Title/>
            <Language location={Html} name="HTML5"/>
            <Language location={Css} name="CSS3"/>
            <Language location={Js} name="JavaScript"/>
            <Language location={Python} name="Python"/>
            <Language location={C} name="C"/>
        </LanguagesBox>
    );
}

export default Languages;