function doRandom() {
     const randomNum = (Math.floor(Math.random() * 100) + 1)
     const hello = prompt('hi! Are you ready to play the game? Answer yes or no');
     if (hello === 'yes') {
          checkGuess(randomNum)
     } else if (hello === 'no') {
          alert('but maybe yes?');
     } else {
          alert('Incorrect input, please try again. Answer yes or no');
     }

}

function checkGuess(num) {
     let stepCounter = 1;
     let game = +prompt('Guess a number from 1 to 100');
     for (;;) {
          if (game === num) {
               break;
          } else if (game <= num) {
               // alert('too little, try again');
               stepCounter++
               game = +prompt('Too little, try again');
               continue;
          } else if (game >= num) {
               // alert('too big, try again');
               stepCounter++
               game = +prompt('Too big, try again');
               continue;
          }
     }
     return alert(`Congratulations, you got it on the ${stepCounter}th try`);
}

console.log(doRandom());