// GET HTML ELEMENTS
const questionElement = document.getElementById('question');
const optionsElement = document.querySelector('.quiz-options');
const checkAnswerElement = document.getElementById('check-answer');
const playAgainButtonElement = document.getElementById('play-again');
const resultElement = document.getElementById('result');
const correctScoreElement = document.getElementById('correct-score');
const totalQuestionsElement = document.getElementById('total-question');
const restartButtonElement = document.getElementById('restart-button');

let correctAnswer = '';
let correctScore = 0;
let questionsAsked = 0;
let totalQuestions = sessionStorage.getItem('questionCount');
let config = getConfig();

// Build API URL
let category = '';
let difficulty = '';
let type = '';

category = config.category === 'any' ? (category = '') : (category = `&category=${config.category}`);
difficulty = config.difficulty === 'any' ? (difficulty = '') : (difficulty = `&difficulty=${config.difficulty}`);
type = config.type === 'any' ? (type = '') : (type = `&type=${config.type}`);

// QUERY API
async function loadQuestion() {
    const APIUrl = `https://opentdb.com/api.php?amount=1${category}${difficulty}${type}`;
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    resultElement.innerHTML = '';
    displayQuestion(data.results[0]);
}

// ADD EVENT LISTENERS
function eventListeners() {
    checkAnswerElement.addEventListener('click', checkAnswer);
    playAgainButtonElement.addEventListener('click', restartQuiz);
    restartButtonElement.addEventListener('click', restartQuiz);
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

    questionElement.innerHTML = `<strong>Question ${questionsAsked + 1} of ${totalQuestions}</strong><br> ${
        data.question
    } <br> <span class = "category"> Category: ${data.category} </span>`;
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
            // console.log('');
        }, 5000);

        resultElement.innerHTML += `
        <div class="game-over">
        <h2>Game Over</h2>
        <p>Your score is ${correctScore} out of ${totalQuestions}.</p>
        </div>`;
        playAgainButtonElement.style.display = 'block';
        checkAnswerElement.style.display = 'none';
    } else {
        setTimeout(function () {
            loadQuestion();
        }, 4000);
    }
}

function setCount() {
    totalQuestionsElement.textContent = totalQuestions;
    correctScoreElement.textContent = correctScore;
}

function restartQuiz() {
    // correctScore = questionsAsked = 0;
    // playAgainButtonElement.style.display = 'none';
    // checkAnswerElement.style.display = 'block';
    // checkAnswerElement.disabled = false;
    // setCount();
    // loadQuestion();
    window.location.href = 'index.html';
}

// GET CONFIG - Returns an object of config choices
function getConfig() {
    const config = {
        category: sessionStorage.getItem('category'),
        difficulty: sessionStorage.getItem('difficulty'),
        type: sessionStorage.getItem('type'),
    };

    return config;
}