'use strict';

const playerOptions = document.querySelector('.options');
playerOptions.addEventListener('click', (e) => {
  const playerChoice = e.target.classList.value;
  console.log(playerChoice);
});
