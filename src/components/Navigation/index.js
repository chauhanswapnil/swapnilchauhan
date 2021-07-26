import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./index.module.css";
import { motion, useCycle } from "framer-motion";

const Index = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Swapnil Logo" />

      <div className={styles.menuContainer}>
        {/* <Menu right>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu> */}

        {/* <motion.div
          className={styles.menu}
          initial={{ y: "-100%" }}
          animate={{ y: "0px" }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className={styles.link}>
            Hi
          </Link>
          <Link to="/" className={styles.link}>
            About Me
          </Link>
          <Link to="/" className={styles.link}>
            Interests
          </Link>
          <Link to="/" className={styles.link}>
            Skills
          </Link>
          <Link to="/" className={styles.link}>
            Projects
          </Link>
          <Link to="/" className={styles.link}>
            Articles
          </Link>
          <Link to="/" className={styles.link}>
            Contact
          </Link>        
        </motion.div> */}
      </div>
    </nav>
  );
};

export default Index;
