import React from "react";
import trilogy from "../images/logo/trilogy-transparent.png";
import doubleArrowDown from "../images/icons/double-arrow-down.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img src={trilogy} alt="trilogy logo" className="logo" />
        <a href="#home">
          <h2>Trilogy</h2>
        </a>
      </div>
      <ul>
        <div className="mobile">
          <li>
            <a href="#services">🌱</a>
          </li>
          <li>
            <a href="#ourteam">🍂</a>
          </li>
          <li>
            <a href="#requestatutor">🌳</a>
          </li>
          {/* <li>
            <img src={doubleArrowDown} alt="double down arrow" />
          </li> */}
        </div>
        <div className="desktop">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#ourteam">Our Team</a>
          </li>
          <li>
            <a href="#requestatutor">Request a Tutor</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
