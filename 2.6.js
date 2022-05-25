const readlineSync = require("readline-sync");
let day = readlineSync.question("Donne moi un chiffre entre 1 et 7 : ");

switch(day){
  case "1":
    console.log("Lundi");
    break;
  case "2":
    console.log("Mardi");
    break;
  case "3":
    console.log("Mercredi");
    break;
  case "4":
    console.log("Jeudi");
    break;
  case "5":
    console.log("Vendredi");
    break;
  case "6":
    console.log("Samedi");
  case "7":
    console.log("Dimanche");
    break;
  default:
    console.log("Apprend à compter");
}