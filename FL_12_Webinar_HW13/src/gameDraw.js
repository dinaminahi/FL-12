import { gameMessages } from './elements';
import { clearEvents } from './clearEvents';

const gameDraw = function() {
    gameMessages.className = 'draw';
    clearEvents();
}

export { gameDraw }