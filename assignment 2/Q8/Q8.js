// Q8_dynamic_discount_evaluator.js
let cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let subtotal = 0;
let afterCategory = 0;

for (let c of cart) {
  subtotal += c.price;
  let p = c.price;

  if (c.category === "electronics") p *= 0.90;
  else if (c.category === "fashion") p *= 0.95;

  afterCategory += p;
}

let final = afterCategory;

if (subtotal > 50000) {
  final *= 0.95;
}

console.log("Subtotal:", subtotal);
console.log("After category discount:", afterCategory.toFixed(2));
console.log("Final:", final.toFixed(2));
