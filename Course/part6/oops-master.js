let car = {
    make: "TATA",
    model: "Camry",
    year: 2005,
    start: function () {
        return ` ${this.make} car got start in ${this.year} and model is ${this.model}`;
    }
}
// console.log(car);
// console.log(car.start());

function Person(name, age) {
    this.name = name;
    this.age = age;
}
// console.log(new Person("john Doe", 19));
// console.log(new Person("charls", 56));

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} Makes a sound`
}
let dog = new Animal("Dog");
// console.log(dog.speak());

Array.prototype.aditya = function () {
    return `Custom Method ${this}`;
}
let myNewArray = [1, 2];
// console.log(myNewArray.aditya())

let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.aditya())


// ? Inheritance 

class Vechicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        return `${this.model} is a car from ${this.make} `;
    }
}

class Car extends Vechicle {
    drive() {
        return `${this.make} : This is an inheritance Example`;
    }
}


let myCar = new Car("Tata", "corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let VechicleOne = new Vechicle("Tata", "corolla");
// console.log(VechicleOne);



///  Encapsulation

class BankAccount {
    #balance = 2000;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount();

// console.log(account.getBalance());


// Absraction 


class coffeeMachine {
    start() {
        //  call DB
        // filter value
        return `Starting the Machine...`;
    };
    brewCoffee() {
        //complex cvalcul;ation
        return `Brwing coffee`;
    };
    pressStartButton() {
        let modeOne = this.start();
        let modeTwo = this.brewCoffee();
        return`${modeOne} + ${modeTwo}`;
    }
   
};
// let machineStart = new coffeeMachine();
// console.log(machineStart.start());
// console.log(machineStart.brewCoffee());
// console.log(machineStart.pressStartButton());


// Polymorphism 

class Bird{
    fly() {
        return`Flying....`;
    }
}
class Penguin{
    fly() {
        return`Penguin can't fly....`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());


// static method
class Calculator{
     add(a,b){
        return a + b;
    }
}
// let miniCal = new Calculator();
// console.log(miniCal.add(10,13));


// ? Getters and Setters

class Employee{
    #salary;
  constructor(name,salary){
    if (salary <0 ) {
        throw new Error("salary cannot be in negative");
    }
    this.name = name ;
    this._salary = salary; // #salary to hide the amount
  }
  get salary() {
    return `You are Not allowed to see salary`;
  }
  set salary(value){
    if (value < 0) {
        console.error("Invalid salary");
    }else{
        this._salary = value;
    }
  }
}

let emp = new Employee('Vinita', 1250000);
console.log(emp.name);
console.log(emp._salary);  // #salary used to hide the salary
console.log(emp.salary);

