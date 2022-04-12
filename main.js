//This is lab2
/* Winning values: 123,456, 789, 147, 258, 369, 159, 357 */
var boardValues = ['-','-','-','-','-','-','-','-','-'];
var winningValues = [[1,2,3],[4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
var currUser = 'x';
const PLAYER1 = 'x';
const PLAYER2 = 'o';

{ //CLICK EVENTS
    var position1 = document.getElementsByClassName("one")[0];
    position1.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(0);
        gamePlay();
    }, {once:true});
    var position2 = document.getElementsByClassName("two")[0];
    position2.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(1);
        gamePlay();
    }, {once:true});
    var position3 = document.getElementsByClassName("three")[0];
    position3.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(2);
        gamePlay();
    }, {once:true});
    var position4 = document.getElementsByClassName("four")[0];
    position4.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(3);
        gamePlay();
    }, {once:true});
    var position5 = document.getElementsByClassName("five")[0];
    position5.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(4);
        gamePlay();
    }, {once:true});
    var position6 = document.getElementsByClassName("six")[0];
    position6.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(5);
        gamePlay();
    }, {once:true});
    var position7 = document.getElementsByClassName("seven")[0];
    position7.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(6);
        gamePlay();
    }, {once:true});
    var position8 = document.getElementsByClassName("eight")[0];
    position8.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(7);
        gamePlay();
    }, {once:true});
    var position9 = document.getElementsByClassName("nine")[0];
    position9.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        span.innerHTML = currUser;
        updateBoard(8);
        gamePlay();
    }, {once:true});
}

function gamePlay(){//main Game Play
   switchTurns();
   checkBoard();
}

function updateBoard(location){
    boardValues[location] = currUser;
   // console.log(boardValues)

}



function checkBoard(){//if board is full
    //console.log("entered check board")
    var counter=0;
    for (var i=0;i<9;++i){
        if(boardValues[i] != '-'){
            ++counter;
        }
    }
    if (counter == 9){
        console.log("game is tie")
        //game is a draw
        //display draw message
    }
    else {
        checkWin();
    }
} 

function switchTurns(){
    if(currUser == 'o'){
        currUser = PLAYER1;
    }
    else {
        currUser = PLAYER2;
    }
}

function checkWin(){//check for winning values
    var temp=0;
    //console.log(temp)
    for (var i=0; i<8; ++i){ //winning values array
        for (var j=0; j<3; ++j) { //board values array
            if (boardValues[winningValues[i][j]] == currUser){
                ++temp;
                //console.log(temp)
            } 
        }

        if (temp == 3){
            playerWon(currUser);
            break;
        }
        else{
            temp = 0;
        }
    }
} 

function validPlay(){//check if position has been filled or not

} 

function playerWon(temp){ //update score of player won
 //check 
    if (temp == 'x'){
        console.log("x won")
        //update score x
    }
    else {
        console.log("o won")
        //update score o
    }
    //display currUser won message
}


function newGame(){ //newGame button pressed
    for (var i=0; i < 9; ++i){
        boardValues[i] = "-";
    }
}

function reset(){ //initialize board
    for (var i=0; i < 9; ++i){
        boardValues[i] = "-";
    }
    //set player 1 and player 2 score to 0.
} 