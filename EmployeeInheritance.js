class Employee {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    work() {
        console.log(this.name + " works in " + this.dept);
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name + " manages " + this.dept);
    }
}

// runtime polymorphism
let e = new Employee("Riya", "HR");
let m = new Manager("Aman", "IT");

e.work();
m.work();

