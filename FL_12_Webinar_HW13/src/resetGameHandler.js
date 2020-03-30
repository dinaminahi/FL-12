import { boxes, turnDisplay, gameMessages } from './elements';
import { variables } from './variables';
import { clearEvents } from './clearEvents';
import { init } from './constructor';

const resetGameHandler = function() {
    clearEvents();
    init();

    for(let i = 0; i < boxes.length; i++) {
        boxes[i].className = '';
        boxes[i].innerHTML = '';
    }
    
    turnDisplay.className = variables.currentContext;
    gameMessages.className = '';
}

export { resetGameHandler }