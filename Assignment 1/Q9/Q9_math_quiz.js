// Q9_math_quiz.js
// generate two numbers and an operator
const a = Math.floor(Math.random() * 20) + 1;
const b = Math.floor(Math.random() * 20) + 1;
const ops = ['+', '-', '*', '/'];
const op = ops[Math.floor(Math.random() * ops.length)];

let answer;
switch (op) {
  case '+': answer = a + b; break;
  case '-': answer = a - b; break;
  case '*': answer = a * b; break;
  case '/': answer = (a / b).toFixed(2); break;
}

console.log(`Question: ${a} ${op} ${b}`);
console.log("Answer:", answer);
