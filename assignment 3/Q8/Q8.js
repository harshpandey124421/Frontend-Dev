// Q8_strict_mode_showdown.js
// Non-strict version
function demo(a, a) {
  total = 10;
  console.log("Non strict executed");
}
demo(5, 10);

// Strict version
"use strict";
function demo2(a, a) {
  // duplicate parameters and undeclared vars cause errors
}
