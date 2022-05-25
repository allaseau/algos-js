const readlineSync = require("readline-sync");

let arr = [1,2,3,4,5];

let copy = arr.map(x => x);
console.log(copy);
let arr2 = [];
arr2.push.apply(arr2, copy);
console.log(arr2);
