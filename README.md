# Guess My Number Game

## Overview

"Guess My Number" is a simple and fun guessing game where the player tries to guess a randomly generated number between 1 and 20. The game provides feedback to guide the player whether their guess is too high or too low. The objective is to guess the correct number with the least number of attempts.

![Image](/images/GuessMyNumberScreen.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#how-to-play)


## Features

- Generates a random number between 1 and 20.
- Allows the player to input their guess.
- Provides feedback if the guess is too high, too low, or correct.
- Tracks the player's score, which decreases with each incorrect guess.
- Displays the high score, which is the highest score achieved during the session.
- Allows the player to reset the game and play again.

## Getting Started

### Prerequisites

To run this project locally, you need a web browser.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/celinec22/GuessMyNumber.git
2. Navigate to Project Directory 

## How to Play
1. Enter a number between 1 and 20 in the input field.
2. Click the "Check!" button to submit your guess.
### Feedback
* No Number: If the input field is empty.
* Too High!: If the guess is higher than the correct number.
* Too Low!: If the guess is lower than the correct number.
* Correct!: If the guess matches the correct number.
The background color changes to green when the correct number is guessed.
### Scoring
The score decreases by 1 for each incorrect guess.
The high score is updated if the current score exceeds the previous high score.
