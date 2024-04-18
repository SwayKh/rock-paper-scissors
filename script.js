console.log("Hello World!");

let choice = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let playerScore = 0;
let numberOfTie = 0;

function computerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function reset() {
  const winnerDiv = Array.from(document.querySelectorAll(".winnerDiv"));
  winnerDiv.forEach((element) => {
    element.remove();
  });

  compScore = 0;
  playerScore = 0;
  numberOfTie = 0;

  pScore.textContent = `Player : ${playerScore}`;
  cScore.textContent = `Computer : ${compScore}`;
  tScore.textContent = `Ties : ${numberOfTie}`;
}

function updateScore() {
  pScore.textContent = `Player : ${playerScore}`;
  cScore.textContent = `Computer : ${compScore}`;
  tScore.textContent = `Ties : ${numberOfTie}`;

  if (compScore + numberOfTie + playerScore === 5) {
    console.log(
      `pScore: ${playerScore} cScore: ${compScore} tScore: ${numberOfTie}`,
    );
    let winner = "";
    if (playerScore > compScore) {
      winner = "Player Wins :)";
    } else if (playerScore < compScore) {
      winner = "Computer Wins :(";
    } else {
      winner = "Its a Tie (-_-)";
    }
    alert(winner);
    reset();
  }
}

function playRound(playerChoice, compChoice) {
  let whoWins = "";

  if (
    String(playerChoice).toUpperCase() === "ROCK" &&
    String(compChoice) === "Rock"
  ) {
    whoWins = "Tie";
    numberOfTie += 1;
  } else if (
    String(playerChoice).toUpperCase() === "ROCK" &&
    String(compChoice) === "Scissors"
  ) {
    whoWins = "Player Wins";
    playerScore += 1;
  } else if (
    String(playerChoice).toUpperCase() === "ROCK" &&
    String(compChoice) === "Paper"
  ) {
    whoWins = "Computer Wins";
    compScore += 1;
  } else if (
    String(playerChoice).toUpperCase() === "PAPER" &&
    String(compChoice) === "Rock"
  ) {
    whoWins = "Player Wins";
    playerScore += 1;
  } else if (
    String(playerChoice).toUpperCase() === "PAPER" &&
    String(compChoice) === "Scissors"
  ) {
    whoWins = "Computer Wins";
    compScore += 1;
  } else if (
    String(playerChoice).toUpperCase() === "PAPER" &&
    String(compChoice) === "Paper"
  ) {
    whoWins = "Tie";
    numberOfTie += 1;
  } else if (
    String(playerChoice).toUpperCase() === "SCISSORS" &&
    String(compChoice) === "Rock"
  ) {
    whoWins = "Computer Wins";
    compScore += 1;
  } else if (
    String(playerChoice).toUpperCase() === "SCISSORS" &&
    String(compChoice) === "Scissors"
  ) {
    whoWins = "Tie";
    numberOfTie += 1;
  } else if (
    String(playerChoice).toUpperCase() === "SCISSORS" &&
    String(compChoice) === "Paper"
  ) {
    whoWins = "Player Wins";
    playerScore += 1;
  } else {
    console.log("Please choose a valid choice");
  }
  return whoWins;
}

const scoreContainer = document.querySelector(".scoreContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const winnerContainer = document.querySelector(".winnerContainer");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const pScore = document.querySelector("#playerScore");
const tScore = document.querySelector("#tieScore");
const cScore = document.querySelector("#computerScore");

rock.addEventListener("click", function (e) {
  let winner = playRound(e.target.id, computerChoice());
  const div = document.createElement("div");
  div.className = "winnerDiv";
  div.textContent = `This round: ${winner}`;
  winnerContainer.appendChild(div);
  setTimeout(() => {
    updateScore();
  }, 1000);
});

paper.addEventListener("click", function (e) {
  let winner = playRound(e.target.id, computerChoice());
  const div = document.createElement("div");
  div.className = "winnerDiv";
  div.textContent = `This round: ${winner}`;
  winnerContainer.appendChild(div);
  setTimeout(() => {
    updateScore();
  }, 1000);
});

scissors.addEventListener("click", function (e) {
  let winner = playRound(e.target.id, computerChoice());
  const div = document.createElement("div");
  div.className = "winnerDiv";
  div.textContent = `This round: ${winner}`;
  winnerContainer.appendChild(div);
  setTimeout(() => {
    updateScore();
  }, 1000);
});
