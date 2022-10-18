// ----------------------Les boucles

// Boucle while

// let i = 0;
// while (i < 10) {
//     console.log("bonjour" + i);
//     i = i + 1;
// }

// Boucle for itérer plusieurs fois

// for (let i = 0; i < 10; i++) {
//     console.log("Bonjour");
// }

// Boucle for in itérer sur les clés d'un objet ou d'un tableau

// const notes = [12, 13, 16, 8]
// const person = {
//     firstname: "John",
//     lastname: "Doe"
// }
// for (let i in notes) {
//     console.log(notes[i]);
// }

// const greeting = 'Bonjour';
// for (let letter in greeting) {
//     console.log(letter)
// }

// Boucle for of (parcourir les différents éléments d'un tableau

// const greeting = 'Bonjour';
// for (let letter of greeting) {
//     console.log(letter)
// }

// exercice demandez a l'utilisateur d'inscrire un chiffre compris entre 0 et 10 puis affichez les autres valeurs comprisent en dessous

// let chiffre = prompt("Entrez un chiffre");
// if (chiffre > 10 || chiffre < 0) {
//     console.log("Le nombre n'est pas entre 0 et 10")
// } else {
//     while (chiffre >= 0) {
//         console.log(chiffre);
//         chiffre--;
//     }
// }

// demandez un nombre à l'utilisateur jusqu'à ce qu'il trouve la bonne valeur

// let guess = 8;
// let chiffre = prompt("Votre chiffre") * 1

const d = new Date();
let time = d.getFullYear();
console.log(d);