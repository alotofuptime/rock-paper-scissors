"use strict";

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
  const winMessage = `${plyrSelection} beats ${cpuSelection}!`;
  const lossMessage = `${cpuSelection} beats ${plyrSelection}!`;
  const playerWins = (plyrSelection === "rock") && (cpuSelection !== "paper")
    || (plyrSelection === "paper") && (cpuSelection !== "scissors")
    || (plyrSelection === "scissors") && (cpuSelection !== "rock");

  if (cpuSelection === plyrSelection) {
    return `It's a tie! You both chose ${cpuSelection}`;
  }

  const roundResult = playerWins ? "win" : "lose";
  const resultMessage = `You ${roundResult}!`;

  if (playerWins) {
    return resultMessage.concat("\n", winMessage);
  }

  return resultMessage.concat("\n", lossMessage);
}
