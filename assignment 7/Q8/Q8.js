// Q8_custom_dropdown.js
"use strict";

// HTML assumed:
// <div id="drop"><button id="btn">Select</button><div id="opts">options...</div></div>

let btn = document.getElementById("btn");
let opts = document.getElementById("opts");

btn.onclick = (e) => {
  opts.style.display = opts.style.display === "block" ? "none" : "block";
  e.stopPropagation();
};

opts.onclick = (e) => {
  btn.textContent = e.target.textContent;
  opts.style.display = "none";
  e.stopPropagation();
};

document.addEventListener("click", () => {
  opts.style.display = "none";
}, true); // capturing phase
