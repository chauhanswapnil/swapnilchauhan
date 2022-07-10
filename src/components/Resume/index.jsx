import React from "react";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import Fade from "react-reveal/Fade";
import { Button } from "bootstrap";

const Index = () => {
  return (
    <div className={styles.aboutBackground} id="about">
      <Container>
        <h5 className={styles.footerText}>&copy; Designed by Swapnil Chauhan</h5>
      </Container>
    </div>
  );
};

export default Index;
