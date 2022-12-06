const choices = ["rock","paper","scissors"]

/*function game() {
    for (let i = 0; i<=5;i++) {
        playRound();

    }
} */

// variables for storing scores
let playerScore = 0;
let computerScore = 0;


//function to play one round, and keep track of score
function playRound() {
    let playerSelection = choices;
    let computerSelection = computerChoice();
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "Player wins. Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "Player wins. Paper beats rock.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playScore++;
        return "Player wins. Scissors beat paper.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "Computer wins. Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "Computer wins. Scissors beat paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "Computer wins. Rock beats scissors.";
    }

}

/*function playerChoice() {
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
}; */

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Adding functionality to Rock Button 
const rButton = document.getElementById("rBtn");
rButton.addEventListener('click', () => {
  let playerSelection = "rock";
  playRound();
});


//game();