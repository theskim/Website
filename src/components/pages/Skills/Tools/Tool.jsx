const Tool = ({ location, name }) => {
    return (
        <div className="tooltip-wrap">
            <img src={location} loading='lazy' alt={`${name} logo`}/> <br/>
            <div className="tooltip-content">{name}</div> 
        </div>
    )
}

export default Tool;