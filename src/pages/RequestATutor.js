import React from "react";
import "../styles/requestatutor.css";
import singleArrowUp from "../images/icons/single-arrow-up.svg";

function RequestATutor() {
  return (
    <div id="requestatutor" className="requestatutor">
      <div id="navArrowUpRequest" className="navArrow">
        <a href="#ourteam">
          <img src={singleArrowUp} alt="navigation arrow" class="filterWhite" />
        </a>
      </div>

      <h2 className="sectionTitle">🌳 Request a Tutor 🌳</h2>
      <p>Here at Trilogy, we advocate for each and every student's success.</p>
      <p>
        Request to set up a free 30 minute trial session below! This will enable
        us to understand your needs and how best to cater to them.
      </p>
      <div className="submissionForm">
        <form action="https://formbold.com/s/ozVZq" method="POST">
          <label for="email">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </label>
          <label for="name">
            Name:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="Your name"
              required
            />
          </label>
          <label for="phoneNumber">
            Phone number:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="Your contact phone number"
              required
            />
          </label>
          <label for="subject" className="subject">
            Subject:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="Please specify subject(s) you would like to be tutored in"
              required
            />
          </label>
          <label for="yearLevel">
            Year level:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="The student's current year level in 2023"
              required
            />
          </label>
          <label for="notes" className="notes">
            Notes/Extras:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="Anything else you would like us to know or discuss"
            />
          </label>
          <div className="button">
            <button type="submit">Sign up!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestATutor;
