const readlineSync = require("readline-sync");

let A = [1,1];
let B = [2,2];


function calcDistance(P1, P2){
dist = 0;
   dist = Math.sqrt(Math.abs(P1[0] - P2[0])**2 + Math.abs(P1[1] - P2[1])**2 )
return dist;
}


console.log("La distance entre A et B est " + Math.round(calcDistance(A, B)*100)/100);