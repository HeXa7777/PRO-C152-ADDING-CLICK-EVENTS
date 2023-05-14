AFRAME.registerComponent("base", {
  schema: {
    radius: { type: "number", default: 10000000000 },
    height: { type: "number", default: 2 }
  },

  init: function() {
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      radius: this.data.radius,
      height: this.data.height
    });
    this.el.setAttribute("material", { color: "green" });
  }
});
