let startGameConfirmation = confirm('Do you want to play a game?');
let totalPrize = 0;
const possiblePrize = 100;
let currentPrize = possiblePrize;
let game = true;
const startMaxRangeNum = 9;
let maxRangeNum = startMaxRangeNum;
const attempts = 3;
const half = 2;
const rangeIncreaseNum = 4;
if (!startGameConfirmation) {
  alert('You did not become a billionaire, but can.');
} else {

  while (game) {
    let i = attempts;
    while (0 < i) {
      const randomBallNum = Math.floor(Math.random() * maxRangeNum);
      console.log(randomBallNum);
      let userNumber = prompt(`Choose the rulette pocket number from 0 to ${maxRangeNum - 1}
Attempts left: ${i}
Total prize: ${totalPrize}
Possible prize for current atempt: ${possiblePrize}`);
      if (+userNumber !== randomBallNum || userNumber === '') {
        if (userNumber === null) {
          break;
        }
        currentPrize = currentPrize / half;
        i--;
      } else {
        totalPrize += currentPrize;
        let continueGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue?`);
        if (continueGame) {
          maxRangeNum += rangeIncreaseNum;
          currentPrize *= half;
          i = attempts;
        } else {
          break;
        }
      }
    }
    alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
    let startAgain = confirm('Do you want to play again?');
    if (startAgain) {
      totalPrize = 0;
      currentPrize = possiblePrize;
      maxRangeNum = startMaxRangeNum;
    } else {
      game = false;
    }
  }
}
