/*
Encapsulation, Polymorphism, Abstraction, and Getters/Setters
Task 1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. 
Add methods deposit(amount) and withdraw(amount).
 Use getters and setters to access and modify
  the _balance while ensuring the balance never goes negative.

Task 2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0.
 Create two subclasses Circle and Rectangle that override
  the area() method to calculate the area of a circle and a rectangle, 
  respectively.
  */

  // Task 1: Encapsulation Using Getters and Setters
class BankAccount {
    #balance; // Private property
  
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      } else {
        throw new Error('Deposit amount must be positive');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      } else if (amount > this.#balance) {
        throw new Error('Insufficient funds');
      } else {
        throw new Error('Invalid withdrawal amount');
      }
    }
  
    get balance() {
      return this.#balance;
    }
  
    set balance(amount) {
      if (amount >= 0) {
        this.#balance = amount;
      } else {
        throw new Error('Balance cannot be negative');
      }
    }
  }
  
  // Task 2: Polymorphism with Method Overriding
  class Shape {
    area() {
      return 0; // Default implementation
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  // Example Usage
  
  // Task 1: Encapsulation
  const account = new BankAccount(1000);
  account.deposit(500);
  console.log(account.balance); // Output: 1500
  try {
    account.withdraw(2000); // Will throw an error
  } catch (error) {
    console.log(error.message); // Output: Insufficient funds
  }
  
  // Task 2: Polymorphism
  const circle = new Circle(10);
  const rectangle = new Rectangle(5, 20);
  
  console.log(circle.area()); // Output: 314.159...
  console.log(rectangle.area()); // Output: 100
  