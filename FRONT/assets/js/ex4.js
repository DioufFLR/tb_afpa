// ----------------------Exercice 1 Saisie
//
// let i = 1;
// let firstname = String(prompt("Saisissez le prénom n " + i + " ou cliquez sur annuler pour arrêter la saisie"));
//
// let prenom1 = document.createElement('p');
// prenom1.textContent = firstname;
// document.body.appendChild(prenom1);
//
// let prenom2;
//
// while (firstname !== "") {
//     i++;
//     firstname = prompt("Saisissez le prénom n " + i + " ou cliquez sur annuler pour arrêter la saisie")
//     prenom2 = document.createElement("p");
//     prenom2.textContent = firstname;
//     document.body.appendChild(prenom2);
// }
// console.log(i);

// ----------------------Exercice 2 Entiers inférieurs à N
//
// let i = 0;
// let number = window.prompt("Saisissez un nombre");
//
// let result;
// for (i = 0; i < number; i++) {
//     result = i;
//     let letter = document.createElement("p");
//     letter.textContent = result;
//     document.body.appendChild(letter);
// }

// ----------------------Exercice 3 Moyenne
// let i;
// let nbr1 = parseInt(prompt("Saisissez une note et saisissez 0 si vous voulez calculer la moyenne de vos notes"));
// let somme = nbr1;
//
// for (i = 0; nbr1 !== 0; i++) {
//     console.log(nbr1);
//     nbr1 = parseInt(prompt("Saisissez une note et saisissez 0 si vous voulez calculer la moyenne de vos notes"));
//     somme += nbr1;
// }
// console.log(somme);
// let moyenne = somme / i;
// alert("Votre moyenne est égal à : " + moyenne);

// ----------------------Exercice 4 Multiples
//
// let i = 1;
// let multiple = parseInt(prompt("Rentrez le multiple que vous souhaitez"));
// let fois = parseInt(prompt("Combien de fois voulez vous le multipliez"));
// let result;
//
// while (i !== fois) {
//     i++;
//     result = i * multiple;
//     console.log(result);
// }

// ----------------------Exercice 5 Nombre de voyelles


