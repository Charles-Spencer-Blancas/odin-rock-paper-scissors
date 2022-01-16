let choices = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let picked = Math.floor(choices.length * Math.random());
    return choices[picked];
}

function round(playerSelection, computerSelection) {
    playerSelection = toSentenceCase(playerSelection);
    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    if (playerIndex == choices.length && computerIndex == 0) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if (computerIndex == choices.length && playerIndex == 0) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`
    }
}

function toSentenceCase(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}

function lose(playerSelection, computerSelection) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
}

function win(playerSelection, computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`)
}