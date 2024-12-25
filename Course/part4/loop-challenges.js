// Sum of first 5 number  using while loop 
let sum = 0;
let i = 0;
while (i <= 5) {
    sum += i;
    // sum = sum + i;
    i++;
}
// console.log(sum);

// Write a while loop that counts down from 5 to 1 and
// stores the number in an array named "coutdown"

let coutdown = [];
let j = 5;
while (j > 0) {
    coutdown.push(j);
    j--;
}
// console.log(coutdown);

// Q3 write a do while loop that prompts a user to enter 
// thei favorite tea type untile they enter "stope".
//  store each tea type in an array named "teaCollection".

// let teaCollection = [];
// let tea;
// do {
//     tea = prompt(`Enter Your Favourite Tea (type "stop" to finish)`);

//      if(tea !== "stop"){
//         teaCollection.push(tea);
//      }
    
// } while (tea !== "stop");

// Q4 writer a do while loop that add number from 1 to 3 
// and store the result in a variable named "tatal".

let total = 0;
let a = 1;
do {
    total += a;
    a++;
    
} while (a <= 3);
// console.log(total);

// Q5 write a for loop that multiple each element in the
// array [2,4,6] by 2 and stores the result in a new array 
// named as 'multipliedNumber'.

let array = [2,4,6];
let multipliedNumber = [];

for (let i = 0; i < array.length; i++) {
   
  //   takeNumber = array[i] * 2;
    multipliedNumber.push((array[i] * 2));

   // multipliedNumber.push(array[i]);
}
//  console.log(multipliedNumber);

//  ? Q6 write a for loop that lists all the cities in the
//  array ["Paris","New York", "Tokyo", "London"] ans
// stores each city in a new array named 'cityList'

let cities = ["Paris","New York", "Tokyo", "London"];

let cityList = [];
for(let i = 0; i < cities.length; i++){
    cityList.push(cities[i]);
}
console.log(cityList);
