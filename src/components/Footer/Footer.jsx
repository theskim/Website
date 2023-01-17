import './Footer.scss';
import { useDispatch } from "react-redux";
import { setSideBar } from "../..";

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <div className='footer' onClick={(e) => {e.stopPropagation(); dispatch(setSideBar(false));}}>
            <footer>
                <p>&copy; Sean Kim 2023. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;