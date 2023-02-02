import React from "react";
import trilogy from "../images/logo/trilogy-transparent.png";
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
            <img src="../images/icons/menu.svg" alt="menu icon" />
          </li>
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
