let computerMove = '';
let result = '';

let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    draw: 0
};

function updateScore() {
    alert(computerMove + '\n' + result + '\n' + 'Win: ' + score.win + ' ' + 'Loss: ' + score.loss + ' ' + 'Draw: ' + score.draw);
}

function rock() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Both chose rock';
        result = 'Draw!';
        score.draw++;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'The computer chose paper';
        result = 'You Lose!';
        score.loss++;
    } else {
        computerMove = 'The computer chose scissors';
        result = 'You Win!';
        score.win++;
    }

    updateScore();
    localStorage.setItem('score', JSON.stringify(score));
}

function paper() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'The computer chose rock';
        result = 'You Win!';
        score.win++;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Both chose paper';
        result = 'Draw!';
        score.draw++;
    } else {
        computerMove = 'The computer chose scissors';
        result = 'You Lose!';
        score.loss++;
    }

    updateScore();
    localStorage.setItem('score', JSON.stringify(score));
}

function scissors() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'The computer chose rock';
        result = 'You Lose!';
        score.loss++;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'The computer chose paper';
        result = 'You Win!';
        score.win++;
    } else {
        computerMove = 'Both chose scissors!';
        result = 'Draw!';
        score.draw++;
    }

    updateScore();
    localStorage.setItem('score', JSON.stringify(score));
}

function reset() {
    score.win = 0;
    score.loss = 0;
    score.draw = 0;
    updateScore();
    localStorage.setItem('score', JSON.stringify(score));
}

updateScore();
