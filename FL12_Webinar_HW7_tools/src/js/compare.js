import getComputerChoice from './getComputerChoice';
import score from './ScoreVariables';

function play(humanChoice) {
  let computerChoice = getComputerChoice();
  let result;
  if (score.round !== 3) {
    if (humanChoice === 'rock') {
      if (computerChoice === 'rock') {
        result = 'DRAW';
        score.round++;
      } else if (computerChoice === 'scissors') {
        result = 'You’ve WON!';
        score.humanScore++;
        score.round++;
      } else {
        result = 'You’ve LOST!';
        score.computerScore++;
        score.round++;
      }
    } else if (humanChoice === 'paper') {
      if (computerChoice === 'paper') {
        result = 'DRAW';
        score.round++;
      } else if (computerChoice === 'rock') {
        result = 'You’ve WON!';
        score.humanScore++;
        score.round++;
      } else {
        result = 'You’ve LOST!';
        score.computerScore++;
        score.round++;
      }
    } else if (humanChoice === 'scissors') {
      if (computerChoice === 'scissors') {
        result = 'DRAW';
        score.round++;
      } else if (computerChoice === 'paper') {
        result = 'You’ve WON!';
        score.humanScore++;
        score.round++;
      } else {
        result = 'You’ve LOST!';
        score.computerScore++;
        score.round++;
      }
    }
    document.getElementById(
      'status'
    ).innerHTML = `Round ${score.round},  ${humanChoice} vs. ${computerChoice}, ${result}`;
  } else {
    document.getElementById('status').innerHTML = '';
    document.getElementById('result').innerHTML = `${
      score.computerScore > score.humanScore ? 'Computer' : 'Human'
    } wins!`;
  }
}

export default play;
