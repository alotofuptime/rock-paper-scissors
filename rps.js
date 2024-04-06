'use strict';

// playGame(5);

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getPlayerChoice() {
  const playerChoice = prompt(
    'Enter your choice: rock | paper | scissors ->: '
  ).toLowerCase();
  return playerChoice;
}

function playRound(cpuSelection, playerSelection) {
  const tie = cpuSelection === playerSelection;
  const playerWins =
    !tie &&
    ((playerSelection === 'rock' && cpuSelection !== 'paper') ||
      (playerSelection === 'paper' && cpuSelection !== 'scissors') ||
      (playerSelection === 'scissors' && cpuSelection !== 'rock'));

  const roundResult = tie ? "It's a tie" : playerWins ? 'You win' : 'You lose';
  const roundDetails = tie
    ? `You both chose ${cpuSelection}.`
    : playerWins
    ? `${playerSelection} beats ${cpuSelection}.`
    : `${cpuSelection} beats ${playerSelection}.`;

  const round = {
    playerWon: playerWins,
    tie: tie,
    message: `${roundResult}!`,
    details: roundDetails,
  };

  return round;
}

// function playGame(rounds) {
//   let playerScore = 0;
//   let cpuScore = 0;
//   let currentRd = 1;
//   let rd;

//   while (currentRd <= rounds) {
//     rd = playRound(getComputerChoice(), getPlayerChoice());

//     if (rd.tie) {
//       playerScore++;
//       cpuScore++;
//     } else if (rd.playerWon) {
//       playerScore++;
//     } else cpuScore++;

//     let stats = `Round: ${currentRd} Player: ${playerScore} CPU: ${cpuScore}`;
//     console.log(stats);
//     console.log(rd.message.concat('\n', rd.details));
//     currentRd++;
//   }

//   if (playerScore === cpuScore) {
//     console.log("It's a tie!");
//   } else if (playerScore > cpuScore) {
//     console.log('You win!');
//   } else console.log('You lose :(');
// }
