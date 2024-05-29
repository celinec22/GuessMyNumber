'use strict';

let score = 20;
let highscore = 0;
let correctNum = () => Math.trunc(Math.random() * 20) + 1;
let correctNumber = correctNum();
console.log(correctNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayStyle = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

function clearText() {
  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      displayMessage('No Number');
    } else if (guess === correctNumber) {
      displayMessage('Correct!');
      displayStyle('#60b347', '30rem');
      document.querySelector('.number').textContent = correctNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      score -= 1;
      document.querySelector('.message').textContent =
        guess > correctNumber ? 'Too High!' : 'Too Low!';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('You Lost!');
  }

  clearText();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  correctNumber = correctNum(); // Generate a new correct number
  console.log(correctNumber);
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  displayStyle('#222', '15rem');

  clearText();
});
