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
    board = new Array(9).fill(null);

    turn = 1;
    winner = null;
    render();
}

function render() {

}


function handleClick (e) {
    console.log(e.target)
}