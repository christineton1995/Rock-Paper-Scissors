const choices = ["rock","paper","scissors"]

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    while (input == null) {
        input = prompt("Rock, Paperm or Scissors?");
    }
    input = input.toLowerCase();
    


    console.log(input);

}

function validateInput ();

function computerChoice() {
    return choices[Math.floor(Math.random *choices.length)];
}