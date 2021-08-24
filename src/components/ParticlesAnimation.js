import React from "react";
import Particles from "react-particles-js";

const ParticlesAnimation = () => {
  return (
    <Particles
      params={{
        // fps_limit: 60,
        particles: {
          color: { value: "#5461c3" },
          links: { color: "#5461c3", distance: 150, enable: true, opacity: 1, width: 1 },
          number: {
            value: 45,
          },
          size: {
            value: 1,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 1,
            color: "#5461c3",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#5461c3",
          opacity: 1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      }}
      style={{ position: "absolute" }}
    />
  );
};

export default ParticlesAnimation;
