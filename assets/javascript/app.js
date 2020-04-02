//trivia game
function removeDummy() {

    var elem = document.getElementById("game");
    elem.parentNode.removeChild(elem);
    return false;
}

function check() {
    //game variables
    var correct = 0;
    var incorrect = 20;
    var unanswered = 0;
    var timer = 60;
    var timerOn = false;
    var timerId = "";

    //questions and answer data
    var question = [];
    question[0] = document.triviaGame.question1.value;
    question[1] = document.triviaGame.question2.value;
    question[2] = document.triviaGame.question3.value;
    question[3] = document.triviaGame.question4.value;
    question[4] = document.triviaGame.question5.value;
    question[5] = document.triviaGame.question6.value;
    question[6] = document.triviaGame.question7.value;
    question[7] = document.triviaGame.question8.value;
    question[8] = document.triviaGame.question9.value;
    question[9] = document.triviaGame.question10.value;
    question[10] = document.triviaGame.question11.value;
    question[11] = document.triviaGame.question12.value;
    question[12] = document.triviaGame.question13.value;
    question[13] = document.triviaGame.question14.value;
    question[14] = document.triviaGame.question15.value;
    question[15] = document.triviaGame.question16.value;
    question[16] = document.triviaGame.question17.value;
    question[17] = document.triviaGame.question18.value;
    question[18] = document.triviaGame.question19.value;
    question[19] = document.triviaGame.question20.value;

    var correctAnswers = ["Oswald and Lucky Rabbit", "18", "Figaro", "Carpet", "Jabberwocky", "He was formed out of clouds", "Fantasia", "Della Duck", "5 Dozen",
        "Florian", "Bedknobs and Brooksticks", "Snow White and the Seven Dwarfs", "Jafar", "There are no problems", "The Snuggly Duckling", "Hum of idling movie projector and microphone",
        "4", "Padme Amidala", "8 pounds", "Become a prince, be rescued from drowning, and free the Genie"
    ];

    var i;
    for (i = 0; i < 20; i++) {
        console.log(question[i] + "=?" + correctAnswers[i]);
        if (question[i] === correctAnswers[i]) {
            correct++;
            incorrect--;
        } else if (question[i] === "") {
            unanswered++;
            incorrect--;
        }
    }
    var message = ["Great job!", "That's just okay", "Do better next time"];

    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }

    console.log(correct);
    console.log(range);


    document.getElementById("message").innerHTML = message[range];

    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("number_incorrect").innerHTML = "You missed " + incorrect;
    document.getElementById("unanswered").innerHTML = "You skipped " + unanswered;

    removeDummy();
}

//show timer
$('#timer').text(game.timer);
$('#remaining-time').show();

//select first answer to begin timer
//create timer counting down

//time remaining:

//questions with answer selection
//question
//answer selection

//picture and message appear
//correct or incorrect
//if the player runs out of time, tell player times up and show correct answer

//moves on to next question automatically
//time pause a few seconds before moving on to the next question

//runs through set amount of questions
//the end page
//Time Remaining:
//All done message
//correct answers:
//incorrect answers:
//unanswered:
//Start over selection option that does not reload the page but resets the game

// select all elements
// const start = document.getElementById("start");
// const quiz = document.getElementById("quiz");
// const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");
// const progress = document.getElementById("progress");
// const scoreDiv = document.getElementById("scoreContainer");

// // create our questions
// let questions = [{
//     question: "What does HTML stand for?",
//     imgSrc: "img/html.png",
//     choiceA: "Correct",
//     choiceB: "Wrong",
//     choiceC: "Wrong",
//     correct: "A"
// }, {
//     question: "What does CSS stand for?",
//     imgSrc: "img/css.png",
//     choiceA: "Wrong",
//     choiceB: "Correct",
//     choiceC: "Wrong",
//     correct: "B"
// }, {
//     question: "What does JS stand for?",
//     imgSrc: "img/js.png",
//     choiceA: "Wrong",
//     choiceB: "Wrong",
//     choiceC: "Correct",
//     correct: "C"
// }];

// // create some variables

// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let count = 0;
// const questionTime = 10; // 10s
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
// let TIMER;
// let score = 0;

// // render a question
// function renderQuestion() {
//     let q = questions[runningQuestion];

//     question.innerHTML = "<p>" + q.question + "</p>";
//     qImg.innerHTML = "<img src=" + q.imgSrc + ">";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
// }

// start.addEventListener("click", startQuiz);

// // start quiz
// function startQuiz() {
//     start.style.display = "none";
//     renderQuestion();
//     quiz.style.display = "block";
//     renderProgress();
//     renderCounter();
//     TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
// }

// // render progress
// function renderProgress() {
//     for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
//         progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
//     }
// }

// // counter render

// function renderCounter() {
//     if (count <= questionTime) {
//         counter.innerHTML = count;
//         timeGauge.style.width = count * gaugeUnit + "px";
//         count++
//     } else {
//         count = 0;
//         // change progress color to red
//         answerIsWrong();
//         if (runningQuestion < lastQuestion) {
//             runningQuestion++;
//             renderQuestion();
//         } else {
//             // end the quiz and show the score
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// }

// // checkAnwer

// function checkAnswer(answer) {
//     if (answer == questions[runningQuestion].correct) {
//         // answer is correct
//         score++;
//         // change progress color to green
//         answerIsCorrect();
//     } else {
//         // answer is wrong
//         // change progress color to red
//         answerIsWrong();
//     }
//     count = 0;
//     if (runningQuestion < lastQuestion) {
//         runningQuestion++;
//         renderQuestion();
//     } else {
//         // end the quiz and show the score
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }

// // answer is correct
// function answerIsCorrect() {
//     document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
// }

// // answer is Wrong
// function answerIsWrong() {
//     document.getElementById(runningQuestion).style.backgroundColor = "#f00";
// }

// // score render
// function scoreRender() {
//     scoreDiv.style.display = "block";

//     // calculate the amount of question percent answered by the user
//     const scorePerCent = Math.round(100 * score / questions.length);

//     // choose the image based on the scorePerCent
//     let img = (scorePerCent >= 80) ? "img/5.png" :
//         (scorePerCent >= 60) ? "img/4.png" :
//         (scorePerCent >= 40) ? "img/3.png" :
//         (scorePerCent >= 20) ? "img/2.png" :
//         "img/1.png";

//     scoreDiv.innerHTML = "<img src=" + img + ">";
//     scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
//