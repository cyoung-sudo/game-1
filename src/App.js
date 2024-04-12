import './App.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateBoard, incrementScore, resetScore, incrementMoves, resetMoves, toggleFinish } from './appSlice'
// Components
import Display from "./components/display/Display";
import Board from "./components/board/Board";
import Movement from "./components/controls/Movement";
import Actions from "./components/controls/Actions";
// Utils
import { generateBoard, movePlayer, moveEnemies } from "./utils/generalUtils";
// Data
import { defaultBoard } from "./data/boardData";

function App() {
  // Hooks
  const { board, score, moves, finish } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  let move = dir => {
    if(finish) return;

    // Find coords & copy board
    let boardCopy = new Array(board.length).fill(null).map(() => new Array(board[0].length));
    let player = null;
    let enemies = [];
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        // Handle player
        if(board[i][j] === "P") {
          player = [i, j];
        // Handle enemies
        } else if(board[i][j] === "E") {
          enemies.push([i, j]);
        }

        boardCopy[i][j] = board[i][j];
      }
    }

    // Move player
    let res = movePlayer(boardCopy, player, dir);

    // Generate new board
    if(res.invalid) {
      let newBoard = generateBoard(9, 11);
      dispatch(incrementScore());
      dispatch(updateBoard(newBoard));
    // Game over
    } else if(res.finish) {
      console.log("Game Over");
      dispatch(toggleFinish());
      dispatch(updateBoard(res.board));
    } else {
      // Move enemies
      let res2 = moveEnemies(res.board, enemies);
      
      if(res2.finish) {
        console.log("Game Over");
        dispatch(toggleFinish());
      }

      dispatch(updateBoard(res2.board));
    }
    // Increment moves
    dispatch(incrementMoves());
  };

  let newGame = () => {
    dispatch(updateBoard(defaultBoard));
    dispatch(resetScore());
    dispatch(resetMoves());
    if(finish) dispatch(toggleFinish());
  };

  return (
    <div id="app">
      <div id="display-wrap">
        <Display 
          score={ score }
          moves={ moves }/>
      </div>

      <div id="board-wrap">
        <Board board={ board }/>
      </div>

      <div id="controls-wrap">
        <div id="movement-wrap">
          <Movement move={ move }/>
        </div>

        <div id="actions-wrap">
          <Actions newGame={ newGame }/>
        </div>
      </div>
    </div>
  );
}

export default App;
