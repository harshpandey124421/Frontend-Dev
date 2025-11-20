// Q3_multistep_form.js
"use strict";

// HTML assumed:
// 3 steps divs: step1, step2, step3 + summary
// fields: name, email, pass
// buttons: next1, next2, back1, back2, submitBtn

function showStep(n) {
  document.querySelectorAll(".step").forEach(s => s.style.display = "none");
  document.getElementById("step" + n).style.display = "block";
}

showStep(1);

document.getElementById("next1").onclick = () => {
  let name = document.getElementById("name").value.trim();
  if (name !== "") showStep(2);
};

document.getElementById("next2").onclick = () => {
  let email = document.getElementById("email").value;
  if (email.includes("@")) showStep(3);
};

document.getElementById("back1").onclick = () => showStep(1);
document.getElementById("back2").onclick = () => showStep(2);

document.getElementById("submitBtn").onclick = () => {
  let p = document.getElementById("pass").value;
  if (p.length >= 6) {
    document.getElementById("summary").style.display = "block";
    document.getElementById("summary").textContent =
      "Name: " + document.getElementById("name").value +
      " | Email: " + document.getElementById("email").value +
      " | Password: " + p;
  }
};
