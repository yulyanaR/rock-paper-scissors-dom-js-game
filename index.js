const GameOption = {
    ROCK: "Rock",
    PAPER: "Paper",
    SCISSORS: "Scissors"
};

const message = document.querySelector(".message");
const playbuttons = document.querySelectorAll(".play-btn");
const resetbutton = document.querySelector(".reset-btn");
const welcometext = document.querySelector(".welcome");
const welcomeTextHtml = `<p>Play Rock Paper Scissors!</p>`;
const hands = document.querySelector(".hands");
const handsHtml = `<img class="player-hand" src="images/hPreview.png" alt="Human hand">
<img class="computer-hand" src="images/aPreview.png" alt="Computer hand">`;
let score = [0, 0];
let result = "";
welcometext.innerHTML = welcomeTextHtml;
hands.innerHTML = handsHtml;

for (const button of playbuttons) {
    button.addEventListener("click", playGame);
}

resetbutton.addEventListener("click", resetGame);

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = computerPlay();
    checkWinner(playerSelection, computerSelection);
    welcometext.innerHTML = `<p>Player: ${score[0]} vs Computer: ${score[1]}</p>`;
    message.innerHTML = `<p class="messageText">${playerSelection} vs ${computerSelection}</p>
    <p class="messageText">${result}</p>`;
    hands.innerHTML = `<img class="player-hand" src="images/h${playerSelection}.png" alt="Human hand">
    <img class="computer-hand" src="images/a${computerSelection}.png" alt="Computer hand">`;
}

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    let options = [GameOption.ROCK, GameOption.PAPER, GameOption.SCISSORS];
    return options[random];
}

function checkWinner(pl, co) {
    if (pl === co) {
        result = "Draw - it is a tie!";
    }
    else if (
        (pl === GameOption.ROCK && co === GameOption.SCISSORS) ||
        (pl === GameOption.PAPER && co === GameOption.ROCK) ||
        (pl === GameOption.SCISSORS && co === GameOption.PAPER)
    ) {
        result = "Player wins!";
        score[0]++;
    }
    else {
        result = "Computer wins!";
        score[1]++;
    }
}

function resetGame() {
    score = [0, 0];
    result = "";
    message.innerHTML = "";
    welcometext.innerHTML = welcomeTextHtml;
    hands.innerHTML = handsHtml;
};