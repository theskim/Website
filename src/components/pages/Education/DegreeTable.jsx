import { Icon } from '@iconify/react';

const DegreeTable = () => {
    const firstYear = {
        "First Semester": [
            {"APS100: Orientation to Engineering": "https://engineering.calendar.utoronto.ca/course/aps100h1"}, 
            {"APS110: Engineering Chemistry & Materials Science": "https://engineering.calendar.utoronto.ca/course/aps110h1"}, 
            {"APS111: Engineering Strategies & Practice I": "https://engineering.calendar.utoronto.ca/course/aps111h1"},
            {"CIV100: Mechanics": "https://engineering.calendar.utoronto.ca/course/civ100h1"},
            {"MAT186: Calculus I": "https://engineering.calendar.utoronto.ca/course/mat186h1"},
            {"MAT188: Linear Algebra": "https://engineering.calendar.utoronto.ca/course/mat188h1"}
        ],
        "Second Semester": [
            {"APS105: Computer Fundamentals": "https://engineering.calendar.utoronto.ca/course/aps105h1"}, 
            {"APS112: Engineering Strategies & Practice II": "https://engineering.calendar.utoronto.ca/course/aps112h1"}, 
            {"ECE110: Electrical Fundamentals": "https://engineering.calendar.utoronto.ca/course/ece110h1"},
            {"ECE191: Intro to Electrical & Computer Engineering": "https://engineering.calendar.utoronto.ca/course/ece191h1"},
            {"MAT187: Calculus II": "https://engineering.calendar.utoronto.ca/course/mat187h1"},
            {"MIE100: Dynamics": "https://engineering.calendar.utoronto.ca/course/mie100h1"}
        ]
    };
    const secondYear = {
        "First Semester": [
            {"ECE201: Electrical and Computer Engineering Seminar": "https://engineering.calendar.utoronto.ca/course/ece201h1"}, 
            {"ECE212: Circuit Analysis": "https://engineering.calendar.utoronto.ca/course/ece212h1"}, 
            {"ECE241: Digital Systems": "https://engineering.calendar.utoronto.ca/course/ece241h1"},
            {"ECE244: Programming Fundamentals": "https://engineering.calendar.utoronto.ca/course/ece244h1"},
            {"MAT290: Advanced Engineering Mathematics": "https://engineering.calendar.utoronto.ca/course/mat290h1"},
            {"MAT291: Calculus III": "https://engineering.calendar.utoronto.ca/course/mat291h1"}
        ],
        "Second Semester": [
            {"ECE216: Signals and Systems": "https://engineering.calendar.utoronto.ca/course/ece216h1"}, 
            {"ECE221: Electric and Magnetic Fields": "https://engineering.calendar.utoronto.ca/course/ece221h1"}, 
            {"ECE231: Introductory Electronics": "https://engineering.calendar.utoronto.ca/course/ece231h1"}, 
            {"ECE243: Computer Organization": "https://engineering.calendar.utoronto.ca/course/ece243h1"},
            {"ECE297: Software Design and Communication": "https://engineering.calendar.utoronto.ca/course/ece297h1"},
            {"": ""},
        ]
    };
    const thirdYear = {
        "First Semester": [
            {"ECE302: Probability and Applications": "https://engineering.calendar.utoronto.ca/course/ece302h1"},
            {"ECE344: Operating Systems": "https://engineering.calendar.utoronto.ca/course/ece344h1"}, 
            {"ECE345: Algorithms and Data Structures": "https://engineering.calendar.utoronto.ca/course/ece345h1"}, 
            {"ECE361: Computer Networks I": "https://engineering.calendar.utoronto.ca/course/ece361h1"},
            {"ECE472: Engineering Economic Analysis & Entrepreneurship": "https://engineering.calendar.utoronto.ca/course/ece472h1"},
        ],
        "Second Semester": [
            {"APS360: Applied Fundamentals of Deep Learning": "https://engineering.calendar.utoronto.ca/course/aps360h1"}, 
            {"AST121: Origin and Evolution of the Universe": "https://artsci.calendar.utoronto.ca/course/ast121h1"}, 
            {"CSC300: Computers and Society": "https://artsci.calendar.utoronto.ca/course/csc300h1"}, 
            {"CSC343: Introduction to Databases": "https://artsci.calendar.utoronto.ca/course/csc343h1"}, 
            {"ECE311: Introduction to Control Systems": "https://engineering.calendar.utoronto.ca/course/ece311h1"},
        ]
    };

    const mapObject = (obj) => {
        return obj["First Semester"].map((course, i) => (
            <tr key={Object.values(course)}>
                <td>
                    <a href={Object.values(course)}>{Object.keys(course)}</a>
                </td>
                <td>
                    <a href={Object.values(obj["Second Semester"][i])}>{Object.keys(obj["Second Semester"][i])}</a>
                </td>
            </tr>
        ));
    }

    return (
        <details>
            <summary className="degree_table__title"><Icon icon="fluent-mdl2:publish-course" width='1.5rem' />&nbsp;Courses</summary>
            <span> 
                <p className="degree_table__header"><Icon icon="material-symbols:filter-3" width='1.5rem' />&nbsp;Third Year</p>
                <span className="degree_table__contents">
                    <table>
                        <thead>
                            <tr>
                                <th>Fall 2023</th>
                                <th>Winter 2024</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mapObject(thirdYear)}
                        </tbody>
                    </table>
                </span>
                <p className="degree_table__header"><Icon icon="material-symbols:filter-2" width='1.5rem' />&nbsp;Second Year</p>
                <span className="degree_table__contents">
                    <table>
                        <thead>
                            <tr>
                                <th>Fall 2022</th>
                                <th>Winter 2023</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mapObject(secondYear)}
                        </tbody>
                    </table>
                </span>
                <p className="degree_table__header"><Icon icon="material-symbols:filter-1" width='1.5rem' />&nbsp;First Year</p>
                <span className="degree_table__contents">
                    <table>
                        <thead>
                            <tr>
                                <th>Fall 2021</th>
                                <th>Winter 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mapObject(firstYear)}
                        </tbody>
                    </table>
                </span>
            </span>
        </details>
    );
}

export default DegreeTable;