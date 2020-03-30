import { boxes } from './elements';
import { clickHandler } from './clickHandler';

const clearEvents = function() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', clickHandler);
    }
}

export { clearEvents }