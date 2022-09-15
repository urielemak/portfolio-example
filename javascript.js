particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#1f3c25" },
    shape: {
      type: "circle",
      stroke: { widt: 0, color: "#ffffff" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 10, height: 10 },
    },
    opacity: {
      value: 0.56835826639087975,
      random: false,
      anim: {
        enable: false,
        speed: 5.197294158728614,
        opacity_min: 0.7958356680553189,
        sync: true,
      },
    },
    size: {
      value: 20.04265076081902,
      random: true,
      anim: { enable: true, speed: 10, size_min: 0.5, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 108.20472365193127,
      color: "#86ff36",
      opacity: 0.1931771609986048,
      width: 0.8017060304327607,
    },
    move: {
      enable: true,
      speed: 2.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 2324.9474882550057,
        rotateY: 2645.6299004281104,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 450, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 1, opacity: 8, speed: 2 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
