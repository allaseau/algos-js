const readlineSync = require("readline-sync");

let i = 1;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("le nombre paire "+i+" sa moitié est "+ i/2);
    }else{
        console.log("le nombre impaire "+i+" mutiplié par trois est "+ i*3);
    }
}