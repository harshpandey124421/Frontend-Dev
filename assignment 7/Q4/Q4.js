// Q4_theme_switcher.js
"use strict";

// HTML: <button id="light">Light</button> <button id="dark">Dark</button> <button id="blue">Blue</button>

let body = document.body;

document.getElementById("light").onclick = () => {
  body.setAttribute("class", "light");
  body.setAttribute("data-theme", "light");
};

document.getElementById("dark").onclick = () => {
  body.setAttribute("class", "dark");
  body.setAttribute("data-theme", "dark");
};

document.getElementById("blue").onclick = () => {
  body.setAttribute("class", "blue");
  body.setAttribute("data-theme", "blue");
};
