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
    let playerSelec = choices;
    let computerSelec = computerChoice();
    if (playerSelec == computerSelec) {
        return "Tie";
    } else if (playerSelec == "rock" && computerSelec == "scissors") {
        playerScore++;
        return "Player wins. Rock beats scissors.";
    } else if (playerSelec == "paper" && computerSelec == "rock") {
        playerScore++;
        return "Player wins. Paper beats rock.";
    } else if (playerSelec == "scissors" && computerSelec == "paper") {
        playerScore++;
        return "Player wins. Scissors beat paper.";
    } else if (playerSelec == "rock" && computerSelec == "paper") {
        computerScore++;
        return "Computer wins. Paper beats rock.";
    } else if (playerSelec == "paper" && computerSelec == "scissors") {
        computerScore++;
        return "Computer wins. Scissors beat paper.";
    } else if (playerSelec == "scissors" && computerSelec == "rock") {
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
    let playerSelec = "rock";
    playRound();
});


//game();