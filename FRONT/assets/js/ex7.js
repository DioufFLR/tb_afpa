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
    let regexCodePostal = new RegExp(/^([0-9]{5})$/);
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