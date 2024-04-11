import "./Board.scss"

const Board = ({ board }) => {
  return (
    <div id="board">
      {board.map((row, i) => (
        <div key={ i }>
          {row.map((val, j) => (
            <div key={ j }>
              {val === "_" && "_"}
              {val === "R" && "^"}
              {val === "P" && "P"}
              {val === "E" && "E"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;