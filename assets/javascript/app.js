var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var counter = 60;
var timerCountdown = document.getElementById("countdown");
var displayResults = document.getElementById("quiz__results");
var displayQuestions = document.getElementById("quiz__questions");

displayResults.style.display = "none";

function showResults() {
    playGenie();
    displayQuestions.style.display = "none";
    displayResults.style.display = "block";
}

// Set Timer
var timer = setTimeout(function() {
    showResults();
}, counter * 1000);

// Set Countdown
var countdown = setInterval(function() {
    counter--;
    timerCountdown.innerHTML = counter;
    if (counter === 0) {
        stopCountdown();
        showResults();
    }
}, 1000);


function stopCountdown() {
    clearInterval(countdown);
}

function playGenie() {
    document.getElementById("audiotag2").play();
}
//questions and answer data
var questions = [{
        question: "1. What was the name of Walt Disney's first character?",
        answers: [
            "Snow White",
            "Oswald the Lucky Rabbit",
            "Mickey Mouse"
        ]
    },

    {
        question: "2. How many lines did Aurora have in Sleeping Beauty?",
        answers: [
            "18",
            "12",
            "5"
        ]
    },

    {
        question: "3. Who was Walt Disney's favorite character?",
        answers: [
            "Mickey Mouse",
            "Figaro",
            "Donald Duck"
        ]
    },

    {
        question: "4. Which character from 'Aladdin' makes a cameo appearance in 'The Hunchback of Norte-Dame'?",
        answers: [
            "Jasmine",
            "Genie",
            "Carpet"
        ]
    },

    {
        question: "5. What poem does the Cheshire Cat sing in 'Alice in Wonderland'?",
        answers: [
            "The Road Not Taken",
            "A Dream Within a Dream",
            "Jabberwocky"
        ]
    },

    {
        question: "6. How was Pegasus created in 'Hercules'?",
        answers: [
            "He was formed out of clouds",
            "He was created by Hades",
            "He was formed from a lightening storm"
        ]
    },

    {
        question: "7. Which Disney movie was shown in limited theaters due to complicated audio?",
        answers: [
            "Fantasia",
            "Sleeping Beauty",
            "Beauty and the Beast"
        ]
    },

    {
        question: "8. What is the name of Donald Duck's sister?",
        answers: [
            "Della Duck",
            "Daisy Duck",
            "Delilah Duck"
        ]
    },

    {
        question: "9. How many eggs does Gaston eat for breakfast?",
        answers: [
            "2 Dozen",
            "5 Dozen",
            "12 Dozen"
        ]
    },

    {
        question: "10. Who is Snow White's prince?",
        answers: [
            "Phillip",
            "Florian",
            "Eugene"
        ]
    },

    {
        question: "11. Angela Lansbury plays a witch called Miss Eglantine Price in which Disney movie?",
        answers: [
            "Bedknobs and Broomsticks",
            "Anastasia",
            "The Last Unicorn"
        ]
    },

    {
        question: "12. Patrick Stewart has said that turning down this Disney character is his greatest regret.",
        answers: [
            "Scar",
            "Prince John",
            "Jafar"
        ]
    },

    {
        question: "13. What does 'hakuna matata' really mean?",
        answers: [
            "No worries for the rest of your days",
            "There are no problems",
            "Restful days to come"
        ]
    },

    {
        question: "14. What is the name of the pub that Flynn brings Rapunzel to in 'Tangled'?",
        answers: [
            "Gothel's Pub",
            "The Snuggly Duckling",
            "The Unicorn Den"
        ]
    },

    {
        question: "15. How was the lightsaber sound created?",
        answers: [
            "Sound effect machine",
            "Hitting a radio transmitter and microphone together",
            "Hum of idling movie projector and microphone"

        ]
    },

    {
        question: "16. Who is Luke and Leia's mother?",
        answers: [
            "Queen Breha Organa",
            "Padme Amidala",
            "Qui-Gon-Jinn"
        ]
    },
];

//answer array
var correctAnsArr = [
    "Oswald the Lucky Rabbit",
    "18",
    "Figaro",
    "Carpet",
    "Jabberwocky",
    "He was formed out of clouds",
    "Fantasia",
    "Della Duck",
    "5 Dozen",
    "Florian",
    "Bedknobs and Broomsticks",
    "Jafar",
    "There are no problems",
    "The Snuggly Duckling",
    "Hum of idling movie projector and microphone",
    "Padme Amidala"

];


//display questions and answers
for (var i = 0; i < questions.length; i++) {
    var question = questions[i];

    var sec = document.createElement("section");
    sec.className = "quiz__questions--question q" + i;
    sec.innerHTML = `<p>${question.question}</p>`;
    document.getElementById("form").appendChild(sec);

    for (var j = 0; j < question.answers.length; j++) {
        // console.log(question.answers[j]);
        var answer = question.answers[j];

        var div = document.createElement("div");
        var radioBtn = `<input type="radio" name="group${i}" value="${answer}">`
        div.innerHTML = radioBtn + " " + answer;
        // div.setAttribute("id", "answer");
        document.querySelector(".q" + i).appendChild(div);
    }
}

var form = document.forms["form"];
form.addEventListener("submit", function(event) {
    event.preventDefault();
    stopCountdown();

    for (var i = 0; i < form.children.length; i++) {
        var found = "";

        for (var j = 0; j < form["group" + i].length; j++) {
            if (form["group" + i][j].checked) {
                found = form["group" + i][j].value;
            }
        }

        if (found === correctAnsArr[i]) {
            correctAns += 1;
            found = "";
        } else if (found === "") {
            unanswered += 1;
        } else {
            incorrectAns += 1;
        }
    }

    document.getElementById("correct").innerHTML = correctAns;
    document.getElementById("incorrect").innerHTML = incorrectAns;
    document.getElementById("unanswered").innerHTML = unanswered;

    showResults();



});