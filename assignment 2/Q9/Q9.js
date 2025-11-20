// Q9_odd_even_analyzer.js
let data = [];

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) data.push("FizzBuzz");
  else if (i % 2 === 0) data.push("Even");
  else data.push("Odd");
}

console.log(data);
