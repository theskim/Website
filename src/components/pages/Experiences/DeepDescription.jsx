import "./Style.css";
import ExperienceSample from "./ExperienceSample";
import { DEEP } from "../../../assets";

const DeepDescription = () => {
    const Deep = {
        title: "University of Toronto Engineering Outreach Office - Da Vinci Engineering Enrichment Program Counsellor",
        duration: "Jul 2022",
        skills: "Python, Mentoring",
        image: DEEP,
    }

    return (
       <ExperienceSample experience={Deep}>
            The Da Vinci Engineering Enrichment Program is a summer camp for highly motivated high school students with
            a huge interest in STEM. As a counsellor, I assisted graduate students or upper-year students in organizing
            and mentoring students. I was involved in Python Basics, Computer Vision and Data Analytics, and Solar Cell Physics classes.
            I supported a group of up to 20 high school students; prepared pre-class multiple-choice questions and took attendance for each class.
            I also assisted students during challenging in-class activities that incorporated concepts such as object-oriented programming, recursion, 
            and Python Libraries such as PyGame, NumPy, and Pandas.
        </ExperienceSample>
    );
}

export default DeepDescription;