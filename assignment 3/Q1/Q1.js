// Q1_dynamic_data_parser.js
"use strict";

// mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let item of apiData) {
  let num = Number(item);

  if (!isNaN(num) && item !== " " && item !== "100px") {
    validNumbers.push(num);
  } else {
    invalidNumbers.push(item);
  }
}

console.log("Valid:", validNumbers);
console.log("Invalid:", invalidNumbers);
