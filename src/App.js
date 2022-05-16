import React from "react";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import RequestATutor from "./components/RequestATutor";
import Header from "./components/navbar/Header";
// import Footer from "./components/navbar/Footer";

function App() {
  return (
    <div className="container">
      <Header />
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
      <OurTeam />
      <Services />
      <RequestATutor />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
