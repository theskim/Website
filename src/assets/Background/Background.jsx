import { useDispatch } from 'react-redux';
import { blackBurgerBar } from '../GeneralLogos';
import './Background.scss';

const BackgroundAll = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="background__all" onClick={() => dispatch({type: "UNSHOW"})}>
            <div className="nav__suggestion">
                <p>Press &nbsp;&nbsp;<img src={blackBurgerBar} alt="Nav"/>&nbsp;&nbsp;to view other pages</p>
            </div>
            <div className="box__all">
                {props.children}
            </div>
        </div>
    )
}

export default BackgroundAll; 