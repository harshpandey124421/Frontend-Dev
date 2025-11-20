// Q1_ecommerce_product_manager.js
"use strict";

// Product class
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
  }
}

// objects
let p1 = new Product(1, "Phone", 1500, "Electronics");
let p2 = new Product(2, "Shoes", 900, "Fashion");
let p3 = new Product(3, "Laptop", 45000, "Electronics");

let products = [p1, p2, p3];

// discount test
p1.applyDiscount(10);

// filter > 1000
let filtered = products.filter(p => p.price > 1000);
console.log(filtered);
