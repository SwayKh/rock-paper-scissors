console.log("Hello World!");

let choice = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let playerScore = 0;
let numberOfTie = 0;

function computerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function updateScore() {
    pScore.textContent = `Player : ${playerScore}`;
    cScore.textContent = `Computer : ${compScore}`;
    tScore.textContent = `Ties : ${numberOfTie}`;
}

function playRound(playerChoice, compChoice) {
    let whoWins = "";

    if (String(playerChoice).toUpperCase() === "ROCK" && String(compChoice) === "Rock") {
        whoWins = "Tie";
        numberOfTie += 1;

    } else if (String(playerChoice).toUpperCase() === "ROCK" && String(compChoice) === "Scissors") {
        whoWins = "Player Wins";
        playerScore += 1;

    } else if (String(playerChoice).toUpperCase() === "ROCK" && String(compChoice) === "Paper") {
        whoWins = "Computer Wins";
        compScore += 1;

    } else if (String(playerChoice).toUpperCase() === "PAPER" && String(compChoice) === "Rock") {
        whoWins = "Player Wins";
        playerScore += 1;

    } else if (String(playerChoice).toUpperCase() === "PAPER" && String(compChoice) === "Scissors") {
        whoWins = "Computer Wins";
        compScore += 1;

    } else if (String(playerChoice).toUpperCase() === "PAPER" && String(compChoice) === "Paper") {
        whoWins = "Tie";
        numberOfTie += 1;

    } else if (String(playerChoice).toUpperCase() === "SCISSORS" && String(compChoice) === "Rock") {
        whoWins = "Computer Wins";
        compScore += 1;

    } else if (String(playerChoice).toUpperCase() === "SCISSORS" && String(compChoice) === "Scissors") {
        whoWins = "Tie";
        numberOfTie += 1;

    } else if (String(playerChoice).toUpperCase() === "SCISSORS" && String(compChoice) === "Paper") {
        whoWins = "Player Wins";
        playerScore += 1;
    } else {
        console.log("Please choose a valid choice")
    }
    return whoWins;
}

function Game() {

    // for (let i = 0; i < 5; i++) {
    //     let choiceOfComputer = computerChoice();
    //     choiceOfPlayer = window.prompt("Enter a Choice[Rock, Paper, Scissors]", "paper")
    //     console.log(playRound(choiceOfPlayer, choiceOfComputer));
    //     console.log(`Player Score : ${playerScore} ComputerScore: ${compScore}`)
    // }
    // if (playerScore > compScore) {
    //     alert(`You Win!\nPlayer : ${playerScore} Computer : ${compScore} Tie : ${numberOfTie}`);
    // } else if (playerScore < compScore) {
    //     alert(`You Lose!\nPlayer : ${playerScore} Computer : ${compScore} Tie : ${numberOfTie}`);
    // } else {
    //     alert(`Tie!\nPlayer : ${playerScore} Computer : ${compScore} Tie : ${numberOfTie}`);
    // }
}
Game();

const scoreContainer = document.querySelector('.scoreContainer');
const buttonContainer = document.querySelector('.buttonContainer');
const winnerContainer = document.querySelector('.winnerContainer');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const pScore = document.querySelector('#playerScore');
const tScore = document.querySelector('#tieScore');
const cScore = document.querySelector('#computerScore');


rock.addEventListener('click', function (e) {
    const div = document.createElement('div');
    div.textContent = "This round: " + playRound(e.target.id, computerChoice())
    winnerContainer.appendChild(div)
    updateScore();
})

paper.addEventListener('click', function (e) {
    const div = document.createElement('div');
    div.textContent = "This round: " + playRound(e.target.id, computerChoice())
    winnerContainer.appendChild(div)
    updateScore();
})

scissors.addEventListener('click', function (e) {
    const div = document.createElement('div');
    div.textContent = "This round: " + playRound(e.target.id, computerChoice())
    winnerContainer.appendChild(div)
    updateScore();
})



