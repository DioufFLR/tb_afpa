// ----------------------------------Exercice V Les fonctions

// ----------------------Exercice 1
let x = prompt("Saisissez un nombre");
let y = prompt("Saisissez un nombre");
let result;
let result2;

let produit = function (x, y) {
    result = x * y;
}
produit(x, y);

function cube(x) {
    result2 = x * x * x;
}
cube(x);

// Intégration images avec js

function i() {
    let img = document.createElement("img");
    img.src = "https://ncode.amorce.org/ressources/Pool/TB_DEV/WEB_Javascript_BASES/images/papillon.jpg";
    let div = document.getElementById("i");
    div.appendChild(img);
}
i();

document.write("Le cube de " + x + " est égal à : " + result2);
document.write("<br>Le produit de " + x + " x " + y + "  est égal à : " + result);


// --------------Exercice 2

