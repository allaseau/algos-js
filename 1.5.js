const readlineSync = require("readline-sync");

let num1 = readlineSync.question('Give me a decimal number ?');
let num2 = readlineSync.question('Give me another one ?');
console.log(num1*num2);