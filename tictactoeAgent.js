// Tic Tac Toe
class Agent {
    constructor() {

    }

    minimax(board, isMaximizing) {
        var gameOver = board.gameOver();
        if (gameOver == 1) {
            return 1
        } if (gameOver == 2) {
            return -1
        } if (gameOver == 3) {
            return 0
        }
        let maxScore = -Infinity;
        let minScore = Infinity;
        for (let i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                let newBoard = board.clone();
                newBoard.move(i);
                let score = this.minimax(newBoard, !isMaximizing);
                maxScore = Math.max(maxScore, score);
                minScore = Math.min(minScore, score)
            }               
        }
        return isMaximizing ? maxScore : minScore  
    }

    selectMove(board) {
        // Define the initial best score and move
        let maxScore = -Infinity;
        let minScore = Infinity;
        let maxMove = null;
        let minMove = null;

        // Loop through each cell to evaluate the best move
        for (let i = 1; i < 10; i++) {
                // Make a move on the current cell
            if (board.cellFree(i)) {
                let newBoard = board.clone();
                newBoard.move(i)
                // Calculate the score for the current move
                let score = this.minimax(newBoard, !board.playerOne);
                // Update the best move if the current move has a higher score
                if (score > maxScore) {
                    maxScore = score;
                    maxMove = i;
                } if (score < minScore) {
                    minScore = score;
                    minMove = i;
                }
            }             
        }
        if (board.playerOne) {
            return maxMove;
        } else {
            return minMove;
        }    
    }

}