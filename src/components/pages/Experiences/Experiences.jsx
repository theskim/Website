import Footer from "../../Footer/Footer";
import './Experiences.css';
import EspDes from './EspDes';

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

const Experiences = () => {
    return (
        <>
            <div className = "experiences">
                <Title/>
                <EspDes/>
            </div>
            <Footer/>
        </>
    );
};

export default Experiences;