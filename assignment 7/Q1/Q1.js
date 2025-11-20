// Q1_dynamic_product_list_manager.js
"use strict";

// This JS assumes HTML with: <input id="pinput"> <button id="addBtn"> <ul id="plist"></ul>

let input = document.getElementById("pinput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("plist");

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  let li = document.createElement("li");
  li.innerHTML = input.value + 
    ' <button class="edit">Edit</button> <button class="del">Delete</button>';
  list.appendChild(li);
  input.value = "";
});

// event delegation
list.addEventListener("click", function(e) {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("edit")) {
    let li = e.target.parentElement;
    let old = li.firstChild.textContent.trim();
    let inp = document.createElement("input");
    inp.value = old;

    li.innerHTML = "";
    li.appendChild(inp);

    // autosave when clicking outside
    inp.addEventListener("blur", () => {
      li.innerHTML = inp.value + 
      ' <button class="edit">Edit</button> <button class="del">Delete</button>';
    });
    inp.focus();
  }
});
