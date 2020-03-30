import { game } from './elements';
import { init } from './constructor';

function Game() {
    game && init();
}

export {Game}