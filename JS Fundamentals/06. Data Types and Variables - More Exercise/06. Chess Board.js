function printChessBoardInHtml(number) {
    let chessboardTileColor = 'black';

    console.log('<div class="chessboard">');
    for (let i = 0; i < number; i++) {

        console.log('  <div>');

        for (let j = 0; j < number; j++) {
            console.log(`    <span class="${chessboardTileColor}"></span>`);
            chessboardTileColor = (chessboardTileColor === 'black')? 'white' : 'black';
        }

        if (number % 2 === 0) {
            chessboardTileColor = (chessboardTileColor === 'black')? 'white' : 'black';
        }

        console.log('  </div>');
    }

    console.log('</div>');
}