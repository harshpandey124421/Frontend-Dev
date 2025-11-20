// Q4_academic_evaluator.js
// marks array for 5 subjects
const marks = [78, 85, 67, 90, 72]; // change values to test

const total = marks.reduce((s,v) => s+v, 0);
const average = total / marks.length;
const percentage = average; // assuming each subject out of 100

// validation: any subject < 35 => Detained
const hasFail = marks.some(m => m < 35);

if (hasFail) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log("Average:", average.toFixed(2), "Percentage:", percentage.toFixed(2) + "%");
