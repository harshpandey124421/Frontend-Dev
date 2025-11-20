// Q2_string_manipulation_report.js
let nameData = " wireless headphones PRO ";

let cleaned = nameData.trim().toLowerCase();

let words = cleaned.split(" ").filter(w => w);
let proper = words.map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

proper = proper.replace(/Pro/i, "Pro Edition");

console.log("Cleaned Title:", proper);
console.log("Length:", proper.length);
