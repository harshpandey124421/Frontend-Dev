// Q1_async_coffee_maker.js
"use strict";

// random failure helper
function mayFail() {
  return Math.random() < 0.2;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mayFail()) return reject("Boiling failed");
      console.log("Water boiled");
      resolve();
    }, 1200);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mayFail()) return reject("Brewing failed");
      console.log("Coffee brewed");
      resolve();
    }, 1100);
  });
}

function pourCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mayFail()) return reject("Pouring failed");
      console.log("Coffee poured");
      resolve();
    }, 1000);
  });
}

boilWater()
  .then(brewCoffee)
  .then(pourCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch(err => console.log("Error:", err));
