import React from "react";
import trilogy from "../../../src/images/logo/trilogy-transparent.png";
import menu from "../../../src/images/icons/menu.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img src={trilogy} alt="trilogy logo" className="logo" />
        <h2>Trilogy</h2>
      </div>
      <ul>
        <li>
          <a href="../Home.js">Home</a>
        </li>
        <li>
          <a href="../Contact.js">Contact</a>
        </li>
      </ul>
      <div className="menu-icon">
        <img src={menu} alt="hamburger menu" className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
