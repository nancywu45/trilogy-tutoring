import React, { useState } from "react";
import "../styles/ourteam.css";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
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

  const teamData = [
    {
      id: 1,
      firstName: "Carol",
      lastName: "Huang",
      degree: "MBChB",
      p1: "Kia Ora! I’m Carol Huang, a 2nd year medical student at the University of Auckland. I graduated as the Proxime Accessit of Rangitoto College in 2020 and studied BSc (biomedical sciences) in 2021 on the UoA Top Achievers and NZQA Outstanding Scholars scholarships.",
      p2: "When I’m not aimlessly scrolling through TikTok, I like to crochet or catch up on the latest episodes of Chicago Med (Dr Rhodes ♡). I’m also known for my inexplicable obsession over flowers, fairies, butterflies and anything #cottagecore."
    },
    {
      id: 2,
      firstName: "Angel",
      lastName: "Li",
      degree: "MBChB",
      p1: "Hello! I’m Angel Li; after graduating as Summa Cum Laude of Rangitoto College in 2020, I studied BSc (biomedical sciences) in 2021 on the UoA Top Achievers and NZQA Outstanding Scholars scholarships.",
      p2: "I’ve been enjoying studying medicine and learning about different specialisations within the field! During my free time, you can usually find me doing one of three things: binge watching the latest anime, playing the piano, or being carried on League of Legends."
    },
    {
      id: 3,
      firstName: "Nancy",
      lastName: "Wu",
      degree: "BSc/BCom",
      p1: "Howdy! I’m Nancy, a Computer Science, Business Analytics and Finance student at The University of Auckland. I graduated from Rangitoto College in 2020 and have a passion for learning which I love to share with others!",
      p2: "My appetite favours the creative side but I also enjoy the satisfaction of having a challenging problem to solve. Having recently moved out of home, I’ve been busy trying out different recipes whilst listening to my favourite podcasts. When I’m not cooking up my next meal, you’ll most likely catch me at the gym; another favourite spot aside from the kitchen! Something I'd love to do more of is travel and explore the world outside of my hometown, New Zealand."
    }
  ]

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
          {teamData.map(
            person => 
              <div className="tutor">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#f5f5f5" }}
                  whileTap={{ scale: 0.9 }}
                  className="teamProfile"
                  onClick={() => (modalOpen ? close() : open())}
                >
                  <img src={require(`../images/${person.firstName}.jpg`)} alt={`${person.firstName} ${person.lastName}`} />
                  <h3 className="tutorName">{person.firstName} {person.lastName}</h3>
                  <p className="degree">{person.degree}</p>

                  {modalOpen && (
                      <Modal modalOpen={modalOpen} handleClose={close} />
                    ) && (
                      <motion.div className="tutorDescription">
                        <p>{person.p1}</p>
                        <p>{person.p2}</p>
                      </motion.div>
                    )}
                </motion.button>
              </div>
          )}
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
