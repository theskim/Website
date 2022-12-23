import Scroll from 'react-scroll';
let Link = Scroll.Link;

const NavOption = (props) => {
    return (
        <> 
            { props.href === undefined
                ?   <Link
                        activeClass="active"
                        className="nav-link"
                        to={props.to} 
                        spy={true} 
                        smooth={true}  
                        duration={500}
                    > 
                      <p>{props.title}</p>
                    </Link>
                :   <a href={props.href} className ="nav-link"> 
                      <p>{props.title}</p>
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
        <NavOption href='https://docs.google.com/document/d/10CALRWLR5nVSGOBpfnZh3_F1aLwK4bNRlKlNvgoBtwk/edit?usp=sharing' title="Resume" {...props}/>
      </>
    );
}

export default NavOptions;
  