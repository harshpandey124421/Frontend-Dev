// Q2_live_character_counter.js
"use strict";

// needs HTML: <textarea id="t"></textarea> <span id="count"></span> <button id="reset">Reset</button>

let t = document.getElementById("t");
let c = document.getElementById("count");
let reset = document.getElementById("reset");
let max = 100;

t.addEventListener("input", (e) => {
  if (t.value.length > max) {
    e.preventDefault();
    t.value = t.value.substring(0, max);
  }
  let left = max - t.value.length;
  c.textContent = left;

  if (left <= 0) c.style.color = "red";
  else if (left <= 20) c.style.color = "yellow";
  else c.style.color = "black";
});

reset.addEventListener("click", () => {
  t.value = "";
  c.textContent = max;
  c.style.color = "black";
});
