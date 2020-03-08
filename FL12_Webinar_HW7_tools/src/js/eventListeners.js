import paper from './paper';
import rock from './rock';
import scissors from './scissors';
import reset from './reset';

function game() {
document.getElementById('rock').onclick = rock;
document.getElementById('paper').onclick  = paper;
document.getElementById('scissors').onclick = scissors;
document.getElementById('reset').onclick = reset;
}

export default game;
