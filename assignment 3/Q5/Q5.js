// Q5_hoisting_lab.js
"use strict";

// ORIGINAL
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }

// FIXED CODE
var score = 50;

function announce() {
  console.log("Game started");
}
announce();

let status = "ready";
function startGame() {
  console.log(status);
}
startGame();

// ARROW VERSION (non-hoisted)
const announce2 = () => console.log("Game started again");
announce2();
