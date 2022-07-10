import React from "react";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import Typist from "react-typist";
import { motion } from "framer-motion";
import ParticlesAnimation from "../ParticlesAnimation";
import { Button } from "bootstrap";

import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

const Index = () => {
  return (
    <div>
      <ParticlesAnimation className={styles.particles} />
      <Container>
        <div className={styles.sectionContainer}>
          <div className={styles.greetingsContainer}>
            <Typist cursor={{ show: false }} avgTypingDelay={20}>
              <h1 className={styles.greetings}>Hi</h1>
              <h1 className={styles.greetings}>
                it's{" "}
                <motion.span
                  initial={{ opacity: "0%" }}
                  animate={{ opacity: "100%" }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                  className={styles.name}
                >
                  Swapnil
                </motion.span>
              </h1>
              <h3 className={styles.greetingsline2}>I’m a Software Engineer who loves to build products</h3>
            </Typist>
            <div>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/swapnil-chauhan.appspot.com/o/New-Resume.pdf?alt=media&token=848b2d7e-2fc3-46e0-9ef8-81f80a46abd3"
                download="swapnil-resume"
                target="_blank"
                className={styles.downloadButton}
              >
                Download Resume!
              </a>
              <a href="https://github.com/chauhanswapnil" style={{ all: "unset" }} target="_blank">
                <img src={github} alt="Github Link" className={styles.githubLogo} />{" "}
              </a>
              <a href="https://www.linkedin.com/in/chauhanswapnil" style={{ all: "unset" }} target="_blank">
                <img src={linkedin} alt="LinkedIn Link" className={styles.linkedinLogo} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
