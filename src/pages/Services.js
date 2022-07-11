import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <div id="services">
      <div className="services">
        <h2>Our Services</h2>
        <p>
          We offer a first trial session because we believe in finding the right
          fit for your needs. This is a chance for you or your child to let us
          know the areas in which you seek further help - completely free of
          charge! After this lesson, we offer the below rates:
        </p>
        <div className="pricing">
          <div className="onetoten">
            <h3>Years 1-10</h3>
            <p>$35 per lesson</p>
          </div>
          <div className="NCEA">
            <h3>NCEA</h3>
            <p>$40 per lesson</p>
          </div>
          <div className="Scholarship">
            <h3>Scholarship</h3>
            <p>$50 per lesson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
