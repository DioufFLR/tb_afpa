

            //-------------------Mettre en commentaire les exercices non concernés pour exécuter---------------------

// -------------Exercice 1 Parité

// let number = prompt("rentrez un nombre : ");
//
// if ( number % 2 === 0) {
//     alert("nombre pair");
// } else {
//     alert("nombre impaire");
// }

// -------------Exercice 2 age

const dateDuJour = new Date();
let anneeJour = dateDuJour.getFullYear();
let anneeDeNaissance = window.prompt("Taper votre année de naissance");

function annee (x, y) {
    let age = x - y;
    if (age >= 18) {
        alert("Vous êtes majeur car vous avez " + age + " ans")
    } else if (age < 18 && age > 1){
        alert("Vous êtes mineur car vous avez " + age + " ans")
    } else {
        alert("Vous êtes mineur car vous avez " + age + " an")
    }
}

annee(anneeJour, anneeDeNaissance);


// -------------Exercice 3 Calculette

// let nbr1 = prompt("Saisissez un nombre entier");
// if (nbr1 >= 1) {
// } else {
//     alert("Saisissez un nombre supérieur à zéro");
// }
//
// let nbr2 = prompt("Saisissez un nombre entier");
// if (nbr2 >= 1) {
// } else {
//     alert("Saisissez un nombre supérieur à zéro");
// }
//
// result  = Number(nbr1) + Number(nbr2);
// alert("Le résultat est : " + result);
