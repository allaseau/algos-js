const readlineSync = require("readline-sync");

let arr = [1,2,3,4,5];

let maxValue = Math.max.apply(null,arr);
let minValue = Math.min.apply(null,arr);
console.log(maxValue);
console.log(minValue);
