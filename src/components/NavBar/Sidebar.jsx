import { fallDown as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { SmoothScroll } from './SmoothScroll';

const Sidebar = () => {
    return (
      <Menu>
        <a className="menu-item" href="/" onClick={SmoothScroll}>
            &#127968;&nbsp;&nbsp;Home
            <div className='right-arrow'>▶</div>
        </a>
        <a className="menu-item" href="/skills" onClick={SmoothScroll}>
            &#128104;&#8205;&#128187;&nbsp;&nbsp;Skills 
            <div className='right-arrow'>▶</div>
        </a>
        <a className="menu-item" href="/experiences" onClick={SmoothScroll}>
            &#128188;&nbsp;&nbsp;Experiences 
            <div className='right-arrow'>▶</div>
        </a>
        <a className="menu-item" href="/projects" onClick={SmoothScroll}>
            &#128221;&nbsp;&nbsp;Projects 
            <div className='right-arrow'>▶</div>
        </a>
        <a className="menu-item" href="/achievements" onClick={SmoothScroll}>
            &#127942;&nbsp;&nbsp;Achievements 
            <div className='right-arrow'>▶</div>
        </a>
      </Menu>
    );
};


export default Sidebar;