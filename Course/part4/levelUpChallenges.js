/*
1.Write a 'for' loop that loops through the 'array' 
["green tea", "black tea", "chai", "oolong tea"] and
stops the loop when it finds "chai".
stops all teas before "chai",in a new array named
'selectedTeas'
*/

let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for(let i = 0; i < tea.length; i++){
    if(tea[i] === 'chai'){
     
        break;     
    }
    selectedTeas.push(tea[i]);
}
// console.log(selectedTeas);


/*  Write a 'for' loop that loops though the array
["London", "New York", "Paris", "Berlin"] and skips
"Paris".
store the other cities in a new array named
'visitedCities'.
*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let i = 0; i < cities.length ; i++){
     
    if(cities[i] === "Paris" || cities[i] === "pairs"){
       // cities.shift("Paris");
        continue;
    }
    visitedCities.push(cities[i]);

}
// console.log(visitedCities);

/*
  use a 'for-of' loop to iterate though the array [1,2,3,4,5]
  and stop when the number  '4' is found .
  store the number before '4' in a array named 'smallNumber'
  */
let number = [1,2,3,4,5];
let smallNumber = [];

for (const num of number ) {
    if(num === 4){
        break;
    }
    smallNumber.push(num);
}
//console.log(smallNumber);

/*
  use a 'for-of' loop to iterate though the array ["chai", "green tea",
  "herbal tea", "black tea"] and skip "herbal tea"
  store the other teas inan array named 'preferredTeas'
*/ 
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
    if(tea === "herbal tea"){
        continue;
    }
    preferredTeas.push(tea);
}
// console.log(preferredTeas);

/*
  use 'for-in' loop to loop though an object
  containing city populations.
  stop the loop when the population of "berlin" is found and store all
  previous cities populations in a
  new object named 'cityPopulations'

  let citiesPopulation ={
  "London": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin", 3500000
  };
*/ 

let citiesPopulation ={
    "London": 8900000,
    "New York": 8400000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let cityPopulations = {};

for (const city in citiesPopulation) {
//   Key = value 
if(city === "Berlin"){
    break;
}

cityPopulations[city] = citiesPopulation[city]
  
   }
// console.log(cityPopulations);


// Same question bas isbaar 3 million wale lena hai object mein

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities = {};

for (const cities in worldCities ) {
    if (worldCities[cities] < 3000000) {
       continue;       
    }
    largeCities[cities] = worldCities[cities];

}
// console.log(largeCities);

/*
 write a 'foreach' loop thet iterates through the array 
 ["earl grey", "green tea", "chai", "oolong tea"] .
 stope the loop when "Chai" is found , and store all
 previous tea type in an array named 'availableTeas' 
*/ 

let typeTea =  ["earl grey", "green tea", "chai", "oolong tea"] ;
let availableTeas = [];

typeTea.forEach((tea) => {
   if (tea === 'chai') {
     return;
   }
   availableTeas.push(tea);
});
// console.log(availableTeas);


let worldCity = ["London", "New York", "Paris", "Berlin"];
let citys = [];
worldCity.forEach(city => {
    if(city === 'Paris'){
        return;
    }
    citys.push(city);
});

// console.log(citys);

let numbers = [2,5,7,9];
let doubleNumber = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 7){
        continue;
    };
    doubleNumber.push(numbers[i] * 2);
}
console.log(doubleNumber);


let tTea = ["earl grey", "green tea", "chai","jasmine tea", "oolong tea"];
let shortTeas = [];

for (const tea of tTea) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}
//  console.log(shortTeas);