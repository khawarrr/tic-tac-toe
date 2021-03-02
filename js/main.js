/*----- constants -----*/

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const playerIcon = {
    '1': 'X',
    '-1': 'O',
    'null': null,
}

 /*----- app's state (variables) -----*/

 let board, turn, winner;


 /*----- cached element references -----*/

//put variables that hang on to dom elements
const resetBtn = document.getElementById('reset');
const boardEl = document.getElementById('board');
const messageEl = document.getElementById('msg');





 /*----- event listeners -----*/
resetBtn.addEventListener('click', init);

boardEl.addEventListener('click', handleClick);





/*----- functions -----*/
init();

function init(){
    // instead of 
    //board = [
//   null, null, null,
//   null, null, null,
//   null, null, null
// ]

    // we can use .fill(null) to fill out board with null values
    board = new Array(9).fill(null);
    // board = [0,0,0,0,0,0,0,0,0]

    turn = 1;
    winner = null;
    render();
}

function render() {
    // render the board
    board.forEach(function (boxVal, boxIdx) {
        document.getElementById(boxIdx).innerHTML = playerIcon[boxVal];
    });
    // what happens when there is a tie

    if (winner === 'T') {
        messageEl.textContent = "It's a tie";
    } else if (winner) {
        messageEl.textContent = `${playerIcon[winner]} wins`
    } else {
        messageEl.textContent = `${playerIcon[turn]}'s turn`
    }

    resetBtn.style.visibility = winner ? 'visible' : 'hidden';
}

// write getWinner function 

function getWinner() {
    winningCombinations.forEach(function(combination) {
      if (Math.abs(board[combination[0]] + board[combination[1]] + board[combination[2]]) === 3) {
        winner = turn; // whoever is on current turn and combo matches then that one wins
      }
    })
    if (!winner && !board.includes(null)) {
        winner = 'T';
    }
  }

function handleClick (e) {
    if (winner) return;
    if (board[e.target.id]) return;
    board[e.target.id] = turn;

    // now let's check the winner, we will call a function that determines whetere there is a winner or not
    getWinner();

    // if no winner is determined then switch the turn
    turn = turn * -1

    render();
}

