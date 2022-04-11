//This is lab2
/* Winning values: 123,456, 789, 147, 258, 369, 159, 357 */
var boardValues = ['-','-','-','-','-','-','-','-','-'];
var winningValues = [123,456, 789, 147, 258, 369, 159, 357];
var currUser;
PLAYER1 = 0;
PLAYER2 = 1;

function newGame(){ //newGame button pressed

}

function reset(){ //initialize board

} 

function checkBoard(){//if board is full
    var counter=0;
    for (var i=0;i<9;++i){
        if(boardValues[i] != 0){
            ++counter;
        }
    }
    if (counter == 9){
        //game is a draw
    }
    else {
        checkWin();
    }
} 

function switchTurns(){
    if(currUser){
        currUser = PLAYER1;
    }
    else {
        currUser = PLAYER2;
    }
}

function checkWin(){//check for winning values
    var temp=0;
    for (var i=0; i<8; ++i){ //winning values array
        for (var j=0; j<3; ++j) { //board values array
            if (boardValues[winningVal[i][j]] == currUser){
                ++temp;
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

function validPlay(); //check if position has been filled or not
function playerWon(val){ //update score of player won
 //check
}
