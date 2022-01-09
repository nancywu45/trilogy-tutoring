import React from "react";
import auckland from "../images/auckland.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <h1 className="title">Trilogy Tutoring</h1>
      <img src={auckland} alt="Auckland" />
    </div>
  );
};

export default Home;
