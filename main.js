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
        input = prompt("Rock, Paper or Scissors?");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        prompt("Type Rock, Paper, or Scissors. Spelling matters, but capitalization doesn't!");
    }


    //console.log(input);

}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true
    }
    else {
        return false
    }
};

function computerChoice() {
    return choices[Math.floor(Math.random *choices.length)];
}

game();