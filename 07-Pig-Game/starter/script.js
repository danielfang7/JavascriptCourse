'use strict';

// Selecting Elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const currentScore0El = document.getElementById(`current--0`);
const currentScore1El = document.getElementById(`current--1`);

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener(`click`, function () {
  // Generate a Random Dice Roll and Display the Dice
  let diceRoll = Number(Math.trunc(Math.random() * 6) + 1);
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${diceRoll}.png`;

  // Check for Rolled 1
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to the Next Player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});

// Holding Dice Functionality
btnHold.addEventListener(`click`, function () {
  let isCurrentScoreHeld = true;
});
