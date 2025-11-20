// Q10_delivery_pipeline.js
"use strict";

function step(msg) {
  return new Promise((resolve, reject) => {
    let fail = Math.random() < 0.2;
    let delay = 1000 + Math.random() * 1000;
    setTimeout(() => fail ? reject(msg + " FAILED") : resolve(msg), delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log(await step("Step 1: Order taken"));
    console.log(await step("Step 2: Food prepared"));
    console.log(await step("Step 3: Package ready"));
    console.log(await step("Step 4: Out for delivery"));
    console.log("Delivery completed!");
  } catch (err) {
    console.log("Pipeline failed!");
  }
}

runPipeline();
