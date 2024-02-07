// GET HTML ELEMENTS
const questionElement = document.getElementById('question');
const optionsElement = document.querySelector('.quiz-options');
const checkAnswerElement = document.getElementById('check-answer');
const playAgainButtonElement = document.getElementById('play-again');
const resultElement = document.getElementById('result');
const correctScoreElement = document.getElementById('correct-score');
const totalQuestionsElement = document.getElementById('total-question');

let correctAnswer = '';
let correctScore = 0;
let questionsAsked = 0;
let totalQuestions = 10;

// QUERY API
async function loadQuestion() {
    const APIUrl = 'https://opentdb.com/api.php?amount=1';
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    resultElement.innerHTML = '';
    displayQuestion(data.results[0]);
}

// ADD EVENT LISTENERS
function eventListeners() {
    checkAnswerElement.addEventListener('click', checkAnswer);
    playAgainButtonElement.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', function () {
    loadQuestion();
    eventListeners();
    totalQuestionsElement.textContent = totalQuestions;
    correctScoreElement.textContent = correctScore;
});

// DISPLAY QUESTION
function displayQuestion(data) {
    checkAnswerElement.disabled = false;
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);

    questionElement.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    optionsElement.innerHTML = `
        ${optionsList
            .map(
                (option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li>
        `
            )
            .join('')}
    `;
    selectOption();
}

// SELECT OPTION
function selectOption() {
    optionsElement.querySelectorAll('li').forEach(function (option) {
        option.addEventListener('click', function () {
            if (optionsElement.querySelector('.selected')) {
                const activeOption = optionsElement.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
}

// CHECK ANSWER
function checkAnswer() {
    checkAnswerElement.disabled = true;
    if (optionsElement.querySelector('.selected')) {
        let selectedAnswer = optionsElement.querySelector('.selected span').textContent;
        if (selectedAnswer == HTMLDecode(correctAnswer)) {
            console.log(correctAnswer);
            correctScore++;
            resultElement.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
        } else {
            resultElement.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
        }
        checkCount();
    } else {
        resultElement.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
        checkAnswerElement.disabled = false;
    }
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, 'text/html');
    return textString;
}

function checkCount() {
    questionsAsked++;
    setCount();
    if (questionsAsked == totalQuestions) {
        setTimeout(function () {
            console.log('');
        }, 5000);

        resultElement.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        playAgainButtonElement.style.display = 'block';
        checkAnswerElement.style.display = 'none';
    } else {
        setTimeout(function () {
            loadQuestion();
        }, 2000);
    }
}

function setCount() {
    totalQuestionsElement.textContent = totalQuestions;
    correctScoreElement.textContent = correctScore;
}

function restartQuiz() {
    correctScore = questionsAsked = 0;
    playAgainButtonElement.style.display = 'none';
    checkAnswerElement.style.display = 'block';
    checkAnswerElement.disabled = false;
    setCount();
    loadQuestion();
}