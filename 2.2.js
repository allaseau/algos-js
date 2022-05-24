const readlineSync = require("readline-sync");

let minAge = readlineSync.question("Give Mininum age for alcool ");
let maxAge = readlineSync.question("Give Maximum age for alcool ");
let current = readlineSync.question(" How old are you ?");

if(minAge>maxAge){
    console.log("You're too dumb for this question");
}else if((minAge<current) && (current<maxAge)){
    console.log("Enjoy");
}
