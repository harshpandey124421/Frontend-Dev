// Q7_makeMultiplier_closure.js
"use strict";

function makeMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

let triple = makeMultiplier(3);
console.log(triple(5)); 

// closure explanation:
// inner function remembers 'multiplier' even after makeMultiplier ends.
