// Q1_scope_conflict_resolver.js
let bonus = 5000; 

function calculateSalary(isPermanent) {
  let salary = 40000;
  let total = salary;

  if (isPermanent) {
    total += bonus;
  }

  console.log("Total Salary:", total);
}

// testing
calculateSalary(true);
calculateSalary(false);
console.log("Global bonus:", bonus);
