let girds = [];
let turn = 1;
let starting = false;
let scores = [0, 0];

/**
 * Create 10 * 10 grids
 */
function createGrids() {
  girds = [];
  for (let i = 0; i < 10; i++) {
    const rows = [];
    for (let j = 0; j < 10; j++) {
      rows.push(0);
    }
    girds.push(rows);
  }
}

/**
 * Set Grid value
 * @param x x coordinate position
 * @param y y coordinate position
 * @param val value of position
 */
function setGridVal(x, y, val) {
  girds[x][y] = val;
}

/**
 * Player is win and game is over
 * @param x x coordinate position
 * @param y y coordinate position
 * @returns {boolean} is game over
 */
function isWin(x, y) {
  let winFlag = false;

  // Get the values of an array in four directions
  const yValues = girds.map(rows => rows[y]);
  const xValues = girds[x];
  const sValues = []
  const bsValues = []
  girds.forEach(function (rows, i) {
    if (rows[y - (x - i)]) sValues.push(rows[y - (x - i)]);
    if (rows[y + (x - i)]) bsValues.push(rows[y + (x - i)]);
  });

  // Check if 5 values are the same
  [yValues, xValues, sValues, bsValues].forEach(function (values) {
    if(values.some((x, i) => values[i] !== 0 &&
      values[i - 2] === values[i - 1] &&
      values[i - 1] === values[i] &&
      values[i] === values[i + 1] &&
      values[i + 1] === values[i + 2])) {
      winFlag = true;
    }
  });

  return winFlag;
}

/**
 * Get grids, it is a 10 * 10 two-dimensional array
 * @returns {*[]} 10 * 10 two-dimensional array
 */
function getGrids() {
  return girds;
}

/**
 * Get current turn
 * @returns {number} player turn, 1: Player 1, 2: Player 2
 */
function getTurn() {
  return turn
}

/**
 * Set current turn
 * @param t current player turn, 1: Player 1, 2: Player 2
 */
function setTurn(t) {
  turn = t;
}

/**
 * Check game is starting
 * @returns {boolean} is starting game
 */
function isStarting() {
  return starting;
}

/**
 * Set game starting status
 * @param s is starting game
 */
function setStarting(s) {
  starting = s;
}

/**
 * Get game player scores
 * @returns {number[]} player scores
 */
function getScore() {
  return scores;
}

/**
 * Set game player scores
 * @param s1 player 1 score
 * @param s2 player 2 score
 */
function setScore(s1, s2) {
  scores = [s1, s2];
}

export {
  createGrids,
  getGrids,
  getTurn,
  setTurn,
  setGridVal,
  isStarting,
  setStarting,
  getScore,
  setScore,
  isWin
}
