// -----------------------Exercice 1 Saisie

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

let i = 0;
let note = parseInt(prompt("Saisissez une note et saisissez 0 si vous voulez calculez la moyenne de vos notes"));
let moy;

let result;
while (note != 0) {
    result = note + i;
    console.log(note);
    i++;
    note = prompt("Saisissez une note et saisissez 0 si vous voulez calculez la moyenne de vos notes");
    if (note === 0) {
        moy = result
    }
}

console.log(i);