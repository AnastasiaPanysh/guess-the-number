class Guess {
     constructor() {
          this.doRandom()
     }

     doRandom() {
          let hello = prompt('Are you ready to play the game? Answer yes or no');
          for (;;) {
               if (hello === 'yes') {
                    this.checkGuess()
               } else if (hello === 'no') {
                    hello = prompt('but maybe yes?');
               } else {
                    hello = prompt('Incorrect input, please try again. Answer yes or no');
               }
          }
     }

     checkGuess() {

          const randomNum = (Math.floor(Math.random() * 100) + 1)
          let stepCounter = 1;
          let game = +prompt('Guess a number from 1 to 100');
          for (;;) {
               if (!isNaN(game) && game > 0 && game < 100) {
                    if (game === randomNum) {
                         break;
                    } else if (game <= randomNum) {
                         stepCounter++
                         game = +prompt('Too little, try again');
                    } else if (game >= randomNum) {
                         stepCounter++
                         game = +prompt('Too big, try again');
                    }
               } else {
                    game = prompt('Incorrect input, please try again. Enter a number from 1 to 100');
               }
          }
          return game = +prompt(`Congratulations, you got it on the ${stepCounter}th try. If you want to play again =>ok/enter.`)
     }
}

const guess = new Guess();