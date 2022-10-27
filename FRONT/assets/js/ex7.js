// Sélectionner le bon formulaire
let form = document.getElementById("formTest");

// Regex pour l'input societe
form.societe.addEventListener("change", function () {
    validSociete(this);
});

const validSociete = function (inputSociete) {
    let regexSociete = new RegExp(/^[a-zA-Z]+$/);
    // Test de la valeur de l'input de societe
    let testSociete = regexSociete.test(inputSociete.value);
    if (testSociete === false) {
        alert("Veuillez rentrez au moins un caractère");
    }
    console.log(testSociete);
}

// Regex pour l'input personnesContact
form.personnesContact.addEventListener("change", function () {
    validPersonnesContact(this);
});

const validPersonnesContact = function (inputPersonnesContact) {
    let regexPersonnesContact = new RegExp(/^[a-zA-Z]+$/);
    // Test de la valeur de l'input de societe
    let testPersonnesContact = regexPersonnesContact.test(inputPersonnesContact.value);
    if (testPersonnesContact === false) {
        alert("Veuillez rentrez au moins un caractère");
    }
    console.log(testPersonnesContact);
}

