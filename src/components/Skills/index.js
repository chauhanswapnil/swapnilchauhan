import React from "react";
import styles from "./index.module.css";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import skills from "./skills";

const Index = () => {
  let skillType = ["Languages", "Machine Learning", "Frontend/Backend", "Database", "Cloud"];

  const SkillsRender = skillType.map((skill, idx) => {
    return (
      <div className={styles.skillContainer}>
        <Fade left>
          <h2 className={styles.skillCategory}>{skill}</h2>
        </Fade>
        <div className={styles.multipleSkillsContainer}>
          {skills[idx].map((skillObj, idx) => {
            return (
              <Fade right>
                <div className={styles.individualSkillContainer}>
                  <img
                    src={`${process.env.PUBLIC_URL}/skills/${skillObj["image"]}.png`}
                    alt={`${skills[idx]} icon`}
                    className={styles.skillImage}
                  />
                  <p className={styles.skillTitle}>{skillObj["name"]}</p>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.techBackground}>
      <Container>
        <div className={styles.techContainer}>
          <Fade bottom>
            <h1 className={styles.heading}>Skills</h1>
          </Fade>
          {SkillsRender}
        </div>
      </Container>
    </div>
  );
};

export default Index;
