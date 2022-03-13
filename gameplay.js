//INSTRUCTIONS --> https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#assignment

//Global Variables
let playerScore = 0;
let computerScore = 0;

//Function computerPlay - have computer randomly choose rock, paper, scissors
function computerPlay() {
    let move;
    let min = Math.ceil(3);
    let max = Math.floor(1);
    let moveID = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (moveID) {
        case (1): move = "Rock"
        break;
        
        case (2): move = "Paper";
        break;

        case (3): move = "Scissors";
        break;
     }

    return move;
}

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection == computerSelection) {
        return "This round was a draw!";
    }

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

}

function checkScore() {
        if (playerScore >= 5) {
            console.log("You Win!")
            document.getElementById("game-results").innerHTML = "You Win!";
            restartGame("Player");
        } else if (computerScore >= 5){
            console.log("You Lose!")
            document.getElementById("game-results").innerHTML = "You Lose!";
            restartGame("Computer");
        } else {
            console.log("No winner yet...")
        }
}

function updateScoreOnScreen() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function restartGame(winner) {
    document.querySelectorAll('.game-screen').forEach.setAttribute('visibility', 'hidden');
    playerScore = 0;
    computerScore = 0;
    document.querySelectorAll('.end-game').forEach.setAttribute('visibility', 'visible');
    //add event listener for button
    //if button clicked then reset everything
}

//Game Logic

//add event listeners to get user input
rockButton = document.getElementById("Rock");
paperButton = document.getElementById("Paper");
scissorsButton = document.getElementById("Scissors");

rockButton.addEventListener('click', () => {
    document.getElementById("round-results").innerHTML = playRound("Rock", computerPlay());  //returns text of who won
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    updateScoreOnScreen();
    checkScore();
});

paperButton.addEventListener('click', () => {
    document.getElementById("round-results").innerHTML = playRound("Paper", computerPlay()); 
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    updateScoreOnScreen();
    checkScore();
});

scissorsButton.addEventListener('click', () => {
    document.getElementById("round-results").innerHTML = playRound("Scissors", computerPlay()); 
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    updateScoreOnScreen();
    checkScore();
});

//To Do:
    //3) When score reaches 5 - prevent another game from being played
    //4) Format HTML to look nice
    //5) Add images to buttons for better UX