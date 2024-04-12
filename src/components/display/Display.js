import "./Display.scss"

const Display = ({score, moves, finish}) => {
  return (
    <div id="display">
      <div>Score: { score }</div>
      {finish && <div>Game Over</div>}
      <div>Moves: { moves }</div>
    </div>
  );
};

export default Display;