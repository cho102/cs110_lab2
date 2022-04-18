//This is lab2
/* Winning values: 123,456, 789, 147, 258, 369, 159, 357 */
var boardValues = ['-','-','-','-','-','-','-','-','-'];
var winningValues = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], 
                    [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var currUser = 'X';
const PLAYER1 = 'X';
const PLAYER2 = 'O';

var boardFull = false;
var chosenMode = false;
var twoPlayer = false;
var endGame = false;
const newGame_btn = document.getElementById('new_game');
const reset_btn = document.getElementById('reset');
const comp_btn = document.getElementById('computer');
const twoPlayer_btn = document.getElementById('two_player');

comp_btn.addEventListener("click", function(){
    console.log("computer button pressed");
    twoPlayer = false;
    chosenMode = true;
    comp_btn.style.display = "none";
    twoPlayer_btn.style.display = "none";
    newGame_btn.style.display = "block";
    reset_btn.style.display = "block";
});

twoPlayer_btn.addEventListener("click", function(){
    //console.log("two player pressed");
    twoPlayer = true;
    chosenMode = true;
    comp_btn.style.display = "none";
    twoPlayer_btn.style.display = "none";
    newGame_btn.style.display = "block";
    reset_btn.style.display = "block";
});


{ //CLICK EVENTS
    var position1 = document.getElementsByClassName("one")[0];
    position1.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(0);
            gamePlay();
        }
    });
    position1.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position1.style.backgroundColor = 'lightGreen';
        }
        else {
            position1.style.backgroundColor = 'gray';
        }
        
    })
    position1.addEventListener("mouseout", function(){
        position1.style.backgroundColor = 'pink';
    })
    var position2 = document.getElementsByClassName("two")[0];
    position2.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(1);
            gamePlay();
        }
    });
    position2.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position2.style.backgroundColor = 'lightGreen';
        }
        else {
            position2.style.backgroundColor = 'gray';
        }
        
    })
    position2.addEventListener("mouseout", function(){
        position2.style.backgroundColor = 'pink';
    })
    var position3 = document.getElementsByClassName("three")[0];
    position3.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(2);
            gamePlay();
        }
    });
    position3.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position3.style.backgroundColor = 'lightGreen';
        }
        else {
            position3.style.backgroundColor = 'gray';
        }
        
    })
    position3.addEventListener("mouseout", function(){
        position3.style.backgroundColor = 'pink';
    })
    var position4 = document.getElementsByClassName("four")[0];
    position4.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(3);
            gamePlay();
        }
    });
    position4.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position4.style.backgroundColor = 'lightGreen';
        }
        else {
            position4.style.backgroundColor = 'gray';
        }
        
    })
    position4.addEventListener("mouseout", function(){
        position4.style.backgroundColor = 'pink';
    })
    var position5 = document.getElementsByClassName("five")[0];
    position5.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(4);
            gamePlay();
        }
    });
    position5.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position5.style.backgroundColor = 'lightGreen';
        }
        else {
            position5.style.backgroundColor = 'gray';
        }
        
    })
    position5.addEventListener("mouseout", function(){
        position5.style.backgroundColor = 'pink';
    })
    var position6 = document.getElementsByClassName("six")[0];
    position6.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(5);
            gamePlay();
        }
    });
    position6.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position6.style.backgroundColor = 'lightGreen';
        }
        else {
            position6.style.backgroundColor = 'gray';
        }
        
    })
    position6.addEventListener("mouseout", function(){
        position6.style.backgroundColor = 'pink';
    })
    var position7 = document.getElementsByClassName("seven")[0];
    position7.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(6);
            gamePlay();
        }
    });
    position7.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position7.style.backgroundColor = 'lightGreen';
        }
        else {
            position7.style.backgroundColor = 'gray';
        }
        
    })
    position7.addEventListener("mouseout", function(){
        position7.style.backgroundColor = 'pink';
    })
    var position8 = document.getElementsByClassName("eight")[0];
    position8.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(7);
            gamePlay();
        }
    });
    position8.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position8.style.backgroundColor = 'lightGreen';
        }
        else {
            position8.style.backgroundColor = 'gray';
        }
        
    })
    position8.addEventListener("mouseout", function(){
        position8.style.backgroundColor = 'pink';
    })
    var position9 = document.getElementsByClassName("nine")[0];
    position9.addEventListener("click", function(){
        var span = this.getElementsByClassName("xo")[0];
        if (span.innerText == "" && !endGame && chosenMode){
            span.innerHTML = currUser;
            updateBoard(8);
            gamePlay();
        }     
    });
    position9.addEventListener("mouseover", function(){
        var span = this.getElementsByClassName("xo")[0]; 
        if(span.innerText == ""){
            position9.style.backgroundColor = 'lightGreen';
        }
        else {
            position9.style.backgroundColor = 'gray';
        }
        
    })
    position9.addEventListener("mouseout", function(){
        position9.style.backgroundColor = 'pink';
    })
}

const message = document.getElementsByTagName('h2')[1];
const xWON = document.getElementsByTagName('h2')[2];
const oWON = document.getElementsByTagName('h2')[3];
const tieMsg = document.getElementsByTagName('h2')[4];
const xScore = document.getElementById("x_score");
const oScore = document.getElementById("o_score");
var xCount = 0;
var oCount = 0;

function gamePlay(){//main Game Play
   checkBoard();
   switchTurns();
}

function updateBoard(location){
    boardValues[location] = currUser;
   console.log(boardValues)

}

const playerVal = document.getElementsByClassName("display_player")[0];
function displayPlayer() {
    playerVal.innerText = currUser;
  //  console.log(playerVal);
}

function checkBoard(){//if board is full
    //console.log("entered check board")
    checkWin();
    var counter=0;
    if (!endGame){
        for (var i=0;i<9;++i){
            if(boardValues[i] != '-'){
                ++counter;
            }
        }
        if (counter == 8){
            boardFull = true;
        }
        if (counter == 9){
            tieMsg.style.display = "display";
            endGame = true;
        }
    }
} 

function switchTurns(){
    console.log("entered Switch turns")
    console.log(twoPlayer);
    if(currUser == 'O'){
        currUser = PLAYER1;
    }
    else {
        currUser = PLAYER2;
        if(twoPlayer == false && boardFull == false){
            simpleAI();
        }
    }
    displayPlayer();
}

function checkWin(){//check for winning values
    var temp=0;
    //console.log(temp)
    for (var i=0; i<8; ++i){ //winning values array
        for (var j=0; j<3; ++j) { //board values array
            if (boardValues[winningValues[i][j]] == currUser){
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


function playerWon(temp){ //update score of player won
 //check 
    if (temp == 'X'){
        //console.log("x won")
        message.style.display = "none";
        xWON.style.display = "block";
        ++xCount;
        xScore.innerText = xCount;
    }
    else {
        //console.log("o won")
        message.style.display = "none";
        oWON.style.display = "block";
        ++oCount;
        oScore.innerText = oCount;
    }
    endGame = true;
}

newGame_btn.addEventListener('click', function(){ //newGame button pressed
    for (var i=0; i < 9; ++i){
        boardValues[i] = "-";
    }
    var span = document.getElementsByClassName("xo");
    for (var i = 0; i < span.length; ++i){
        span[i].innerText = "";
    }
    endGame = false;
    currUser = 'X';
    displayPlayer();
    //message.style.display = block;
    //console.log('new game clicked')
   message.style.display = "block";
   xWON.style.display = "none";
   oWON.style.display = "none";
   tieMsg.style.display = "none";
});

reset_btn.addEventListener('click', function(){ //initialize board
    for (var i=0; i < 9; ++i){
        boardValues[i] = "-";
    }
    var span = document.getElementsByClassName("xo");
    for (var i = 0; i < span.length; ++i){
        span[i].innerText = "";
    }
    endGame = false;
    boardFull = false;
    xScore.innerText = 0;
    oScore.innerText = 0;
    currUser = 'X'
    displayPlayer();
    message.style.display = "block";
    xWON.style.display = "none";
    oWON.style.display = "none";
    tieMsg.style.display = "none";
} );


function simpleAI(){
    var compPlayed = false;
    while(!compPlayed){
        var randNum = Math.floor(Math.random() * 9);
        console.log(randNum);
        if (boardValues[randNum] == '-'){
            var span = document.getElementsByClassName("xo")[randNum];
            span.innerHTML = currUser; 
            updateBoard(randNum);
            compPlayed = true;
            gamePlay();
        }
    }
}