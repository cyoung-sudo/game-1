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