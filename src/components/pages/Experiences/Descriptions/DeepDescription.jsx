import Experience from "./Experience";
import { DEEPLogo } from "./imports";

const DeepDescription = () => {
    return (
       <Experience 
        title="University of Toronto Engineering Outreach Office - DEEP Counsellor"
        alt="DEEP Counsellor"
        date="Jul 2022"
        skills="Python, Mentoring"
        image={DEEPLogo}
        >
            The Da Vinci Engineering Enrichment Program (DEEP) is a summer camp for highly motivated high school students with
            a huge interest in STEM. <br/><br/>
            As a counsellor, I assisted graduate students or upper-year students in organizing
            and mentoring up to 20 motivated high school students. 
            This was done by preparing pre-class multiple-choice questions, taking attendance, 
            and supporting students during challenging in-class activities that 
            incorporated concepts such as object-oriented programming, recursion, 
            and Python Libraries such as PyGame, NumPy, and Pandas. <br/><br/>
            I encouraged students to pursue interests in STEM fields and provided information about opportunities 
            for further study and careers in these areas. 
        </Experience>
    );
}

export default DeepDescription;