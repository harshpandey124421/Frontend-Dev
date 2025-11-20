// Q7_mouse_path_logger.js
"use strict";

// HTML assumed: <div id="box"></div>
// box is 400x400 square

let box = document.getElementById("box");

box.addEventListener("mousemove", (e) => {
  console.log("X:", e.clientX, "Y:", e.clientY);
});

box.addEventListener("dblclick", (e) => {
  let dot = document.createElement("div");
  dot.style.width = "6px";
  dot.style.height = "6px";
  dot.style.background = "red";
  dot.style.position = "absolute";
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  document.body.appendChild(dot);
});
