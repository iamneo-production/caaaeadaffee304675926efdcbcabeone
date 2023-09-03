let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');

function makeMove(cell) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        result.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function checkWin() {
    // Add your win condition logic here
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    result.textContent = `Player ${currentPlayer}'s Turn`;
}

resetBoard();