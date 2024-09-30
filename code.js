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

    if (playerInput === computerInput) {
        console.log("It's a tie!");
    } 
    else if ((playerInput === "rock" && computerInput === "scissors") || 
             (playerInput === "paper" && computerInput === "rock") ||
             (playerInput === "scissors" && computerInput === "paper")) {
        user_score++;
        console.log(`You win! ${playerInput} beats ${computerInput}!`);

    } 
    else if ((playerInput === "rock" && computerInput === "paper") ||
            (playerInput === "paper" && computerInput === "scissors") ||
            (playerInput === "scissors" && computerInput === "rock")) {
        computer_score++;
        console.log(`You lose! ${computerInput} beats ${playerInput}!`);

    } 
    else {
        console.log("The typed input it's not 'rock', 'paper' or 'scissors'.");
    }
}

let user_score = 0;
let computer_score = 0;

main();