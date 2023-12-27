//declaring all variables needed for and grabbing them by ID and Class
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".questions");
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
    id: '0',
    question: "Commonly used data types DO NOT include:",
    options: ["alerts", "booleans", "alerts", "numbers"],
    correct: "alerts",
  },
  {
    id: '1',
    question: "Inside which HTML element do we put the JavaSCript?:",
    options: ["<script>", "<javascript", "<js>", "<scripting>"],
    correct: "<script>",
  },
  {
    id: '2',
    question: "JavaScript is a ___-side programming language:",
    options: ["none", "server", "both", "client"],
    correct: "both",
  },
  {
    id: '3',
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
    id: '4',
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
        questionCount + 1 + "of" + quizArray.length + ".question";

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
        timeLeft.innerHTML = `${count}`;
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
    quizCards[questionCount].classList.remove('hide');
};

function quizCreater(){
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=> Math.random() - 0.5);
        let div = document.createElement('div');
        div.classList.add('container-mid', 'hide');
        countOfQuestion.innerHTML = 1 + 'of' + quizArray.length + 'question';

        let question_DIV = document.createElement('p');
        question_DIV.classList.add('question');
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">
        ${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[3]}</button>
        `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName('container-mid')[questionCount];
    let options = question.querySelectorAll('.option-div');

    if(userSolution === quizArray[questionCount].
    correct){
        userOption.classList.add('correct');
        scoreCount++;
    } else {
        userOption.classList.add('incorrect');
    }
    
        options.forEach((element) =>{
            if(element.innerText == quizArray[questionCount].correct) {
                element.classList.add('correct');
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element)=>{
        element.disabled = true;
    });


function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 6;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener('click', () =>{
    startScreen.classList.add('hide');
    displayContainer.classList.remove('hide');
    initial();
});

window.onload = () => {
    startScreen.classList.remove('hide');
    displayContainer.classList.add('hide');
};