import React from "react";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import Typist from "react-typist";
import { motion } from "framer-motion";
import Particles from "react-particles-js";
import ParticlesAnimation from "../ParticlesAnimation";
const Index = () => {
  return (
    <div>
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
              <h3 className={styles.greetingsline2}>
                I’m a Software Engineer who loves to build products
              </h3>
            </Typist>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
