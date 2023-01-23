import Scroll from 'react-scroll';
let Link = Scroll.Link;

const NavOption = ({to, title, href}) => {
    return (
        <> 
            { href === undefined
                ?   <Link
                        activeClass="active"
                        className="nav-link"
                        to={to} 
                        spy={true} 
                        smooth={true}  
                        duration={500}
                    > 
                      <p>{title}</p>
                    </Link>
                :   <a href={href} className ="nav-link"> 
                      <p>{title}</p>
                    </a>
            }
        </>
    );
}  

const NavOptions = (props) => {
    return (
      <>
        <NavOption to='home' title="Home" {...props}/>
        <NavOption to='skills' title="Skills"{...props}/>
        <NavOption to='experiences' title="Experiences"{...props}/>
        <NavOption to='projects' title="Projects"{...props}/>
        <NavOption to='contact' title="Contact"{...props}/>
        <NavOption href='https://docs.google.com/document/d/10CALRWLR5nVSGOBpfnZh3_F1aLwK4bNRlKlNvgoBtwk/export?format=pdf' title="Resume" {...props}/>
      </>
    );
}

export default NavOptions;
  