// Q9_class_inheritance_es6.js
"use strict";

// Prototype version already done in Q5
// Now ES6 class version

class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log("Name:", this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  showBranch() {
    console.log("Branch:", this.branch);
  }
}

let st = new Student("Harsh", "CSE");
st.showName();
st.showBranch();
