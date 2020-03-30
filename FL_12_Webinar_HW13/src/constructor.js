import { variables } from './variables';
import { computeContext } from './turnsTracker';
import { boxes, resetGame } from './elements';
import { clickHandler } from './clickHandler';
import { resetGameHandler } from './resetGameHandler';

const init = function() {
    variables.turns = 0;

    variables.currentContext = computeContext();
    
    variables.board[0] = new Array(3);
    variables.board[1] = new Array(3);
    variables.board[2] = new Array(3);

    for(let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', clickHandler, false);
    }
    
    resetGame.addEventListener('click', resetGameHandler, false);
}

export { init }