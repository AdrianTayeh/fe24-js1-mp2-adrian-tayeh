import { generateDiceNumber, updateDiceDisplay } from './dice.js';
import { getPlayerName, displayPlayerName, showGameInfo, disableStartButton, displayDiceNumber, displayRoundScore, displayTotalScore, displayRoundsPlayed, showGameOver } from './ui.js';

document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('rollDice').addEventListener('click', rollDice);
document.getElementById('freezeScore').addEventListener('click', freezeScore);

let playerName = '';
let totalScore = 0;
let roundScore = 0;
let roundsPlayed = 0;

function startGame() {
    playerName = getPlayerName();
    if (!playerName) {
        alert('Please enter your name');
        return;
    }
    displayPlayerName(playerName);
    showGameInfo();
    disableStartButton();
    console.log('Game started');
}

function rollDice() {
    console.log('Roll Dice button clicked');
    const diceNumber = generateDiceNumber();
    console.log('Dice number:', diceNumber);
    displayDiceNumber(diceNumber);
    updateDiceDisplay(diceNumber);
    if (diceNumber === 1) {
        roundScore = 0;
        endRound();
    } else {
        roundScore += diceNumber;
        displayRoundScore(roundScore);
    }
}

function freezeScore() {
    console.log('Freeze Score button clicked');
    totalScore += roundScore;
    displayTotalScore(totalScore);
    if (totalScore >= 100) {
        endGame();
    } else {
        endRound();
    }
}

function endRound() {
    roundsPlayed++;
    displayRoundsPlayed(roundsPlayed);
    roundScore = 0;
    displayRoundScore(roundScore);
}

function endGame() {
    showGameInfo(false);
    showGameOver(roundsPlayed);
}