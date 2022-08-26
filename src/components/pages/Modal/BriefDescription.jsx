const BriefDescription = (props) => {
    return (
        <>
            <p>
                <b>&#128197;&nbsp;{props.date}&nbsp;&nbsp;</b>
            </p>
            <p>
                <b>Skills:&nbsp;</b>{props.skills}
            </p>
        </>
    );
} 

export default BriefDescription;