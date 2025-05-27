let counterPlayer = 0;
let counterBot = 0;
let counterGame = 0;

const dynamicText = document.querySelector("#dynamic-text");
const paperIcon = document.querySelector('#paper-icon');
const scissorIcon = document.querySelector('#scissor-icon');
const rockIcon = document.querySelector('#rock-icon');
const playerScore = document.querySelector("#player-score");
const botScore = document.querySelector('#bot-score');
const resetBtn = document.querySelector('#reset-btn');


paperIcon.addEventListener('click', playRound);
scissorIcon.addEventListener('click', playRound);
rockIcon.addEventListener('click', playRound);
resetBtn.addEventListener('click', resetGame);


function computerPlay() {

    const weaponArray = ["rock", "paper", "scissor"];
    const randomInt = Math.floor(Math.random() * 3);
    return weaponArray[randomInt];
}

function playRound(event) {

    if (counterGame >= 5) return;

    const userInput = event.target.dataset.icon;
    const botInput = computerPlay();


    if (
        (userInput === "rock" && botInput === "rock") ||
        (userInput === "paper" && botInput === "paper") ||
        (userInput === "scissor" && botInput === "scissor")
    ) {
        dynamicText.innerHTML = "Tie! No winner.";
        counterGame++;
    } else if (
        (userInput === "rock" && botInput === "scissor") ||
        (userInput === "paper" && botInput === "rock") ||
        (userInput === "scissor" && botInput === "paper")
    ) {
        dynamicText.innerHTML = `Player, you win! ${userInput} beats ${botInput}`;
        counterPlayer++;
        counterGame++;
    } else {
        dynamicText.innerHTML = `Computer, you win! ${userInput} beats ${botInput}`;
        counterBot++;
        counterGame++;
    }

    playerScore.innerHTML = counterPlayer;
    botScore.innerHTML = counterBot;


    if (counterGame === 5) {
        setTimeout(() => {
            if (counterPlayer > counterBot) {
                dynamicText.innerHTML = `Well done, YOU win!`;
            } else if (counterBot > counterPlayer) {
                dynamicText.innerHTML = `Sorry bro, you lose.`;
            } else {
                dynamicText.innerHTML = `It's a draw overall!`;
            }
            disableGame();
        }, 500);
    }
}

function disableGame() {
    paperIcon.removeEventListener('click', playRound);
    scissorIcon.removeEventListener('click', playRound);
    rockIcon.removeEventListener('click', playRound);
}

function resetGame() {
    location.reload();
  }
  




