
let humanChoice = undefined;
let computerChoice = undefined;
let humanScore = 0;
let computerScore = 0;
let currentHigh = 0;


const getHumanChoice = () => {
humanChoice = prompt("Rock, Paper, Scissors!");
humanChoice = humanChoice.toLowerCase();
return humanChoice;
}

const getComputerChoice = () => {
let temp = Math.floor(Math.random()*3);

if (temp == 0) {
    computerChoice = "rock";
} 
else if (temp == 1){
    computerChoice = "paper";
} 
else if (temp == 2){
    computerChoice = "scissors";
}
return computerChoice;
}



const playRound = () => {
    getHumanChoice();
    getComputerChoice();
    if (humanChoice == computerChoice){
        alert(`TIe! Computer: ${computerScore} You: ${humanScore}`)
    } if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        alert(`You won that round! Computer: ${computerScore} You: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        alert(`You won that round! Computer: ${computerScore} You: ${humanScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        alert(`You won that round! Computer: ${computerScore} You: ${humanScore}`);
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        alert(`Computer won that round! Computer: ${computerScore} You: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        alert(`Computer won that round! Computer: ${computerScore} You: ${humanScore}`);
    } else if (humanChoice == "scissors" && humanChoice == "rock") {
        computerScore++;
        alert(`Computer won that round! Computer: ${computerScore} You: ${humanScore}`);
    } else {
        alert(`maybe a spelling mistake? Or empty? ==> [${humanChoice}]`)
    }
    
    if (humanScore > computerScore){
        currentHigh = humanScore;
    } else if (computerScore > humanScore){
        currentHigh = computerScore;
    } else if (humanScore == computerScore) {
        currentHigh = computerScore;
    }
    return currentHigh;
}

const playGame = () => {
let playAgain = true;

    while(playAgain == true){
        while (currentHigh < 3){
            playRound();
        }
        if (currentHigh == humanScore) {
        playAgain = confirm(`Congrats! You won! Would you like to play Again?`);
        playAgain;
        humanScore, computerScore, currentHigh = 0;
        } else if (currentHigh == computerScore) {
        playAgain = confirm(`The computer won! Would you like to play Again?`);
        playAgain;
        humanScore, computerScore, currentHigh = 0;
        }
    }

}

playGame();
