// Q2_multi_type_summary.js
// create different types and show a report using console.table
const name = "Priya"; // string
const age = 21; // number
const isStudent = true; // boolean
const hobbies = ["reading", "coding"]; // array
const profile = { dept: "CSE", sem: 1 }; // object
const noValue = null; // null
let notDefined; // undefined

const rows = [
  { label: "name", value: name, type: typeof name },
  { label: "age", value: age, type: typeof age },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "profile", value: profile, type: typeof profile },
  { label: "noValue", value: noValue, type: typeof noValue },
  { label: "notDefined", value: notDefined, type: typeof notDefined },
];

console.table(rows);
