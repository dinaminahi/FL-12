import { clearEvents } from './clearEvents';
import { computeContext } from './turnsTracker';
import { gameMessages, playerOneScoreCard, playerTwoScoreCard} from './elements';
import { variables } from './variables';

const gameWon = function() {
    clearEvents();
    gameMessages.className = 'player-' + computeContext() + '-win';
    
    switch(computeContext()) {
        case 'x':
            playerOneScoreCard.innerHTML = ++variables.playerOneScore;
            break;
        case 'o':
            playerTwoScoreCard.innerHTML = ++variables.playerTwoScore;
    }
}

export { gameWon }