import './App.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateBoard, incrementMoves } from './appSlice'
// Components
import Display from "./components/display/Display";
import Board from "./components/board/Board";
import Movement from "./components/controls/Movement";
import Actions from "./components/controls/Actions";
// Utils
import { generateBoard } from "./utils/generalUtils";

function App() {
  // Hooks
  const { board, moves } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  let move = dir => {
    // Find player coords & copy board
    let boardCopy = new Array(board.length).fill(null).map(() => new Array(board[0].length));
    let x = null;
    let y = null;
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        if(board[i][j] === "P") {
          x = i;
          y = j;
        }

        boardCopy[i][j] = board[i][j];
      }
    }

    // Handle direction
    let rL = board.length;
    let cL = board[0].length;
    let invalid = false;
    // Up
    if(dir === "U") {
      if(x - 1 >= 0) {
        if(board[x - 1][y] === "_") {
          boardCopy[x - 1][y] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    // Down
    } else if(dir === "D") {
      if(x + 1 < rL) {
        if(board[x + 1][y] === "_") {
          boardCopy[x + 1][y] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    // Left
    } else if(dir === "L") {
      if(y - 1 >= 0) {
        if(board[x][y - 1] === "_") {
          boardCopy[x][y - 1] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    // Right
    } else if(dir=== "R") {
      if(y + 1 < cL) {
        if(board[x][y + 1] === "_") {
          boardCopy[x][y + 1] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    // Up-left
    } else if(dir === "UL") {
      if(x - 1 >= 0 && y - 1 >= 0) {
        if(board[x - 1][y - 1] === "_") {
          boardCopy[x - 1][y - 1] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    // Up-right
    } else if(dir === "UR") {
      if(x - 1 >= 0 && y + 1 < cL) {
        if(board[x - 1][y + 1] === "_") {
          boardCopy[x - 1][y + 1] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    // Down-left
    } else if(dir === "DL") {
      if(x + 1 < rL && y - 1 >= 0) {
        if(board[x + 1][y - 1] === "_") {
          boardCopy[x + 1][y - 1] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    // Down-right
    } else if(dir === "DR") {
      if(x + 1 < rL && y + 1 < cL) {
        if(board[x + 1][y + 1] === "_") {
          boardCopy[x + 1][y + 1] = "P";
          boardCopy[x][y] = "_";
        }
      } else {
        invalid = true;
      }
    }

    // Update board
    if(invalid) {
      // Generate new board
      let newBoard = generateBoard(7, 11);
      dispatch(updateBoard(newBoard));
    } else {
      // Update current board
      dispatch(updateBoard(boardCopy));
    }

    // Increment moves
    dispatch(incrementMoves());
  };

  return (
    <div id="app">
      <div id="display-wrap">
        <Display moves={ moves }/>
      </div>

      <div id="board-wrap">
        <Board board={ board }/>
      </div>

      <div id="controls-wrap">
        <div id="movement-wrap">
          <Movement move={ move }/>
        </div>

        <div id="actions-wrap">
          <Actions/>
        </div>
      </div>
    </div>
  );
}

export default App;
