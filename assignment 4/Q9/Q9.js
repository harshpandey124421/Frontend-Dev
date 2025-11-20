// Q9_shopping_cart_total.js
"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  }

  applyCoupon(code) {
    if (/^(SAVE\d+|DISC\d+)$/.test(code)) {
      let percent = Number(code.match(/\d+/)[0]);
      let total = this.getTotal();
      let newTotal = total - (total * percent / 100);
      console.log("Final Amount:", newTotal);
    } else {
      console.log("Invalid Coupon");
    }
  }
}

let cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 700, 2);

console.log("Cart Total:", cart.getTotal());
cart.applyCoupon("SAVE20");
