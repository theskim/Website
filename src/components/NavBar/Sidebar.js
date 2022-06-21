import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

function Sidebar() {
    return (
      <Menu>
        <a className="menu-item" href="/">
            &#127968;&nbsp;&nbsp;Home
        </a>
        <a className="menu-item" href="/skills">
            &#128104;&#8205;&#128187;&nbsp;&nbsp;Skills
        </a>
        <a className="menu-item" href="/experiences">
            &#128188;&nbsp;&nbsp;Experiences
        </a>
        <a className="menu-item" href="/projects">
            &#128221;&nbsp;&nbsp;Projects
        </a>
        <a className="menu-item" href="/achievements">
            &#127942;&nbsp;&nbsp;Achievements
        </a>
      </Menu>
    );
};


export default Sidebar;