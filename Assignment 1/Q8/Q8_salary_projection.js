// Q8_salary_projection.js
// compute salary over 5 years with increment
let currentSalary = 40000; // starting salary
const incrementRate = 8; // percent per year

const projection = [];
for (let year = 1; year <= 5; year++) {
  currentSalary = Math.round(currentSalary * (1 + incrementRate / 100));
  projection.push({ year: year, salary: currentSalary });
}

console.table(projection);
