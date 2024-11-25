export function getPlayerName() {
    return document.getElementById('playerName')?.value || '';
}

export function displayPlayerName(name) {
    const displayNameElement = document.getElementById('displayName');
    if (displayNameElement) {
        displayNameElement.innerText = name;
    }
}

export function showGameInfo(show = true) {
    const gameInfoElement = document.getElementById('gameInfo');
    if (gameInfoElement) {
        gameInfoElement.style.display = show ? 'block' : 'none';
    }
}

export function disableStartButton() {
    const startButton = document.getElementById('startGame');
    if (startButton) {
        startButton.disabled = true;
    }
}

export function displayDiceNumber(number) {
    const diceNumberElement = document.getElementById('diceNumber');
    if (diceNumberElement) {
        diceNumberElement.innerText = number;
    }
}

export function displayRoundScore(score) {
    const roundScoreElement = document.getElementById('roundScore');
    if (roundScoreElement) {
        roundScoreElement.innerText = score;
    }
}

export function displayTotalScore(score) {
    const totalScoreElement = document.getElementById('totalScore');
    if (totalScoreElement) {
        totalScoreElement.innerText = score;
    }
}

export function displayRoundsPlayed(rounds) {
    const roundsPlayedElement = document.getElementById('roundsPlayed');
    if (roundsPlayedElement) {
        roundsPlayedElement.innerText = rounds;
    }
}

export function showGameOver(rounds) {
    const gameOverElement = document.getElementById('gameOver');
    const finalRoundsElement = document.getElementById('finalRounds');
    if (gameOverElement && finalRoundsElement) {
        gameOverElement.style.display = 'block';
        finalRoundsElement.innerText = rounds;
    }
}