

            //-------------------Mettre en commentaire les exercices non concernés pour exécuter---------------------

// -------------Exercice 1 Parité

let number = prompt("rentrez un nombre : ");

if ( number % 2 === 0) {
    alert("nombre pair");
} else {
    alert("nombre impaire");
}

// -------------Exercice 2 age

let date = prompt("Quelle est votre année de naissance ? ");

let year = 2022;
let age = year - date;

alert("Vous avez : " + age + " ans");

if (age >= 18){
    alert("Vous etes majeur");
} else {
    alert("Vous etes mineur");
}

// -------------Exercice 3 Calculette

let nbr1 = prompt("Saisissez un nombre entier");
if (nbr1 >= 1) {
} else {
    alert("Saisissez un nombre supérieur à zéro");
}

let nbr2 = prompt("Saisissez un nombre entier");
if (nbr2 >= 1) {
} else {
    alert("Saisissez un nombre supérieur à zéro");
}

result  = Number(nbr1) + Number(nbr2);
alert("Le résultat est : " + result);
