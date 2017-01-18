/*
Lab 2 - Code Academy's JavaScript Rock-Paper-Scissors

This lab is a JavaScript refresher.  To complete the lab:

- Visit https://www.codeacademy.com/courses/javascript-beginner-en-Bthev-mskY8/0/1?curriculum_id=506324b3a7dffd00020bf661
- Follow the instructions and complete the tutorial online in class
- When your game is working, copy your completed code into a file called lab2.js
- Create a GitHub repo called comp2068-lab2 and push your lab2.js file to this repo
- Submit your comp2068-lab2 repo link on Blackboard
*/
var userQuestion = function () {
    var userChoice = null;
    while (true) {
        userChoice = prompt("Do you choose rock, paper or scissors?");
        if (["rock", "paper", "scissors"].includes(userChoice)) {
            break;
        }
    }
    return userChoice;
};

var computerQuestion = function () {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    }
    return computerChoice;
};

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else { // choice1 is scissors
        if(choice2 === "paper") {
            return "scissors wins";
        } else {
            return "rock wins";
        }
    }
};

var print = function (userChoice, computerChoice) {
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log(compare(userChoice, computerChoice));
}

while (true) {
    var userChoice = userQuestion(),
        computerChoice = computerQuestion();
    print(userChoice, computerChoice);
    if (userChoice !== computerChoice) {
        break;
    }
}