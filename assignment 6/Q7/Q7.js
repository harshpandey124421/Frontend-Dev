// Q7_promise_allsettled.js
"use strict";

function loadProfile() {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.2;
    setTimeout(() => fail ? reject("Profile failed") : resolve("Profile Loaded"), 2000);
  });
}
function loadPosts() {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.2;
    setTimeout(() => fail ? reject("Posts failed") : resolve("Posts Loaded"), 1500);
  });
}
function loadMessages() {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.2;
    setTimeout(() => fail ? reject("Messages failed") : resolve("Messages Loaded"), 1000);
  });
}

let start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then(results => {
    console.log(results);
    console.log("Total time:", Date.now() - start, "ms");
  });
