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
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? : ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

// Write playRound function
// two parameters, humanChoice and compChoice
// make humanChoice case-insensitive (toLowerCase?)
// example output: "You lose! Papper beats Rock"
// increment either humanScore or compScore
function playRound(humanChoice, compChoice) {
    //Rock outcomes
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

const humanSelection = getHumanChoice();
const compSelection = getCompChoice();

playRound(humanSelection, compSelection);
// Write playGame (best of 5)
// Move playRound and score variables so they are declared in
// playGame
// Use playRound function expression
