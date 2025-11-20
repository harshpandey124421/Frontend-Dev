// Q9_form_submit_blocker.js
"use strict";

// HTML assumed:
// form id="f" with fields: name, email, pass
// <div class="err"> for errors

let form = document.getElementById("f");
let nameF = document.getElementById("name");
let emailF = document.getElementById("email");
let passF = document.getElementById("pass");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  let ok = true;

  if (nameF.value.trim() === "") {
    document.getElementById("ename").textContent = "Name required";
    ok = false;
  }
  if (!emailF.value.includes("@")) {
    document.getElementById("eemail").textContent = "Invalid email";
    ok = false;
  }
  if (passF.value.length < 6) {
    document.getElementById("epass").textContent = "Password too short";
    ok = false;
  }

  if (!ok) {
    e.preventDefault();
  } else {
    msg.textContent = "Form Submitted Successfully";
  }
});

// live error clearing
[nameF, emailF, passF].forEach(inp => {
  inp.addEventListener("input", () => {
    document.getElementById("e" + inp.id).textContent = "";
  });
});
