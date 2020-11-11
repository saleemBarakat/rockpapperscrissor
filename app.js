//variabler för de funktioner jag behöver
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comuter-score");
const scoreBoad_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const papper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//funktion för dator att göra ett random val
function getComputerChoise() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//funktion för att användaren att göra ett val

function win(userChoice, ComputerChoise) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = userChoice + " beats " + ComputerChoise + " you win! ";
}
function lose() {

}
function draw() {

}

function game(userChoice) {
    const ComputerChoise = getComputerChoise();
    switch (userChoice + ComputerChoise) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, ComputerChoise);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, ComputerChoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, ComputerChoise);

            break;

    }
}
//function för att kunna klicka och göra ett val
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

