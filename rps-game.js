/*Variables*/ 
let play;
let humanChoice;
let humanScore = 0;
let computerChoice;
let computerScore = 0;
let roundNum = prompt("How Many Rounds?");

/*Function logic*/
//Human function
function getHumanChoice(play){
   return play = prompt("Pick your play!");
};

//Computer Function
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let randomNum = getRandomNumber(3);
    if (randomNum == 0){
        return "Rock";
    }
    if (randomNum == 1){
        return "Paper";
    }
    if (randomNum == 2){
        return "Scissors";
    }
}


//Game logic
function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice(play).toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    console.log("You picked:" + humanChoice);
    console.log("Computer picked:" + computerChoice);
    if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")){
        console.log("Human Wins");
        humanScore++;
    } else if (computerChoice == humanChoice){
        console.log("Draw!");
    } else if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        console.log("invalid input")
    }  else {
        console.log("Computer Wins!");
        computerScore++;
    }
    console.log("Score: ")
    console.log("Computer: " + computerScore + " Human: " + humanScore);
}

function playGame(roundNum){
    for (let i = 1; i <= roundNum; i++){
        playRound();
    }
}
playGame(roundNum);