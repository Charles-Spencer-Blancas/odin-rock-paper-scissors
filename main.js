let choices = ['Rock', 'Paper', 'Scissors'];

game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
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
    let picked = Math.floor(choices.length * Math.random());
    return choices[picked];
}

function round(playerSelection, computerSelection) {
    playerSelection = toSentenceCase(playerSelection);
    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    if (playerIndex == -1) {
        console.log('Unknown entry.');
    } else if (playerIndex == choices.length - 1 && computerIndex == 0) {
        return lose(playerSelection, computerSelection);
    } else if (computerIndex == choices.length - 1 && playerIndex == 0) {
        return win(playerSelection, computerSelection);
    } else if (playerIndex > computerIndex) {
        return win(playerSelection, computerSelection);
    } else if (playerIndex < computerIndex) {
        return lose(playerSelection, computerSelection);
    } else return `${playerSelection} and ${computerSelection} draws.`;
}

function toSentenceCase(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function lose(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function win(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
}
