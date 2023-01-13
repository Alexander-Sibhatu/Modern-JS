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


/*The following function takes two parameters and declare the winner.*/

function playRound(playerSelection, computerSelection){


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
    
    const playerSelection = "rock";
    console.log(getComputerChoice());
    const computerSelection = getComputerChoice();

function game(){
    for (let i = 1; i <= 5; i++) {
        
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        

    }
}

console.log(game());