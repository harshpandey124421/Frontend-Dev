// Q10_nested_hoisting_closures.js
"use strict";

function outer() {
  console.log(count); // undefined due to hoisting
  var count = 5;

  function inner() {
    console.log(count); // undefined (inner count hoisted)
    var count = 10;
  }

  inner();
}

outer();

// arrow version (not hoisted)
const outer2 = () => {
  var c = 5;
  const inner2 = () => console.log(c);
  inner2();
};
outer2();
