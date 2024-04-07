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

const getPlayerChoice = (event) => {
  const playerChoice = event.target.classList.value;
  return playerChoice;
};

const playerWins = (cpuChoice, playerChoice) => {
  const playerWinsWithRock = playerChoice === choices.rock && cpuChoice === choices.scissors;
  const playerWinsWithPaper = playerChoice === choices.paper && cpuChoice === choices.rock;
  const playerWinsWithScissors = playerChoice === choices.scissors && cpuChoice === choices.paper;
  return playerWinsWithRock || playerWinsWithPaper || playerWinsWithScissors;
};

const isTie = (cpuChoice, playerChoice) => cpuChoice === playerChoice;

const playRound = (cpuChoice, playerChoice) => {
  const result = {
    tie: "It's a tie 🤝",
    playerWins: 'You win 🎉',
    cpuWins: 'You lose 🤕',
    details: {
      tie: `you both chose ${cpuChoice}.`,
      playerWins: `${playerChoice} beats ${cpuChoice}.`,
      cpuWins: `${cpuChoice} beats ${playerChoice}.`,
    },
  };

  if (isTie(cpuChoice, playerChoice)) return { results: result.tie, details: result.details.tie };
  if (playerWins(cpuChoice, playerChoice)) return { results: result.playerWins, details: result.details.playerWins };
  return { results: result.cpuWins, details: result.details.cpuWins };
};

const playerOptions = document.querySelector('.options');
const scoreContainer = document.querySelector('.score');
const roundResults = document.createElement('h3');
const roundDetails = document.createElement('p');

// TODO: Separate the event listener into a function
playerOptions.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return;
  const playerChoice = getPlayerChoice(event);
  const cpuChoice = getComputerChoice();
  const round = playRound(cpuChoice, playerChoice);
  roundResults.textContent = round.results;
  roundDetails.textContent = round.details;
  scoreContainer.append(roundResults, roundDetails);
});
