let i = 1;
let firstname = String(prompt("Saisissez le prénom n " + i + " ou cliquez sur annuler pour arrêter la saisie"));

let prenom1 = document.createElement('p');
prenom1.textContent = firstname;
document.body.appendChild(prenom1);

let prenom2;

while (firstname !== "") {
    i++;
    firstname = prompt("Saisissez le prénom n " + i + " ou cliquez sur annuler pour arrêter la saisie")
    prenom2 = document.createElement("p");
    prenom2.textContent = firstname;
    document.body.appendChild(prenom2);
}

