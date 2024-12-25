/*Playing with Variables
Task:

Perform the following mathematical operations
on the provided variables a and b
Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder
*/ 


const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a + b; 
}
console.log(add(a,b));

function subtract() {
    return b - a; 
}
console.log(subtract(a,b));

function multiply() {
     return a * b;
}
console.log(multiply(a,b));


function divide() {
    return b / a; 
}
console.log(divide(a,b));

function increment() {
    return a + 1; // Incrementing a by 1
}
console.log(increment(a,b));

function decrement() {
    return b - 1; 
}
console.log(decrement(a,b));

function reminder() {
    return b % a; 
}
console.log(reminder(a,b));