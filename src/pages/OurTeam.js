import React from "react";
import "../styles/ourteam.css";

const OurTeam = () => {
  return (
    <div id="ourteam" className="ourteam">
      <h2 className="section-title">🍂 Our Team 🍂</h2>
      <p>
        The journey to success is never one-size-fits-all, we each require
        different needs. This is why Trilogy Tutoring pushes for personally
        tailored support where we provide both academic support and guidance.
        Here at Trilogy Tutoring, we work to suit your own needs, whether that
        be help with schoolwork, exams or even a source of motivational support.
        We also provide structured lesson plans drawn out from our own
        experience to help you achieve your potential.
      </p>
      <p>
        Our team comes from a strong academic background, each graduating as
        Proxime Accessit/Summa Cum Laude of Rangitoto College. We are proud to
        have achieved a combined value of NZD$230,000 across prestigious
        scholarships including NZQA Outstanding Scholars and University of
        Auckland Top Achievers. We now study at the University of Auckland. Find
        out more about our team below!
      </p>
      <div className="profiles">
        <div className="tutor">
          <img src={require("../images/carol.jpg")} alt="Carol Huang" />
          <h3 className="tutorName">Carol Huang</h3>
          <p className="degree">MBChB</p>
        </div>
        <div className="tutor">
          <img src={require("../images/angel.jpg")} alt="Angel Li" />
          <h3 className="tutorName">Angel Li</h3>
          <p className="degree">MBChB</p>
        </div>
        <div className="tutor">
          <img src={require("../images/nancy.jpg")} alt="Nancy Wu" />
          <h3 className="tutorName">Nancy Wu</h3>
          <p className="degree">
            BSc/BCom (Computer Science, Finance, Business Analytics)
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
