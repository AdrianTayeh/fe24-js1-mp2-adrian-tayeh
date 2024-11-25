export function generateDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

export function updateDiceDisplay(number) {
    const dice = document.getElementById('dice');
    dice.className = 'die';
    dice.innerHTML = '';
    const dotCount = [0, 1, 2, 3, 4, 5, 6];
    const dotPositions = [
        [],
        ['one'],
        ['two'],
        ['three'],
        ['four'],
        ['five'],
        ['six']
    ];
    dice.classList.add(dotPositions[number][0]);
    for (let i = 0; i < dotCount[number]; i++) {
        const dot = document.createElement('div');
        dice.appendChild(dot);
    }
}