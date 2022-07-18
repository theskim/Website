import { fallDown as Menu } from 'react-burger-menu';
import './Sidebar.css';

const Sidebar = () => {
    return (
      <Menu>
        <a className="menu-item" href="/" onClick={() => window.scrollTo(0, 0)}>
            &#127968;&nbsp;&nbsp;Home
        </a>
        <a className="menu-item" href="/skills" onClick={() => window.scrollTo(0, 0)}>
            &#128104;&#8205;&#128187;&nbsp;&nbsp;Skills
        </a>
        <a className="menu-item" href="/experiences" onClick={() => window.scrollTo(0, 0)}>
            &#128188;&nbsp;&nbsp;Experiences
        </a>
        <a className="menu-item" href="/projects" onClick={() => window.scrollTo(0, 0)}>
            &#128221;&nbsp;&nbsp;Projects
        </a>
        <a className="menu-item" href="/achievements" onClick={() => window.scrollTo(0, 0)}>
            &#127942;&nbsp;&nbsp;Achievements
        </a>
      </Menu>
    );
};


export default Sidebar;