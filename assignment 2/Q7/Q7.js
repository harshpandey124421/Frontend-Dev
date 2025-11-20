// Q7_customer_feedback_processor.js
let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(/\s+/);
let wordCount = words.length;

let lower = feedback.toLowerCase();
let hasBad = lower.includes("bad") || lower.includes("poor");

console.log("Words:", wordCount);
if (!hasBad) console.log("Positive Feedback");
else console.log("Needs Improvement");
