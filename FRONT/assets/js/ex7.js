// ----------------------Sélectionner le bon formulaire------------------------------

let form = document.getElementById("formTest");

// ----------------------Regex pour l'input societe-------------------------------

form.societe.addEventListener("change", function () {
    validSociete(this);
});

const validSociete = function (inputSociete) {
    let regexSociete = new RegExp(/^[a-zA-Z]+$/);
    // Test de la valeur de l'input de societe
    let testSociete = regexSociete.test(inputSociete.value);
    if (testSociete === false) {
        alert("Veuillez rentrez au moins un caractère et/ou uniquement des lettres");
    }
    console.log(testSociete);
}

// ----------------------Regex pour l'input personnesContact------------------------

form.personnesContact.addEventListener("change", function () {
    validPersonnesContact(this);
});

const validPersonnesContact = function (inputPersonnesContact) {
    let regexPersonnesContact = new RegExp(/^[a-zA-Z]+$/);
    // Test de la valeur de l'input de societe
    let testPersonnesContact = regexPersonnesContact.test(inputPersonnesContact.value);
    if (testPersonnesContact === false) {
        alert("Veuillez rentrez au moins un caractère et/ou uniquement des lettres");
    }
    console.log(testPersonnesContact);
}

// ----------------------Regex pour le code postal avec 5 caractères numériques------

form.codePostal.addEventListener("change", function () {
    validCodePostal(this);
});

const validCodePostal = function (inputCodePostal) {
    let regexCodePostal = new RegExp(/^([a-z0-9]{5})$/);
    let testCodePostal = regexCodePostal.test(inputCodePostal.value);
    if (testCodePostal === false) {
        alert("Veuillez rentrez un code postal valide");
    }
    console.log(testCodePostal);
}

// ----------------------Regex pour l'input ville---------------------------------------

form.ville.addEventListener("change", function () {
    validVille(this);
});

const validVille = function (inputVille) {
    let regexVille = new RegExp(/^[a-zA-Z]+$/);
    // Test de la valeur de l'input de societe
    let testVille = regexVille.test(inputVille.value);
    if (testVille === false) {
        alert("Veuillez rentrez au moins un caractère et/ou uniquement des lettres");
    }
    console.log(testVille);
}

// ----------------------Fonction checkForm pour envoyer ou non le formulaire---------------

// function checkForm() {
//     alert("Control champ " + form.elements["societe"].value + " " + form.elements["personnesContact"].value);
//     return false;
// }
// checkForm();

// ---------------------- TODO list
//function avec return false
//mettre required dans les input
//le choix du menu déroulant qui s'intègre dans la texte area
//choisissez ne doit pas apparaître dans la zone de texte area
//effacer les champs des input quand la string n'est pas bonne
