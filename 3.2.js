const readlineSync = require("readline-sync");

let arr = [1,2,3,4,5];

let total = 0;

for(let i = 0; i < arr.length; i++){
    total += arr[i];
}console.log(total/arr.length);

let arr2 = [100, 101, 102];

let total2 = 0;

for(let i = 0; i < arr2.length; i++){
    total2 += arr2[i];
}console.log(total2/arr2.length);