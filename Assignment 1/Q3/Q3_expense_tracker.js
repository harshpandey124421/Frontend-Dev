// Q3_expense_tracker.js
// compute total, average and add 10% tax
const expenses = {
  food: 2500,
  travel: 800,
  rent: 7000,
  bills: 1200,
  leisure: 900
};

const values = Object.values(expenses);
const total = values.reduce((s, v) => s + v, 0);
const average = total / values.length;
const tax = total * 0.10;
const finalAmount = total + tax;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final after 10% tax:", finalAmount.toFixed(2));
