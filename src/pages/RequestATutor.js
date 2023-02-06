import React from "react";
import "../styles/requestatutor.css";

function RequestATutor() {
  return (
    <div id="requestatutor" className="requestatutor">
      <h2 className="section-title">🌳 Request a Tutor 🌳</h2>
      <p>
        We want you/your child to succeed! Our aim is to help alongside school
        rather than to be a substitute. Bring along any questions or if there is
        nothing in particular your child needs help with for that week, we will
        have a lesson plan ready covering content on a similar topic to
        reinforce what your child went through in class that week and set up
        focus areas and study tips.
      </p>
      {/* <div className="button">
        <a href="https://forms.gle/j1QrJvoTKEewEsxH7" target="_blank">
          <button>Sign up now</button>
        </a>
      </div> */}
      <div className="submissionForm">
        <form action="https://formbold.com/s/ozVZq" method="POST">
          <label for="email">
            Email:
            <input type="email" name="email" placeholder="Your email" />
          </label>
          <label for="name">
            Name:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="Your name"
            />
          </label>
          <label for="phoneNumber">
            Phone number:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="Your contact phone number"
            />
          </label>
          <label for="subject" className="subject">
            Subject:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="Please specify subject(s) you would like to be tutored in"
            />
          </label>
          <label for="yearLevel">
            Year level:
            <textarea
              name="message"
              defaultValue={""}
              placeholder="The student's current year level in 2023"
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
          <button type="submit">Sign up now</button>
        </form>
      </div>
    </div>
  );
}

export default RequestATutor;
