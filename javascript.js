// A : UI

const btnSelectRock = document.createElement("button");
const btnSelectPaper = document.createElement("button");
const btnSelectScissors = document.createElement("button");

btnSelectRock.textContent = "Rock";
btnSelectPaper.textContent = "Paper";
btnSelectScissors.textContent = "Scissors";
bod = document.querySelector("body");

bod.appendChild(btnSelectRock);
bod.appendChild(btnSelectPaper);
bod.appendChild(btnSelectScissors);

const divDisplay = document.createElement("div");
const paraResult = document.createElement("p");
const paraScore = document.createElement("p");
const paraWinner = document.createElement("p");

divDisplay.appendChild(paraResult);
divDisplay.appendChild(paraScore);
divDisplay.appendChild(paraWinner);

bod.appendChild(divDisplay);

btnSelectRock.addEventListener("click", function() {
    let result = playRound("rock", getComputerChoice());
    paraResult.textContent = result;
    paraScore.textContent = `HumanScore = ${humanScore} / ComputerScore = ${computerScore}`;
    if(humanScore == 5) {
        paraWinner.textContent = `You Win`;
    }
    if(computerScore == 5) {
        paraWinner.textContent = `Computer Win`;
    }


});

btnSelectPaper.addEventListener("click", function() {
    let result = playRound("paper", getComputerChoice());
    paraResult.textContent = result;
    paraScore.textContent = `HumanScore = ${humanScore} / ComputerScore = ${computerScore}`;
    if(humanScore == 5) {
        paraWinner.textContent = `You Win`;
    }
    if(computerScore == 5) {
        paraWinner.textContent = `Computer Win`;
    }
});

btnSelectScissors.addEventListener("click", function() {
    let result = playRound("scissors", getComputerChoice());
    paraResult.textContent = result;
    paraScore.textContent = `HumanScore = ${humanScore} / ComputerScore = ${computerScore}`;
    if(humanScore == 5) {
        paraWinner.textContent = `You Win`;
    }
    if(computerScore == 5) {
        paraWinner.textContent = `Computer Win`;
    }
});



// B : Logic
// Step 2 : Write the logic to get the computer choice
function getComputerChoice() {
    let choice = "";
    if(Math.round(Math.random()*2) == 0) {
        choice = "rock";
    }
    else if (Math.round(Math.random()*2) == 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    console.log(`Computer choice is ${choice}`);
    return choice;

    
}

//Step 3 : Write the logic to get the human choice

function getHumanChoice() {
    let choice = prompt("Your choice: rock, paper or scissors?\n");
    while (choice.toLowerCase() != 'rock' && choice.toLowerCase() != 'paper' && choice.toLowerCase() != 'scissors') {
        choice = prompt('Please choose among rock, paper or scissors');
    }
    console.log(`Human choice is ${choice.toLowerCase()}`)
    return choice.toLowerCase();
}

// Step 4 : Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5 : Write the logic to play single round
function playRound(humanChoice, computerChoice) {
    if (humanScore == 5 || computerScore == 5){
        humanScore = 0;
        computerScore = 0;
        paraWinner.textContent = '';
    }
    let result = "";
    if (humanChoice == computerChoice) {
        result = `It's a tie ! Both choose ${humanChoice}`;
        // console.log(result);
        return result;

    }

    if (humanChoice == 'rock') {
        if(computerChoice == 'paper') {
            result = `You lose ! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            // console.log(result);
            return result;
        }
        else {
            result = `You Win ! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            // console.log(result);
            return result;
        }
    }

    if (humanChoice == 'paper') {
        if(computerChoice == 'scissors') {
            result = `You lose ! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            // console.log(result);
            return result;
        }
        else {
            result = `You Win ! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            // console.log(result);
            return result;
        }
    }

    if (humanChoice == 'scissors') {
        if(computerChoice == 'rock') {
            result = `You lose ! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            // console.log(result);
            return result; 
        }
        else {
            result = `You Win ! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            // console.log(result);
            return result;
        }
    }


    
}


// Step 6: Write the logic to play entire game
function playGame() {
    // Round 1
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // Round 2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // Round 3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // Round 4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // Round 5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human score is : ${humanScore} \n Computer score is : ${computerScore}`);

}


