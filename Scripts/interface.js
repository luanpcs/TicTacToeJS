document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")
    let btn = document.querySelectorAll('.button')
    let j0 = document.getElementById("j0")
    let j1 = document.getElementById("j1")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    btn[0].addEventListener('click', restart)

    updatePoints();
})

function handleClick(event) {
    let position = event.target.id;
    if (handleMove(position)) {
        setTimeout(() => {
            playerTime == 0 ? player0Points++ : player1Points++;
            updatePoints();
            alert("O jogo acabou - O vencedor foi o " + (playerTime + 1) + " (" +
                symbols[playerTime] + ")");
        }, 10)
    }
    updateSquares();

}

function updateSquares() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position]
        if (symbol != '')
            square.innerHTML = `<div class = ${symbol}></div>`
        else
            square.innerHTML = `<div class = ${''}></div>`
    })


}

function restart() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    playerTime = 0;
    updateSquares();
}

function updatePoints() {
    j0.innerHTML = `Player 1: ${player0Points} points`
    j1.innerHTML = `Player 2: ${player1Points} points`
}