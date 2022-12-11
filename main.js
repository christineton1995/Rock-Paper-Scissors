const choices = ["rock","paper","scissors"]


// variables for storing scores
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


//function to play game and increment score
function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        document.getElementById("pScore").textContent = `Player: ${playerScore}`;
        return "Player wins. Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        document.getElementById("pScore").textContent = `Player: ${playerScore}`;
        return "Player wins. Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        document.getElementById("pScore").textContent = `Player: ${playerScore}`;
        return "Player wins. Scissors beat paper.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        document.getElementById("cScore").textContent = `Computer: ${computerScore}`;
        return "Computer wins. Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        document.getElementById("cScore").textContent = `Computer: ${computerScore}`;
        return "Computer wins. Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        document.getElementById("cScore").textContent = `Computer: ${computerScore}`;
        return "Computer wins. Rock beats scissors.";
    }

}

//Displaying winner results
function checkWinner() {
    if (playerScore === 5) {
        document.getElementById("winner").textContent = 
        "You win! Great Job!"
        document.getElementById("pScore").remove();
        document.getElementById("cScore").remove();
        document.getElementById("results").remove();
    } else if (computerScore === 5) {
        document.getElementById("winner").textContent = 
        "Computer wins! You lost"
        document.getElementById("pScore").remove();
        document.getElementById("cScore").remove();
        document.getElementById("results").remove();
    }
}

//Restarting game
const nButton = document.getElementById("newGame");
newGame.addEventListener("click", () => {
    window.location.reload();
    return false;
})

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
    checkWinner();
})

//Adding functionality to Scissors Button 
const sButton = document.getElementById("sBtn");
sButton.addEventListener("click", () => {
    let sResult = playRound("paper", computerChoice());
    document.getElementById("results").textContent = sResult;
    checkWinner();
})



