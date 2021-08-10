// if () else

// let andriwsNationality = "Venezuelan";
// let andriwsDiet = "Vegan";

// if (andriwsNationality === "Cuban") {
//   console.log("Let's get arroz con gris");
// } else if (andriwsNationality === "Venezuelan"); {
//   if (andriwsDiet === "Omnivore") {
//     console.log("Let's eat arepas");
//   } else if (andriwsDiet === "Vegan"){
//       console.log("watchout this guy can't eat this");
//   }  else {
//       console.log("Let's eat vegan food!");
//   }
// } else {
//     console.log("He doesn't get to eat");
// }

// ----------------------Switch Cases----------------------------//

let nationality = prompt("What is your nationality?"); // -> remember to download the package (for prompt) or test this code somewhere else
nationality = nationality.toLowerCase();
let foodYouWillEat = "";

switch (nationality) {
  case "Cuban":
    foodYouWillEat = "Puerco";
    break;
  case "Venezuelan":
    foodYouWillEat = "Arepas";
    break;
  case "Argentinian":
    foodYouWillEat = "Asado";
    break;
  default:
    foodYouWillEat = "Pizza";
    break;
}

console.log(
  `Hey! you are ${nationality}, so you are eating ${foodYouWillEat}.`
);
