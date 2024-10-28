let play;
function getHumanChoice(play){
   return play = prompt("Pick your play!");
};

let yp = getHumanChoice(play).toLowerCase();

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

let pcc = getComputerChoice();

function winner(){
    console.log("You picked:" + yp);
    console.log("Computer picked:" + pcc);
    if ((pcc == "Rock" && yp == "paper") || (pcc == "Paper" && yp == "scissors") ||
    (pcc == "Scissors" && yp == "rock")){
        console.log("Human Wins");
    } else if (pcc == yp){
        console.log("Draw!");
    } else if(yp != "rock" && yp!= "paper" && yp != "scissors"){
        console.log("invalid input")
    }  else {
        console.log("Computer Wins!");
    }
}

winner();