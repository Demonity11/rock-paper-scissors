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
    let userInput = prompt("Choose rock, paper or scissors: ");
    if (userInput === null || userInput === "") {
        return console.log("Player quit.")
    }
    userInput = userInput.toLowerCase();

    const pcInput = Math.floor(Math.random() * 3);

    game(userInput, pcInput);
    console.log(`Player: ${user_score} | Computer : ${computer_score}`);

    return main();
}

function game(playerInput, computerInput) {
    const possibilities = ["rock", "paper", "scissors"];
    let index = computerInput;
    computerInput = possibilities.at(index);

    console.log(`Player throw "${playerInput}"\n`);
    console.log(`Computer throw "${computerInput}"\n`);

    if (playerInput === computerInput) {
        console.log("It's a tie!");
    } 
    else if (playerInput === "rock" && computerInput === "scissors") {
        user_score++;
        console.log("Player wins!");
    } 
    else if (playerInput === "rock" && computerInput === "paper") {
        computer_score++;
        console.log("Player loses!");
    } 
    else if (playerInput === "paper" && computerInput === "rock") {
        user_score++;
        console.log("Player wins!");
    } 
    else if (playerInput === "paper" && computerInput === "scissors") {
        computer_score++;
        console.log("Player loses!");
    } 
    else if (playerInput === "scissors" && computerInput === "paper") {
        user_score++;
        console.log("Player wins!");
    } 
    else if (playerInput === "scissors" && computerInput === "rock") {
        computer_score++;
        console.log("Player loses!");
    } else {
        console.log("The typed input it's not 'rock', 'paper' or 'scissors'.");
    }
}

let user_score = 0;
let computer_score = 0;

main();