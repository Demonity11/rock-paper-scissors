function main() {
    const pressedBtn = document.querySelectorAll(".btn");

    pressedBtn.forEach((button) => {
       button.addEventListener("click", () => {

        let pcInput = Math.floor(Math.random() * 3);
        let userInput = button.id;

        game(userInput, pcInput);
       });
    });
}

function game(playerInput, computerInput) {
    const possibilities = ["rock", "paper", "scissors"];
    let index = computerInput;
    computerInput = possibilities.at(index);

    const log = document.querySelector("#log");
    const score = document.querySelector("#score");

    if (playerInput === computerInput) {
        log.textContent = "It's a tie!";
    } 
    else if ((playerInput === "rock" && computerInput === "scissors") || 
             (playerInput === "paper" && computerInput === "rock") ||
             (playerInput === "scissors" && computerInput === "paper")) {
        user_score++;
        log.textContent = `You win! ${playerInput} beats ${computerInput}!`;

    } 
    else if ((playerInput === "rock" && computerInput === "paper") ||
            (playerInput === "paper" && computerInput === "scissors") ||
            (playerInput === "scissors" && computerInput === "rock")) {
        computer_score++;
        log.textContent = `You lose! ${computerInput} beats ${playerInput}!`;
    }

    score.textContent = `Player: ${user_score} | Computer : ${computer_score}`;
}

let user_score = 0;
let computer_score = 0;

main();