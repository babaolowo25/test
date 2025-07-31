"use strict";
const score0EL = document.getElementById("score--0");
const score1EL = document.querySelector("#score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const player0active = document.querySelector(".player--0");
const player1active = document.querySelector(".player--1");

// starting condition
const scores = [0, 0];
score0EL.textContent = 0;
score1EL.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
// rolling the dice

diceEL.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  const dice = Number(Math.trunc(Math.random() * 6) + 1);
  console.log(dice);

  diceEL.classList.remove("hidden");

  diceEL.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    player0active.classList.toggle("player--active");
    player1active.classList.toggle("player--active");

    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];
});
