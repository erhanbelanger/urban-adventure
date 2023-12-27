//declaring all variables needed for and grabbing them by ID and Class
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let numberOfQuestions = document.querySelector(".questions");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.getElementById("user-score");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 6;
let countdown;
// 5 questions for the quiz
const quizArray = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["alerts", "booleans", "alerts", "numbers"],
    correct: "alerts",
  },
  {
    question: "Inside which HTML element do we put the JavaSCript?:",
    options: ["<script>", "<javascript", "<js>", "<scripting>"],
    correct: "<script>",
  },
  {
    question: "JavaScript is a ___-side programming language:",
    options: ["none", "server", "both", "client"],
    correct: "both",
  },
  {
    question:
      'Which of the following will write the message "hello world!" in an alert box?:',
    options: [
      'alertBox("hello world!");',
      'alert("hello world!");',
      "alert(hello world!);",
      'msgAlert("hello world!");',
    ],
    correct: "alert(hello world!);",
  },
  {
    question:
      "Which of the following JavaScript labels catches all the values, except for the ones specified?",
    options: ["default", "catch", "label", "try"],
    correct: "default",
  },
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Your Score is" + scoreCount + "out of" + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + "of" + quizArray.length + "question";

      quizDisplay(questionCount);
      count; 6;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = '${count}';
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll('container-mid');

    quizCards.forEach((card) => {
        card.classList.add('hide');
    });
};
