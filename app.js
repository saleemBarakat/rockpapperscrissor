const userScore = 0;
const computercore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comuter-score");
const scoreBoad_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const papper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoise() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function game(userChoice) {
    const ComputerChoise = getComputerChoise();
    console.log("user choice => " + userChoice);
    console.log("computer choice => " + ComputerChoise);
}

function main() {

    rock_div.addEventListener('click', function () {
        game("r");
    });

    papper_div.addEventListener('click', function () {
        game("p");
    });

    scissor_div.addEventListener('click', function () {
        game("s");
    });
}
main();

