import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ListItems } from "./ListItems";

class Navbar extends Component {
  state = 
  { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className = "upper-stripe">
        </nav>
        <nav className="NavbarItems">
          <div className="inner">
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {ListItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <nav className = "lower-stripe">
        </nav>
      </>
    );
  }
}

export default Navbar;