//
//
//             -------------------Mettre en commentaire les exercices non concernés pour exécuter---------------------
//
// -------------Exercice 1 Parité
//
// let number = prompt("rentrez un nombre : ");
//
// if ( number % 2 === 0) {
//     alert("nombre pair");
// } else {
//     alert("nombre impaire");
// }
//
// -------------Exercice 2 age
//
// const dateDuJour = new Date();
// let anneeJour = dateDuJour.getFullYear();
// let anneeDeNaissance = window.prompt("Taper votre année de naissance");
//
// function annee (x, y) {
//     let age = x - y;
//     if (age >= 18) {
//         alert("Vous êtes majeur car vous avez " + age + " ans")
//     } else if (age < 18 && age > 1){
//         alert("Vous êtes mineur car vous avez " + age + " ans")
//     } else {
//         alert("Vous êtes mineur car vous avez " + age + " an")
//     }
// }
//
// annee(anneeJour, anneeDeNaissance);
//
//
// -------------Exercice 3 Calculette
//
// let nbr1 = window.parseInt(prompt("Taper un nombre"));
// let nbr2 = window.parseInt(prompt("Taper un nombre"));
// let operator = window.prompt("Saisissez un opérateur (+, -, / ou *)");
//
// if (nbr1 !== 0 && nbr2 !== 0) {
//     if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/"){
//         alert("mauvais opérateurs veuillez réessayer");
//     } else {
//         if (operator === "+") {
//             calcul = nbr1 + nbr2;
//             alert("Le résultat est : " + calcul);
//         }
//         else if (operator === "-") {
//             calcul = nbr1 - nbr2;
//             alert("Le résultat est : " + calcul);
//         }
//         else if (operator === "*") {
//             calcul = nbr1 * nbr2;
//             alert("Le résultat est : " + calcul);
//         }
//         else if (operator === "/") {
//             calcul = nbr1 / nbr2;e
//             alert("Le résultat est : " + calcul);
//         }
//     }
// } else {
//     alert("La valeur 0 ne peut être prise en compte");
// }
//
//
