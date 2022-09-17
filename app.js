const randomNum = (Math.floor(Math.random() * 100) + 1)

const hello = prompt('hi! Are you ready to play the game? Answer yes or no');
if (hello === 'yes') {
     checkGuess(randomNum)
} else {
     alert('you lost');
     // break;
}

function checkGuess(num) {
     const stepCounter = 1;
     const game = +prompt('Guess a number from 1 to 100');
     if (game === num) {
          alert(`Congratulations, you got it on the ${stepCounter} try`);
     } else if (game < num) {
          alert('too little, try again');
          stepCounter++
          return checkGuess(num);
     } else if (game > num) {
          alert('too big, try again');
          stepCounter++
          return checkGuess(num);
     }
}

console.log(checkGuess(randomNum));