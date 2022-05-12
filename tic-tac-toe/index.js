//snow design

(function() {

    var COUNT = 300;
    var masthead = document.querySelector('.snow');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;

    function onResize() {
        width = masthead.clientWidth;
        height = masthead.clientHeight;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = '#FFF';

        var wasActive = active;
        active = width > 600;

        if (!wasActive && active)
            requestAnimFrame(update);
    }

    var Snowflake = function() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.r = 0;

        this.reset();
    }

    Snowflake.prototype.reset = function() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.vy = 1 + Math.random() * 3;
        this.vx = 0.5 - Math.random();
        this.r = 1 + Math.random() * 2;
        this.o = 0.5 + Math.random() * 0.5;
    }

    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';

    var snowflakes = [],
        snowflake;
    for (i = 0; i < COUNT; i++) {
        snowflake = new Snowflake();
        snowflake.reset();
        snowflakes.push(snowflake);
    }

    function update() {

        ctx.clearRect(0, 0, width, height);

        if (!active)
            return;

        for (i = 0; i < COUNT; i++) {
            snowflake = snowflakes[i];
            snowflake.y += snowflake.vy;
            snowflake.x += snowflake.vx;

            ctx.globalAlpha = snowflake.o;
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();

            if (snowflake.y > height) {
                snowflake.reset();
            }
        }

        requestAnimFrame(update);
    }

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    onResize();
    window.addEventListener('resize', onResize, false);

    masthead.appendChild(canvas);
})();

//declaration of board and history
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];
let moves = [];
let myTurn = '';
let squares = Array.from(document.querySelectorAll('.box'));
let maxTurn = 0;
let movesIndex = 0;

//first turn
function firstTurn() {
    myTurn = prompt('Hohoho, who wants to play first? X or O?');
    while (true) {
        if (myTurn === 'X' || myTurn === 'O') {
            document.querySelector(".myTurn").textContent = `Child ${myTurn}'s turn`;
            break;
        }
        myTurn = prompt('ohh, you are being naughty type X or O only.');
    }
}

//show the board
// ASSIGNMENT
function printBoard(board) {
    let indexSquare = 0;
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            squares[indexSquare].textContent = board[i][j];
            indexSquare += 1;
        }
    }
}

//input to squares
function startGame() {
    printBoard(board);
    firstTurn();
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
            if (squares[i].textContent === '') {
                squares[i].textContent = myTurn;
                board[Math.floor(i / 3)][i % 3] = myTurn;
                let temp = JSON.parse(JSON.stringify(board));
                maxTurn += 1;
                myTurn = switchTurn(myTurn);
                document.querySelector(".myTurn").textContent = `Child ${myTurn}'s turn!`;
                moves = [...moves, temp];
                movesIndex += 1;
                endGame(maxTurn, board);
            }
        }
    }
}

//X and O turns
function switchTurn(myTurn) {
    if (myTurn === 'X') {
        return 'O';
    } else if (myTurn === 'O') {
        return 'X';
    }
}

//restart game
document.querySelector(".restart").addEventListener("click", () => {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    moves = [];
    maxTurn = 0;
    movesIndex = 0;
    document.querySelector(".previousMove").classList.add('hide');
    document.querySelector(".nextMove").classList.add('hide');
    startGame();
});

//Win conditions
function endGame(maxTurn, board) {
    if (maxTurn === 9 && !(checkVertical(board) || checkHorizontal(board) || checkDiagonal(board))) {
        movesIndex -= 1;
        document.querySelector(".myTurn").textContent = 'Oh no! Tie!';
        document.querySelector(".previousMove").classList.remove('hide');
        document.querySelector(".nextMove").classList.remove('hide');
        document.querySelector(".nextMove").classList.add('transparentColor');
        removeClickBox();
    } else if (checkVertical(board) || checkHorizontal(board) || checkDiagonal(board)) {
        movesIndex -= 1;
        document.querySelector(".myTurn").textContent = `Child ${switchTurn(myTurn)} won!`;
        document.querySelector(".previousMove").classList.remove('hide');
        document.querySelector(".nextMove").classList.remove('hide');
        document.querySelector(".nextMove").classList.add('transparentColor');
        removeClickBox();
    }
}

//remove click on the boxes
function removeClickBox() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = null;
    }
}

function checkVertical(board) {
    for (i = 0; i < 3; i++) {
        let temp = board[0][i];
        if (temp != '' && board[1][i] === temp && board[2][i] === temp) {
            return true;
        }
    }
    return false;
}

function checkHorizontal(board) {
    for (i = 0; i < 3; i++) {
        let temp = board[i][0];
        if (temp != '' && board[i][1] === temp && board[i][2] === temp) {
            return true;
        }
    }
    return false;
}

function checkDiagonal(board) {
    let temp = board[1][1];
    if (temp != '' && ((board[0][0] === temp && board[2][2] === temp) || (board[0][2] === temp && board[2][0] === temp))) {
        return true;
    }
    return false;
}

//history navigation
document.querySelector(".previousMove").addEventListener("click", () => {
    if (movesIndex < moves.length && movesIndex > 1) {
        movesIndex -= 1;
        printBoard(moves[movesIndex]);
        document.querySelector(".previousMove").classList.remove('transparentColor');
        document.querySelector(".nextMove").classList.remove('transparentColor');
    } else if (movesIndex === 1) {
        movesIndex -= 1;
        printBoard(moves[movesIndex]);
        document.querySelector(".previousMove").classList.add('transparentColor');
    }
});

document.querySelector(".nextMove").addEventListener("click", () => {
    if (movesIndex < moves.length - 2 && movesIndex >= 0) {
        movesIndex += 1;
        printBoard(moves[movesIndex]);
        document.querySelector(".nextMove").classList.remove('transparentColor');
        document.querySelector(".previousMove").classList.remove('transparentColor');
    } else if (movesIndex === moves.length - 2) {
        movesIndex += 1;
        printBoard(moves[movesIndex]);
        document.querySelector(".nextMove").classList.add('transparentColor');
    }
});

startGame();