//Selection des boutons et du dé, ajout variable pour stocker la valeur du lancé

let roll = document.getElementById('btnRoll');
let dice = document.getElementById('dice');
let newGame = document.getElementById('newGame')
let rollNumber;

//Fonction lancé de dé, retourne un entier entre 1 et 6

function getNumber() {
    rollNumber = Math.floor(Math.random() * 6 + 1);
    console.log("Résultat du lancé : " + rollNumber);
    return rollNumber;
};

//Affichage face du dé selon lancé

function diceFace() {
    dice.src="./images/dice"+rollNumber+".png";
};

//Lancement du dé

roll.addEventListener('click', function() {
    getNumber();
    diceFace();
});