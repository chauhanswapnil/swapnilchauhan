import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";
import iconCloud from "../../images/icon-cloud.png";
import iconAi from "../../images/icon-ai.png";
import iconSe from "../../images/icon-se.png";
import iconAppStore from "../../images/icon-app-store.png";
import iconData from "../../images/icon-data.png";
import iconStack from "../../images/icon-stack.png";
import Fade from "react-reveal/Fade";

const Index = () => {
  return (
    <Container id="articles">
      <div className={styles.interestContainer}>
        <Fade bottom>
          <h1 className={styles.heading}>Articles</h1>
        </Fade>
        <Fade bottom>
          <h4 className={styles.subHeading}>I like to write</h4>
        </Fade>

        <div className={styles.interestSubContainer}>
          <Row>
            <Col md={4}>
              <Fade bottom>
                <img src={iconCloud} alt="Cloud Services" className={styles.interestImage} />
                <h5 className={styles.interestName}>Cloud Services</h5>
                <p className={styles.interestDesc}>
                  I can manage and deploy applications to various cloud services like AWS, Google
                  Cloud, etc.
                </p>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <img src={iconAi} alt="Artificial Intelligence" className={styles.interestImage} />
                <h5 className={styles.interestName}>Artificial Intelligence</h5>
                <p className={styles.interestDesc}>
                  I love implementing AI models on a variety of real world problems to try and find
                  solutions.
                </p>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <img src={iconSe} alt="Software Engineering" className={styles.interestImage} />
                <h5 className={styles.interestName}>Software Engineering</h5>
                <p className={styles.interestDesc}>
                  Software development is more then just coding. Using best practices to make
                  scalable real world applications.
                </p>
              </Fade>
            </Col>
          </Row>

          <div className={styles.interestSecondRow}>
            <Row>
              <Col md={4}>
                <Fade bottom>
                  <img
                    src={iconAppStore}
                    alt="iOS App Development"
                    className={styles.interestImage}
                  />
                  <h5 className={styles.interestName}>iOS App Development</h5>
                  <p className={styles.interestDesc}>
                    I have come a long way from making my first ‘Hello World’ app using XCode and
                    Swift.
                  </p>
                </Fade>
              </Col>
              <Col md={4}>
                <Fade bottom>
                  <img src={iconData} alt="Data Analytics" className={styles.interestImage} />
                  <h5 className={styles.interestName}>Data Analytics</h5>
                  <p className={styles.interestDesc}>
                    Taking raw data and finding meaning from it and visualising it is like telling a
                    story.
                  </p>
                </Fade>
              </Col>
              <Col md={4}>
                <Fade bottom>
                  <img
                    src={iconStack}
                    alt="Full Stack Development"
                    className={styles.interestImage}
                  />
                  <h5 className={styles.interestName}>Full Stack Development</h5>
                  <p className={styles.interestDesc}>
                    Knowing full stack is important when you love building the complete user
                    experience for your product.
                  </p>
                </Fade>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
