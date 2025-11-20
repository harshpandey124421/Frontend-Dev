// Q7_login_form_validation.js
"use strict";

function validUser(u) {
  return u.length >= 5;
}

function validPass(p) {
  return /[A-Z]/.test(p) &&
         /[a-z]/.test(p) &&
         /\d/.test(p) &&
         /[!@#$%^&*]/.test(p) &&
         p.length >= 8;
}

console.log("Username valid:", validUser("admin1"));
console.log("Password valid:", validPass("Pass@123"));
