// Q3_transaction_validator.js
"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
  try {
    if (t === null) throw "Null transaction";
    if (!("id" in t) || !("amount" in t)) throw "Missing fields";
    if (t.amount < 0) throw "Negative amount";

    valid.push(t);
  } catch (err) {
    invalid.push({ transaction: t, error: err });
  }
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
