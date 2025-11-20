// Q6_table_filter.js
"use strict";

// HTML assumed:
// <input id="search">
// <table id="tbl"> rows with name, branch, cgpa

let s = document.getElementById("search");
let tbl = document.getElementById("tbl");
let nores = document.getElementById("nores"); // <div>No results found</div>

s.addEventListener("input", () => {
  let val = s.value.toLowerCase();
  let rows = tbl.querySelectorAll("tr");
  let visible = 0;

  rows.forEach(r => {
    let text = r.textContent.toLowerCase();
    if (text.includes(val)) {
      r.style.display = "";
      visible++;
    } else {
      r.style.display = "none";
    }
  });

  nores.style.display = visible === 0 ? "block" : "none";
});
