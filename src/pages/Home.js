import React from "react";

const Home = () => {
  return (
    <div className="title">
      <h1>Trilogy Tutoring</h1>
      <em>Your friendly neighbourhood tutors</em>
      <div>
        <button
          type="button"
          onClick="location.href='https://docs.google.com/forms/d/e/1FAIpQLSd6oICZ76xnyu_UaBs6GSPN8Y7OueH5y0rmaNb8TEMZsPJWeQ/viewform'"
          target="_blank"
        >
          Book a free 30 minute session
        </button>
      </div>
    </div>
  );
};

export default Home;
