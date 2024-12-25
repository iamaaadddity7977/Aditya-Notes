// Task 1: Sum of First N Natural Numbers

// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
}


console.log(sumOfN(5));   
console.log(sumOfN(10)); 
console.log(sumOfN(0));  

// Task 2: Multiplication Table

// Write a function printMultiplicationTable(n) that returns 
// the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

function printMultiplicationTable(n) {
    return Array.from({ length: 10 }, (_, i) => `${n} * ${i + 1} = ${n * (i + 1)}`);
}


console.log(printMultiplicationTable(2));

// Task 3: Count Vowels in a String

// Write a function countVowels(str) that returns the
// number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}


console.log(countVowels("hello"));    
console.log(countVowels("HELLO"));    
console.log(countVowels("bcdfghjkl"));



