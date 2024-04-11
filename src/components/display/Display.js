import "./Display.scss"

const Display = ({score, moves}) => {
  return (
    <div id="display">
      <div>Score: { score }</div>
      <div>Moves: { moves }</div>
    </div>
  );
};

export default Display;