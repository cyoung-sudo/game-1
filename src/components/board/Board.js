import "./Board.scss"
// Icons
import { FaPerson } from "react-icons/fa6";
import { FaMountain } from "react-icons/fa";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";

const Board = ({ board }) => {
  return (
    <div id="board">
      {board.map((row, i) => (
        <div key={ i }>
          {row.map((val, j) => (
            <div key={ j }>
              {val === "_" && "_"}
              {val === "R" && <FaMountain/>}
              {val === "P" && <FaPerson/>}
              {val === "E" && <FaSpaghettiMonsterFlying/>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;