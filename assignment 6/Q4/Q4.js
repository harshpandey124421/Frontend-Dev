// Q4_devops_delay.js
"use strict";

function serverA() {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.2;
    setTimeout(() => fail ? reject("A failed") : resolve("A done"), 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.2;
    setTimeout(() => fail ? reject("B failed") : resolve("B done"), 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.log("Error:", err));

Promise.race([serverA(), serverB()])
  .then(res => console.log("Fastest response:", res))
  .catch(err => console.log("Race Error:", err));
