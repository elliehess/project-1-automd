var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
        answer: "Console.log"
    },
];

//Additional Variables: 
var currentScore = 0; 
var questionNumber = 0;

// Variables with query selection to reference HTML file: 
var timeLeft = document.querySelector("#time-left");
var startGame = document.querySelector("#start-button");
var quizQuestion = document.querySelector("#quiz-question");
var card = document.querySelector("#card");

// Variables for quiz functions: 
var startingTime = 75;
var timer = 0;
var wrongAnswer = 10;

// Varabile for creating an element not currently in existing HTML. 
var createList = document.createElement("ul");

// Timer function to display on screen and count down. 
startGame.addEventListener("click", function() {
    if (timer === 0) {
        timer = setInterval(function() {
            startingTime--;
            timeLeft.textContent = "Seconds Left: " + startingTime;

            if (startingTime <= 0) {
                clearInterval(timer);
                gameOver();
                timeLeft.textContent = "Time Over!"
            }
        }, 1000);
    }
    render(questionNumber);
});

// Function for questions, answers and choices: 
function render(questionNumber) {
    createList.innerHTML = "";
    
    for (var i = 0; i < questions.length; i++) {
        var displayQuestion = questions[questionNumber].question;
        var displayChoices = questions[questionNumber].choices;
        quizQuestion.textContent = displayQuestion;
    }

    displayChoices.forEach(function (newEl) {
        var li = document.createElement("li");
        li.textContent = newEl;
        quizQuestion.appendChild(createList);
        createList.appendChild(li);
        li.addEventListener("click", (compareAnswer));
    })
}


// Function that confirms if the correct answer was selected. Message will state if correct or incorrect 
// and provide the right answer. Once all questions are answered the total is tallied and displayed. 
function compareAnswer(event) {
    var selection = event.target; 
    
    if (selection.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (selection.textContent == questions[questionNumber].answer) {
            currentScore++;
            createDiv.textContent = questions[questionNumber].answer + " is correct!";

        } else {
            startingTime = startingTime - wrongAnswer;
            createDiv.textContent = "That is incorrect, the answer is: " + questions[questionNumber].answer;
        }
    }
    questionNumber++;

    if (questionNumber >= questions.length) {
        createDiv.textContent = "Game Over! You correctly answered " + currentScore + "/" + questions.length + " questions";
        gameOver();
        
    } else {
        render(questionNumber);
    }
    quizQuestion.appendChild(createDiv);
}


// Game over function that clears content and allows to start over. 
function gameOver() {
    quizQuestion.innerHTML = "";
    timeLeft.innerHTML = "";
    var timeRemaining = 0;

    var createHeading = document.createElement("h1");
    createHeading.setAttribute("id", "create-heading");
    createHeading.textContent = "Quiz Completed!";

    quizQuestion.appendChild(createHeading);

    // Displays final score information and time left. 
    var createParagraph = document.createElement("p");
    createParagraph.setAttribute("id", "create-paragraph");

    quizQuestion.appendChild(createParagraph);

    if (startingTime >= 0) {
        timeRemaining = startingTime;
        clearInterval(timer);
    }

    createParagraph.textContent = "Final Score: " + timeRemaining;

    //Variables for labeling, set attributes, and submitting for initials.    
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "create-label");
    createLabel.textContent = "Enter your initials: ";

    quizQuestion.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("id", "initials");
    createInput.setAttribute("type", "text");
    createInput.textContent = "";

    quizQuestion.appendChild(createInput);

    var createSubmitButton = document.createElement("button");
    createSubmitButton.setAttribute("id", "submit-button");
    createSubmitButton.setAttribute("type", "submit");
    createSubmitButton.textContent = "Submit";

    quizQuestion.appendChild(createSubmitButton);

    // Added the event listener to record/respond to the submit button click.
    createSubmitButton.addEventListener("click", function() {
        var initials = createInput.value;
        if(initials === null) {
            console.log("No initials entered"); 
        } else {
                var endScore = {
                initials: initials,
                score: timeRemaining
            }
            
    // Used to pull and "destringify" scores from local storage.  
            var allScores = localStorage.getItem("allScores");
            if(allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
    // Pushes scores to local storage and "stringifies" them.  
            allScores.push(endScore);
            
            var newAllScores = JSON.stringify(allScores);
            localStorage.setItem("allScores", newAllScores);

    // Gets you to the high score board. 
            window.location.replace("./highscores.html");
        }
    });
}