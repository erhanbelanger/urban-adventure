let timeLeft =document.querySelector('.time-left');
let quizContainer = document.getElementById('container');
let nextBtn = document.getElementById('next-button');
let numberOfQuestions = document.querySelector('.questions');
let displayContainer = document.getElementById('display-container');
let scoreContainer = document.querySelector('.score-container');
let restart = document.getElementById('restart');
let userScore = document.getElementById('user-score');
let startScreen = document.getElementById('user-score');
let startButton = document.getElementById('start-button');
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
    {
        question: 'Commonly used data types DO NOT include:',
        options: [
             'alerts',
             'booleans', 
             'alerts', 
             'numbers', 
        ],
        correct : 'alerts', 
    },
    {
        question: 'Inside which HTML element do we put the JavaSCript?:',
        options: [
             '<script>',
             '<javascript', 
             '<js>', 
             '<scripting>', 
        ],
        correct : '<script>',
    },
    {
        question: 'JavaScript is a ___-side programming language:',
        options: [
            'none', 
            'server', 
            'both', 
            'client', 
        ],
        correct : 'both', 
    },
    {
        question: 'Which of the following will write the message "hello world!" in an alert box?:',
        options: [
            'alertBox("hello world!");', 
            'alert("hello world!");', 
            'alert(hello world!);', 
            'msgAlert("hello world!");', 
        ],
        correct: 'alert(hello world!);'
    },
    {
        question: 'Which of the following JavaScript labels catches all the values, except for the ones specified?',
        options: [
             'default',
             'catch',
             'label',
             'try',
        ] ,
        correct: 'default',
    },
]
