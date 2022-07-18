const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
,
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
let activEgamefieldElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editBtnPlayer1Element = document.getElementById("edit-player-btn-1");
const editBtnPlayer2Element = document.getElementById("edit-player-btn-2");
const cancelConfigBtnElement = document.getElementById("cancel-config-button");
let startGameButtonElement = document.getElementById("startgamebtn");
// const gameFieldElements = document.querySelectorAll('#game-board li')
const gameBoardElement = document.getElementById("game-board");

editBtnPlayer1Element.addEventListener("click", openPlayerConfig);
editBtnPlayer2Element.addEventListener("click", openPlayerConfig);


cancelConfigBtnElement.addEventListener("click", closerPlayerConfig);
backDropElement.addEventListener("click", closerPlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameButtonElement.addEventListener("click", startNewGame);

// for( const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click', selectGameField)

// }

gameBoardElement.addEventListener("click", selectGameField);
console.log(gameData)


console.log()