// Q5_callback_hell_vs_asyncawait.js
"use strict";

// --- callback hell version ---
function design(cb) {
  setTimeout(() => { console.log("Design done"); cb(); }, 1000);
}
function build(cb) {
  setTimeout(() => { console.log("Build done"); cb(); }, 1000);
}
function test(cb) {
  setTimeout(() => { console.log("Test done"); cb(); }, 1000);
}
function deploy(cb) {
  setTimeout(() => { console.log("Deploy done"); cb(); }, 1000);
}
function celebrate(cb) {
  setTimeout(() => { console.log("Celebrate!"); cb(); }, 1000);
}

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {});
      });
    });
  });
});

// --- async/await cleaner version ---
function wait(msg) {
  return new Promise(res => setTimeout(() => { console.log(msg); res(); }, 1000));
}

async function pipeline() {
  await wait("Design done");
  await wait("Build done");
  await wait("Test done");
  await wait("Deploy done");
  await wait("Celebrate!");
}

pipeline();

// async/await improves readability by avoiding deep nested callbacks.
