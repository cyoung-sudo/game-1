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
export const moveEnemies = board => {
  // Find emeny coords
  let coords = [];
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if(board[i][j] === "E") coords.push([i, j]);
    }
  }

  // Move enemies
  let finish = false;
  for(let i = 0; i < coords.length; i++) {
    let x = coords[i][0];
    let y = coords[i][1];
    let rL = board.length;
    let cL = board[0].length;
    let options = [];

    // Up
    if(x - 1 >= 0) {
      if(board[x - 1][y] === "_" || board[x - 1][y] === "P") {
        options.push([x - 1, y]);
      }
    }
    // Down
    if(x + 1 < rL) {
      if(board[x + 1][y] === "_" || board[x + 1][y] === "P") {
        options.push([x + 1, y]);
      }
    }
    // Left
    if(y - 1 >= 0) {
      if(board[x][y - 1] === "_" || board[x][y - 1] === "P") {
        options.push([x, y - 1]);
      }
    }
    // Right
    if(y + 1 < cL) {
      if(board[x][y + 1] === "_" || board[x][y + 1] === "P") {
        options.push([x, y + 1]);
      }
    }
    // Up-left
    if(x - 1 >= 0 && y - 1 >= 0) {
      if(board[x - 1][y - 1] === "_" || board[x - 1][y - 1] === "P") {
        options.push([x - 1, y - 1]);
      }
    }
    // Up-right
    if(x - 1 >= 0 && y + 1 < cL) {
      if(board[x - 1][y + 1] === "_" || board[x - 1][y + 1] === "P") {
        options.push([x - 1, y + 1]);
      }
    }
    // Down-left
    if(x + 1 < rL && y - 1 >= 0) {
      if(board[x + 1][y - 1] === "_" || board[x + 1][y - 1] === "P") {
        options.push([x + 1, y - 1]);
      }
    }
    // Down-right
    if(x + 1 < rL && y + 1 < cL) {
      if(board[x + 1][y + 1] === "_" || board[x + 1][y + 1] === "P") {
        options.push([x + 1, y + 1]);
      }
    }

    // Pick random movement
    let rand = options[Math.floor(Math.random() * options.length)];

    // Game finished
    if(board[rand[0]][rand[1]] === "P") finish = true;

    // Move enemy
    board[rand[0]][rand[1]] = "E";
    board[x][y] = "_";
  }

  return {board, finish};
};