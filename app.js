'use strict';

const choices = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
};

const getComputerChoice = () => {
  const cpuChoices = Object.values(choices);
  const randomIndex = Math.floor(Math.random() * cpuChoices.length);
  return cpuChoices[randomIndex];
};

const playerWins = (cpuChoice, playerChoice) => {
  const playerWinsWithRock = playerChoice === choices.rock && cpuChoice !== choices.paper;
  const playerWinsWithPaper = playerChoice === choices.paper && cpuChoice !== choices.scissors;
  const playerWinsWithScissors = playerChoice === choices.scissors && cpuChoice !== choices.rock;
  return playerWinsWithRock || playerWinsWithPaper || playerWinsWithScissors;
};

const playerOptions = document.querySelector('.options');
playerOptions.addEventListener('click', (e) => {
  const playerChoice = e.target.classList.value;
  console.log(playerChoice);
});
