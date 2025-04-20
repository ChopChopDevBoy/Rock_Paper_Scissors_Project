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


function getHumanChoice() {

     
    return(prompt())

}


let humanScore = 0 
let computerScore = 0
let timesPlayed = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore = (computerScore + 1)
        timesPlayed = (timesPlayed + 1)
        return("lose")
        

    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore = (humanScore + 1)
        timesPlayed = (timesPlayed + 1)
        return("win")

    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("It's a tie!")
        timesPlayed = (timesPlayed + 1)
        return("tie")

    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper.")
        computerScore = (computerScore + 1)
        timesPlayed = (timesPlayed + 1)
        return("lose")

    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock.")
        humanScore = (humanScore + 1)
        timesPlayed = (timesPlayed + 1)
        return("win")

    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("It's a tie!")
        timesPlayed = (timesPlayed + 1)
        return("tie")

    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore = (computerScore + 1)
        timesPlayed = (timesPlayed + 1)
        return("lose")

    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats paper.")
        humanScore = (humanScore + 1)
        timesPlayed = (timesPlayed + 1)
        return("win")

    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("It's a tie!")
        timesPlayed = (timesPlayed + 1)
        return("tie")
    }
}



function playGame() {

    for (let i = 1; i <= 5; i++) {

        const humanSelection = getHumanChoice()
        const computerSelection =  getComputerChoice()
        playRound(humanSelection, computerSelection)

    }

    if (humanScore > computerScore) {

        console.log("You win the match!")

    }else if (computerScore > humanScore) {

        console.log("You lose the match!")

    }else if (computerScore === humanScore) {

        playGame()

    }
}

playGame()