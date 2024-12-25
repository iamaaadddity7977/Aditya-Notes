
// function flipBoolean(input){
//     return (input);
// }
// console.log(flipBoolean("Aditya Vinita"));
// console.log(flipBoolean(9473));


// Playing with Types
// Task 1:

/* Write a function stringToNumber that takes a string input
 and tries to convert it to a number. If the conversion fails,
  return "Not a number".
  */

  function stringToNumber(input) {
    const number = Number(input);
    return isNaN(number) ? "Not a Number " : number ;
  }
//   console.log(stringToNumber("123"));
//   console.log(stringToNumber("Vinita"));

/*
Task 2:

Write a function flipBoolean that takes any input 
and converts it to its boolean equivalent, 
then flips it. For example, true becomes false, 0 becomes true, etc

*/

function flipBoolean(input){
    return !Boolean(input);
}
// console.log(flipBoolean(true));
// console.log(flipBoolean(0));
// console.log(flipBoolean(false));
// console.log(flipBoolean(1));

/*
Task 3:

Write a function whatAmI that takes an input and returns a string 
describing its type after conversion. If it's a number, 
return "I'm a number!", if it's a string, return "I'm a string!"

*/ 


function whatAmI(input) {
    if (typeof input === "number") {
        return "I'm a number!";
    } else if (typeof input === "string") {
        return "I'm a string!";
    } else {
        return "I'm something else!";
    }
}

// console.log(whatAmI(94));
// console.log(whatAmI("Vinita"));
// console.log(whatAmI(true));


/*Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!"
 if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

*/ 

function isItTruthy(input) {
    return input ? "It is truthy!" : "it is falsey!";
}
// console.log(isItTruthy(true));
// console.log(isItTruthy(false));
// console.log(isItTruthy(""));
// console.log(isItTruthy(0));
// console.log(isItTruthy("Hello"));
