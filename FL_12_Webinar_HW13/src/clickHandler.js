import { turnDisplay } from './elements';
import { variables } from './variables';
import { computeContext } from './turnsTracker';
import { checkStatus } from './checkStatus';
import { gameWon } from './gameWon';

const clickHandler = function() {
    this.removeEventListener('click', clickHandler);
    
    this.className = variables.currentContext;
    this.innerHTML = variables.currentContext;
    
    let pos = this.getAttribute('data-pos').split(',');
    variables.board[pos[0]][pos[1]] = computeContext() == 'x' ? 1 : 0;
    
    if(checkStatus()) {
        gameWon();
    }
    
    variables.turns++;
    variables.currentContext = computeContext();
    turnDisplay.className = variables.currentContext;
}

export { clickHandler }