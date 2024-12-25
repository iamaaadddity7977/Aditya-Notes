/*

Classes, Objects, and Inheritance
Task 1: Class Inheritance
Create a class Vehicle with properties make and model,
 and a method getDetails() that returns a 
 string "Make: [make], Model: [model]". Create a
  subclass Car that extends Vehicle and adds a method 
  startEngine() that returns "Engine started".

Task 2: Method Overriding in Inheritance
Extend the Vehicle class from the previous task to 
include a method move() that returns "The vehicle is 
moving". Then, override the move() method in 
the Car class to return "The car is driving".

Task 3: Static Methods in Classes
Add a static method isVehicle(obj) to 
the Vehicle class that checks if a given object is an 
instance of Vehicle. The method should return true 
if the object is a Vehicle or a subclass of Vehicle,
 and false otherwise

 */

 class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  
    move() {
      return 'The vehicle is moving';
    }
  
    static isVehicle(obj) {
      return obj instanceof Vehicle;
    }
  }
  
  class Car extends Vehicle {
    startEngine() {
      return 'Engine started';
    }
  
    move() {
      return 'The car is driving';
    }
  }
  
  // Example Usage
  const myCar = new Car('Toyota', 'Camry');
  const randomObject = { type: 'object' };
  
  console.log(myCar.getDetails()); // Output: Make: Toyota, Model: Camry
  console.log(myCar.startEngine()); // Output: Engine started
  console.log(myCar.move()); // Output: The car is driving
  console.log(Vehicle.isVehicle(myCar)); // Output: true
  console.log(Vehicle.isVehicle(randomObject)); // Output: false
  