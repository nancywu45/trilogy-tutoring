import React from "react";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="title">
        <h1>Trilogy Tutoring</h1>
        <em>Your friendly neighbourhood tutors</em>
        <div>
          <button type="button">
            <span></span>Book a free 30 minute session
          </button>
        </div>
      </div>
      <div className="about">
        <h2>About</h2>
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
          成功的道路永远不止一条。三好补课中心坚信与将每位学生作为中心，量身定做适合每位学生个人需求的课程。成为别人口中“人家家的孩子”！三好中心的补课老师们都有着丰富的学习经验。我们毕业与Rangitoto
          College Top 2%，共同获得 NZQA Outstanding Scholars, University of
          Auckland Top Achievers, UNSW, University of Sydney, Victoria
          University, Otago University，Massey
          University，总共价值NZD$230,000的奖学金。我们现在就读于University of
          Auckland，商／(computer science??) 与医学。
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
      </div>
      <div className="services">
        <h2>Our Services & Pricing</h2>
        <p>First trial session - free!</p>
        <table>
          <tr>
            <th>Years 1-10</th>
            <th>NCEA</th>
            <th>Scholarship</th>
          </tr>
          <tr>
            <td>$35 per lesson</td>
            <td>$40 per lesson</td>
            <td>$50 per lesson</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
