// Task 1: Code a Person class
class Person{
     // Constructor with default parameters (encapsulation of properties)
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
// Worker class extends Person (inheritance)
class Worker extends Person {
     // Constructor with additional properties specific to Worker (abstraction)
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        // Call the parent class constructor using super() (inheritance)
        super(name, age, energy) // Inherit from Person class
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
     // Method to increase experience points (polymorphism - Worker adds its own behavior)
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

//Instantiate object
const internObj = intern(); 
console.log(internObj); // Prints: Worker { name: 'Bob', age: 21, energy: 110, xp: 10, hourlyWage: 10 }

const managerObj = manager();
console.log(managerObj); // Prints: Worker { name: 'Alice', age: 30, energy: 110, xp: 100, hourlyWage: 30 }