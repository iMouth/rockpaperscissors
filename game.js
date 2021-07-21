const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const message = document.querySelector("#message");
const tie = document.querySelector("#tie");

let playerWins = 0;
let computerWins = 0;
let draws = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerWins >= 5 || computerWins >= 5) return;
    game(button.id);
  });
});

function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "Rock";
  } else if (num == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.substring(1);
  if (playerSelection === computerSelection) {
    results.textContent =
      playerSelection + " vs " + computerSelection + "! There was a tie";
    draws += 1;
  } else if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      results.textContent = "You Lose! Paper beats Rock";
      computerWins += 1;
    } else {
      results.textContent = "You Win! Rock beats Scissors";
      playerWins += 1;
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      results.textContent = "You Win! Paper beats Rock";
      playerWins += 1;
    } else {
      results.textContent = "You Lose! Scissors beats Paper";
      computerWins += 1;
    }
  } else {
    if (computerSelection == "Rock") {
      results.textContent = "You Lose! Rock beats Scissors";
      computerWins += 1;
    } else {
      results.textContent = "You Win! Scissors beats Paper";
      playerWins += 1;
    }
  }
}

function game(playerSelection) {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  player.textContent = "Wins: " + playerWins;
  computer.textContent = "Loses: " + computerWins;
  tie.textContent = "Ties: " + draws;

  if (playerWins >= 5) {
    message.textContent = "You won!";
  } else if (computerWins >= 5) {
    message.textContent = "You lost!";
  }
}
