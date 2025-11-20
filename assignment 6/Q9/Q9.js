// Q9_event_loop_explain.js
"use strict";

// predicted:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Promise (microtask) runs before timeout (macrotask).
