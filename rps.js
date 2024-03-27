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
  const tie = cpuSelection === plyrSelection;
  const playerWins = !tie && (plyrSelection === "rock") && (cpuSelection !== "paper")
    || (plyrSelection === "paper") && (cpuSelection !== "scissors")
    || (plyrSelection === "scissors") && (cpuSelection !== "rock");


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
