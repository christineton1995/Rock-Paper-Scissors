const choices = ["rock","paper","scissors"]


// variables for storing scores
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;


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
    let rockResult = playRound("rock",computerChoice());
    document.getElementById("results").textContent = rockResult
});


//Adding functionality to Paper Button 
const pButton = document.getElementById("pBtn");
pButton.addEventListener("click", () => {
    let pResult = playRound("paper",computerChoice());
    document.getElementById("results").textContent = pResult;
})

//Adding functionality to Scissors Button 
const sButton = document.getElementById("sBtn");
sButton.addEventListener("click", () => {
    let sResult = playRound("paper", computerChoice());
    document.getElementById("results").textContent = sResult;
})

