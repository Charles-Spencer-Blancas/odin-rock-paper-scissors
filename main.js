let choices = ['Rock', 'Paper', 'Scissors'];

selection = document.querySelectorAll('.selection');

selection.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(choices[parseInt(button.id) - 1]);
    });
});

//game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 99999999; i++) {
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
        let result = round(prompt('Rock, Paper, or Scissors?'), computerPlay());
        console.log(result);
        if (result.includes('lose')) {
            computerScore++;
        } else if (result.includes('win')) {
            playerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lost ${computerScore} to ${playerScore}`);
    } else console.log(`Draw. You both scored ${playerScore}`);
}

function computerPlay() {
    return Math.floor(choices.length * Math.random());
}

function round(playerSelection, computerSelection) {
    if (playerIndex == choices.length - 1 && computerIndex == 0) {
        return lose(playerSelection, computerSelection);
    } else if (computerIndex == choices.length - 1 && playerIndex == 0) {
        return win(playerSelection, computerSelection);
    } else if (playerIndex > computerIndex) {
        return win(playerSelection, computerSelection);
    } else if (playerIndex < computerIndex) {
        return lose(playerSelection, computerSelection);
    } else return `${playerSelection} and ${computerSelection} draws.`;
}

function lose(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function win(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
}
