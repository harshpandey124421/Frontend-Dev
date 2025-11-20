// Q8_dynamic_object_updater.js
"use strict";

let user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser(key, value) {
  user[key] = value;
  console.log("Updated User:", user);
}

updateUser("name", "Mike");
updateUser("age", 25);
