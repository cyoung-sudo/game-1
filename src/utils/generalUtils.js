// Generate new board
export const generateBoard = (rows, cols) => {
  let newBoard = new Array(rows).fill(null).map(() => new Array(cols));
  let options = ["_", "_", "_", "_", "_", "_", "_", "_", "R", "R", "R", "R", "R", "E"];

  for(let i = 0; i < newBoard.length; i++) {
    for(let j = 0; j < newBoard[0].length; j++) {
      newBoard[i][j] = options[Math.floor(Math.random() * options.length)];
    }
  }

  // Set player position
  let x = Math.floor(rows / 2);
  let y = Math.floor(cols / 2);
  newBoard[x][y] = "P"

  return newBoard;
}

// Simulate enemy moves
// --> Also returns if game finished
export const movePlayer = (board, player, dir) => {
  let x = player[0];
  let y = player[1];
  let rL = board.length;
  let cL = board[0].length;

  // Find destination cell
  let newCell = null;
  if(dir === "UL" && x - 1 >= 0 && y - 1 >= 0) newCell = [x - 1, y - 1];
  if(dir === "U" && x - 1 >= 0) newCell = [x - 1, y];
  if(dir === "UR" && x - 1 >= 0 && y + 1 < cL) newCell = [x - 1, y + 1];
  if(dir === "L" && y - 1 >= 0) newCell = [x, y - 1];
  if(dir === "S" && y - 1 >= 0) newCell = [x, y];
  if(dir === "R" && y + 1 < cL) newCell = [x, y + 1];
  if(dir === "DL" && x + 1 < rL && y - 1 >= 0) newCell = [x + 1, y - 1];
  if(dir === "D" && x + 1 < rL) newCell = [x + 1, y];
  if(dir === "DR" && x + 1 < rL && y + 1 < cL) newCell = [x + 1, y + 1];

  // OOB destination
  if(newCell === null) {
    return {
      board: [],
      finsih: false,
      invalid: true
    }
  }

  let finish = false;
  // Handle enemy
  if(board[newCell[0]][newCell[1]] === "E") {
    board[x][y] = "_";
    finish = true;
  // Handle empty cell
  } else if(board[newCell[0]][newCell[1]] === "_") {
    board[newCell[0]][newCell[1]] = "P";
    board[x][y] = "_";
  }

  return {
    board,
    finish,
    invalid: false
  }
};

// Simulate enemy moves
// --> Also returns if game finished
export const moveEnemies = (board, enemies) => {
  let finish = false;
  for(let enemy of enemies) {
    let x = enemy[0];
    let y = enemy[1];
    let rL = board.length;
    let cL = board[0].length;
    let options = [];

    // Find all valid destination cells
    if(x - 1 >= 0 && y - 1 >= 0) options.push([x - 1, y - 1]);
    if(x - 1 >= 0) options.push([x - 1, y]);
    if(x - 1 >= 0 && y + 1 < cL) options.push([x - 1, y + 1]);
    if(y - 1 >= 0) options.push([x, y - 1]);
    if(y + 1 < cL) options.push([x, y + 1]);
    if(x + 1 < rL && y - 1 >= 0) options.push([x + 1, y - 1]);
    if(x + 1 < rL) options.push([x + 1, y]);
    if(x + 1 < rL && y + 1 < cL) options.push([x + 1, y + 1]);

    // Filter-out rocks & other enemies
    options = options.filter(option => {
      return board[option[0]][option[1]] !== "R" &&
        board[option[0]][option[1]] !== "E";
    });

    // Enemy is stuck
    if(options.length === 0) continue;

    // Pick random option
    let rand = options[Math.floor(Math.random() * options.length)];

    // Game finished
    if(board[rand[0]][rand[1]] === "P") finish = true;

    // Move enemy
    board[rand[0]][rand[1]] = "E";
    board[x][y] = "_";
  }

  return {board, finish};
};