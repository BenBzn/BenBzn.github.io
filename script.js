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

//Function that apply the reddot to the right player
function redDotP1(){
    dot1.style.display = 'inline-block';
    dot2.style.display = 'none';
};
function redDotP2(){
    dot1.style.display = 'none';
    dot2.style.display = 'inline-block';
};

//Function that return integer between 1 & 6
function getNumber() {
    rollNumber = Number(Math.floor(Math.random() * 6 + 1));
    console.log("Résultat du lancé : " + rollNumber);
    return rollNumber;
};

//Display dice face according to rollNumber
function diceFace() {
    let dice = document.getElementById('dice');
    dice.src="./images/dice"+rollNumber+".png";
};

//Function reset game
function resetGame(){
    currentPlayer = "player1"
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
    redDotP1();
};

//Reset game when click on newGame Btn
newGame.addEventListener('click', resetGame);

//Setting roll Btn
roll.addEventListener('click', () => {
        getNumber();
        diceFace();
//Player1 roll the dice, if roll 1 pass, add points to current if between 2-6
        if (currentPlayer == "player1") {
            currentScore1 = currentScore1 + rollNumber;
            currentScoreDisplayP1.textContent = currentScore1;
            if (rollNumber === 1) {
                currentPlayer = "player2";
                currentScore1 = 0;
                currentScoreDisplayP1.textContent = '0';
                redDotP2();
            }
        }
//Player2 roll the dice, if roll 1 pass, add points to current if between 2-6
        else {
            currentScore2 = currentScore2 + rollNumber;
            currentScoreDisplayP2.textContent = currentScore2;
            console.log("Player 2 totabilise sur ce round : " + currentScore2 + " points");
            if (rollNumber === 1) {
                currentPlayer = "player1";
                currentScore2 = 0;
                currentScoreDisplayP2.textContent = '0';
                redDotP1();
            }
        }
});
    
//Setting hold Btn
hold.addEventListener('click', () => {
//On click if player 1, adding current to global
    if (currentPlayer == "player1") {
        currentScoreDisplayP1.textContent = '0';
        globalScoreDisplayP1.textContent = currentScore1 + globalScore1;
        globalScore1 = globalScore1 + currentScore1;
        currentScore1 = 0;
        currentPlayer = "player2"
        redDotP2();
        if(globalScore1 >= 100) {
            alert('Le player 1 remporte la partie ! Cliquez sur New game pour relancer.')
        };
    }
//On click if player 2, adding current to global
    else {
        currentScoreDisplayP2.textContent = '0';
        globalScoreDisplayP2.textContent = currentScore2 + globalScore2;
        globalScore2 = globalScore2 + currentScore2;
        currentScore2 = 0;
        currentPlayer = "player1"
        redDotP1();
        if(globalScore2 >= 100) {
            alert('Le player 2 remporte la partie ! Cliquez sur New game pour relancer.')
        };
    }
});

//DARK && LIGHT MODE

let darkToggle = document.getElementById('darkToggle');
let lightToggle = document.getElementById('lightToggle');
let bodyBg = document.getElementById('bg');


darkToggle.addEventListener('click', ()=> {
    bodyBg.classList.replace('light', 'dark');
    darkToggle.style.display = 'none';
    lightToggle.style.display = 'block';
});

lightToggle.addEventListener('click', () => {
    bodyBg.classList.replace('dark', 'light');
    darkToggle.style.display = 'block';
    lightToggle.style.display = 'none';
});
