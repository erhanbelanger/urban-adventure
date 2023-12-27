//declaring all variables needed for and grabbing them by ID and Class
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
// 10 questions for the quiz
const quizArray = [
  {
    id: '0',
    question: "Commonly used data types DO NOT include:",
    options: ["alerts", "booleans", "string", "numbers"],
    correct: "alerts",
  },
  {
    id: '1',
    question: "Inside which HTML element do we put the JavaScript?:",
    options: ["script", "javascript", "js", "scripting"],
    correct: "script",
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
  {
    id: '5',
    question:
      "Where is the correct place to insert a JavaScript?",
    options: ["both the head and body", "the body section", "the head section", "the javascript istelf"],
    correct: "both the head and the body",
  },
  {
    id: '6',
    question:
      "An external JavaScript must contain the script",
    options: ["true", "false"],
    correct: "false",
  },
  {
    id: '7',
    question:
      "What is the command to display a prompt?",
    options: ["prompt", "console.log", "boolean", "IDK"],
    correct: "prompt",
  },
  {
    id: '8',
    question:
      "What is the correct way to declare a variable that you can change?",
    options: ["let myName", "const myName", "var myName", "myName"],
    correct: "let myName",
  },
  {
    id: '9',
    question:
      "What is the correct way to generate a random number?",
    options: ["Number.random()", "math.Random()", "math.random()", "Math.random()"],
    correct: "Math.random()",
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
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll('.container-mid');

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
        clearInterval(countdown);
        options.forEach((element)=>{
            element.disabled = true;
        });
        saveResultToLocalStorage();
    }

    function saveResultToLocalStorage() {
        // Retrieve existing results from local storage or initialize an empty array
        let savedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
      
        // Add the current result to the array
        savedResults.push({
          questionId: quizArray[questionCount].id,
          userAnswer: userOption.innerText, // Assuming userOption is defined globally
          correctAnswer: quizArray[questionCount].correct,
        });
      
        // Save the updated results array back to local storage
        localStorage.setItem('quizResults', JSON.stringify(savedResults));
      }
// resetting score at the end of the test
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

document.addEventListener('DOMContentLoaded', function () {
    // Grab the necessary elements
    const scoresList = document.getElementById('scores');
    const clearButton = document.getElementById('clear');
  
    // Load scores from local storage
    const savedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
  
    // Display scores in the scores.html page
    savedResults.forEach((result) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Question ${result.questionId}: Your Answer - ${result.userAnswer}, Correct Answer - ${result.correctAnswer}`;
      scoresList.appendChild(listItem);
    });
  
    // Clear scores from local storage
    clearButton.addEventListener('click', function () {
      localStorage.removeItem('quizResults');
      scoresList.innerHTML = ''; // Clear the displayed scores
    });
  });

function displayScores() {
    const scoresList = document.getElementById('scores');
    const savedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
  
    savedResults.forEach((result) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Question ${result.questionId}: Your Answer - ${result.userAnswer}, Correct Answer - ${result.correctAnswer}`;
      scoresList.appendChild(listItem);
    });
  }