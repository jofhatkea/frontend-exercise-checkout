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

    let circles = document.querySelectorAll("circle");
    console.log(circles);
    circles.forEach(c => {
      c.addEventListener("mouseenter", e => {
        //app.appendChild(e.target);
        e.target.style.fill = `hsl(${Math.random() * 360},${70}%,${70}%)`;

        let cx = parseInt(e.target.getAttribute("cx"));
        let cy = parseInt(e.target.getAttribute("cy"));
        let newX = Math.random() * window.innerWidth - cx;
        let newY = Math.random() * window.innerHeight - cy;
      });
    });
  }
  window.addEventListener("DOMContentLoaded", makeCircles);
  window.addEventListener("resize", makeCircles);
})();
