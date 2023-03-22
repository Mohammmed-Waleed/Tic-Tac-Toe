function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameOverEle.firstElementChild.innerHTML = 
    'You won!!!! <span></span>';
    gameOverEle.style.display = 'none';

    gameIsOver = false ;
    
    let gameBoardIndex = 0;
    for(let i = 0; i < 3 ; i++) {
        for(j = 0; j < 3; j++) { 
            gameData[i][j] = 0;
            const gameBoardItemEle = gameBoardEle.children[gameBoardIndex];
            gameBoardItemEle.textContent = '';
            gameBoardItemEle.classList.remove('disabled')
            gameBoardIndex++ ;
        }
    }
}

function satrtNewGAme(){
    if(players[0].nam === '' || players[1].nam === ''){
        alert('Please set custom player names for both players!');
        return;
    }
    resetGameStatus();

    activePlayerEle.textContent = players[activePlayer].nam;
    GameArea.style.display = 'block'
}

function switchPlayer(){
    if (activePlayer === 0){
        activePlayer = 1
    } else {
      activePlayer = 0;  
    }
    activePlayerEle.textContent = players[activePlayer].nam;
}

function selectgameFeild(event){
    if(gameIsOver){
        return;
    }
    const selectedFeild = event.target
    const selectedCol = selectedFeild.dataset.col - 1;
    const selectedRow = selectedFeild.dataset.row - 1;

    if(gameData[selectedRow][selectedCol] > 0){
        alert('Please select the input feild!');
        return;
    }

   selectedFeild.textContent = players[activePlayer].Symbol;
   selectedFeild.classList.add('disabled')

    

    gameData[selectedRow][selectedCol] = activePlayer + 1;
    
    const winnerId = checkForGameOver();
    
    if(winnerId !==0) {
        endgame(winnerId);
    }

    currentRound++ ;

    switchPlayer();
}

function checkForGameOver() {
    for(let i = 0; i < 3; i++) 
    {

    if( gameData[i][0] > 0 &&  
        gameData[i][0] == gameData[i][1] && 
        gameData[i][1] == gameData[i][2] ) 
        {
        return gameData[i][0];
        }
    }
    for(let i = 0; i < 3; i++) 
    {

    if( gameData[0][i] > 0 &&  
        gameData[0][i] == gameData[1][i] && 
        gameData[0][i] == gameData[2][i] ) 
        {
        return gameData[0][i];
        }
    }
    if(gameData[0][0] > 0 &&
        gameData[0][0] == gameData[1][1] &&
        gameData[1][1] == gameData[2][2]) {
            return gameData[0][0];
        }
        if(gameData[2][0] > 0 &&
            gameData[2][0] == gameData[1][1] &&
            gameData[1][1] == gameData[0][2]) {
                return gameData[0][2];
            }
          
            if(currentRound == 9){
                return -1;
            }

            return 0;
}

function endgame(winnerId) {
    gameIsOver = true;
    gameOverEle.style.display = 'block';

    if(winnerId > 0) {
        const winnerNmae = players[winnerId - 1].nam;
        gameOverEle.firstElementChild.firstElementChild.textContent = winnerNmae;
    } else {
        gameOverEle.firstElementChild.textContent = 'it\'s a draw';
    }

}