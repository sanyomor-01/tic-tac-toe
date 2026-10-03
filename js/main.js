const cell = document.querySelectorAll('.cell')
const statusMsg = document.querySelector('.status')


function clicked() {
    if (!running) {
        return
    }

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

    if (running) {
        let winner = checkWinner()
        if (winner) {
            running = false
        }
        else {
            let draw = checkDraw()
            if (draw) {
                statusMsg.textContent = `Draw`
                running = false
            }
        }
    }
}

cell.forEach(cell => {
    cell.addEventListener('click', clicked)
})



let running = true
let currentPlayer = 'X'




function checkWinner() {
    // possible winning combinations
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

    //Checking for winning combinations
    for (let combo of winningCombos) {
        let a = combo[0]
        let b = combo[1]
        let c = combo[2]

        if (cell[a].textContent !== "" &&
            cell[a].textContent === cell[b].textContent &&
            cell[a].textContent === cell[c].textContent) {
            statusMsg.textContent = `${cell[a].textContent} wins!`
            return true
        }
    }
    return false

}

// checking for draw 
function checkDraw() {

    let boardfull = true

    cell.forEach(cell => {
        if (cell.textContent !== '') {
            let boardfull = false
        }
    })

    return boardfull
}
