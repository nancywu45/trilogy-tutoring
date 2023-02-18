import React, { useState } from "react";
import "../styles/ourteam.css";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";
import singleArrowDown from "../images/icons/single-arrow-down.svg";
import singleArrowUp from "../images/icons/single-arrow-up.svg";

const OurTeam = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  return (
    <div id="ourteam" className="ourteam">
      <div id="navArrowUpTeam" className="navArrow">
        <a href="#services">
          <img src={singleArrowUp} alt="navigation arrow" class="filterWhite" />
        </a>
      </div>

      <div className="sectionContent">
        <h2 className="sectionTitle">🍂 Our Team 🍂</h2>
        <p>
          The journey to success is never one-size-fits-all. This is why here at
          Trilogy Tutoring, we work to suit your own needs, whether that be help
          with schoolwork, exams or even a source of motivational support.
        </p>
        <p>
          Our team comes from a strong academic background, each graduating as
          Proxime Accessit/Summa Cum Laude of Rangitoto College. Over the years,
          we've collated our own set of study notes and material which has
          helped us get where we are today. This is where our personalised
          lesson plans stem from! We now study at the University of Auckland.
          Find out more about our team below!
        </p>
        <div className="profiles">
          <div className="tutor">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f5f5f5" }}
              whileTap={{ scale: 0.9 }}
              className="carolProfile"
              onClick={() => (modalOpen ? close() : open())}
            >
              <img src={require("../images/carol.jpg")} alt="Carol Huang" />
              <h3 className="tutorName">Carol Huang</h3>
              <p className="degree">MBChB</p>
            </motion.button>
          </div>
          <div className="tutor">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f5f5f5" }}
              whileTap={{ scale: 0.9 }}
              className="angelProfile"
              onClick={() => (modalOpen ? close() : open())}
            >
              <img src={require("../images/angel.jpg")} alt="Angel Li" />
              <h3 className="tutorName">Angel Li</h3>
              <p className="degree">MBChB</p>
            </motion.button>
          </div>
          <div className="tutor">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f5f5f5" }}
              whileTap={{ scale: 0.9 }}
              className="nancyProfile"
              onClick={() => (modalOpen ? close() : open())}
            >
              <img src={require("../images/nancy.jpg")} alt="Nancy Wu" />
              <h3 className="tutorName">Nancy Wu</h3>
              <p className="degree">BSc/BCom</p>
            </motion.button>

            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
          </div>
        </div>
      </div>

      <div id="navArrowDownTeam" className="navArrow">
        <a href="#requestatutor">
          <img
            src={singleArrowDown}
            alt="navigation arrow"
            class="filterWhite"
          />
        </a>
      </div>
    </div>
  );
};

export default OurTeam;
