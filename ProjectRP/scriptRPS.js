function getComputerChoice() {
    let getComputerChoice = ["rock", "paper", "scissors"]
    let memorize = Math.floor(Math.random() * getComputerChoice.length) + 1

    if (memorize === 1){
        return "rock";
    }
    if (memorize === 2){
        return "paper";
    }
    if (memorize === 3){
        return "scissors";
    }
}
console.log(getComputerChoice());


/*The following function takes two parameters and declare the winner.*/

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log("Play again!");
    }

    else if ((playerSelection === "rock") && (computerSelection === "paper")){
        console.log("You Lose! paper beats rock.");
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        console.log("You win! rock beats scissors.");
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        console.log("You win! paper beats rock.");
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        console.log("You Lose! scissors beat paper");
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        console.log("You Lose! rock beats scissors.");
    }
    else {
        console.log("You win! scissors beat paper");
    }
}
const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));