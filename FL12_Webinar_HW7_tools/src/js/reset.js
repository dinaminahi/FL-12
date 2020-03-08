import score from './ScoreVariables';

function reset() {
   score.computerScore = 0;
   score.humanScore = 0;
   score.round = 0;
   document.getElementById('status').innerHTML = '';
   document.getElementById('result').innerHTML = '';
}

export default reset;