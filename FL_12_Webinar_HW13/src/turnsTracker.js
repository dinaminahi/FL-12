import { variables } from './variables';

const computeContext = function() {
    return (variables.turns % 2 == 0) ? variables.context.player1 : variables.context.player2;
}

export { computeContext }