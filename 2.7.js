const readlineSync = require("readline-sync");

let Num = new Number(readlineSync.question("Donne moi un chiffre "));

let sum = 0;

for(i=0; i<Num; i++){
    let Num = new Number(readlineSync.question("Donne moi un chiffre "));
    sum += Num;
}console.log(sum);


