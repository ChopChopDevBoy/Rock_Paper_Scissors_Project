const rockButton = document.querySelector("#Rock")
const paperButton = document.querySelector("#Paper")
const scissorsButton = document.querySelector("#Scissors")
const results = document.querySelector("#Results")
const humanScore = document.querySelector("#HumanScore")
const computerScore = document.querySelector("#ComputerScore")
const playAgainButton = document.querySelector("#PlayAgain")

let humanValue = parseInt(humanScore.textContent)
let computerValue = parseInt(computerScore.textContent)
let playable = true
playAgainButton.disabled = true


function getComputerChoice() {

    computerPick = Math.random()

    if (computerPick >= .66) {
        computerPick = "Rock"
    } else if (computerPick >= .33) {
        computerPick = "Paper"
    } else if (computerPick >= 0) {
        computerPick = "Scissors"
    }

    return(computerPick)

}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "Paper") {

        results.textContent = "You lose! Paper beats Rock."
        computerValue += 1

        if (computerValue === 5) {

            results.textContent = "You lose the game!"
            gameEnd()

        }
        
        computerScore.textContent = computerValue.toString()
    
    } else if (humanChoice === "rock" && computerChoice === "Scissors") {

        results.textContent = "You win! Rock beats Scissors."
        humanValue += 1

        if (humanValue === 5) {

            results.textContent = "You win the game!"
            gameEnd()

        }

        humanScore.textContent = humanValue.toString()
        
    } else if (humanChoice === "rock" && computerChoice === "Rock") {

        results.textContent = "It's a tie!"

    } else if (humanChoice === "paper" && computerChoice === "Scissors") {

        results.textContent = "You lose! Scissors beats Paper."
        computerValue += 1

        if (computerValue === 5) {

            results.textContent = "You lose the game!"
            gameEnd()

        }
        
        computerScore.textContent = computerValue.toString()
        

    } else if (humanChoice === "paper" && computerChoice === "Rock") {

        results.textContent = "You win! Paper beats Rock."
        humanValue += 1

        if (humanValue === 5) {

            results.textContent = "You win the game!"
            gameEnd()

        }

        humanScore.textContent = humanValue.toString()

    } else if (humanChoice === "paper" && computerChoice === "Paper") {

        results.textContent = "It's a tie!"

    } else if (humanChoice === "scissors" && computerChoice === "Rock") {

        results.textContent = "You lose! Rock beats Scissors."
        computerValue += 1

        if (computerValue === 5) {

            results.textContent = "You lose the game!"
            gameEnd()

        }
        
        computerScore.textContent = computerValue.toString()

    } else if (humanChoice === "scissors" && computerChoice === "Paper") {

        results.textContent = "You win! Scissors beats paper."
        humanValue += 1

        if (humanValue === 5) {

            results.textContent = "You win the game!"
            gameEnd()

        }

        humanScore.textContent = humanValue.toString()

    } else if (humanChoice === "scissors" && computerChoice === "Scissors") {

        results.textContent = "It's a tie!"
        
    }
}


rockButton.addEventListener("click", () => {

    const computerSelection = getComputerChoice()
    const humanSelection = "rock"
    playRound(humanSelection, computerSelection)

}) 
    
paperButton.addEventListener("click", () => {

    const computerSelection = getComputerChoice()
    const humanSelection = "paper"
    playRound(humanSelection, computerSelection)

})

scissorsButton.addEventListener("click", () => {

    const computerSelection = getComputerChoice()
    const humanSelection = "scissors"
    playRound(humanSelection, computerSelection)
    
})


function gameEnd() {

    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true
    playAgainButton.style.opacity = 1
    playAgainButton.disabled = false

}


playAgainButton.addEventListener("click", () => {

    gameRestart()

})

function gameRestart() {

    humanScore.textContent = "0"
    computerScore.textContent = "0"
    playAgainButton.disabled = true
    playAgainButton.style.opacity = 0
    rockButton.disabled = false
    paperButton.disabled = false
    scissorsButton.disabled = false
    humanValue = 0
    computerValue = 0
    results.textContent = ""

}