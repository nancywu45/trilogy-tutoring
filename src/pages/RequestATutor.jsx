import React from "react";
import "../styles/requestatutor.css";
import singleArrowUp from "../images/icons/single-arrow-up.svg";

function RequestATutor() {

  const formData = [
    {
      type: "email",
      label: "Email",
      placeholder: "Your email",
      required: true
    },
    {
      type: "text",
      label: "Name",
      placeholder: "Your name",
      required: true
    },
    {
      type: "phoneNumber",
      label: "Phone Number",
      placeholder: "Your contact phone number",
      required: true
    },
    {
      type: "subject",
      label: "Subject",
      placeholder: "Please specify subject(s) you would like to be tutored in",
      required: true
    },
    {
      type: "yearLevel",
      label: "Year level",
      placeholder: `The student's current year level in ${new Date().getFullYear()}`,
      required: true
    },
    {
      type: "notes",
      label: "Notes/Extras",
      placeholder: "Anything else you would like us to know or discuss",
      required: false
    },
  ]

  return (
    <div id="requestatutor" className="requestatutor">
      <div id="navArrowUpRequest" className="navArrow">
        <a href="#ourteam">
          <img src={singleArrowUp} alt="navigation arrow" className="filterWhite" />
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
          {formData.map(
            item => 
              <label htmlFor={item.type} key={item.type}>
              {item.label}:
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                required={item.required}
              />
            </label>
          )}
          <div className="button">
            <button type="submit">Sign up!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestATutor;
