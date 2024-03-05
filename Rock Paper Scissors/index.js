let computerMove = '';
let result = '';

let score = {
    win: 0,
    loss: 0,
    draw: 0
};

function rock() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Both chose rock';
        result = 'Draw!';
        score.draw++;
    }

    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'The computer chose paper';
        result = 'You Lose!';
        score.loss++;
    }

    else {
        computerMove = 'The computer chose scissors';
        result = 'You Win!';
        score.win++;
    }

    alert(computerMove + '\n' + result + '\n' + 'Win: ' + score.win + ' ' + 'Loss: ' + score.loss + ' ' + 'Draw: ' + score.draw);
}

function paper() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'The computer chose rock';
        result = 'You Win!';
        score.win++;
    }

    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Both chose paper';
        result = 'Draw!';
        score.draw++;
    }

    else {
        computerMove = 'The computer chose scissors';
        result = 'You Lose!';
        score.loss++;
    }

    alert(computerMove + '\n' + result + '\n' + 'Win: ' + score.win + ' ' + 'Loss: ' + score.loss + ' ' + 'Draw: ' + score.draw);
}

function scissors() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'The computer chose rock';
        result = 'You Lose!';
        score.loss++
    }

    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'The computer chose paper';
        result = 'You Win!';
        score.win++;
    }

    else {
        computerMove = 'Both chose scissors!';
        result = 'Draw!';
        score.draw++;
    }

    alert(computerMove + '\n' + result + '\n' + 'Win: ' + score.win + ' ' + 'Loss: ' + score.loss + ' ' + 'Draw: ' + score.draw);
}

function reset() {
    score.win = 0;
    score.loss = 0;
    score.draw = 0;
    alert('All scores are reset' + '\n' + 'Win: ' + score.win + ' ' + 'Loss: ' + score.loss + ' ' + 'Draw: ' + score.draw);
}
