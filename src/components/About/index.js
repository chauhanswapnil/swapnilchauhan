import React from "react";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import Fade from "react-reveal/Fade";

const Index = () => {
  return (
    <div className={styles.aboutBackground} id="about">
      <Container>
        <div className={styles.box}>
          <div className={`${styles.wave} ${styles.one}`}> </div>
          <div className={`${styles.wave} ${styles.two}`}></div>
        </div>
        <div className={styles.aboutContainer}>
          <Fade bottom>
            <h1>Get to know me</h1>
          </Fade>
          <Fade bottom>
            <p className={styles.aboutContent}>
              I am currently doing my Masters in Computer Science from Queen Mary University of London. I have done my Bachelors of
              Technology in IT from NMIMS University in Mumbai. I have been programming in a variety of languages since I was in 6th grade.
              My passion for programming and the motivation is fueled by the prospects of making things which would be used by people around
              the world. <br />
              <br />I am currently working as a Data Science Project Intern at Teragence Ltd, London. I am working to improve their existing
              naïve signal estimator algorithms to smart AI/ML based estimation workflow. I am using technologies like QGIS, Python (Data
              Analysis libraries like Numpy, Pandas, PyTorch, etc), Docker, Kubernetes, ReactJS. <br /> <br />I have previously worked in a
              startup as a Software Enginner where I used technologies like Swift, Python, NodeJS, ReactJS, Amazon Web Services, SQL,
              Firebase and Linux. Some of the projects I worked on are aarjaychairs.com, Before Visit app, Momma's Kitchen app.
              <br />
              <br />
              Aside from professional work I am also motivated to work on my own personal projects. Some of the projects include a few iOS
              Apps that I have published, contributions to StackOverFlow and other open source projects, current website and a Raspberry PI
              home NAS server that I have deployed. I am currently participating in a variety of online coding competitions like Google
              Kickstart, Google CodeJam, CodeChef, Hackerrank and Leetcode to improve my coding and problem solving skills.
            </p>
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default Index;
