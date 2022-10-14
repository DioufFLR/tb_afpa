let firstname = window.prompt("Quel est votre prénom ?");
let name = window.prompt("Quel est votre nom ?");
let gender = window.confirm("Etes-vous un homme ?");

if ((gender) === true) {
    gender = "Homme";
    } else {
    gender = "Femme";
}

alert("Bonjour " + firstname + " " + name + " vous êtes un " + gender + "\nBienvenue sur notre site web!");