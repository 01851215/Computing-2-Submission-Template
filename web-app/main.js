import {
  createGrids,
  getGrids,
  getScore,
  getTurn,
  isStarting,
  isWin,
  setGridVal,
  setScore,
  setStarting,
  setTurn
} from "./game.js";
const gameBoard = document.getElementById("game-board");
const result = document.getElementById("result");
const resultText = document.getElementById("result_text");
const startGame = document.getElementById("start_game");
const ps1 = document.getElementById("ps1");
const ps2 = document.getElementById("ps2");

// Create all grid elements
function createGridsEl() {
  gameBoard.innerHTML = '';
  const grids = getGrids();
  for (let i = 0; i < grids.length; i++) {
    const rows = grids[i];
    for (let j = 0; j < rows.length; j++) {
      const grid = document.createElement('div');

      // Add grid click event
      grid.addEventListener("click", function() {
        if (isStarting() && !grids[i][j]) {
          const playerImg = document.createElement('img');
          const turn = getTurn();

          // Set grid value and toggle turn
          if (turn === 1) {
            playerImg.src = 'assets/player1.svg';
            setTurn(2);
            setGridVal(i, j, 1);
          } else {
            playerImg.src = 'assets/player2.svg';
            setTurn(1);
            setGridVal(i, j, 2);
          }
          grid.appendChild(playerImg);

          // Check game is over
          if (isWin(i, j)) {
            setStarting(false);
            const scores = getScore();
            if (turn === 1) {
              ps1.innerText = "Score: " + (scores[0] + 1);
              resultText.innerText = "Bulbasaur Win!";
              setScore(scores[0] + 1, scores[1]);
            } else {
              ps2.innerText = "Score: " + (scores[1] + 1);
              resultText.innerText = "Clefable Win!";
              setScore(scores[0], scores[1] + 1);
            }
            result.style.display = 'block';
          }
        }
      });
      gameBoard.appendChild(grid);
    }
  }
}

// Add start game button click event
startGame.addEventListener("click", function() {
  createGrids();
  setTurn(1);
  setStarting(true);
  result.style.display = 'none';
  createGridsEl();
});

