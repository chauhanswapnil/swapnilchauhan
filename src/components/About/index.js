import React from "react";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import Fade from "react-reveal/Fade";

const Index = () => {
  return (
    <div className={styles.aboutBackground}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet velit non dui v
              uvybun uybinjklm uybknj ubkjn venenatis suscipit. Nam eget venenatis dui. Curabitur
              vitae porttitor felis, nec tincidunt vhbjknubikn bilan vuybknjlbin b urna. Maecenas
              sit amet eros ligula. Aenean hendrerit egestas molestie. Morbi commodo gvbhkjnkm uvbn
              wf sagittis mi. Duis tincidunt magna velit, ac gravida diam fermentum non. Vestibulum
              fcvghbjnm vubhkjnmk fv dignissim pellentesque sem, non ultricies est elementum eu.
              Donec elementum felis quis ygvhjbnj gyuihoivey 7uihjv dg fermentum gravida.
              Suspendisse eget mollis enim, eu pulvinar quam. Vestibulum a ex vel tcyugihij
              yugihujiko nqd odio luctus fermentum.cc uyhi uoii uihlij ighlqjikfpv uybqr.
            </p>
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default Index;
