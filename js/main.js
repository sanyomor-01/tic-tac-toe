const cell = document.querySelectorAll('.cell')
const statusMsg = document.querySelector('.status')
cell.forEach(cell => {
    cell.addEventListener('click', clicked)
})
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]
let currentPlayer = 'X'

function clicked() {
    let index = this.getAttribute('data-index')
    if (this.textContent === '') {
        this.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
            statusMsg.textContent = `O's turn`
        }
        else {
            currentPlayer = 'X'
            statusMsg.textContent = `X's turn`
        }
    }
}