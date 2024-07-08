class Person {
    name: string;
    age: number;
    constructor(name:string , age: number){
        this.name = name;
        this.age = age;

    }
};
class Student extends Person {
    rollNumber: number;
    courses : Courses [] = [];
    constructor(name: string, age:number,rollNumber: number){
        super(name,age)
        this.rollNumber= rollNumber;
    }
    rejisterForCourses(courses:Courses ){
        this.courses.push(courses);
    }
};
class Instructor extends Person {
    salary: number;
    courses : Courses [] = [];
    constructor(name: string, age:number,salary: number){
        super(name,age)
        this.salary= salary;
    }
    assignCourses(courses:Courses ){
        this.courses.push(courses);
    }
};
class Courses {
    id: number;
    name: string;
    students: Student[]=[];
    instructor : Instructor[]= [];
    constructor(id: number, name: string ){
        this.id = id;
        this.name = name;
    }
    addStudent(std:Student){
        this.students.push(std)
        std.rejisterForCourses(this)
    }
    setInstructor(instructor: Instructor){
        this.instructor.push(instructor)
    }
};
class Department {
    name: string;
    courses:Courses[] = [];
    constructor(name: string){
        this.name = name;
    }
    addCourse(courses: Courses){
        this.courses.push(courses)                 
    }
}
const Std1 = new Student("Iqra",29, 6055);
const Std2 = new Student("Sadia",29, 7055);
const Instructor1 = new Instructor("Sir Hamzah",23,50000);
const Instructor2 = new Instructor("Sir Zia",48,100000);
const course1 = new Courses (3,"Micro Economics");
const course2 = new Courses(6,"Statistics");
course1.addStudent(Std1);
course1.addStudent(Std2);
course2.addStudent(Std1);
course1.setInstructor(Instructor1);
course2.setInstructor(Instructor2);
Std1.rejisterForCourses(course2)
Std2.rejisterForCourses(course1)
const department = new Department("Economics and Finance");
department.addCourse(course1);
console.log(course1.students); //students enrolled in course 1
console.log(course2.students); // students enrolled in couse 2
console.log(Std1.courses); // in which course student 1 is enrolled
console.log(department.courses) // courses offer in department 
console.log(course1.instructor); // instructor of course 1 
console.log(course2.instructor); //instructor of course 2
console.log(course1.instructor) //courses assign to intructor 1
console.log(course2.instructor) //courses assign to intructor 2


