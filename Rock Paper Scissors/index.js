let computerMove = '';
let result = '';

function rock() {
    const randomNumber = Math.random();
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove ='Both chose rock';
    result = 'Draw!';
   }

   else if (randomNumber >= 1/3 && randomNumber < 2/3) {
   computerMove = 'The computer chose paper';
   result = 'You Lose!';
   }

   else {
    computerMove = 'The computer chose scissors';
    result = 'You Win!';
   }
   
   alert(computerMove + '\n' + result);
}

function paper() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'The computer chose rock';
        result = 'You Win!';
       }
    
       else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Both chose paper';
        result = 'Draw!';
       }
    
       else {
        computerMove = 'The computer chose scissors';
        result = 'You Lose!';
       }

       alert(computerMove + '\n' + result);
}

function scissors() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'The computer chose rock';
        result = 'You Lose!';
       }
    
       else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'The computer chose paper';
        result = 'You Win!';
       }
    
       else {
        computerMove = 'Both chose scissors!';
        result = 'Draw!';
       }

       alert(computerMove + '\n' + result);
}


