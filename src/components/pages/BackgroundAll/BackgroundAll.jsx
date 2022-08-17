import './Backgroundall.css';
import { blackBurgerBar } from '../../../assets';

const BackgroundAll = (props) => {
    return (
        <div className="background__all">
            <div className="nav__suggestion">
                <p>Press &nbsp;&nbsp;<img src={blackBurgerBar} alt="Nav"/>&nbsp;&nbsp;to view other pages</p>
            </div>
            <div className="box__all">
                {props.children}
            </div>
        </div>
    )
}

export default BackgroundAll 