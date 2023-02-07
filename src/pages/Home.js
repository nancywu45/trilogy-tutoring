import React from "react";
import "../styles/home.css";
import singleArrowDown from "../images/icons/single-arrow-down.svg";

const Home = () => {
  return (
    <div id="home" className="home">
      <h1 className="title">Trilogy Tutoring</h1>
      <p>
        <em className="slogan">Your friendly neighbourhood tutors</em>
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
            class="filterWhite"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
