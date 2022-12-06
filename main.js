const choices = ["rock","paper","scissors"]


// variables for storing scores
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection = computerChoice ();


//function to play one round, and keep track of score
function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Player wins. Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Player wins. Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Player wins. Scissors beat paper.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Computer wins. Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Computer wins. Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Computer wins. Rock beats scissors.";
    }

}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Adding functionality to Rock Button 
const rButton = document.getElementById("rBtn");
rButton.addEventListener("click", () => {
    console.log (playRound("rock",computerChoice()));
});

//Adding functionality to Paper Button 
const pButton = document.getElementById("pBtn");
pButton.addEventListener("click", () => {
    console.log (playRound("paper",computerChoice()));
})

//Adding functionality to Scissors Button 
const sButton = document.getElementById("sBtn");
sButton.addEventListener("click", () => {
    console.log(playRound("paper", computerChoice()));
})

