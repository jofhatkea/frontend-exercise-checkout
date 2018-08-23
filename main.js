(function() {
  function makeCircles() {
    let i = 0;
    let app = document.querySelector("#app");
    app.innerHTML = "";
    let area = window.innerWidth * window.innerHeight;

    for (; i < area / 2000; i++) {
      let c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("r", Math.random() * 20 + 30);
      c.setAttribute("cx", Math.random() * window.innerWidth);
      c.setAttribute("cy", Math.random() * window.innerHeight);
      app.appendChild(c);
    }
  }
  window.addEventListener("DOMContentLoaded", makeCircles);
})();
