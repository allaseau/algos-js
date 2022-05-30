const readlineSync = require("readline-sync");

let multiRand = (n) => {
    let rand10 =  ()=>{
        return Math.floor(Math.random() * 10 +1);
    }

    let array = []
    do(
        array.push(rand10(1,10))
    )
    while (array.length  <= n - 1)

    return array
}
let n = readlineSync.question("Combien de chiffres souhaitez-vous?")
console.log(multiRand(n))