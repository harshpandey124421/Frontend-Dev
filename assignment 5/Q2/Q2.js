// Q2_applyOperation.js
"use strict";

function applyOperation(numbers, operation) {
  let result = [];
  for (let n of numbers) {
    result.push(operation(n));
  }
  return result;
}

let nums = [1,2,3,4];

console.log("Double:", applyOperation(nums, n => n * 2));
console.log("Square:", applyOperation(nums, n => n *  n));
