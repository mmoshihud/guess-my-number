'use strict';

document.querySelector('.message').textContent = 'Manupulation started';

let score = 20;
let nubmer = Math.trunc(Math.random() * 20);

//document.querySelector('.number').textContent = nubmer;

const checkBtn = function () {
    const num = Number(document.querySelector('.guess').value);

    if (num != nubmer) {
        document.querySelector('.message').textContent = '⛔WTF you are wrong🚫';
        document.querySelector('body').style.backgroundColor = '#222';

        document.querySelector('.score').textContent = score - 1;
    }
    else if (num === nubmer) {
        document.querySelector('.message').textContent = 'OMG You are correct';
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
}

document.querySelector('.check').addEventListener('click', checkBtn);

const again = function () {

    score = 20;
    document.querySelector('.message').textContent = 'Start Guessing .....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
}

document.querySelector('.again').addEventListener('click', again);