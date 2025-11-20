// Q10_citizen_validator.js
// check services eligibility
const age = 19; // test age
const isCitizen = true;

if (isCitizen && age >= 18) {
  console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
  // (kept for requirement though previous condition covers >=18)
  console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
  console.log("Eligible to vote only.");
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}
