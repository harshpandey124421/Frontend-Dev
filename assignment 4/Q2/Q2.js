// Q2_student_form_validator.js
"use strict";

// simple validation functions using RegExp
function validateName(name) {
  return /^[A-Za-z ]+$/.test(name);
}

function validateEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

function validatePassword(password) {
  return /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password);
}

// Example test values
console.log("Name valid:", validateName("Rahul"));
console.log("Email valid:", validateEmail("abc@mail.com"));
console.log("Phone valid:", validatePhone("9876543210"));
console.log("Password valid:", validatePassword("Pass@123"));
