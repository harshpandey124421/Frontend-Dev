// Q6_fetch_products.js
"use strict";

async function loadProducts() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw "Network error";
    let data = await res.json();

    data.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
    });
  } catch (err) {
    console.log("Failed to load products. Please try again.");
  }
}

loadProducts();
