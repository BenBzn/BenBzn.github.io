//All necessary Btn selection in dom
const newGame = document.getElementById('newGame')
const roll = document.getElementById('btnRoll');
const hold = document.getElementById('btnHold')
//Player selection (redDot)
const player1Dot = document.getElementById('dot1');
const player2Dot = document.getElementById('dot2');
//Var roll result
let rollNumber;
//Select global score in dom
const globalScoreDisplayP1 = document.getElementById('globalScore1')
const globalScoreDisplayP2 = document.getElementById('globalScore2')
//Select current score in dom
const currentScoreDisplayP1 = document.getElementById('currentScore1');
const currentScoreDisplayP2 = document.getElementById('currentScore2');
//Scores var
let globalScore1 = Number(0);
let globalScore2 = Number(0);
let currentScore1 = Number(0);
let currentScore2 = Number(0);
//Var for selecting player
let currentPlayer = "player1";



//Function that return integer between 1 & 6
function getNumber() {
    rollNumber = Number(Math.floor(Math.random() * 6 + 1));
    console.log("Résultat du lancé : " + rollNumber);
    return rollNumber;
};

//Display dice face according to rollnumber
function diceFace() {
    let dice = document.getElementById('dice');
    dice.src="./images/dice"+rollNumber+".png";
};

//Roll dice and add score to current

// roll.addEventListener('click', function () {
//     getNumber();
//     diceFace();
//     getCurrentScoreP1();
//     //Player1 passe son tour si le dé fait 1, current retourne à 0
//     if(rollNumber === 1){
//         currentScore1 = 0;
//         currentScoreDisplayP1.textContent = '0';
//         console.log('Le Player 1 est tombé sur le chiffre 1, son current retourne à 0. Au tour du Player2 ! ');
//         dot1.style.display = 'none';
//         dot2.style.display = 'inline-block';
//     };
// });

//Function add roll score to current for player1
function getCurrentScoreP1 () {
    currentScore1 = currentScore1 + rollNumber;
    currentScoreDisplayP1.textContent = currentScore1;
    console.log("Player 1 totabilise sur ce round : " + currentScore1 + " points");
}
//Function add roll score to current for player2
function getCurrentScoreP2 () {
    currentScore2 = currentScore2 + rollNumber;
    currentScoreDisplayP2.textContent = currentScore2;
    console.log("Player 2 totabilise sur ce round : " + currentScore2 + " points");
}
//Function reset game
function resetGame(){
    globalScoreDisplayP1.textContent = 0;
    globalScoreDisplayP2.textContent = 0;
    currentScoreDisplayP1.textContent = 0;
    currentScoreDisplayP2.textContent = 0;
    globalScore1 = 0;
    globalScore2 = 0;
    currentScore1 = 0;
    currentScore2 = 0;
    dice.src="./images/dice1.png";
    console.log("Nouvelle partie");
    dot1.style.display = 'inline-block';
    dot2.style.display = 'none';
};

//Function player1

// // Setting hold Btn

// hold.addEventListener('click', function () {
//     globalScore1 = globalScore1 + currentScore1;
//     globalScoreDisplayP1.textContent = globalScore1 + currentScore1;
//     console.log('Score actuel du joueur 1 : ' + globalScore1 +', au tour du Player 2');
//     currentScoreDisplayP1.textContent = 0;
//     //Si le score max est atteint :
//     if(globalScore1 >= 100) {
//         alert('Player 1 remporte la partie !')
//     } else if (dot1.style.display = 'inline-block') {
//         dot2.style.display = 'inline-block';
//         dot1.style.display = 'none';}
// });
//Setting roll Btn
roll.addEventListener('click', function() {
    getNumber();
    diceFace();
    //Player1 roll the dice, if roll 1 pass, add points to current if between 2-6
    if(rollNumber === 1 && currentPlayer == "player1") {
        currentPlayer = "player2"
        currentScore1 = 0;
        currentScoreDisplayP1.textContent = '0';
        dot1.style.display = 'none';
        dot2.style.display = 'inline-block';
        console.log('Le Player 1 est tombé sur le chiffre 1, son current retourne à 0. Au tour du Player2 !');
        } 
        
        else if(rollNumber != 1) {
            getCurrentScoreP1();
        }
    ////Player2 roll the dice, if roll 1 pass, add points to current if between 2-6
        else if(rollNumber === 1 && currentPlayer == "player2"){
            currentPlayer = "player1"
            currentScore2 = 0;
            currentScoreDisplayP2.textContent = '0';
            dot1.style.display = 'inline-block';
            dot2.style.display = 'none';
            console.log('Le Player 2 est tombé sur le chiffre 1, son current retourne à 0. Au tour du Player1 !');
            } else if(rollNumber != 1) {
                getCurrentScoreP2();
            }
        }
);

//Reset game when click on newGame Btn
newGame.addEventListener('click', resetGame());

        
        