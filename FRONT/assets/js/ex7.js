let form = document.getElementById("formTest");
console.log(form.societe);

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

