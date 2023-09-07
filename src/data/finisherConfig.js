new FinisherHeader({
  count: 80,
  size: {
    min: 5,
    max: 20,
    pulse: 0,
  },
  speed: {
    x: {
      min: 0,
      max: 0.6,
    },
    y: {
      min: 0,
      max: 0.3,
    },
  },
  colors: {
    background: "#ffffff",
    particles: ["#ffffff", "#87ddfe", "#acaaff", "#1bffc2", "#f88aff"],
  },
  blending: "screen",
  opacity: {
    center: 0.5,
    edge: 0.4,
  },
  skew: 0,
  shapes: ["c", "s", "t"],
});
