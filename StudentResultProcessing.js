class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverage() {
        return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    }

    getGrade() {
        const avg = this.getAverage();
        if (avg >= 85) return "A";
        if (avg >= 70) return "B";
        if (avg >= 50) return "C";
        return "F";
    }
}


const s1 = new Student("Ananya", [80, 90, 85]);
const s2 = new Student("Tina", [60, 55, 65]);
const s3 = new Student("Meena", [40, 45, 50]);

console.log(s1.name, s1.getAverage(), s1.getGrade());
console.log(s2.name, s2.getAverage(), s2.getGrade());
console.log(s3.name, s3.getAverage(), s3.getGrade());
