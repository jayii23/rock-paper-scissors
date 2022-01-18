console.log("Hello World!")

//INSTRUCTIONS --> https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#assignment

//Function computerPlay - have computer randomly choose rock, paper, scissors
function computerPlay() {
    let move;
    let min = Math.ceil(3);
    let max = Math.floor(1);
    let moveID = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (moveID) {
        case (1): move = "Rock!"
        break;
        
        case (2): move = "Paper";
        break;

        case (3): move = "Scissors";
        break;

    }

    return move;
}

console.log(computerPlay());


//Function playRound(playerSelection, computerSelection) - play 1 round of game
    //return string that declares winner of round
    //get computerSelection using function computerPlay
    //make players selection case-insensitive (rock, rOck, etc..)
    //make sure to return results, not just console.log them

//Function game() - play a 5 round game and keep score
    //must use previous function within it
    //use console.log to display results of each round and overall winner
    //use prompt() to get input from user
    //feel free to create more helper functions