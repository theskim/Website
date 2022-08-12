import './Backgroundall.css';
import { blackBurgerBar } from '../../../assets';

const BackgroundAll = (props) => {
    return (
        <div className="background__all">
            <div className="nav__suggestion">
                <h4>Press &nbsp;&nbsp;<img src={blackBurgerBar} alt="Nav"/>&nbsp;&nbsp;to view other pages</h4>
            </div>
            <div className="box__all">
                {props.children}
            </div>
        </div>
    )
}

export default BackgroundAll 