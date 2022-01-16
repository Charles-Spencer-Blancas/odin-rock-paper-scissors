function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    let picked = Math.floor(choices.length * Math.random());
    return choices[picked];
}


