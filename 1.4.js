const readlineSync = require("readline-sync");

let firstName = readlineSync.question('What is your first name ?');
let name = readlineSync.question('What is your name ?');
let city = readlineSync.question('Where do you live ?');

console.log(`Your name is ${name} ${firstName} and you live in ${city}`);
