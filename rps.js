// Get computer choice (function)
// return rock, paper or scissors randomly
// Math.random
// Create and initialize (0) score variables, comp and player

function getCompChoice() {
    let compChoice = "";
    let selection = Math.random();
    
    if (selection < .34) {
        compChoice = "rock"
    } else if (selection < .67 && selection > .34) {
        compChoice = "paper"
    } else {
        compChoice = "scissors"
    }
    return compChoice;
}

// Get human choice (function)
// Use prompt method, store to variable, return
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? : ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playGame() {
    
    function playRound(humanChoice, compChoice) {
        if (humanChoice === "rock" && compChoice === "rock") {
            console.log("Draw! No points awarded");
        } else if (humanChoice === "rock" && compChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            compScore++;
        } else if (humanChoice === "rock" && compChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;    
        } else if (humanChoice === "paper" && compChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (humanChoice === "paper" && compChoice === "paper") {
            console.log("Draw! No points awarded");
        } else if (humanChoice === "paper" && compChoice === "scissors") {
            console.log("You lose! Scissors beat Paper.");
            compScore++;
        } else if (humanChoice === "scissors" && compChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            compScore++;
        } else if (humanChoice === "scissors" && compChoice === "paper") {
            console.log("You win! Scissors beat Paper.");
            humanScore++;
        } else if (humanChoice === "scissors" && compChoice === "scissors") {
            console.log("Draw! No points awarded");
        }
    }

    let humanScore = 0;
    let compScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let compSelection = getCompChoice();

        playRound(humanSelection, compSelection);
    }

    if (humanScore > compScore) {
        console.log(`You won! Final Score: ${humanScore} to ${compScore}`);    
    } else if (humanScore < compScore) {
        console.log(`You lost! Final Score: ${compScore} to ${humanScore}`);
    } else {
        console.log(`Draw! You: ${humanScore} Computer: ${compScore}`);
    }
}

playGame();