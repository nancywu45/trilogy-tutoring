import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="tab-0 logo">
        <h2>Trilogy</h2>
      </div>
      <div className="tab-1">
        <h3>About</h3>
      </div>
      <div className="tab-2">
        <h3>Contact Us</h3>
      </div>
    </div>
  );
};

export default Navbar;
