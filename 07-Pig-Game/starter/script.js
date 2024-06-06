'use strict';

// Selecting Elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const currentScore0El = document.getElementById(`current--0`);
const currentScore1El = document.getElementById(`current--1`);

// Global Variables Outside Init Scope
let scores, currentScore, activePlayer, playing;

// Initialization Function
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};

// Starting Conditions
init();

// Switch Player Function
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// Rolling Dice Functionality
btnRoll.addEventListener(`click`, function () {
  // Generate a Random Dice Roll and Display the Dice
  if (playing) {
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
      switchPlayer();
    }
  }
});

// Holding Dice Functionality
btnHold.addEventListener(`click`, function () {
  if (playing) {
    // Add Current Score to Active Player's Score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if Player's Score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the Game
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      // Switch to the Next Player
      switchPlayer();
    }
  }
});

// New Game Functionality
btnNew.addEventListener(`click`, init);
