//Function to get the computer choice and return that choice (using Math.random() function)

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
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

//This function gets the user input.

function playerSelection(){
    let input = prompt("Enter Rock, Paper or Scissors.");
    input = input.toLowerCase();
    return input;
}

// console.log(playerSelection());

/*The following function takes two parameters and declare the winner.*/

function checkWinner(playerSelection, computerSelection){


    if (playerSelection === computerSelection) {
        return "The result is a tie!";
    }


    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return "You Lose! paper beats rock.";
        }
        else {
            if(computerSelection === "scissors"){
                return "You win! rock beats scissors.";
            }
        }
    }


    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "You win! paper beats rock.";
        }
        else {
            if(computerSelection === "scissors"){
                return "You lose! scissors beats paper";
            }
        }
            
    }

    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return "You Lose! rocks beats scissors."
        }
        else {
            if(computerSelection === "paper"){
                return "You win! scissors beats paper";
            }
        }
            
    }

        
}

// This function plays the game.

function playRound(){
    const playerChoice = playerSelection();
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const winner = checkWinner(playerChoice, computerChoice);
    console.log(winner);


}

function game() {
    for (let i = 1; i<=5; i++){
        playRound();
    }
}

game();