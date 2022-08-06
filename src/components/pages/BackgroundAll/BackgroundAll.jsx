import './background.css';

const BackgroundAll = (props) => {
    return (
        <div className="background__all">
            <div className="box__all">
                {props.children}
            </div>
        </div>
    )
}

export default BackgroundAll