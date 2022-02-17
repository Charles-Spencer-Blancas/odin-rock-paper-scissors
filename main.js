let choices = ['Rock', 'Paper', 'Scissors'];

selection = document.querySelectorAll('.selection');

selection.forEach((button) => {
    button.addEventListener('click', () => {
        round(parseInt(button.id) - 1, computerPlay());
    });
});

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return Math.floor(choices.length * Math.random());
}

function round(playerIndex, computerIndex) {
    playerSelection = choices[playerIndex];
    computerSelection = choices[computerIndex];

    let output;

    if (playerIndex == choices.length - 1 && computerIndex == 0) {
        output = lose(playerSelection, computerSelection);
    } else if (computerIndex == choices.length - 1 && playerIndex == 0) {
        output = win(playerSelection, computerSelection);
    } else if (playerIndex > computerIndex) {
        output = win(playerSelection, computerSelection);
    } else if (playerIndex < computerIndex) {
        output = lose(playerSelection, computerSelection);
    } else output = `${playerSelection} and ${computerSelection} draws.`;

    let displayText = document.createElement('div');
    displayText.textContent = output;
    document.querySelector('.container').append(displayText);
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function win(playerSelection, computerSelection) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}
