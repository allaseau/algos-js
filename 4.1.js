const readlineSync = require("readline-sync");

let width = readlineSync.question("Donne moi une longueur");
let height = readlineSync.question("Donne moi une largeur");

function calcSurface(a,b){
    return a*b;
}
console.log(calcSurface(width, height));
