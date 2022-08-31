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
            restartGame("You Win!");
        } else if (computerScore >= 5){
            console.log("You Lose!")
            document.getElementById("game-results").innerHTML = "You Lose!";
            restartGame("The Computer Won!");
        } else {
            console.log("No winner yet...")
        }
}

function updateScoreOnScreen() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function restartGame(winner) {

    //hide the game screen
    document.querySelector(".game-screen").style.display = 'none';
    console.log("Game screen hidden...")

    //show reset screen
    document.getElementById("final-winner").innerHTML = winner;
    document.querySelector(".end-game").style.display = 'flex';

    //add event listener for button
    //if button clicked then reset everything
}

//Game Logic

//add event listeners to get user input
rockButton = document.getElementById("Rock");
paperButton = document.getElementById("Paper");
scissorsButton = document.getElementById("Scissors");
rematchButton = document.getElementById("play-again");

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

rematchButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScoreOnScreen();

    document.getElementById("game-results").innerHTML = "";
    document.getElementById("round-results").innerHTML = "";

    //display game-screen
    document.querySelector(".game-screen").style.display = 'block';
    
    //hide end-game screen
    document.querySelector(".end-game").style.display = 'none';
});

//To Do:
    // - Add images in between score - update w. player and computers choice
    // - When a round is won - use animation to show rock beating scissors, etc.
    // - At the end of the game, there are two gray lines at the bottom of the screen - remove to look cleaner