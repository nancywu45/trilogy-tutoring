import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <div id="services">
      <div className="services">
        <h2>Our Services</h2>
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

export default Services;
