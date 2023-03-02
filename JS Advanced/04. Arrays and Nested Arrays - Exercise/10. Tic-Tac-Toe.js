function playTicTacToe(moves) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    for (let index = 0; index < moves.length; index++) {
        let move = moves[index];

        let [row, column] = move.split(' ');
        let player = index % 2 == 0 ? 'X' : 'O';
        
        if (dashboard[row][column] == false) {
            makeMove(row, column, player);
        } else {
            console.log('This place is already taken. Please choose another!');

            [row, column] = moves.splice(index + 1, 1).toString().split(' ');

            makeMove(row, column, player);
        }

        if (dashboard.every(row => row.every(square => square != false))) {
            console.log('The game ended! Nobody wins :(');

            printDashboard(dashboard);

            break;
        }

        if (checkForWin(dashboard)) {
            let winner = checkForWin(dashboard);
            
            console.log(`Player ${winner} wins!`);
            printDashboard(dashboard);

            break;
        }
    }

    

    function makeMove(row, column, player) {
        dashboard[row][column] = player;
    }

    function checkForWin(board) {
        for (let i = 0; i <= 2; i++) {
            if (board[i].every(square => square == 'X') || board[i].every(square => square == 'O')) {
                return board[i][0];
            }

            let hasXColumn = [board[0][i], board[1][i], board[2][i]].every(square => square == 'X');
            let hasOColumn = [board[0][i], board[1][i], board[2][i]].every(square => square == 'O');

            if (hasXColumn || hasOColumn) {
                return board[0][i];
            }

            let hasXDiagonal = [board[0][0], board[1][1], board[2][2]].every(square => square == 'X');
            let hasODiagonal = [board[0][0], board[1][1], board[2][2]].every(square => square == 'O');

            if (hasXDiagonal || hasODiagonal) {
                return board[0][0];
            }

            let hasXSecondaryDiagonal = [board[0][2], board[1][1], board[2][0]].every(square => square == 'X');
            let hasOSecondaryDiagonal = [board[0][2], board[1][1], board[2][0]].every(square => square == 'O');

            if (hasXSecondaryDiagonal || hasOSecondaryDiagonal) {
                return board[0][2];
            }
        }
    }

    function printDashboard(board) {
        board.forEach(row => {
            console.log(row.join('\t'));
        });
    }
}