function rock() {
    const randomNumber = Math.random();
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
    console.log('Both chose rock');
    console.log('Its a Draw!');
   }

   else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    console.log('The computer chose paper');
    console.log('You Lose!');
   }

   else {
    console.log('The computer chose scissors');
    console.log('You Win!');
   }
}

function paper() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        console.log('The computer chose rock');
        console.log('You Win!');
       }
    
       else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        console.log('Both chose paper');
        console.log('Its a Draw!');
       }
    
       else {
        console.log('The computer chose scissors');
        console.log('You Lose!');
       }
}

function scissors() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        console.log('The computer chose rock');
        console.log('You Lose!');
       }
    
       else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        console.log('The computer chose paper');
        console.log('You Win!')
       }
    
       else {
        console.log('Both chose scissors!');
        console.log('Its a Draw!');
       }
}


