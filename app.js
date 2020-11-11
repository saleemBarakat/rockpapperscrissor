//variabler för de funktioner jag behöver
let userScore = 0;
let computerScore = 0;
const userScorespan = document.getElementById("user-score");
const computerScorespan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result p");
const rock = document.getElementById("r");
const papper = document.getElementById("p");
const scissor = document.getElementById("s");
//funktion för dator att göra ett random val
function getComputerChoise() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//funktion för att omvandla en viss bokstav till ett ord att vissa istället för endast en bokstav
function convertToWord(letter) {
    if (letter === "r")
        return "Sten";
    if (letter === "p")
        return "Påse";
    if (letter === "s")
        return "Sax";
}

//funktion för att användaren att göra ett val
function win(userChoice, ComputerChoise) {
    userScore++;
    userScorespan.innerHTML = userScore;
    computerScorespan.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + " vinner över " + convertToWord(ComputerChoise);
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 1000);
}
function lose(userChoice, ComputerChoise) {
    computerScore++;
    userScorespan.innerHTML = userScore;
    computerScorespan.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + " förlorar mot " + convertToWord(ComputerChoise);
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 1000);
}
function draw(userChoice, ComputerChoise) {
    result.innerHTML = convertToWord(userChoice) + " mot " + convertToWord(ComputerChoise) + " blir lika och ingen vinnner";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow') }, 1000);
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

    rock.addEventListener('click', function () {
        game("r");
    });

    papper.addEventListener('click', function () {
        game("p");
    });

    scissor.addEventListener('click', function () {
        game("s");
    });
}
main();

