// Q2_micro_vs_macro.js
"use strict";

console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise.then"));

console.log("Synchronous log");

console.log("End");

// microtasks run before macrotasks because event loop prioritizes them.
