// Q5_movie_ticket_booking.js
"use strict";

function validName(n) {
  return /^[A-Za-z ]+$/.test(n);
}
function validEmail(e) {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(e);
}
function validSeats(s) {
  return s >= 1 && s <= 10;
}

let name = "Rohit";
let email = "rohit@mail.com";
let seats = 4;

if (validName(name) && validEmail(email) && validSeats(seats)) {
  let booking = { name, email, seats };
  console.log("Ticket Booked:", booking);
} else {
  console.log("Invalid details");
}
