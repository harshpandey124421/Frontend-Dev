// Q4_debugging_mystery.js
"use strict";

// original error: greeting was undeclared in strict mode
function showMessage() {
  let greeting = "Welcome"; 
  console.log(greeting);
}

showMessage();
// explanation: strict mode does not allow accidental global variables
