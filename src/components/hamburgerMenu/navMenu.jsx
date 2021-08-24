import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import { HashLink } from "react-router-hash-link";

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

export function NavMenu({ isOpen }) {
  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <a href="/">Home</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <HashLink
            to="#about"
            scroll={(el) => el.scrollIntoView({ behavior: "auto", alignTo: "true" })}
          >
            About Me
          </HashLink>
          {/* <a href="/about">About Me</a> */}
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <HashLink
            to="#interests"
            scroll={(el) => el.scrollIntoView({ behavior: "auto", alignTo: "true" })}
          >
            Interests
          </HashLink>
          {/* <a href="/interests">Interests</a> */}
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <HashLink
            to="#skills"
            scroll={(el) => el.scrollIntoView({ behavior: "auto", alignTo: "true" })}
          >
            Skills
          </HashLink>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
        >
          <HashLink
            to="#articles"
            scroll={(el) => el.scrollIntoView({ behavior: "auto", alignTo: "true" })}
          >
            Articles
          </HashLink>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <HashLink
            to="/projects"
            scroll={(el) => el.scrollIntoView({ behavior: "auto", alignTo: "true" })}
          >
            Projects
          </HashLink>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}
