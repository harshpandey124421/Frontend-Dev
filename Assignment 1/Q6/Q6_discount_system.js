// Q6_discount_system.js
// calculate discount based on total
const totalAmount = 6200; // change to test
let discount = 0;

if (totalAmount >= 10000) {
  discount = 25;
} else if (totalAmount >= 5000) {
  discount = 15;
} else if (totalAmount >= 2000) {
  discount = 5;
} else {
  discount = 0;
}

const finalPrice = Math.round(totalAmount * (1 - discount / 100));

console.log("Original total:", totalAmount);
console.log("Discount %:", discount);
console.log("Final price after discount:", finalPrice);
