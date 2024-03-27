"use strict";

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getPlayerChoice() {
  const playerChoice = prompt("Enter your choice: rock|paper|scissors ->: ").toLowerCase();
  return playerChoice;
}
