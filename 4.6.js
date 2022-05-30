function factorial(a) {

    if (a == 0){
        return 1;
      }
  
    return a * factorial(a - 1);
  }
   
  let num = 3;
  console.log("La factoriel de " + num + " est " + factorial(num));