import React from "react";
import "../styles/services.css";
import singleArrowDown from "../images/icons/single-arrow-down.svg";
import singleArrowUp from "../images/icons/single-arrow-up.svg";

const Services = () => {

  const pricingData = [
    {
      level: "Years 1-10",
      price: "$35 per lesson"
    },
    {
      level: "NCEA",
      price: "$40 per lesson"
    },
    {
      level: "Scholarship",
      price: "$50 per lessonn"
    }
  ]

  return (
    <div id="services" className="services">
      <div id="navArrowUpServices" className="navArrow">
        <a href="#home">
          <img src={singleArrowUp} alt="navigation arrow" className="filterWhite" />
        </a>
      </div>

      <h2 className="sectionTitle">🌱 Our Services 🌱</h2>
      <p>
        We offer a first trial lesson because we believe in finding the right
        fit for your needs. This is a chance for you or your child to let us
        know the areas in which you seek further help - completely free of
        charge! After this lesson, we offer the below rates:
      </p>
      <div className="pricing">
        {pricingData.map(
          tier => 
            <div className="yearlevel" key={tier.level}>
              <h3>{tier.level}</h3>
              <p>{tier.price}</p>
            </div>
        )}
      </div>

      <div id="navArrowDownServices" className="navArrow">
        <a href="#ourteam">
          <img
            src={singleArrowDown}
            alt="navigation arrow"
            className="filterWhite"
          />
        </a>
      </div>
    </div>
  );
};

export default Services;
