//variabler för de funktioner jag använder
let userScore = 0;
let computerScore = 0;
const user_label = document.getElementById("user-label");
const computer_label = document.getElementById("computer-label");
const userScorespan = document.getElementById("user-score");
const computerScorespan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result p");
const rock = document.getElementById("r");
const papper = document.getElementById("p");
const scissor = document.getElementById("s");
//funktion för att datorn ska kunna göra ett oförutsägbart drag
function getComputerChoise() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//funktion för att omvandla enstaka bokstaver till ord istället
function convertToWord(letter) {
    if (letter === "r")
        return "Sten";
    if (letter === "p")
        return "Påse";
    if (letter === "s")
        return "Sax";
}

//funktion till när användaren gör ett val, vad texten ska visa, hur färgerna blir och och poängen ska räknas ut
function win(userChoice, ComputerChoise) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScorespan.innerHTML = userScore;
    computerScorespan.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + " vinner över " + convertToWord(ComputerChoise);
    userChoice_div.classList.add("green-glow");
    userScorespan.classList.add("green-glow");
    user_label.classList.add("green-glow");
    setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 300);
    setTimeout(function () { userScorespan.classList.remove('green-glow') }, 300);
    setTimeout(function () { user_label.classList.remove('green-glow') }, 300);
}

function lose(userChoice, ComputerChoise) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    userScorespan.innerHTML = userScore;
    computerScorespan.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + " förlorar mot " + convertToWord(ComputerChoise);
    userChoice_div.classList.add("red-glow");
    computerScorespan.classList.add("red-glow");
    computer_label.classList.add("red-glow");
    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 300);
    setTimeout(function () { computerScorespan.classList.remove('red-glow') }, 300);
    setTimeout(function () { computer_label.classList.remove('red-glow') }, 300);
}

function draw(userChoice, ComputerChoise) {
    const userChoice_div = document.getElementById(userChoice)

    result.innerHTML = convertToWord(userChoice) + " mot " + convertToWord(ComputerChoise) + " blir lika och ingen vinnner";
    userChoice_div.classList.add("gray-glow");
    scoreBoard.classList.add("gray-glow");
    setTimeout(function () { userChoice_div.classList.remove('gray-glow') }, 300);
    setTimeout(function () { scoreBoard.classList.remove('gray-glow') }, 300);
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

