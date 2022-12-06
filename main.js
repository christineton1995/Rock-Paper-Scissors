const choices = ["rock","paper","scissors"]

function game() {
    for (let i = 0; i<=5;i++) {
        playRound();

    }
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function playerChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    while (input == null) {
        input = prompt("Rock, Paper, or Scissors?");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type Rock, Paper, or Scissors. Spelling matters, but capitalization doesn't!");
        input = input.toLowerCase();
        check = validateInput(input);
      }
    return input;

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
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP,choiceC) {
    if (choiceP == choiceC) {
        return "Tie";
    } else if (choiceP == "rock" && choiceC == "scissors") {
        return "Player wins. Rock beats scissors."
    } else if (choiceP == "paper" && choiceC == "rock") {
        return "Player wins. Paper beats rock."
    } else if (choiceP == "scissors" && choiceC == "paper") {
        return "Player wins. Scissors beat paper." 
    } else if (choiceP == "rock" && choiceC == "paper") {
        return "Computer wins. Paper beats rock."
    } else if (choiceP == "paper" && choiceC == "scissors") {
        return "Computer wins. Scissors beat paper."
    } else if (choiceP == "scissors" && choiceC == "rock") {
        return "Computer wins. Rock beats scissors."
    }

}

game();