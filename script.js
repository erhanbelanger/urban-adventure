const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQeustion()
})

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQeustion()
}

function setNextQeustion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
})
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'alerts', correct: true},
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: false },
            {text: 'numbers', correct: false}
        ] 
    },
    {
        question: 'Inside which HTML element do we put the JavaSCript?:',
        answers: [
            {text: '<script>', correct: true},
            {text: '<javascript', correct: false},
            {text: '<js>', correct: false },
            {text: '<scripting>', correct: false}
        ] 
    },
    {
        question: 'JavaScript is a ___-side programming language:',
        answers: [
            {text: 'none', correct: false},
            {text: 'server', correct: false},
            {text: 'both', correct: true },
            {text: 'client', correct: false}
        ] 
    },
    {
        question: 'Which of the following will write the message "hello world!" in an alert box?:',
        answers: [
            {text: 'alertBox("hello world!");', correct: false},
            {text: 'alert("hello world!");', correct: true},
            {text: 'alert(hello world!);', correct: false },
            {text: 'msgAlert("hello world!");', correct: false}
        ] 
    },
    {
        question: 'Which of the following JavaScript labels catches all the values, except for the ones specified?',
        answers: [
            {text: 'default', correct: true},
            {text: 'catch', correct: false},
            {text: 'label', correct: false },
            {text: 'try', correct: false}
        ] 
    },
]