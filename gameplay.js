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
        } else if (computerScore >= 5){
            console.log("You Lose!")
            document.getElementById("game-results").innerHTML = "You Lose!";
        } else {
            console.log("No winner yet...")
            document.getElementById("game-results").innerHTML = "No winner yet...";
        }
}

function updateScoreOnScreen() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

//Game Logic

//add event listeners to get user input
rockButton = document.getElementById("Rock");
paperButton = document.getElementById("Paper");
scissorsButton = document.getElementById("Scissors");

rockButton.addEventListener('click', () => {
    document.getElementById("round-results").innerHTML = playRound("Rock", computerPlay());  //returns text of who won
    checkScore();
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    updateScoreOnScreen();
});

paperButton.addEventListener('click', () => {
    document.getElementById("round-results").innerHTML = playRound("Paper", computerPlay()); 
    checkScore();
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    updateScoreOnScreen();
});

scissorsButton.addEventListener('click', () => {
    document.getElementById("round-results").innerHTML = playRound("Scissors", computerPlay()); 
    checkScore();
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    updateScoreOnScreen();
});

//To Do:
    //1) Write new score to html at the end of each round
    //2) Write result of round to html at the end of each round
    //3) When player reaches 5 - display winner in html and prevent another game from being played
    //4) Format HTML to look nice
    //5) Add images to buttons for better UX