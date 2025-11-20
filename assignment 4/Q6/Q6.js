// Q6_employee_management_system.js
"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent / 100);
  }
}

let e1 = new Employee(1, "Rita", "HR", 30000);
let e2 = new Employee(2, "Raj", "Tech", 45000);
let e3 = new Employee(3, "Simran", "Admin", 28000);
let e4 = new Employee(4, "John", "Tech", 50000);
let e5 = new Employee(5, "Aman", "Finance", 39000);

let arr = [e1, e2, e3, e4, e5];

let totalPayout = arr.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", totalPayout);
