
let humanChoice = undefined;
let computerChoice = undefined;
let humanScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".choose")
const htmlHumanChoice = document.querySelector("#humanChoice");
const htmlHumanScore = document.querySelector("#humanScore");
const htmlComputerScore = document.querySelector("#computerScore");
const htmlComputerChoice = document.querySelector("#computerChoice");
const modal = document.querySelector("#simpleModal");
const winner = document.querySelector("#winner");
const playAgainBtn  = document.querySelector("#playAgain")

options.forEach(function(element, humanChoice) {

    element.addEventListener("click", function() {

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
        console.log(computerChoice)
        

        if (element.id == "rock"){
            humanChoice = element.id;
        }
        else if (element.id == "paper"){
            humanChoice = element.id;
        } 
        else if (element.id == "scissors") {
            humanChoice = element.id;
        }
        console.log(humanChoice)


                if (humanChoice == computerChoice){
                    htmlHumanChoice.style.color="black"
                    htmlComputerChoice.style.color="black"

                } if (humanChoice == "rock" && computerChoice == "scissors") {
                    humanScore++;
                    htmlHumanChoice.style.color="green"
                    htmlComputerChoice.style.color="red"

                } else if (humanChoice == "paper" && computerChoice == "rock") {
                    humanScore++;
                    htmlHumanChoice.style.color="green"
                    htmlComputerChoice.style.color="red"

                } else if (humanChoice == "scissors" && computerChoice == "paper") {
                    humanScore++;
                    htmlHumanChoice.style.color="green"
                    htmlComputerChoice.style.color="red"

                } else if (humanChoice == "rock" && computerChoice == "paper"){
                    computerScore++;
                    htmlHumanChoice.style.color="red"
                    htmlComputerChoice.style.color="green"

                } else if (humanChoice == "paper" && computerChoice == "scissors"){
                    computerScore++;
                    htmlHumanChoice.style.color="red"
                    htmlComputerChoice.style.color="green"

                } else if (humanChoice == "scissors" && humanChoice == "rock") {
                    computerScore++;
                    htmlHumanChoice.style.color="red"
                    htmlComputerChoice.style.color="green"
                }

            htmlHumanChoice.textContent = `You chose ${humanChoice}`
            htmlComputerChoice.textContent = `Computer chose ${computerChoice}`
            htmlHumanScore.textContent = `Your score: ${humanScore}`
            htmlComputerScore.textContent = `Computer score: ${computerScore}`

        if (computerScore == 5) {
            modal.style.display = 'block';
            winner.textContent = "Computer Wins!"

        }  
        else if (humanScore == 5){
            modal.style.display = 'block';
            winner.textContent = "You Win!"

        }
    });

});

playAgainBtn.addEventListener("click", function() {
    modal.style.display = 'none';
    humanScore = 0
    computerScore = 0
    htmlHumanScore.textContent = `Your score: ${humanScore}`
    htmlComputerScore.textContent = `Computer score: ${computerScore}`
    htmlHumanChoice.textContent = `You chose `
    htmlComputerChoice.textContent = `Computer chose `
    htmlHumanChoice.style.color="black"
    htmlComputerChoice.style.color="black"
});

