import './App.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateBoard, incrementTurn } from './appSlice'
// Components
import Display from "./components/display/Display";
import Board from "./components/board/Board";
import Movement from "./components/controls/Movement";
import Actions from "./components/controls/Actions";

function App() {
  // Hooks
  const { board, turn } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  let move = dir => {
    // Find player coords & copy board
    let newBoard = new Array(board.length).fill(null).map(() => new Array(board[0].length));
    let x = null;
    let y = null;
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        if(board[i][j] === "P") {
          x = i;
          y = j;
        }

        newBoard[i][j] = board[i][j];
      }
    }

    // Handle direction
    let rL = board.length;
    let cL = board[0].length;
    if(dir === "U") {
      if(x - 1 >= 0 && board[x - 1][y] === "") {
        newBoard[x - 1][y] = "P";
        newBoard[x][y] = "";
      }
    } else if(dir === "D") {
      if(x + 1 < rL && board[x + 1][y] === "") {
        newBoard[x + 1][y] = "P";
        newBoard[x][y] = "";
      }
    } else if(dir === "L") {
      if(y - 1 >= 0 && board[x][y - 1] === "") {
        newBoard[x][y - 1] = "P";
        newBoard[x][y] = "";
      }
    } else if(dir=== "R") {
      if(y + 1 < cL && board[x][y + 1] === "") {
        newBoard[x][y + 1] = "P";
        newBoard[x][y] = "";
      }
    } else if(dir === "UL") {
      if(x - 1 >= 0 && y - 1 >= 0 && board[x - 1][y - 1] === "") {
        newBoard[x - 1][y - 1] = "P";
        newBoard[x][y] = "";
      }
    } else if(dir === "UR") {
      if(x - 1 >= 0 && y + 1 < cL && board[x - 1][y + 1] === "") {
        newBoard[x - 1][y + 1] = "P";
        newBoard[x][y] = "";
      }
    } else if(dir === "DL") {
      if(x + 1 < rL && y - 1 >= 0 && board[x + 1][y - 1] === "") {
        newBoard[x + 1][y - 1] = "P";
        newBoard[x][y] = "";
      }
    } else if(dir === "DR") {
      if(x + 1 < rL && y + 1 < cL && board[x + 1][y + 1] === "") {
        newBoard[x + 1][y + 1] = "P";
        newBoard[x][y] = "";
      }
    }

    // Update state
    dispatch(updateBoard(newBoard));
    dispatch(incrementTurn());
  };

  return (
    <div id="app">
      <div id="display-wrap">
        <Display turn={ turn }/>
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
