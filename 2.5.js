const readlineSync = require("readline-sync");

var FavNum = readlineSync.question("What is your favorte number ?");

while (FavNum !=42){
    console.log("Are you sure ?");
    var FavNum = readlineSync.question("What is your favorte number ?");
}
console.log("Bon choix");