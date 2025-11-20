// Q5_person_student_inheritance.js
"use strict";

function Person(name) {
  this.name = name;
}

Person.prototype.showName = function() {
  console.log("Name:", this.name);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
  console.log("Branch:", this.branch);
};

let s = new Student("Harsh", "CSE");
s.showName();
s.showBranch();
