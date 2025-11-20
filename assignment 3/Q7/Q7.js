// Q7_smart_calculator.js
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

for (let op of operations) {
  try {
    let result;

    switch (op) {
      case "add":
        result = num1 + num2;
        break;
      case "divide":
        if (num2 === 0) throw "Divide by 0";
        result = num1 / num2;
        break;
      case "power":
        result = num1 ** 2;
        break;
      case "root":
        if (num1 < 0) throw "Negative root";
        result = Math.sqrt(num1);
        break;
      case "subtract":
        result = num1 - num2;
        break;
      default:
        throw "Invalid operation";
    }

    console.log(op, "=", result);

  } catch (e) {
    console.log(op, "Error:", e);
  }
}
