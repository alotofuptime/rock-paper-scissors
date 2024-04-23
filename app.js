'use strict';

const choices = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
};

const scoreContainer = document.querySelector('.score');
const playerScore = document.querySelector('.player-score');
const cpuScore = document.querySelector('.cpu-score');
const roundResults = document.createElement('h3');
const roundDetails = document.createElement('p');

const createPlayerOptions = () => {
  const options = document.createElement('div');
  const rockBtn = document.createElement('button');
  const paperBtn = document.createElement('button');
  const scissorsBtn = document.createElement('button');

  options.className = 'options';
  rockBtn.className = 'rock';
  paperBtn.className = 'paper';
  scissorsBtn.className = 'scissors';

  rockBtn.textContent = 'Rock';
  paperBtn.textContent = 'Paper';
  scissorsBtn.textContent = 'Scissors';

  options.append(rockBtn, paperBtn, scissorsBtn);

  return options;
};

const renderPlayerOptions = () => {
  const controls = document.querySelector('.controls');
  const options = createPlayerOptions();
  controls.parentNode.insertBefore(options, controls);
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

const updateScore = (...elements) => {
  elements.forEach((elem) => {
    elem.textContent++;
  });
};

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

  if (isTie(cpuChoice, playerChoice)) {
    return { results: result.tie, details: result.details.tie };
  }
  if (playerWins(cpuChoice, playerChoice)) {
    updateScore(playerScore);
    return { results: result.playerWins, details: result.details.playerWins };
  }
  updateScore(cpuScore);
  return { results: result.cpuWins, details: result.details.cpuWins };
};

const gameIsOver = () => {
  const finalScoreReached = Number(cpuScore.textContent) === 5 || Number(playerScore.textContent) === 5;
  return finalScoreReached;
};

const renderRound = (event) => {
  const playerChoice = getPlayerChoice(event);
  const cpuChoice = getComputerChoice();
  const round = playRound(cpuChoice, playerChoice);
  const playerOptions = document.querySelector('.options');
  roundResults.textContent = round.results;
  roundDetails.textContent = round.details;
  scoreContainer.append(roundResults, roundDetails);
  // TODO: Fix logic so that playerOptions eventListener gets reinstated for new games
  if (gameIsOver()) {
    playerOptions.removeEventListener('click', renderRound);
  }
};

// ! When game is over, playerOptions are reinstated after user presses quit
const resetGame = () => {
  [roundDetails, roundResults].forEach((elem) => (elem.textContent = ''));
  [cpuScore, playerScore].forEach((elem) => (elem.textContent = '0'));
};

const removePlayerOptions = () => {
  const playerOptions = document.querySelector('.options');
  if (playerOptions !== null) {
    playerOptions.remove();
  }
};

// TODO: Fix logic so that playerOptions eventListener gets reinstated for new games
const newGameEventHandler = (event) => {
  if (event.target.className !== 'new-game') return;
  if (document.querySelector('.options') === null) {
    renderPlayerOptions();
    const playerOptions = document.querySelector('.options');
    playerOptions.addEventListener('click', renderRound);
  } else {
    resetGame();
  }
};

const quitGameEventHandler = (event) => {
  resetGame();
  removePlayerOptions();
};

const playGame = () => {
  const newGameBtn = document.querySelector('.new-game');
  const quitGameBtn = document.querySelector('.quit-game');

  newGameBtn.addEventListener('click', newGameEventHandler);
  quitGameBtn.addEventListener('click', quitGameEventHandler);
};

playGame();
