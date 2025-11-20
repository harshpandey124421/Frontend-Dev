// Q10_departmental_employee_evaluator.js
let departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (let d of departments) {
  let name = d[0];
  let score = d[1];
  let status = "";

  if (score >= 90) status = "Excellent";
  else if (score >= 75) status = "Good";
  else if (score >= 60) status = "Average";
  else status = "Needs Improvement";

  console.log(name, "→", status);
}
