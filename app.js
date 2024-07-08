var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    Student.prototype.rejisterForCourses = function (courses) {
        this.courses.push(courses);
    };
    return Student;
}(Person));
;
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    Instructor.prototype.assignCourses = function (courses) {
        this.courses.push(courses);
    };
    return Instructor;
}(Person));
;
var Courses = /** @class */ (function () {
    function Courses(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    Courses.prototype.addStudent = function (std) {
        this.students.push(std);
        std.rejisterForCourses(this);
    };
    Courses.prototype.setInstructor = function (instructor) {
        this.instructor.push(instructor);
    };
    return Courses;
}());
;
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    Department.prototype.addCourse = function (courses) {
        this.courses.push(courses);
    };
    return Department;
}());
var Std1 = new Student("Iqra", 29, 6055);
var Std2 = new Student("Sadia", 29, 7055);
var Instructor1 = new Instructor("Sir Hamzah", 23, 50000);
var Instructor2 = new Instructor("Sir Zia", 48, 100000);
var course1 = new Courses(3, "Micro Economics");
var course2 = new Courses(6, "Statistics");
course1.addStudent(Std1);
course1.addStudent(Std2);
course2.addStudent(Std1);
course1.setInstructor(Instructor1);
course2.setInstructor(Instructor2);
Std1.rejisterForCourses(course2);
Std2.rejisterForCourses(course1);
var department = new Department("Economics and Finance");
department.addCourse(course1);
// department.addCourse(course2);
// console.log(course1.students); //students enrolled in course 1
// console.log(course2.students); // students enrolled in couse 2
// console.log(Std1.courses); // in which course student 1 is enrolled
// console.log(department.courses) // courses offer in department 
// console.log(course1.instructor); // instructor of course 1 
console.log(course2.instructor); //instructor of course 2
