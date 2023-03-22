const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]


let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver = false ;

let players = [
    {
        nam : '',
        Symbol: 'X'
    },
    {
        nam : '',
        Symbol: 'O'
    },
]

const PlayerConfigOverlay = document.getElementById('config-overlay')
const backDrop = document.getElementById('backdrop')
const FormEle = document.querySelector('form')
const ErrorCOnfig = document.getElementById('config-errors')
const GameArea = document.getElementById('active-game')
const activePlayerEle = document.getElementById('active-playername')
const gameOverEle = document.getElementById('game-over')
const gameBoardEle = document.getElementById('game-board')


const editPlayer1Btn = document.getElementById('edit-player1-btn')
const editPlayer2Btn = document.getElementById('edit-player2-btn')
const CancelBtn = document.getElementById('Cancel-btn')
const satrtNewGAmeBtn = document.getElementById('start-game')
const gameFeildEles = document.querySelectorAll('#game-board li')

editPlayer1Btn.addEventListener('click', openPlayerConfig)
editPlayer2Btn.addEventListener('click', openPlayerConfig)

CancelBtn.addEventListener('click',closePlayerConfig)
backDrop.addEventListener('click',closePlayerConfig)

FormEle.addEventListener('submit',savePlayerConfig)
satrtNewGAmeBtn.addEventListener('click', satrtNewGAme)

for(const gameFeildEle of gameFeildEles) {
    gameFeildEle.addEventListener('click', selectgameFeild)
}