import React from "react";
import "../styles/home.css";
// import { Div, Container } from "atomize";

const Home = () => {
  return (
    <div id="home" className="home">
      <h1 className="title">Trilogy Tutoring</h1>
      <p>
        <em className="slogan">Your friendly neighbourhood tutors</em>
      </p>

      <div className="button">
        <a href="https://forms.gle/j1QrJvoTKEewEsxH7" target="_blank">
          <button>Book a free 30 minute session</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
