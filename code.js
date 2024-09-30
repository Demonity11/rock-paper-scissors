// This section contains the pseudocode
// The user will give a prompt which can be rock, paper or scissors
// The computer will randomly pick rock, paper or scissors too
// After that the values given will be compared
// IF the player pick "Rock" and the computer pick "Scissors" then the player wins
// IF the player pick "Rock" and the computer pick "Paper" then the player loses
// IF the player pick "Rock" and the computer pick "Rock" then there's a tie
// IF the player pick "Scissors" and the computer pick "Scissors" then there's a tie
// IF the player pick "Scissors" and the computer pick "Paper" then the player wins
// IF the player pick "Scissors" and the computer pick "Rock" then the player loses
// And so on...

function main() {
    const userInput = prompt("Choose rock, paper or scissors: ").toLowerCase();
    const pcInput = Math.floor(Math.random() * 3);
    console.log(pcInput);

    game(userInput, pcInput);
}

function game(playerInput, computerInput) {
    const possibilities = ["rock", "paper", "scissors"];
    let index = computerInput;
    computerInput = possibilities.at(index);

    console.log(`Player throw "${playerInput}"\n`);
    console.log(`Computer throw "${computerInput}"\n`);

    if (playerInput === computerInput) {
        return console.log("It's a tie!");
    } 
    else if (playerInput === "rock" && computerInput === "scissors") {
        return console.log("Player wins!");
    } 
    else if (playerInput === "rock" && computerInput === "paper") {
        return console.log("Player loses!");
    } 
    else if (playerInput === "paper" && computerInput === "rock") {
        return console.log("Player wins!");
    } 
    else if (playerInput === "paper" && computerInput === "scissors") {
        return console.log("Player loses!");
    } 
    else if (playerInput === "scissors" && computerInput === "paper") {
        return console.log("Player wins!");
    } 
    else if (playerInput === "scissors" && computerInput === "rock") {
        return console.log("Player loses!");
    }

    return console.log("The typed input it's not 'rock', 'paper' or 'scissors'.");
}

main();