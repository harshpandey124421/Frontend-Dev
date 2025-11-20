// Q3_bug_tracker_promise.js
"use strict";

function getBugs() {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.3;
    setTimeout(() => {
      if (fail) return reject("API failed");
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.log("Error:", err));
