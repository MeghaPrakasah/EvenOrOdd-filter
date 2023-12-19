
let numbers = [86, 41, 55, 85, 90, 24, 22, 91, 11];
console.log("");


let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers in an array are:"+evenNumbers);
console.log("");

const odds = numbers.filter((num) => num % 2 != 0);
console.log("Odd numbers in an array are:"+odds);
console.log("");
