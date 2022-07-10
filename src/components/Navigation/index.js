import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./index.module.css";
// import { motion, useCycle } from "framer-motion";

import { HamburgerMenu } from "../hamburgerMenu";

const Index = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Swapnil Logo" />
      {/* <div className={styles.hamburgerMenu}>
        <HamburgerMenu />
      </div> */}
    </nav>
  );
};

export default Index;
