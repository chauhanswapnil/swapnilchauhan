import React from "react";
import Particles from "react-particles-js";

const ParticlesAnimation = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 37,
          },
          size: {
            value: 1,
          },
        },
        // "interactivity": {
        //     "events": {
        //         "onhover": {
        //             "enable": true,
        //             "mode": "repulse"
        //         }
        //     }
        // },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#5461C3",
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
          value: 0.2,
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
          color: "#5461C3",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
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
      className="particles-animation-config"
    />
  );
};

export default ParticlesAnimation;
