const readlineSync = require("readline-sync");

let FavNum = readlineSync.question("What is your favorte number ?");

if (FavNum !=42){
    console.log("Are you sure ?");
    let FavNum;
}else{
    console.log("Good choice");
}
