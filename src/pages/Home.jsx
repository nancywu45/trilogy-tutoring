import React from "react";
import "../styles/home.css";
import singleArrowDown from "../images/icons/single-arrow-down.svg";
import instagramLogo from "../images/icons/instagram-logo.svg";

const Home = () => {
  return (
    <div id="home" className="home">
      <h1 className="title">Trilogy Tutoring</h1>
      <p>
        <em className="slogan">Your friendly neighbourhood tutors</em>
      </p>
      <p className="instagramHandle">
        <a href="https://www.instagram.com/trilogytutoring/" target="__blank">
          <img
            src={instagramLogo}
            alt="instagram logo"
            className="filterbgsecondary"
          />
          @trilogytutoring
        </a>
      </p>

      <div className="button">
        <a href="#requestatutor">
          <button>Book a free 30 minute session</button>
        </a>
      </div>

      <div id="navArrowDownHome" className="navArrow">
        <a href="#services">
          <img
            src={singleArrowDown}
            alt="navigation arrow"
            className="filterWhite"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
