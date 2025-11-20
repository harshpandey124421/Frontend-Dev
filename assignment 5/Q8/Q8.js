// Q8_myMap_custom.js
"use strict";

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i));
  }
  return result;
};

console.log([1,2,3].myMap(n => n * 2));
