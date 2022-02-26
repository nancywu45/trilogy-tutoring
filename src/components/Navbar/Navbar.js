import React from "react";
import { MenuItems } from "./MenuItems";
import trilogy from "../../images/logo/trilogy-transparent.png";
import menu from "../../../src/images/icons/menu.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img src={trilogy} alt="trilogy logo" className="logo" />
        <div className="menu-icon">
          <img src={menu} alt="hamburger menu" className="menu-icon" />
        </div>
        <h2>Trilogy</h2>
      </div>
      <div>
        {MenuItems.map((item, index) => {
          return (
            <a className={item.cName} href={item.url}>
              {/* maps menu items from MenuItems.js */}
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
