const Tool = ({ location, name }) => {
    return (
        <div className="tooltip-wrap">
            {location}<br/>
            <p className="tooltip-content">{name}</p> 
        </div>
    )
}

export default Tool;