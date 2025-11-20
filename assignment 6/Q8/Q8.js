// Q8_retry_logic.js
"use strict";

function submitOrder() {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.5;
    setTimeout(() => fail ? reject("Fail") : resolve("Success"), 500);
  });
}

async function processOrder() {
  for (let i = 1; i <= 3; i++) {
    try {
      let res = await submitOrder();
      console.log("Attempt", i, ":", res);
      return;
    } catch (e) {
      console.log("Attempt", i, ": Failed");
    }
  }
  throw "Order could not be processed";
}

processOrder()
  .catch(err => console.log(err));
