"use strict";

playGame(5);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getPlayerChoice() {
  const playerChoice = prompt("Enter your choice: rock | paper | scissors ->: ").toLowerCase();
  return playerChoice;
}

function playRound(cpuSelection, plyrSelection) {
  const tie = cpuSelection === plyrSelection;
  const playerWins = !tie && (
    (plyrSelection === "rock") && (cpuSelection !== "paper")
    || (plyrSelection === "paper") && (cpuSelection !== "scissors")
    || (plyrSelection === "scissors") && (cpuSelection !== "rock")
  );


  const roundResult = tie ? "It's a tie" : playerWins ? "You win" : "You lose";
  const roundDetails = tie ? `You both chose ${cpuSelection}.`
    : playerWins ? `${plyrSelection} beats ${cpuSelection}.`
      : `${cpuSelection} beats ${plyrSelection}.`;

  const round = {
    playerWon: playerWins,
    tie: tie,
    message: `${roundResult}!`,
    details: roundDetails,
  };

  return round;
}

function playGame(rounds) {
  let plyrScore = 0;
  let cpuScore = 0;
  let currentRd = 1;
  let rd;

  while (currentRd <= rounds) {
    rd = playRound(getComputerChoice(), getPlayerChoice());

    if (rd.tie) {
      plyrScore++;
      cpuScore++;
    } else if (rd.playerWon) {
      plyrScore++;
    } else cpuScore++;

    let stats = `Round: ${currentRd} Player: ${plyrScore} CPU: ${cpuScore}`;
    console.log(stats);
    console.log(rd.message.concat("\n", rd.details));
    currentRd++;
  }

  if (plyrScore === cpuScore) {
    console.log("It's a tie!");
  } else if (plyrScore > cpuScore) {
    console.log("You win!");
  } else console.log("You lose :(");
}
