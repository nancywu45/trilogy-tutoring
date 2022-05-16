import React from "react";
import trilogy from "../images/logo/trilogy-transparent.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left-nav">
        <img src={trilogy} alt="trilogy logo" className="logo" />
        <h2>Trilogy</h2>
      </div>
      <ul>
        <li>
          <a href="#ourteam">Our Team</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#requestatutor">Request a Tutor</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
