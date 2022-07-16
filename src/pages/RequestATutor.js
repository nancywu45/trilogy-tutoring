import React from "react";
import "../styles/requestatutor.css";

function RequestATutor() {
  return (
    <div id="requestatutor" className="requestatutor">
      <h2>Request a Tutor</h2>
      <p>
        We want you/your child to succeed! Our aim is to help alongside school
        rather than to be a substitute. Bring along any questions or if there is
        nothing in particular your child needs help with for that week, we will
        have a lesson plan ready covering content on a similar topic to
        reinforce what your child went through in class that week and set up
        focus areas and study tips.
      </p>
      <div className="button">
        <a href="https://forms.gle/j1QrJvoTKEewEsxH7" target="_blank">
          <button>Sign up now</button>
        </a>
      </div>
    </div>
  );
}

export default RequestATutor;
