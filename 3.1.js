const readlineSync = require("readline-sync");

let arr = [1,2,3,4,5];

let total = 0;

for(let i = 0; i < arr.length; i++){
    total += arr[i];
}console.log(total);