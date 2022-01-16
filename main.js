function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    let picked = Math.floor(choices.length * Math.random());
    return choices[picked];
}

function round(playerSelection, computerSelection) {
    playerSelection = toSentenceCase(playerSelection);
    
}

function toSentenceCase(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}
