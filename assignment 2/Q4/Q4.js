// Q4_array_performance_analyzer.js
let scores = Array.from({length: 8}, () => Math.floor(Math.random()*71)+30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let total = scores.reduce((s,v)=>s+v,0);
let avg = total / scores.length;

let passed = scores.filter(v => v >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", avg.toFixed(2));
console.log("Passed:", passed);
