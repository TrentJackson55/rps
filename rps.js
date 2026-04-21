// Get computer choice (function)
// return rock, paper or scissors randomly
// Math.random

// Create and initialize (0) score variables, comp and player
let humanScore = 0;
let compScore = 0;

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
/*function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? : ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
*/

    
function playRound(humanChoice, compChoice) {
    compChoice = getCompChoice();
    let playerWinText = `You win! ${humanChoice} beats ${compChoice}.`;
    let compWinText = `You lose! ${compChoice} beats ${humanChoice}.`;
    let drawText = "Draw! No points awarded";

    if (humanChoice === "rock" && compChoice === "rock") {
        roundResult.textContent = drawText;
    } else if (humanChoice === "rock" && compChoice === "paper") {
        roundResult.textContent = compWinText;
        compScore++;
    } else if (humanChoice === "rock" && compChoice === "scissors") {
        roundResult.textContent = playerWinText;
        humanScore++;    
    } else if (humanChoice === "paper" && compChoice === "rock") {
        roundResult.textContent = playerWinText;
        humanScore++;
    } else if (humanChoice === "paper" && compChoice === "paper") {
        roundResult.textContent = drawText;
    } else if (humanChoice === "paper" && compChoice === "scissors") {
        roundResult.textContent = compWinText;
        compScore++;
    } else if (humanChoice === "scissors" && compChoice === "rock") {
        roundResult.textContent = compWinText;
        compScore++;
    } else if (humanChoice === "scissors" && compChoice === "paper") {
        roundResult.textContent = playerWinText;
        humanScore++;
    } else if (humanChoice === "scissors" && compChoice === "scissors") {
        roundResult.textContent = drawText;
    }
}

    /*

    
    // Logic for playing 5 games 
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
    */


// create player choice buttons & div container
const container = document.createElement("div");
// select body tag to add elements to it
const bodyElement = document.querySelector("body");
bodyElement.appendChild(container);
// Initialize buttons
const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";
const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

// create event listeners for each button
rockButton.addEventListener("click", (e) => {
    playRound("rock", getCompChoice)
    updateScore();
});

paperButton.addEventListener("click", (e) => {
    playRound("paper", getCompChoice)
    updateScore();
});

scissorsButton.addEventListener("click", (e) => {
    playRound("scissors", getCompChoice)
    updateScore();
});

// create results div
const resultDiv = document.createElement("div");
container.appendChild(resultDiv);
const resultsBanner = document.createElement("h1");
resultsBanner.textContent = "RESULTS:";
const scores = document.createElement("pre");
const roundResult = document.createElement("p");

resultDiv.appendChild(resultsBanner);
resultDiv.appendChild(roundResult);
resultDiv.appendChild(scores);

// function for score updates and win condition
let updateScore = () => {
    if (humanScore == 5) {
        scores.textContent = `You won! Final Score: ${humanScore} to ${compScore}. Make a selection to play again!`;
        humanScore = 0;
        compScore = 0;
    } else if (compScore == 5) {
        scores.textContent = `You lost! Final Score: ${compScore} to ${humanScore}. Make a selection to play again!`;
        humanScore = 0;
        compScore = 0;
    } else {
        scores.textContent = `Player Score: ${humanScore}
        \nComputer Score: ${compScore}`;    
    }
}
