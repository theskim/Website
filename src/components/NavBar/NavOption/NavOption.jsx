import { NavLink } from "react-router-dom";
import { SmoothScroll } from "./SmoothScroll";

const NavOptionInner = (props) => {
    return (
        <>
            { props.mobile
                ?   <p>&nbsp;&nbsp;{props.title}</p>
                :   <p onMouseOver={() => props.update(true)} onMouseOut={() => props.update(false)}> 
                        { props.hover
                            ? <>{props.emoji}&nbsp;&nbsp;{props.title}</>
                            : <>{props.title}</>
                        }
                    </p>
            }
        </>
    )
}

const NavOption = (props) => {
    return (
        <> 
            { props.href === undefined
                ?   <NavLink to={props.to} className ="nav-link" onClick={SmoothScroll}> 
                        <NavOptionInner {...props}/>
                    </NavLink>
                :   <a href={props.href} className ="nav-link"> 
                        <NavOptionInner {...props}/>
                    </a>
            }
        </>
    );
}  

export default NavOption;