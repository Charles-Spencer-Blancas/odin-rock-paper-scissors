let choices = ['🗿', '🧾', '✂️'];

selection = document.querySelectorAll('.selection');

selection.forEach((button) => {
    button.addEventListener('click', () => {
        round(parseInt(button.id) - 1, computerPlay());
        if (playerScore == 5) {
        }
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

    if (playerScore >= 5) {
        let winText = document.createElement('h1');
        winText.textContent = 'You win!';
        document.querySelector('.container').append(winText);
        disablePlayButtons();
        appendReset();
    }

    if (computerScore >= 5) {
        let winText = document.createElement('h1');
        winText.textContent = 'You lose!';
        document.querySelector('.container').append(winText);
        disablePlayButtons();
        appendReset();
    }
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    document.querySelector('#computerScore').textContent = computerScore;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function win(playerSelection, computerSelection) {
    playerScore++;
    document.querySelector('#playerScore').textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

function disablePlayButtons() {
    selection.forEach((button) => {
        button.disabled = true;
    });
}

function appendReset() {
    resetButton = document.createElement('button');
    resetButton.textContent = '↺';
    document.querySelector('.container').append(resetButton);

    resetButton.addEventListener('click', () => {
        location.reload();
    });
}
