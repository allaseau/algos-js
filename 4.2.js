const readlineSync = require("readline-sync");

//let random = Math.floor(Math.random() * 10) + 1;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(random(1,10));