// Object Oriented Concepts
// JavaScript also follow these concepts ES6.

// What is class
// Blueprint of your application
// eg: CAR
// class contains 2 things
// 1. Data Members (properties)
// 2. Member Functions(Behaviour)

// As many Objects

// constructor is a special function that is to intialize the data members of a class
// Data Structure
class Employee {
  constructor(id, name, salary) {
    // Data Members
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  // Member Function
  displayData() {
    //   template String
    console.log(`Id: ${this.id} \nName: ${this.name} \nSalary: ${this.salary}`);
  }
}

let emp1 = new Employee(101, "John", 20000);
emp1.name = "Parker";
emp1.salary = 15000;
let emp2 = new Employee(102, "Peter", 25000);
emp1.displayData();
emp2.displayData();
