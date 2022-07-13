import React from "react";
import "../styles/ourteam.css";

const OurTeam = () => {
  return (
    <div id="ourteam">
      <div className="ourteam">
        <h2>Our Team</h2>
        <p>
          The journey to success is never one-size-fits-all, we each require
          different needs. This is why Trilogy Tutoring pushes for personally
          tailored support where we provide both academic support and guidance.
          Here at Trilogy Tutoring, we work to suit your own needs, whether that
          be help with schoolwork, exams or even a source of motivational
          support. We also provide structured lesson plans drawn out from our
          own experience to help you achieve your potential.
        </p>
        <p>
          Our team comes from a strong academic background, each graduating as
          Proxime Accessit/Summa Cum Laude of Rangitoto College. We are proud to
          have achieved a combined value of NZD$230,000 across prestigious
          scholarships including: NZQA Outstanding Scholars, University of
          Auckland Top Achievers, UNSW, University of Sydney, Victoria
          University, Otago University and Massey University. We now study
          Finance／Computer Science and Medicine at the University of Auckland,
          maintaining grades of straight A’s across our courses.
        </p>
        <div className="profiles">
          <div className="tutor">
            <img src="\images\carol.jpg" alt="Carol Huang" />
            <h3>Carol Huang</h3>
            <p>MBChB Student at The University of Auckland</p>
          </div>
          <div className="tutor">
            <img src="\images\angel.jpg" alt="Angel Li" />
            <h3>Angel Li</h3>
            <p>MBChB Student at The University of Auckland</p>
          </div>
          <div className="tutor">
            <img src="\images\nancy.jpg" alt="Nancy Wu" />
            <h3>Nancy Wu</h3>
            <p>
              BSc/BCom Student at the University of Auckland, majoring in
              Computer Science, Finance, Business Analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
