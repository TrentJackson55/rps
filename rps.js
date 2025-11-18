// Get computer choice (function)
// return rock, paper or scissors randomly
// Math.random
function getCompChoice() {
    let choice = "";
    let selection = Math.random();
    
    if (selection < .34) {
        choice = "rock"
    } else if (selection < .67 && selection > .34) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice;
}

// Get human choice (function)
// Use prompt method, store to variable, return

// Create and initialize (0) score variables, comp and player

// Write playRound function
// two parameters, humanChoice and compChoice
// make humanChoice case-insensitive (toLowerCase?)
// example output: "You lose! Papper beats Rock"
// increment either humanScore or compScore

// Write playGame (best of 5)
// Move playRound and score variables so they are declared in
// playGame
// Use playRound function expression
