
// function flipBoolean(input){
//     return (input);
// }
// console.log(flipBoolean("Aditya Vinita"));

/*
1. write a function named 'makeTea' that takes one parameter
, 'typeOfTea' and return a string like "marking  green tea" when called 
with "green tea"
store the result in a variable named 'teaOrder'
*/

function makeTea(typeOfTea) {
    return `making ${typeOfTea}`;
    }
    let teaOrder = makeTea("green tea");
    // console.log(teaOrder);

    /*
    create a function named 'order' that takes one
    parametr, 'teaType' .Inside this function , create
    another function named 'confirmOrder' that returs a
    message like "Order confirmed for chai".
    call `confirmOrder` form within 'orderTea' and return the 
    result.
    */

    function order(teaType) {
        function confirmOrder() {
            return `Order confirmed for ${teaType}`;
        }
        return confirmOrder();
    }
    let orderConfirmation = order("chai");
    // console.log(orderConfirmation);


    // Arrow Function 
/*
 write an arrow function named 'calculateTotal' that take two parameters
 :'price' and 'quantity' . the function should return the total cost by multiplying
 the 'price' and 'quantity'.
 store the result in a variable named 'totalCost'.
*/

 const calculateTotal = (price,quantity) => {
    return price * quantity;
  // return `${price * quantity}`;
}
let totalCost = calculateTotal(94,73);
// console.log(totalCost);


/*
write a function named "processTeaOrder" that takes another function
"makeTea" as a parameter and call it with the argument "early grey"
return the result of calling 'makeTea */


function processTeaOrder(teaFunction) {
    return teaFunction('early grey');
}
function makeTea(typeOfTea){
    return `Maketea:- ${typeOfTea}`
}

let teaorder = processTeaOrder(makeTea);
// console.log(teaorder);

/*
write a function named "createTeaMaker" that returns another
function the returned function should take one parameter "teaType"
 anmd return a message like "making gree tea" 
 store the returned function in a variable named 
 "teaMaker" and call it with "green tea"
*/ 
function createTeaMaker(te) {
    return function anotherTea(teaType) {
        return `Making  ${teaType}`;
    };
 }

let teaMaker = createTeaMaker();
// console.log(teaMaker("green tea"));
//Factory Function with Closures or simply Nested Function with Closure