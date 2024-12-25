// ? constructor 
function Person(name,age){
    this.name = name
    this.age = age
}
let people = new Person("Aditya","92");
// console.log(people);
let people2 = new Person("Vinita","92");
// console.log(people2);


function Car(make, model){
    this.make = make 
    this.model = model
}

let myCar = new Car("Toyota","Tata");
// console.log(myCar);

function Tea(type) {
    this.type = type;
    this.describe = function (){
        return `this is a cup of ${this.type}`;
    };
}
let lemonTea = new Tea("Lemon tea");
// console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());


function Drink(name) {
    if (!new.target) {
        throw new Error("Drink Must be called with new keyword");
        
    }
    this.name = name
}

let drink = new Drink("Lemon Tea");
console.log(drink);
let Chai = new Drink("Chai");
console.log(Chai)