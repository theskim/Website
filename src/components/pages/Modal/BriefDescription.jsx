const BriefDescription = (props) => {
    return (
        <>  {props.date == null ? <></> 
                :<p>
                    <b>&#128197;&nbsp;{props.date}&nbsp;&nbsp;</b>
                </p>
            }

            <p>
                <b>Tech Stack:&nbsp;</b>{props.skills}
            </p>
        </>
    );
} 

export default BriefDescription;