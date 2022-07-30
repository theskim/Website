import Footer from "../../Footer/Footer";
import './Experiences.css';
import EspDes from './EspDes';
import ContactMe from "../ContactMe/ContactMe";

const Title = () => {
    return(
        <>
            <div className = "title-box">
                <p className = "title">&#128188;&nbsp;&nbsp;EXPERIENCES</p>
            </div>
            <div className = "text-box">
                <p className = "description">
                    This section lists different experiences I gained through
                    work, school, and volunteering. 
                </p>
            </div>
        </>
    )
};

const ExperiencesBox = (props) => {
    return (
        <div className = "experiences">
            {props.children}
        </div>
    );
}

const Experiences = () => {
    return (
        <>
            <ExperiencesBox>
                <Title/>
                <EspDes/>
                <ContactMe/>
            </ExperiencesBox>
            <Footer/>
        </>
    );
};

export default Experiences;