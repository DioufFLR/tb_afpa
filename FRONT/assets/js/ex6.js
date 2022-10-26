// // Cours : Tableau vide
//
// let myTable = [];
// myTable[0] = ["pomme"];
// myTable[1] = ["[poire"];
//
// // Fonctions length pour connaitre la taille d'un tableau
//
// let nb = myTable.length;
// console.log("Le tableau contient " + nb + " élements");
//
// // length + boucle for
//
// let myArray = ["pomme", "poire", "banane", "fraise", "abricot"];
//
// for (let i = 0; i < myArray.length; i++) {
//     console.log("Fruit : " + myArray[i]);
// }
//
// length + boucle for in
//
// for (let fruit in myArray) {
//     console.log("Fruit : " + myArray[fruit]);
// }
//
// Fonctions de manipulation de données d'un tableau
//
// // concat = Réunit deux tableaux entre eux
// let fruit =["pomme", "poire", "banane", "fraise"];
// let autres = ["sucre", "farine", "oeufs"];
// let ingredients = fruit.concat(autres);
// document.write("fonction concat : " + ingredients);
//
// indexOf = Retourne le premier indice pour lequel on retrouve un élément dans un tableau
// console.log(fruit.indexOf("banane"));
//
// Tableaux multidimensionnels
//
// let tab = [];
// tab[0] = ["poireau", "tomate", "carotte"];
// tab[1] = ["pomme", "poire", "banane"];
// console.log(tab[1][2]);

// Exercice 1
//
// let lengthArray = parseInt(prompt("Choisissez la taille du tableau"));
// let myArray = new Array(lengthArray);
//
// let value;
// for (let i = 0; i < lengthArray; i++) {
//     value = prompt("Rentrez les données du tableau");
//     myArray[i] = [value];
// }
//
// console.log(value);
// console.table(myArray);

// Exercice 2


// let myArray = new Array(lengthArray);
//
// let value;
// for (let i = 0; i < lengthArray; i++) {
//     value = prompt("Rentrez les données du tableau");
//     myArray[i] = [value];
// }
//
// console.log(value);
// console.table(myArray);


function getInteger() {
    let lengthArray = parseInt(prompt("Choisissez la taille du tableau"));
}
getInteger();

function initTab() {

}