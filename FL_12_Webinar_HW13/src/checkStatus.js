import { variables } from './variables';
import { gameDraw } from './gameDraw';

const checkStatus = function() {
    let used_boxes = 0;
    
    for(let rows = 0; rows < variables.board.length; rows++ ) {
        let row_total = 0;
        let column_total = 0;
        
        for(let columns = 0; columns < variables.board[rows].length; columns++) {
            row_total += variables.board[rows][columns];
            column_total += variables.board[columns][rows];
            
            if(typeof variables.board[rows][columns] !== "undefined") {
                used_boxes++;
            }
        }

        let diagonal_tl_br = variables.board[0][0] + variables.board[1][1] + variables.board[2][2];
        let diagonal_tr_bl = variables.board[0][2] + variables.board[1][1] + variables.board[2][0]; 
        
        if(diagonal_tl_br === 0 || diagonal_tr_bl === 0 || diagonal_tl_br === 3 || diagonal_tr_bl === 3) {
            return true;
        }
        
        if(row_total === 0 || column_total === 0 || row_total === 3 || column_total === 3) {
            return true;
        }
        
        if(used_boxes == 9) {
            gameDraw();
        }
    }
}

export { checkStatus }