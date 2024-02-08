const questionCount = document.getElementById('question-count');
const triviaCategory = document.getElementById('trivia_category');
const triviaDifficulty = document.getElementById('trivia_difficulty');
const triviaType = document.getElementById('trivia_type');
const titleElement = document.getElementById('title');

const playButtonElement = document.getElementById('playButton');

document.getElementById('playButton').addEventListener('click', function (event) {
    event.preventDefault();
    setConfig(questionCount.value, triviaCategory.value, triviaDifficulty.value, triviaType.value);
    window.location.href = 'quiz.html';
});

userCheck('username');

// UTILITY FUNCTIONS //

// SET A COOKIE
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

// GET A COOKIE
function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

// USER CHECK - checks if username cookie exists, asks for one if it doesn't
function userCheck(name) {
    let val = getCookie(name);
    if (val != '') {
        titleElement.innerText = 'Welcome again ' + val;
        // alert('Welcome again ' + val);
    } else {
        user = prompt('Please enter your name:', '');
        if (user != '' && user != null) {
            setCookie('username', user, 365);
        }
    }
}

// SET CONFIG - Sets session variables for config choices
function setConfig(questionCount, category, difficulty, type) {
    sessionStorage.setItem('questionCount', questionCount);
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('difficulty', difficulty);
    sessionStorage.setItem('type', type);
}